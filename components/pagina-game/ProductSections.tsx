"use client";

import {
  ArcadeIcon,
  CheckIcon,
  DeviceIcon,
  FruitIcon,
  PlayIcon,
  RocketIcon,
  StoreIcon,
  TrainIcon,
} from "./Icons";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const games = [
  ["subway", TrainIcon, <>SUBWAY<br />CASH</>],
  ["pac", ArcadeIcon, <>PAC<br />MONEY</>],
  ["jet", RocketIcon, <>JETPACK<br />MONEY</>],
  ["fruit", FruitIcon, <>FRUIT<br />NINJA</>],
] as const;

const flow = [
  ["01", "game.product.flow.setup.title", "game.product.flow.setup.description"],
  ["02", "game.product.flow.tech.title", "game.product.flow.tech.description"],
  ["03", "game.product.flow.kyc.title", "game.product.flow.kyc.description"],
  ["04", "game.product.flow.live.title", "game.product.flow.live.description"],
] as const satisfies ReadonlyArray<readonly [string, TranslationKey, TranslationKey]>;

export function ProductSections() {
  const { t } = useTranslation();
  return (
    <>
      <section className="skill" id="skill">
        <div className="sec-head">
          <div className="sec-tag"><span className="num">05 /</span>{t("game.product.skill.eyebrow")}</div>
          <h2 className="sec-title">{t("game.product.skill.heading.beforeHighlight")}<span className="ac">{t("game.product.skill.heading.highlight")}</span></h2>
          <p className="sec-desc">{t("game.product.skill.description")}</p>
        </div>
        <div className="media-frame"><img src="/assets/imgs/pagina-game/skill-games.png" alt={t("game.product.skill.alt")} /></div>
        <div className="skill-grid">
          {games.map(([variant, Icon, label]) => (
            <div className="skill-card" key={variant}>
              <div className={`art ${variant}`}><Icon className="game-art-icon" /></div>
              <div className="glow" />
              <div className="play"><PlayIcon width="20" height="20" /></div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="appn" id="app">
        <div className="appn-grid">
          <div>
            <div className="sec-tag"><span className="num">06 /</span>{t("game.product.app.eyebrow")}</div>
            <h2 className="sec-title">{t("game.product.app.heading.line1")}<br />{t("game.product.app.heading.beforeHighlight")}<span className="ac">{t("game.product.app.heading.highlight")}</span></h2>
            <p className="sec-desc">{t("game.product.app.description")}</p>
            <div className="rating-box">
              <div className="rating-num">4.5</div>
              <div className="rating-stars"><div className="stars">★★★★<span style={{ opacity: 0.5 }}>★</span></div><div className="count">{t("game.product.app.reviews")}</div></div>
            </div>
            <div className="store-badges">
              <a className="store-badge" href="#contato"><StoreIcon width="20" height="20" /><div><div className="lbl">{t("game.product.app.available")}</div><div className="name">Google Play</div></div></a>
              <a className="store-badge" href="#contato"><DeviceIcon width="20" height="20" /><div><div className="lbl">{t("game.product.app.compatible")}</div><div className="name">POS · Tablet</div></div></a>
            </div>
          </div>
          <div className="appn-img"><img src="/assets/imgs/pagina-game/android-app.png" alt={t("game.product.app.alt")} /></div>
        </div>
      </section>

      <section className="iface">
        <div className="sec-head center">
          <div className="sec-tag center-tag"><span className="num">07 /</span>{t("game.product.interface.eyebrow")}</div>
          <h2 className="sec-title">{t("game.product.interface.heading.beforeHighlight")}<span className="ac">{t("game.product.interface.heading.highlight")}</span></h2>
          <p className="sec-desc">{t("game.product.interface.description")}</p>
        </div>
        <div className="iface-img"><img src="/assets/imgs/pagina-game/interface-variants.png" alt={t("game.product.interface.alt")} /></div>
      </section>

      <section className="flow" id="fluxo">
        <div className="sec-head center">
          <div className="sec-tag center-tag"><span className="num">06 /</span>White Label</div>
          <h2 className="sec-title">{t("game.product.flow.heading.line1")}<br />{t("game.product.flow.heading.beforeHighlight")}<span className="ac">{t("game.product.flow.heading.highlight")}</span></h2>
          <p className="sec-desc">{t("game.product.flow.description")}</p>
        </div>
        <div className="flow-steps">
          {flow.map(([number, titleKey, descriptionKey]) => <div className="flow-step" key={number}><div className="flow-num">{number}</div><div className="flow-title">{t(titleKey)}</div><div className="flow-desc">{t(descriptionKey)}</div></div>)}
        </div>
      </section>

      <section className="photo-section photo-kyc">
        <div className="photo-inner">
          <div className="eyebrow g"><span className="d" />{t("game.product.kyc.eyebrow")}</div>
          <h2 className="photo-title">{t("game.product.kyc.title.line1")}<br /><span className="ac2">{t("game.product.kyc.title.line2")}</span></h2>
          <p>{t("game.product.kyc.description")}</p>
          <a href="#compliance" className="btn btn-pri">{t("game.product.kyc.cta")}</a>
        </div>
      </section>
    </>
  );
}

const complianceItems = [
  ["game.compliance.kyc.title", "game.compliance.kyc.description"],
  ["game.compliance.screening.title", "game.compliance.screening.description"],
  ["game.compliance.responsible.title", "game.compliance.responsible.description"],
  ["game.compliance.audit.title", "game.compliance.audit.description"],
] as const satisfies ReadonlyArray<readonly [TranslationKey, TranslationKey]>;

const badges = [
  ["game.compliance.law.title", "game.compliance.law.description", "game.compliance.law.badge"],
  ["game.compliance.encryption.title", "game.compliance.encryption.description", "game.compliance.encryption.badge"],
  ["game.compliance.sla.title", "game.compliance.sla.description", "game.compliance.sla.badge"],
  ["game.compliance.privacy.title", "game.compliance.privacy.description", "game.compliance.privacy.badge"],
] as const satisfies ReadonlyArray<readonly [TranslationKey, TranslationKey, TranslationKey]>;

function BadgeIcon({ index }: { index: number }) {
  if (index === 1) return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>;
  if (index === 2) return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
  if (index === 3) return <CheckIcon width="18" height="18" />;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 2 9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4Z" /></svg>;
}

export function ComplianceSection() {
  const { t } = useTranslation();
  return (
    <section className="compliance" id="compliance">
      <div className="comp-grid">
        <div>
          <div className="sec-tag g"><span className="num">08 /</span>{t("game.compliance.eyebrow")}</div>
          <h2 className="sec-title">{t("game.compliance.heading.beforeHighlight")}<span className="ag">{t("game.compliance.heading.highlight")}</span>{t("game.compliance.heading.afterHighlight")}</h2>
          <p className="sec-desc">{t("game.compliance.description.beforeHighlight")}<strong className="inline-white">{t("game.compliance.description.highlight")}</strong>{t("game.compliance.description.afterHighlight")}</p>
          <div className="comp-list">
            {complianceItems.map(([title, description]) => (
              <div className="comp-item" key={title}><div className="ic"><CheckIcon width="16" height="16" /></div><div><h4>{t(title)}</h4><p>{t(description)}</p></div></div>
            ))}
          </div>
        </div>
        <div className="comp-badges">
          {badges.map(([titleKey, descriptionKey, statKey], index) => (
            <div className="comp-badge" key={titleKey}><div className="ic"><BadgeIcon index={index} /></div><h5>{t(titleKey)}</h5><p>{t(descriptionKey)}</p><div className="stat">{t(statKey)}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
