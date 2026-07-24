"use client";

import { useEffect, useState } from "react";
import { BasketballIcon, FootballIcon, GamepadIcon, TennisIcon } from "./Icons";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

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
  [FootballIcon, "game.hero.tab.football"],
  [BasketballIcon, "game.hero.tab.basketball"],
  [TennisIcon, "game.hero.tab.tennis"],
  [GamepadIcon, "game.hero.tab.esports"],
] as const satisfies ReadonlyArray<readonly [typeof FootballIcon, TranslationKey]>;

export function HeroSection() {
  const { language, t } = useTranslation();
  const [matches, setMatches] = useState(initialMatches);
  const [time, setTime] = useState("");
  const [counters, setCounters] = useState({ bets: 1247, ggr: 84320, users: 2418 });

  useEffect(() => {
    const updateClock = () => setTime(new Intl.DateTimeFormat(language, {
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
  }, [language]);

  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />

      <div className="hero-left">
        <div className="eyebrow"><span className="d" />{t("game.hero.eyebrow")}</div>
        <h1 className="hero-title">
          {t("game.hero.title.line1")}<br />
          <span className="big">{t("game.hero.title.line2")}<br /><span className="di">{t("game.hero.title.line3")}</span></span>
        </h1>
        <p className="hero-sub">{t("game.hero.subtitle")}</p>
        <p className="hero-desc">{t("game.hero.description.beforeXsa")}<strong className="inline-white">XSA Sports</strong>{t("game.hero.description.betweenBrands")}<strong className="inline-white">Global Tech</strong>{t("game.hero.description.afterBrands")}</p>
        <div className="hero-chips">
          <span className="chip cy">{t("game.hero.chip.games")}</span>
          <span className="chip cy">{t("game.compliance.law.title")}</span>
          <span className="chip cy">{t("game.hero.chip.live")}</span>
          <span className="chip">Mobile-first</span>
          <span className="chip">App Android</span>
          <span className="chip go">{t("game.hero.chip.hybrid")}</span>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="v">6.000<span style={{ fontSize: "1.1rem", color: "var(--cyan-2)" }}>+</span></div><div className="l">{t("game.hero.stat.games")}</div></div>
          <div className="hero-stat"><div className="v">30<span style={{ fontSize: "1.1rem", color: "var(--cyan-2)" }}>+</span></div><div className="l">{t("game.hero.stat.sports")}</div></div>
          <div className="hero-stat"><div className="v g">4.5<span style={{ fontSize: "1.1rem", color: "var(--gold)" }}>★</span></div><div className="l">{t("game.hero.stat.app")}</div></div>
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
            {tabs.map(([Icon, labelKey], index) => (
              <div className={`mock-tab${index === 0 ? " on" : ""}`} key={labelKey}>
                <Icon className="sport-icon" />{t(labelKey)}
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
            <span>SESSION · <span className="v">{language.toUpperCase()}</span></span>
            <span>ODDS · <span className="v">GENIUS SPORTS</span></span>
            <span>LATENCY · <span className="v">42ms</span></span>
          </div>
        </div>

        <div className="float-card fc-1">
          <div className="fc-label">{t("game.hero.betsPerMinute")}</div>
          <div className="fc-val mono">{counters.bets.toLocaleString(language)}</div>
          <div className="fc-trend">{t("game.hero.trend")}</div>
        </div>
        <div className="float-card fc-2">
          <div className="fc-row">
            <div><div className="fc-label">{t("game.hero.ggrToday")}</div><div className="fc-val g mono">R$ {counters.ggr.toLocaleString(language)}</div></div>
            <div style={{ textAlign: "right" }}><div className="fc-label">{t("game.hero.players")}</div><div className="fc-val mono">{counters.users.toLocaleString(language)}</div></div>
          </div>
        </div>
        <div className="float-card fc-3">
          <div className="fc-label">{t("game.hero.pixDeposit")}</div>
          <div className="fc-val gr mono">R$ 50,00</div>
          <div className="fc-trend">{t("game.hero.confirmed")}</div>
        </div>
      </div>
    </section>
  );
}
