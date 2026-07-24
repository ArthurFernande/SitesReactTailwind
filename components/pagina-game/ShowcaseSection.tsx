"use client";

import { useId, useState } from "react";
import { useTranslation } from "@/components/traducaoButtons";
import type { TranslationKey } from "@/components/traducaoButtons";
import { DiceIcon, FootballIcon, RadioIcon, RefreshIcon, ShieldIcon } from "./Icons";

type ShowcaseKey = "casino" | "sports" | "live";

const showcase = {
  casino: {
    labelKey: "game.showcase.casino.label",
    ledKey: "game.showcase.casino.led",
    titleKey: "game.showcase.casino.title",
    color: "var(--cyan)",
    descriptionKey: "game.showcase.casino.description",
    items: [
      ["games", "game.showcase.casino.games.title", "game.showcase.casino.games.description"],
      ["live", "game.showcase.casino.live.title", "game.showcase.casino.live.description"],
      ["refresh", "game.showcase.casino.providers.title", "game.showcase.casino.providers.description"],
    ],
  },
  sports: {
    labelKey: "game.showcase.sports.label",
    ledKey: "game.showcase.sports.led",
    titleKey: "game.showcase.sports.title",
    color: "var(--gold)",
    descriptionKey: "game.showcase.sports.description",
    items: [
      ["sports", "game.showcase.sports.live.title", "game.showcase.sports.live.description"],
      ["chart", "game.showcase.sports.odds.title", "game.showcase.sports.odds.description"],
      ["shield", "game.showcase.sports.risk.title", "game.showcase.sports.risk.description"],
      ["ticket", "game.showcase.sports.tickets.title", "game.showcase.sports.tickets.description"],
    ],
  },
  live: {
    labelKey: "game.showcase.live.label",
    ledKey: "game.showcase.live.led",
    titleKey: "game.showcase.live.title",
    color: "var(--red)",
    descriptionKey: "game.showcase.live.description",
    items: [
      ["live", "game.showcase.live.events.title", "game.showcase.live.events.description"],
      ["chart", "game.showcase.live.stats.title", "game.showcase.live.stats.description"],
      ["refresh", "game.showcase.live.cashout.title", "game.showcase.live.cashout.description"],
    ],
  },
} as const satisfies Record<ShowcaseKey, {
  labelKey: TranslationKey;
  ledKey: TranslationKey;
  titleKey: TranslationKey;
  color: string;
  descriptionKey: TranslationKey;
  items: ReadonlyArray<readonly [string, TranslationKey, TranslationKey]>;
}>;

function ListIcon({ type }: { type: string }) {
  const props = { width: 20, height: 20 };
  if (type === "sports") return <FootballIcon {...props} />;
  if (type === "live") return <RadioIcon {...props} />;
  if (type === "refresh") return <RefreshIcon {...props} />;
  if (type === "shield") return <ShieldIcon {...props} />;
  if (type === "chart") return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V9m6 10V5m6 14v-7m4 7H2" /></svg>;
  if (type === "ticket") return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5h16v5a2 2 0 0 0 0 4v5H4v-5a2 2 0 0 0 0-4V5Z" /><path d="M12 7v10" /></svg>;
  return <DiceIcon {...props} />;
}

const chartValues = [50, 66, 53, 79, 62, 86, 73, 92, 70, 58, 76, 69, 88, 75, 96, 82, 67, 74, 91, 78, 99, 86, 72, 90];

export function MiniChart({ red = false, bars = false }: { red?: boolean; bars?: boolean }) {
  const gradientId = useId().replace(/:/g, "");
  const points = chartValues.map((value, index) => `${((index / (chartValues.length - 1)) * 300).toFixed(1)},${(110 - value).toFixed(1)}`).join(" ");
  const linePath = `M${points.replaceAll(" ", " L")}`;
  const areaPath = `${linePath} L300 110 L0 110 Z`;
  return (
    <svg className="chart-svg" viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={red ? "rgba(255,71,87,.28)" : "rgba(91,113,255,.28)"} />
          <stop offset="100%" stopColor={red ? "rgba(255,71,87,0)" : "rgba(91,113,255,0)"} />
        </linearGradient>
      </defs>
      {bars ? (
        <g className="chart-bars">
          {chartValues.map((value, index) => {
            const x = (index / 24) * 300 + 2;
            const first = 8 + (value % 24);
            const second = 7 + ((value * 3) % 18);
            const third = 5 + ((value * 5) % 13);
            return (
              <g key={index}>
                <rect x={x} y={120 - first} width="9" height={first} fill="var(--cyan)" opacity=".55" rx="1" />
                <rect x={x} y={120 - first - second} width="9" height={second} fill="rgba(255,179,0,.65)" rx="1" />
                <rect x={x} y={120 - first - second - third} width="9" height={third} fill="rgba(157,109,255,.65)" rx="1" />
              </g>
            );
          })}
        </g>
      ) : (
        <>
          <path d={areaPath} fill={`url(#${gradientId})`} />
          <path d={linePath} stroke={red ? "var(--red)" : "var(--cyan)"} strokeWidth="1.8" fill="none" vectorEffect="non-scaling-stroke" />
        </>
      )}
    </svg>
  );
}

function CasinoPanel() {
  const { t } = useTranslation();

  return (
    <>
      <div className="show-vis-head"><div className="show-vis-title">{t("game.showcase.casino.panelTitle")}</div><div className="show-vis-pills"><span className="svp">Pragmatic</span><span className="svp">Evolution</span><span className="svp">PG Soft</span></div></div>
      <div className="dash-row">
        <div className="dash-stat"><div className="l">{t("game.showcase.sessionsActive")}</div><div className="v cy mono">12.847</div><div className="delta">▲ +8.4%</div></div>
        <div className="dash-stat"><div className="l">{t("game.showcase.topGame")}</div><div className="v mono compact-stat">Crash X</div><div className="delta">{t("game.showcase.sessions")}</div></div>
        <div className="dash-stat"><div className="l">{t("game.showcase.holdRate")}</div><div className="v go mono">4.82<span className="small-unit">%</span></div><div className="delta">{t("game.showcase.vsYesterdayDetail")}</div></div>
      </div>
      <div className="chart"><div className="chart-head"><div className="chart-title">{t("game.showcase.betsByCategory")}</div><div className="chart-legend"><span><span className="dot cyan-dot" />Slots</span><span><span className="dot gold-dot" />Live</span><span><span className="dot violet-dot" />Crash</span></div></div><MiniChart bars /></div>
      <table className="dtable"><thead><tr><th>{t("game.showcase.game")}</th><th>{t("game.showcase.provider")}</th><th className="r">{t("game.showcase.sessionsHeader")}</th><th className="r">Hold</th></tr></thead><tbody>
        <tr><td>Sweet Bonanza</td><td>Pragmatic Play</td><td className="r mono">3.214</td><td className="r mono st-ok">5.1%</td></tr>
        <tr><td>Aviator</td><td>Spribe</td><td className="r mono">2.847</td><td className="r mono st-ok">4.6%</td></tr>
        <tr><td>Crazy Time</td><td>Evolution</td><td className="r mono">1.913</td><td className="r mono st-warn">3.9%</td></tr>
        <tr><td>Fortune Tiger</td><td>PG Soft</td><td className="r mono">1.768</td><td className="r mono st-ok">5.4%</td></tr>
      </tbody></table>
    </>
  );
}

const sportRows = [
  ["UCL", "Real Madrid × Man City", "Champions League · Semifinal", "LIVE 67'", "2.10", "3.40"],
  ["BRA", "São Paulo × Corinthians", "Brasileirão Série A", "20:00", "2.45", "2.80"],
  ["NBA", "Lakers × Celtics", "NBA · Regular Season", "22:30", "1.85", "1.95"],
  ["ATP", "Sinner × Alcaraz", "ATP Masters · Final", "15:00", "2.20", "1.65"],
] as const;

function SportsPanel() {
  const { t } = useTranslation();

  return (
    <>
      <div className="show-vis-head"><div className="show-vis-title g">{t("game.showcase.sports.panelTitle")}</div><div className="show-vis-pills"><span className="svp">Genius Sports</span><span className="svp">42ms</span><span className="svp">{t("game.showcase.operationalSports")}</span></div></div>
      <div className="dash-row">
        <div className="dash-stat"><div className="l">{t("game.showcase.openMarkets")}</div><div className="v go mono">8.421</div><div className="delta">{t("game.showcase.now")}</div></div>
        <div className="dash-stat"><div className="l">{t("game.showcase.liveTickets")}</div><div className="v cy mono">14.297</div><div className="delta">▲ +2.1%</div></div>
        <div className="dash-stat"><div className="l">{t("game.showcase.dayHandle")}</div><div className="v go mono compact-handle">R$ 1.2M</div><div className="delta">vs R$ 980k</div></div>
      </div>
      <div className="panel-odds-list">
        {sportRows.map(([flag, teams, league, time, first, second]) => (
          <div className="odds-row panel-odds-row" key={teams}>
            <div className="odds-flag">{flag}</div><div className="odds-teams"><div>{teams}</div><div className="league">{league}</div></div>
            <div className={`odds-time${time.startsWith("LIVE") ? " live" : ""}`}>{time}</div><div className="odds-cell">{first}</div><div className="odds-cell">{second}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function LivePanel() {
  const { t } = useTranslation();

  return (
    <>
      <div className="show-vis-head"><div className="show-vis-title r">{t("game.showcase.live.panelTitle")}</div><div className="show-vis-pills"><span className="svp live">{t("game.showcase.liveNow")}</span><span className="svp">Cash Out</span><span className="svp">Streaming</span></div></div>
      <div className="dash-row">
        <div className="dash-stat"><div className="l">{t("game.showcase.liveEvents")}</div><div className="v red-stat mono">247</div><div className="delta">{t("game.showcase.liveDelta")}</div></div>
        <div className="dash-stat"><div className="l">{t("game.showcase.activeCashout")}</div><div className="v cy mono">3.428</div><div className="delta">{t("game.showcase.accepted")}</div></div>
        <div className="dash-stat"><div className="l">{t("game.showcase.oddsLatency")}</div><div className="v gr mono">42<span className="small-unit">ms</span></div><div className="delta">{t("game.showcase.lastHour")}</div></div>
      </div>
      <div className="chart"><div className="chart-head"><div className="chart-title">{t("game.showcase.inPlayVolume")}</div><div className="chart-legend"><span><span className="dot red-dot" />{t("game.showcase.betsPerMinute")}</span></div></div><MiniChart red /></div>
      <div className="kyc-list">
        <div className="kyc-item"><div className="kyc-step done">✓</div><div className="kyc-text">{t("game.showcase.goal")}<span className="sub">{t("game.showcase.goalDetail")}</span></div><div className="kyc-status ok">{t("game.showcase.goalTime")}</div></div>
        <div className="kyc-item"><div className="kyc-step curr">●</div><div className="kyc-text">{t("game.showcase.yellowCard")}<span className="sub">{t("game.showcase.yellowCardDetail")}</span></div><div className="kyc-status wait">{t("game.showcase.yellowCardTime")}</div></div>
        <div className="kyc-item"><div className="kyc-step">3</div><div className="kyc-text">{t("game.showcase.corner")}<span className="sub">{t("game.showcase.cornerDetail")}</span></div><div className="kyc-status wait">{t("game.showcase.cornerTime")}</div></div>
      </div>
    </>
  );
}

export function ShowcaseSection() {
  const [active, setActive] = useState<ShowcaseKey>("casino");
  const { t } = useTranslation();
  const current = showcase[active];

  return (
    <section className="showcase" id="produto">
      <div className="sec-head">
        <div className="sec-tag"><span className="num">02 /</span>{t("game.showcase.eyebrow")}</div>
        <h2 className="sec-title">{t("game.showcase.heading.line1")}<br /><span className="ac">{t("game.showcase.heading.line2")}</span></h2>
        <p className="sec-desc">{t("game.showcase.description")}</p>
      </div>

      <div className="show-tabs" role="tablist" aria-label={t("game.showcase.tabsAria")}>
        {(Object.keys(showcase) as ShowcaseKey[]).map((key) => (
          <button className={`show-tab${active === key ? " on" : ""}`} type="button" role="tab" aria-selected={active === key} onClick={() => setActive(key)} key={key}>
            {key === "casino" ? <DiceIcon /> : key === "sports" ? <FootballIcon /> : <RadioIcon />}
            {t(showcase[key].labelKey)}
          </button>
        ))}
      </div>

      <div className="show-grid">
        <div className="show-info">
          <div className="led">{t(current.ledKey)}</div>
          <h3 style={{ color: current.color }}>{t(current.titleKey)}</h3>
          <p>{t(current.descriptionKey)}</p>
          <div className="show-list">
            {current.items.map(([icon, title, description]) => (
              <div className="show-li" key={title}>
                <div className="show-li-icon"><ListIcon type={icon} /></div>
                <div><div className="show-li-title">{t(title)}</div><div className="show-li-text">{t(description)}</div></div>
              </div>
            ))}
          </div>
          <div className="show-actions"><a href="#contato" className="btn btn-pri">{t("game.showcase.demo")}</a><a href="#plataforma" className="btn btn-gh">{t("game.showcase.specs")}</a></div>
        </div>
        <div className="show-vis">
          {active === "casino" ? <CasinoPanel /> : active === "sports" ? <SportsPanel /> : <LivePanel />}
        </div>
      </div>
    </section>
  );
}
