"use client";

import { useId, useState } from "react";
import { DiceIcon, FootballIcon, RadioIcon, RefreshIcon, ShieldIcon } from "./Icons";

type ShowcaseKey = "casino" | "sports" | "live";

const showcase = {
  casino: {
    label: "Cassino",
    led: "VERTICAL 01 · CASINO",
    title: "Cassino Digital",
    color: "var(--cyan)",
    description: "Slots, crash games, raspadinha, esportes virtuais, roleta, blackjack e baccarat — mais de 6.000 jogos integrados, com cassino ao vivo via dealers reais em HD.",
    items: [
      ["games", "+6.000 Jogos Disponíveis", "Slots, crash, table games, raspadinha e esportes virtuais."],
      ["live", "Cassino ao Vivo HD", "Roleta, Blackjack, Baccarat com dealers reais via streaming."],
      ["refresh", "10+ Provedores Premium", "Pragmatic, Evolution, PG Soft, BGaming, Belatra, Tom Horn, EvoPlay e mais."],
    ],
  },
  sports: {
    label: "Esportes",
    led: "VERTICAL 02 · SPORTS",
    title: "Apostas Esportivas",
    color: "var(--gold)",
    description: "Mais de 30 modalidades com odds em tempo real, pré-jogo e cobertura completa dos grandes campeonatos nacionais e internacionais — com cotações no padrão das grandes casas do mundo.",
    items: [
      ["sports", "Apostas Ao Vivo", "Seus clientes apostam em tempo real durante os jogos."],
      ["chart", "Cotações Automáticas", "Odds e resultados automáticos, seguindo o padrão das grandes casas."],
      ["shield", "Gestão de Risco", "Ferramentas poderosas para gerir e reduzir o risco da operação."],
      ["ticket", "Bilhetes em Tempo Real", "Acompanhamento ao vivo de todos os bilhetes ativos."],
    ],
  },
  live: {
    label: "Ao Vivo",
    led: "VERTICAL 03 · IN-PLAY",
    title: "Ao Vivo · In-Play",
    color: "var(--red)",
    description: "Transmissão e apostas durante a partida, com atualização instantânea de odds, cash out automático, estatísticas avançadas e máxima imersão para o apostador.",
    items: [
      ["live", "In-Play em Eventos Ao Vivo", "Apostas durante a partida com atualização instantânea de odds."],
      ["chart", "Estatísticas em Tempo Real", "Posse, escanteios, cartões e disparos — dados para decisão imediata."],
      ["refresh", "Cash Out Inteligente", "Jogador saca o lucro parcial antes do final — automático ou manual."],
    ],
  },
} as const;

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
  return (
    <>
      <div className="show-vis-head"><div className="show-vis-title">CASSINO</div><div className="show-vis-pills"><span className="svp">Pragmatic</span><span className="svp">Evolution</span><span className="svp">PG Soft</span></div></div>
      <div className="dash-row">
        <div className="dash-stat"><div className="l">Sessões ativas</div><div className="v cy mono">12.847</div><div className="delta">▲ +8.4%</div></div>
        <div className="dash-stat"><div className="l">Top jogo (24h)</div><div className="v mono compact-stat">Crash X</div><div className="delta">2.314 sessões</div></div>
        <div className="dash-stat"><div className="l">Hold rate</div><div className="v go mono">4.82<span className="small-unit">%</span></div><div className="delta">▲ vs ontem</div></div>
      </div>
      <div className="chart"><div className="chart-head"><div className="chart-title">Apostas por categoria · 24h</div><div className="chart-legend"><span><span className="dot cyan-dot" />Slots</span><span><span className="dot gold-dot" />Live</span><span><span className="dot violet-dot" />Crash</span></div></div><MiniChart bars /></div>
      <table className="dtable"><thead><tr><th>Jogo</th><th>Provedor</th><th className="r">Sessões</th><th className="r">Hold</th></tr></thead><tbody>
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
  return (
    <>
      <div className="show-vis-head"><div className="show-vis-title g">ESPORTES</div><div className="show-vis-pills"><span className="svp">Genius Sports</span><span className="svp">42ms</span><span className="svp">30+ esportes</span></div></div>
      <div className="dash-row">
        <div className="dash-stat"><div className="l">Mercados abertos</div><div className="v go mono">8.421</div><div className="delta">▲ +312 agora</div></div>
        <div className="dash-stat"><div className="l">Bilhetes vivos</div><div className="v cy mono">14.297</div><div className="delta">▲ +2.1%</div></div>
        <div className="dash-stat"><div className="l">Handle dia</div><div className="v go mono compact-handle">R$ 1.2M</div><div className="delta">vs R$ 980k</div></div>
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
  return (
    <>
      <div className="show-vis-head"><div className="show-vis-title r">AO VIVO</div><div className="show-vis-pills"><span className="svp live">● LIVE</span><span className="svp">Cash Out</span><span className="svp">Streaming</span></div></div>
      <div className="dash-row">
        <div className="dash-stat"><div className="l">Eventos ao vivo</div><div className="v red-stat mono">247</div><div className="delta">▲ +18 últ. 10min</div></div>
        <div className="dash-stat"><div className="l">Cash Out ativos</div><div className="v cy mono">3.428</div><div className="delta">82% aceitos</div></div>
        <div className="dash-stat"><div className="l">Latência odds</div><div className="v gr mono">42<span className="small-unit">ms</span></div><div className="delta">média 1h</div></div>
      </div>
      <div className="chart"><div className="chart-head"><div className="chart-title">Volume in-play · últimos 60min</div><div className="chart-legend"><span><span className="dot red-dot" />Apostas/min</span></div></div><MiniChart red /></div>
      <div className="kyc-list">
        <div className="kyc-item"><div className="kyc-step done">✓</div><div className="kyc-text">Gol confirmado · Flamengo<span className="sub">Trigger automático · 1.842 cash outs solicitados</span></div><div className="kyc-status ok">42&apos;</div></div>
        <div className="kyc-item"><div className="kyc-step curr">●</div><div className="kyc-text">Cartão amarelo · Real Madrid<span className="sub">Recálculo de odds em andamento</span></div><div className="kyc-status wait">67&apos;</div></div>
        <div className="kyc-item"><div className="kyc-step">3</div><div className="kyc-text">Próximo: escanteio Barcelona<span className="sub">Mercado especial · odds em formação</span></div><div className="kyc-status wait">~71&apos;</div></div>
      </div>
    </>
  );
}

export function ShowcaseSection() {
  const [active, setActive] = useState<ShowcaseKey>("casino");
  const current = showcase[active];

  return (
    <section className="showcase" id="produto">
      <div className="sec-head">
        <div className="sec-tag"><span className="num">02 /</span>A Plataforma em Detalhe</div>
        <h2 className="sec-title">Uma solução,<br /><span className="ac">três verticais completas.</span></h2>
        <p className="sec-desc">Cassino, esportes e ao vivo — todos sob a mesma carteira, o mesmo backoffice e a mesma marca.</p>
      </div>

      <div className="show-tabs" role="tablist" aria-label="Verticais da plataforma">
        {(Object.keys(showcase) as ShowcaseKey[]).map((key) => (
          <button className={`show-tab${active === key ? " on" : ""}`} type="button" role="tab" aria-selected={active === key} onClick={() => setActive(key)} key={key}>
            {key === "casino" ? <DiceIcon /> : key === "sports" ? <FootballIcon /> : <RadioIcon />}
            {showcase[key].label}
          </button>
        ))}
      </div>

      <div className="show-grid">
        <div className="show-info">
          <div className="led">{current.led}</div>
          <h3 style={{ color: current.color }}>{current.title}</h3>
          <p>{current.description}</p>
          <div className="show-list">
            {current.items.map(([icon, title, description]) => (
              <div className="show-li" key={title}>
                <div className="show-li-icon"><ListIcon type={icon} /></div>
                <div><div className="show-li-title">{title}</div><div className="show-li-text">{description}</div></div>
              </div>
            ))}
          </div>
          <div className="show-actions"><a href="#contato" className="btn btn-pri">Ver demonstração →</a><a href="#plataforma" className="btn btn-gh">Especificações</a></div>
        </div>
        <div className="show-vis">
          {active === "casino" ? <CasinoPanel /> : active === "sports" ? <SportsPanel /> : <LivePanel />}
        </div>
      </div>
    </section>
  );
}
