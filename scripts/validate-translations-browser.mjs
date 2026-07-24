import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const port = Number(process.env.TRANSLATION_TEST_PORT ?? 3100);
const debugPort = Number(process.env.TRANSLATION_DEBUG_PORT ?? 9310);
const baseUrl = `http://127.0.0.1:${port}`;
const widths = [320, 375, 430, 768, 1024, 1280, 1440];
const routes = {
  "/": "es",
  "/arcade": "es",
  "/form-contato": "pt-BR",
  "/produtos": "pt-BR",
  "/pagina-game": "pt-BR",
  "/global-gaming-erp": "es",
  "/gaming-legacy-erp": "es",
  "/politica-de-privacidad": "es",
};

function browserPath() {
  const configured = process.env.BROWSER_PATH;
  const candidates = [
    configured,
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/microsoft-edge",
    "/usr/bin/chromium",
  ].filter(Boolean);
  return candidates.find((candidate) => fs.existsSync(candidate));
}

async function waitForUrl(url, timeoutMs = 30_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch {
      // O processo ainda está iniciando.
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`Timeout aguardando ${url}`);
}

class Cdp {
  constructor(url) {
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
    this.socket = new WebSocket(url);
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(message.error.message));
        else pending.resolve(message.result);
        return;
      }
      for (const listener of this.listeners.get(message.method) ?? []) {
        listener(message.params);
      }
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, listener) {
    const listeners = this.listeners.get(method) ?? [];
    listeners.push(listener);
    this.listeners.set(method, listeners);
  }

  once(method, timeoutMs = 15_000) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(`Timeout aguardando ${method}`)), timeoutMs);
      const listener = (params) => {
        clearTimeout(timeout);
        const listeners = this.listeners.get(method) ?? [];
        this.listeners.set(method, listeners.filter((item) => item !== listener));
        resolve(params);
      };
      this.on(method, listener);
    });
  }

  close() {
    this.socket.close();
  }
}

function stopTree(child) {
  if (!child?.pid || child.exitCode !== null) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    child.kill("SIGTERM");
  }
}

const browser = browserPath();
if (!browser) {
  console.error("Nenhum Chrome/Edge encontrado. Defina BROWSER_PATH para executar a validação.");
  process.exit(1);
}

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "gtech-translation-"));
const screenshots = path.join(tempRoot, "screenshots");
fs.mkdirSync(screenshots);

const serverCommand = process.platform === "win32"
  ? (process.env.ComSpec ?? "C:/Windows/System32/cmd.exe")
  : "npm";
const serverArguments = process.platform === "win32"
  ? ["/d", "/s", "/c", `npm.cmd start -- -p ${port}`]
  : ["start", "--", "-p", String(port)];
const server = spawn(serverCommand, serverArguments, {
  cwd: root,
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});
let serverLog = "";
server.stdout.on("data", (chunk) => { serverLog += chunk; });
server.stderr.on("data", (chunk) => { serverLog += chunk; });

let browserProcess;
let cdp;
const failures = [];
const browserIssues = [];

try {
  await waitForUrl(`${baseUrl}/produtos`);

  browserProcess = spawn(browser, [
    "--headless=new",
    "--disable-gpu",
    "--disable-extensions",
    "--disable-component-extensions-with-background-pages",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${path.join(tempRoot, "profile")}`,
    "about:blank",
  ], { stdio: "ignore" });

  const targetsResponse = await waitForUrl(`http://127.0.0.1:${debugPort}/json/list`);
  const targets = await targetsResponse.json();
  const target = targets.find((item) => item.type === "page");
  if (!target?.webSocketDebuggerUrl) throw new Error("Target CDP não encontrado.");

  cdp = new Cdp(target.webSocketDebuggerUrl);
  await cdp.open();
  await Promise.all([
    cdp.send("Page.enable"),
    cdp.send("Runtime.enable"),
    cdp.send("Network.enable"),
    cdp.send("Log.enable"),
  ]);

  let currentContext = "";
  cdp.on("Runtime.exceptionThrown", (event) => {
    const description = event.exceptionDetails?.exception?.description
      ?? event.exceptionDetails?.text
      ?? "desconhecida";
    browserIssues.push(`${currentContext}: exceção ${description}`);
  });
  cdp.on("Runtime.consoleAPICalled", (event) => {
    if (event.type === "error" || event.type === "warning") {
      const text = event.args?.map((arg) => arg.value ?? arg.description ?? "").join(" ");
      browserIssues.push(`${currentContext}: console ${event.type}: ${text}`);
    }
  });
  cdp.on("Log.entryAdded", ({ entry }) => {
    if (entry.level === "error" || entry.level === "warning") {
      browserIssues.push(`${currentContext}: log ${entry.level}: ${entry.text}`);
    }
  });
  cdp.on("Network.responseReceived", ({ response }) => {
    if (response.status >= 400) {
      browserIssues.push(`${currentContext}: HTTP ${response.status} ${response.url}`);
    }
  });
  cdp.on("Network.loadingFailed", ({ errorText, canceled }) => {
    if (!canceled) browserIssues.push(`${currentContext}: recurso falhou: ${errorText}`);
  });

  async function evaluate(expression) {
    const result = await cdp.send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
    return result.result.value;
  }

  async function navigate(route, width) {
    currentContext = `${route} @ ${width}px`;
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: width <= 430,
    });
    const url = `${baseUrl}${route}`;
    const navigation = await cdp.send("Page.navigate", { url });
    const started = Date.now();
    let isReady = false;
    let lastState;
    while (Date.now() - started < 15_000) {
      try {
        lastState = await evaluate(`({ href: location.href, readyState: document.readyState })`);
        if (lastState?.href === url && (lastState?.readyState === "interactive" || lastState?.readyState === "complete")) {
          isReady = true;
          break;
        }
      } catch {
        // O contexto JavaScript é substituído durante a navegação.
      }
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    if (!isReady) {
      throw new Error(`Timeout aguardando navegação para ${url}; resultado=${JSON.stringify(navigation)}; estado=${JSON.stringify(lastState)}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 120));
  }

  async function waitUntil(expression, timeoutMs = 3_000) {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
      if (await evaluate(expression)) return;
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    throw new Error(`Timeout aguardando condição: ${expression}`);
  }

  for (const [route, expectedLanguage] of Object.entries(routes)) {
    for (const width of widths) {
      await navigate(route, width);
      await waitUntil(`document.documentElement.lang === ${JSON.stringify(expectedLanguage)}`);
      const result = await evaluate(`(() => ({
        lang: document.documentElement.lang,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        selectors: document.querySelectorAll("[data-language-selector]").length
      }))()`);

      if (result.lang !== expectedLanguage) {
        failures.push(`${currentContext}: idioma ${result.lang}; esperado ${expectedLanguage}`);
      }
      if (result.scrollWidth > result.clientWidth + 1) {
        failures.push(`${currentContext}: overflow horizontal ${result.scrollWidth}px > ${result.clientWidth}px`);
      }
      if (route === "/produtos" ? result.selectors < 1 : result.selectors !== 0) {
        failures.push(`${currentContext}: quantidade inesperada de seletores (${result.selectors})`);
      }

      if ((width === 320 || width === 1440) && (route === "/produtos" || route === "/pagina-game")) {
        await new Promise((resolve) => setTimeout(resolve, 1_000));
        const capture = await cdp.send("Page.captureScreenshot", { format: "png" });
        const name = `${route.slice(1)}-${width}.png`;
        fs.writeFileSync(path.join(screenshots, name), Buffer.from(capture.data, "base64"));
      }
    }
  }

  await navigate("/produtos", 1440);
  await waitUntil(`document.documentElement.lang === "pt-BR" && Boolean(document.querySelector("[data-language-selector] button:nth-of-type(2)"))`);
  const before = await evaluate(`document.body.innerText`);
  await evaluate(`(() => {
    const input = document.querySelector('input[name="nome"]');
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
    setter.call(input, "Teste de idioma");
    input.dispatchEvent(new Event("input", { bubbles: true }));
    document.querySelector("[data-language-selector] button:nth-of-type(2)").click();
  })()`);
  await waitUntil(`document.documentElement.lang === "es"`);
  await new Promise((resolve) => setTimeout(resolve, 120));
  const after = await evaluate(`(() => ({
    lang: document.documentElement.lang,
    body: document.body.innerText,
    value: document.querySelector('input[name="nome"]').value,
    spanishActive: [...document.querySelectorAll("[data-language-selector] button:nth-of-type(2)")].every((button) => button.getAttribute("aria-pressed") === "true")
  }))()`);
  if (after.lang !== "es" || before === after.body || after.value !== "Teste de idioma" || !after.spanishActive) {
    failures.push("/produtos desktop: troca para ES não preservou idioma, texto, input ou estado dos seletores");
  }

  await navigate("/form-contato", 1440);
  await waitUntil(`document.documentElement.lang === "pt-BR"`);
  if (await evaluate(`document.documentElement.lang`) !== "pt-BR") {
    failures.push("/form-contato herdou incorretamente a preferência de /produtos");
  }

  await navigate("/produtos", 1440);
  await waitUntil(`document.documentElement.lang === "es"`);
  if (await evaluate(`document.documentElement.lang`) !== "es") {
    failures.push("/produtos não restaurou a preferência ES da própria rota");
  }

  await navigate("/produtos", 320);
  await waitUntil(`document.documentElement.lang === "es"`);
  await evaluate(`document.querySelector('button[aria-label="Abrir menú"], button[aria-label="Abrir menu"]').click()`);
  await waitUntil(`Boolean(document.querySelector("[data-language-selector] button:nth-of-type(1)"))`);
  await evaluate(`document.querySelector("[data-language-selector] button:nth-of-type(1)").click()`);
  await waitUntil(`document.documentElement.lang === "pt-BR"`);
  const mobile = await evaluate(`(() => ({
    lang: document.documentElement.lang,
    portugueseActive: [...document.querySelectorAll("[data-language-selector] button:nth-of-type(1)")].every((button) => button.getAttribute("aria-pressed") === "true"),
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  }))()`);
  if (mobile.lang !== "pt-BR" || !mobile.portugueseActive || mobile.overflow) {
    failures.push("/produtos mobile: troca para BR ou responsividade do menu falhou");
  }
} finally {
  cdp?.close();
  stopTree(browserProcess);
  stopTree(server);
}

console.log(`Validações de rota/responsividade: ${Object.keys(routes).length * widths.length}.`);
console.log(`Falhas funcionais: ${failures.length}.`);
console.log(`Erros/warnings de Console e Network: ${browserIssues.length}.`);
console.log(`Capturas: ${screenshots}`);
if (failures.length) failures.forEach((failure) => console.log(`- ${failure}`));
if (browserIssues.length) browserIssues.forEach((issue) => console.log(`- ${issue}`));
if (!serverLog.includes("Ready")) console.log(`Log do servidor:\n${serverLog}`);
if (failures.length || browserIssues.length) process.exitCode = 1;
