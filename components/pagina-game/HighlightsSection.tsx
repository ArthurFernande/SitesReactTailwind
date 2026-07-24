"use client";

import { CheckIcon } from "./Icons";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const highlights = [
  ["game.highlights.cashout.title", "game.highlights.cashout.description"],
  ["game.highlights.odds.title", "game.highlights.odds.description"],
  ["game.highlights.events.title", "game.highlights.events.description"],
  ["game.highlights.field.title", "game.highlights.field.description"],
  ["game.highlights.hybrid.title", "game.highlights.hybrid.description"],
  ["game.highlights.manager.title", "game.highlights.manager.description"],
] as const satisfies ReadonlyArray<readonly [TranslationKey, TranslationKey]>;

const metrics = [
  ["game.metrics.games", "6.000", "+", "game.metrics.games.description", ""],
  ["game.metrics.sports", "30", "+", "game.metrics.sports.description", "g"],
  ["game.metrics.uptime", "99.98", "%", "game.metrics.uptime.description", ""],
  ["game.metrics.cost", "R$ 0", "", "game.metrics.cost.description", "g"],
  ["game.metrics.latency", "42", "ms", "game.metrics.latency.description", ""],
  ["game.metrics.pix", "< 10", "s", "game.metrics.pix.description", "g"],
  ["game.metrics.goLive", "7", "d", "game.metrics.goLive.description", ""],
  ["game.metrics.support", "24", "/7", "game.metrics.support.description", "g"],
] as const satisfies ReadonlyArray<readonly [TranslationKey, string, string, TranslationKey, string]>;

export function HighlightsSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="destaque" id="destaque">
        <div className="dest-layout">
          <div>
            <div className="sec-head" style={{ marginBottom: "2.2rem" }}>
              <div className="sec-tag"><span className="num">03 /</span>{t("game.highlights.eyebrow")}</div>
              <h2 className="sec-title">{t("game.highlights.heading.beforeHighlight")}<span className="ac">{t("game.highlights.heading.highlight")}</span></h2>
              <p className="sec-desc">{t("game.highlights.description")}</p>
            </div>
            <div className="dest-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {highlights.map(([title, description]) => (
                <div className="dest-card" key={title}>
                  <div className="dest-check"><CheckIcon width="18" height="18" strokeWidth="2.2" /></div>
                  <div><h4>{t(title)}</h4><p>{t(description)}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="dest-phone">
            <img src="/assets/imgs/pagina-game/mobile-platform.png" alt={t("game.highlights.mobileAlt")} />
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="sec-head center">
          <div className="sec-tag center-tag"><span className="num">04 /</span>{t("game.metrics.eyebrow")}</div>
          <h2 className="sec-title">{t("game.metrics.heading.beforeHighlight")}<span className="ac">{t("game.metrics.heading.highlight")}</span></h2>
        </div>
        <div className="metrics-grid">
          {metrics.map(([label, value, unit, description, variant]) => (
            <div className="metric" key={label}>
              <div className="metric-l">{t(label)}</div>
              <div className={`metric-v${variant ? ` ${variant}` : ""}`}>{value}<span className="u">{unit}</span></div>
              <div className="metric-sub">{label === "game.metrics.uptime" && <span className="up">▲</span>} {t(description)}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
