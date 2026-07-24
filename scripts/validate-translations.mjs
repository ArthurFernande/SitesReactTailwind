import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import ts from "typescript";

const root = process.cwd();
const catalogRoot = path.join(root, "components", "traducaoButtons", "translations");
const sourceRoots = [path.join(root, "app"), path.join(root, "components")];
const sourceExtensions = new Set([".ts", ".tsx"]);
const visibleAttributes = new Set(["alt", "aria-label", "placeholder", "title"]);
const languageWords = /\b(?:a|ao|aos|as|com|como|da|das|de|do|dos|e|em|entre|mais|menos|nome|para|por|seu|sua|sobre|você|y|con|como|de|del|desde|el|en|entre|la|las|los|más|menos|para|por|que|sin|su|usted)\b/iu;
const languageCharacters = /[áéíóúàâêôãõçñ¿¡]/iu;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(absolute);
    return sourceExtensions.has(path.extname(entry.name)) ? [absolute] : [];
  });
}

function relative(file) {
  return path.relative(root, file).replaceAll("\\", "/");
}

function sourceFile(file) {
  return ts.createSourceFile(
    file,
    fs.readFileSync(file, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
}

function propertyName(node) {
  if (!node?.name) return null;
  if (ts.isStringLiteral(node.name) || ts.isNumericLiteral(node.name) || ts.isIdentifier(node.name)) {
    return node.name.text;
  }
  return null;
}

function location(source, node) {
  const { line, character } = source.getLineAndCharacterOfPosition(node.getStart(source));
  return `${relative(source.fileName)}:${line + 1}:${character + 1}`;
}

function shouldIgnoreVisibleText(text, file) {
  if (file.startsWith("app/")) return true;
  if (/^(?:https?:|mailto:|tel:|#|\/)/i.test(text)) return true;
  if (/@|(?:^|\s)(?:R\$|US\$|€)\s*\d/i.test(text)) return true;
  if (/^[\d\s.,:+%#'’~▲▼↑↓✓●×&/()-]+$/u.test(text)) return true;
  if (/^\d+\s+a\s+\d+$|^mais de \d+$/iu.test(text)) return true;
  if (/^(?:&quot;|\.&quot;)$/u.test(text)) return true;
  if (/^(?:GTech|Arcade|Global Tech(?: Internacional| International)?|Global Gaming ERP|Gaming Legacy ERP|XSA Sports|Genius Sports|Oracle|Smartico|Pragmatic(?: Play)?|Evolution|PG Soft)$/iu.test(text)) return true;
  if (/^(?:POST|GET|easeOut|smooth|center|left center|latin|swap|navy|purple|heading|paragraph|done|curr|wait|crit|warn)$/u.test(text)) return true;
  if (/^(?:[a-z-]+:)?(?:[\w-]+(?:\[[^\]]+\])?)(?:\s+[\w:/[\].%#()-]+)+$/u.test(text)) return true;
  return !languageCharacters.test(text) && !languageWords.test(text);
}

const catalogFiles = walk(catalogRoot);
const catalogKeys = new Set();
const duplicateKeys = [];

for (const file of catalogFiles) {
  const source = sourceFile(file);

  function inspect(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const seen = new Map();
      for (const property of node.properties) {
        if (!ts.isPropertyAssignment(property)) continue;
        const name = propertyName(property);
        if (!name) continue;
        if (seen.has(name)) {
          duplicateKeys.push(`${location(source, property)} duplica "${name}" (primeira ocorrência em ${seen.get(name)})`);
        } else {
          seen.set(name, location(source, property));
        }
      }
    }

    if (ts.isPropertyAssignment(node)) {
      const name = propertyName(node);
      if (name?.includes(".") && ts.isStringLiteralLike(node.initializer)) {
        catalogKeys.add(name);
      }
    }

    ts.forEachChild(node, inspect);
  }

  inspect(source);
}

const missingCalls = [];
const fixedCandidates = [];
const sourceFiles = sourceRoots.flatMap(walk).filter((file) => !file.startsWith(catalogRoot));

for (const file of sourceFiles) {
  const source = sourceFile(file);
  const rel = relative(file);
  const skipVisibleAudit =
    rel.includes("/Icons.") ||
    rel.includes("/traducaoButtons/TraducaoButtons.") ||
    rel.startsWith("app/api/");

  function addCandidate(node, text, kind) {
    const normalized = text.replace(/\s+/g, " ").trim();
    if (!normalized || !/\p{L}/u.test(normalized)) return;
    if (shouldIgnoreVisibleText(normalized, rel)) return;
    fixedCandidates.push(`${location(source, node)} [${kind}] ${JSON.stringify(normalized)}`);
  }

  function inspect(node) {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === "t" &&
      node.arguments.length > 0 &&
      ts.isStringLiteralLike(node.arguments[0])
    ) {
      const key = node.arguments[0].text;
      if (!catalogKeys.has(key)) missingCalls.push(`${location(source, node.arguments[0])} usa chave inexistente "${key}"`);
    }

    if (!skipVisibleAudit && ts.isJsxText(node)) {
      addCandidate(node, node.getText(source), "JSX");
    }

    if (!skipVisibleAudit && ts.isJsxAttribute(node) && visibleAttributes.has(node.name.text)) {
      if (node.initializer && ts.isStringLiteral(node.initializer)) {
        addCandidate(node, node.initializer.text, node.name.text);
      }
    }

    if (
      !skipVisibleAudit &&
      ts.isStringLiteralLike(node) &&
      (ts.isArrayLiteralExpression(node.parent) ||
        (ts.isPropertyAssignment(node.parent) && node.parent.initializer === node)) &&
      !node.text.includes("/") &&
      !node.text.includes(".") &&
      node.text.length > 2
    ) {
      addCandidate(node, node.text, "dados");
    }

    ts.forEachChild(node, inspect);
  }

  inspect(source);
}

console.log(`Catálogo: ${catalogKeys.size} chaves reconhecidas.`);
console.log(`Chamadas t() com chave inexistente: ${missingCalls.length}.`);
console.log(`Chaves duplicadas no mesmo objeto: ${duplicateKeys.length}.`);

if (missingCalls.length) {
  console.log("\nChaves inexistentes:");
  for (const issue of missingCalls) console.log(`- ${issue}`);
}

if (duplicateKeys.length) {
  console.log("\nDuplicações:");
  for (const issue of duplicateKeys) console.log(`- ${issue}`);
}

console.log(`\nCandidatos a texto visível fixo (revisão manual): ${fixedCandidates.length}.`);
for (const candidate of fixedCandidates) console.log(`- ${candidate}`);

if (missingCalls.length || duplicateKeys.length) process.exitCode = 1;
