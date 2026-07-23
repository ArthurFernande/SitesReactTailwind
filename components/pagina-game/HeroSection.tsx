"use client";

import { useEffect, useState } from "react";
import { BasketballIcon, FootballIcon, GamepadIcon, TennisIcon } from "./Icons";

type Match = {
  flag: string;
  teams: string;
  league: string;
  time: string;
  live?: boolean;
  odds: [number, number];
  flash?: "up" | "down";
};

const initialMatches: Match[] = [
  { flag: "BRA", teams: "Flamengo × Palmeiras", league: "Brasileirão · Série A", time: "67'", live: true, odds: [2.1, 3.4] },
  { flag: "ESP", teams: "Real Madrid × Barcelona", league: "La Liga · Jornada 14", time: "23'", live: true, odds: [2.85, 2.4] },
  { flag: "ENG", teams: "Man City × Liverpool", league: "Premier League", time: "19:30", odds: [1.95, 3.65] },
  { flag: "ITA", teams: "Juventus × Inter", league: "Serie A · TIM", time: "21:00", odds: [2.45, 2.8] },
  { flag: "FRA", teams: "PSG × Marseille", league: "Ligue 1 · Le Classique", time: "22:15", odds: [1.55, 5.2] },
];

const tabs = [
  [FootballIcon, "Futebol"],
  [BasketballIcon, "Basquete"],
  [TennisIcon, "Tênis"],
  [GamepadIcon, "e-Sports"],
] as const;

export function HeroSection() {
  const [matches, setMatches] = useState(initialMatches);
  const [time, setTime] = useState("");
  const [counters, setCounters] = useState({ bets: 1247, ggr: 84320, users: 2418 });

  useEffect(() => {
    const updateClock = () => setTime(new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date()));
    updateClock();
    const clock = window.setInterval(updateClock, 1000);
    const odds = window.setInterval(() => {
      setMatches((current) => {
        const next: Match[] = current.map((match) => ({ ...match, odds: [...match.odds] as [number, number], flash: undefined }));
        const matchIndex = Math.floor(Math.random() * next.length);
        const oddsIndex = Math.random() > 0.5 ? 1 : 0;
        const oldValue = next[matchIndex].odds[oddsIndex];
        const newValue = Math.max(1.1, Math.min(9.9, Math.round((oldValue + (Math.random() - 0.5) * 0.2) * 100) / 100));
        next[matchIndex].odds[oddsIndex] = newValue;
        next[matchIndex].flash = newValue >= oldValue ? "up" : "down";
        return next;
      });
    }, 1200);
    const values = window.setInterval(() => {
      setCounters((current) => ({
        bets: current.bets + Math.floor(Math.random() * 8) + 1,
        ggr: current.ggr + Math.floor(Math.random() * 240) + 30,
        users: current.users + (Math.random() > 0.6 ? 1 : 0),
      }));
    }, 2400);
    return () => {
      window.clearInterval(clock);
      window.clearInterval(odds);
      window.clearInterval(values);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />

      <div className="hero-left">
        <div className="eyebrow"><span className="d" />XSA SPORTS × GLOBAL TECH · Plataforma iGaming</div>
        <h1 className="hero-title">
          Sua casa<br />
          <span className="big">DE APOSTAS<br /><span className="di">DIGITAL.</span></span>
        </h1>
        <p className="hero-sub">Cassino · Esportes · Ao Vivo · Compliance · KYC</p>
        <p className="hero-desc">Plataforma completa pronta para operar — fruto da união estratégica entre <strong className="inline-white">XSA Sports</strong> e <strong className="inline-white">Global Tech</strong>. Tecnologia validada, compliance com a Lei 14.790/23 e suporte 24/7.</p>
        <div className="hero-chips">
          <span className="chip cy">6.000+ jogos</span>
          <span className="chip cy">Lei 14.790/23</span>
          <span className="chip cy">Cassino ao vivo</span>
          <span className="chip">Mobile-first</span>
          <span className="chip">App Android</span>
          <span className="chip go">Plataforma híbrida</span>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="v">6.000<span style={{ fontSize: "1.1rem", color: "var(--cyan-2)" }}>+</span></div><div className="l">Jogos integrados</div></div>
          <div className="hero-stat"><div className="v">30<span style={{ fontSize: "1.1rem", color: "var(--cyan-2)" }}>+</span></div><div className="l">Esportes cobertos</div></div>
          <div className="hero-stat"><div className="v g">4.5<span style={{ fontSize: "1.1rem", color: "var(--gold)" }}>★</span></div><div className="l">App cambistas</div></div>
        </div>
      </div>

      <div className="hero-right">
        <div className="mock">
          <div className="mock-chrome">
            <div className="mock-dots"><span /><span /><span /></div>
            <div className="mock-url"><span className="lock">●</span>app.gtech.uy/sports/live</div>
            <div className="mock-live"><span className="d" />LIVE · {time || "14:32:00"}</div>
          </div>
          <div className="mock-tabs">
            {tabs.map(([Icon, label], index) => (
              <div className={`mock-tab${index === 0 ? " on" : ""}`} key={label}>
                <Icon className="sport-icon" />{label}
              </div>
            ))}
          </div>
          <div className="odds-list">
            {matches.map((match, matchIndex) => (
              <div className={`odds-row${match.live ? " live" : ""}`} key={match.teams}>
                <div className="odds-flag">{match.flag}</div>
                <div className="odds-teams"><div>{match.teams}</div><div className="league">{match.league}</div></div>
                <div className={`odds-time${match.live ? " live" : ""}`}>{match.time}</div>
                {match.odds.map((value, oddsIndex) => (
                  <div className={`odds-cell${match.flash && ((matchIndex + oddsIndex) % 2 === 0) ? ` ${match.flash}` : ""}`} key={`${match.teams}-${oddsIndex}`}>
                    {value.toFixed(2)}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mock-foot">
            <span>SESSION · <span className="v">PT-BR</span></span>
            <span>ODDS · <span className="v">GENIUS SPORTS</span></span>
            <span>LATENCY · <span className="v">42ms</span></span>
          </div>
        </div>

        <div className="float-card fc-1">
          <div className="fc-label">Apostas / min</div>
          <div className="fc-val mono">{counters.bets.toLocaleString("pt-BR")}</div>
          <div className="fc-trend">↑ +12.3% últ. 5min</div>
        </div>
        <div className="float-card fc-2">
          <div className="fc-row">
            <div><div className="fc-label">GGR Hoje</div><div className="fc-val g mono">R$ {counters.ggr.toLocaleString("pt-BR")}</div></div>
            <div style={{ textAlign: "right" }}><div className="fc-label">Jogadores</div><div className="fc-val mono">{counters.users.toLocaleString("pt-BR")}</div></div>
          </div>
        </div>
        <div className="float-card fc-3">
          <div className="fc-label">PIX Depósito</div>
          <div className="fc-val gr mono">R$ 50,00</div>
          <div className="fc-trend">✓ Confirmado · 8s</div>
        </div>
      </div>
    </section>
  );
}
