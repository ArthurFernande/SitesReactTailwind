"use client";

import { CheckIcon, DeviceIcon, FootballIcon, ShieldIcon } from "./Icons";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const tickerItems = [
  ["", "game.ticker.casino"],
  ["g", "game.ticker.games"],
  ["gr", "game.ticker.pix"],
  ["", "game.ticker.genius"],
  ["g", "game.ticker.mobile"],
  ["", "game.ticker.kyc"],
  ["g", "game.ticker.dashboard"],
  ["gr", "game.ticker.antifraud"],
  ["", "game.ticker.whiteLabel"],
  ["g", "game.ticker.support"],
  ["", "game.ticker.sports"],
  ["gr", "game.ticker.cashout"],
] as const satisfies ReadonlyArray<readonly [string, TranslationKey]>;

const providers = [
  ["Pragmatic Play", "Slots · Live"],
  ["Evolution", "Live Casino"],
  ["PG Soft", "Slots"],
  ["BGaming", "Slots"],
  ["Belatra", "Slots"],
  ["Tom Horn", "Slots"],
  ["EvoPlay", "Slots"],
  ["Turbo Games", "Crash"],
  ["Aviatrix", "Crash"],
  ["SmartSoft", "JetX · BalloonX"],
] as const;

const features = [
  ["game.features.casino.title", "game.features.casino.description", ["game.features.tag.games", "game.features.tag.providers", "game.features.tag.hdLive"], ""],
  ["game.features.sports.title", "game.features.sports.description", ["game.features.tag.inPlay", "game.features.tag.cashOut", "game.features.tag.streaming"], ""],
  ["game.features.genius.title", "game.features.genius.description", ["game.features.tag.liveOdds", "game.features.tag.statistics", "game.features.tag.scoreboard"], "go"],
  ["game.features.mobile.title", "game.features.mobile.description", ["game.features.tag.ios", "game.features.tag.android", "game.features.tag.pwa"], ""],
  ["game.features.wallet.title", "game.features.wallet.description", ["game.features.tag.pix", "game.features.tag.ted", "game.features.tag.crypto"], ""],
  ["game.features.vip.title", "game.features.vip.description", ["game.features.tag.ranking", "game.features.tag.cashback", "game.features.tag.missions"], ""],
  ["game.features.kyc.title", "game.features.kyc.description", ["game.features.tag.ocr", "game.features.tag.biometry", "game.features.tag.aml"], "go"],
  ["game.features.affiliates.title", "game.features.affiliates.description", ["game.features.tag.cpa", "game.features.tag.revshare", "game.features.tag.hybrid"], ""],
  ["game.features.bi.title", "game.features.bi.description", ["game.features.tag.realtime", "game.features.tag.export", "game.features.tag.api"], ""],
] as const satisfies ReadonlyArray<readonly [TranslationKey, TranslationKey, readonly TranslationKey[], string]>;

function FeatureIcon({ index }: { index: number }) {
  if (index === 1) return <FootballIcon width="20" height="20" />;
  if (index === 3) return <DeviceIcon width="20" height="20" />;
  if (index === 6) return <ShieldIcon width="20" height="20" />;
  if (index === 2) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m3 17 6-6 4 4 8-8M14 7h7v7" /></svg>;
  }
  if (index === 4) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="6" width="20" height="13" rx="2" /><path d="M2 11h20M6 16h2m3 0h2" /></svg>;
  }
  if (index === 5) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" /></svg>;
  }
  if (index === 7) return <CheckIcon width="20" height="20" />;
  if (index === 8) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" /></svg>;
  }
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>;
}

export function Ticker() {
  const { t } = useTranslation();
  return (
    <div className="ticker" aria-label={t("game.ticker.aria")}>
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map(([variant, text], index) => (
          <span className={`tk${variant ? ` ${variant}` : ""}`} key={`${text}-${index}`}><span className="d" />{t(text)}</span>
        ))}
      </div>
    </div>
  );
}

export function InstitutionalSections() {
  const { t } = useTranslation();
  return (
    <>
      <section className="about" id="quem-somos">
        <div className="about-grid">
          <div>
            <div className="eyebrow"><span className="d" />{t("game.institutional.eyebrow")}</div>
            <h2 className="about-disp">{t("game.institutional.title.line1")}<br />{t("game.institutional.title.line2")}</h2>
            <p>{t("game.institutional.paragraph1.beforeProposal")}<strong>{t("game.institutional.paragraph1.proposal")}</strong>{t("game.institutional.paragraph1.beforeXsa")}<strong>XSA Sports</strong>{t("game.institutional.paragraph1.betweenBrands")}<strong>Global Tech</strong>{t("game.institutional.paragraph1.afterBrands")}</p>
            <p>{t("game.institutional.paragraph2")}</p>
            <div className="about-fusion"><span className="b">XSA SPORTS</span><span className="x">×</span><span className="b">GLOBAL TECH</span></div>
          </div>
          <div className="about-img"><img src="/assets/imgs/pagina-game/global-tech-office.png" alt={t("game.institutional.officeAlt")} /></div>
        </div>
      </section>

      <section className="providers" style={{ padding: "3.5rem 5%" }}>
        <div className="providers-head">{t("game.providers.heading")}</div>
        <div className="providers-real">
          {providers.map(([name, type]) => <div className="prov-card" key={name}><div className="nm">{name}</div><div className="sub">{type}</div></div>)}
        </div>
      </section>

      <section className="photo-section photo-sports">
        <div className="photo-inner">
          <div className="eyebrow"><span className="d" />{t("game.sports.eyebrow")}</div>
          <h2 className="photo-title">{t("game.sports.title.line1")}<br /><span className="ac2">{t("game.sports.title.line2")}</span></h2>
          <p>{t("game.sports.description")}</p>
          <a href="#produto" className="btn btn-pri">{t("game.sports.cta")}</a>
        </div>
      </section>

      <section className="features" id="plataforma">
        <div className="sec-head">
          <div className="sec-tag"><span className="num">01 /</span>{t("game.features.eyebrow")}</div>
          <h2 className="sec-title">{t("game.features.heading.line1")}<br />{t("game.features.heading.line2")}</h2>
          <p className="sec-desc">{t("game.features.description")}</p>
        </div>
        <div className="feat-grid">
          {features.map(([title, description, tags, variant], index) => (
            <div className={`feat-card${variant ? ` ${variant}` : ""}`} key={title}>
              <div className="feat-icon"><FeatureIcon index={index} /></div>
              <div className="feat-title">{t(title)}</div>
              <div className="feat-desc">{t(description)}</div>
              <div className="feat-meta">{tags.map((tag) => <span key={tag}>{t(tag)}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="photo-section photo-casino">
        <div className="photo-inner photo-right">
          <div className="eyebrow"><span className="d" />{t("game.casino.eyebrow")}</div>
          <h2 className="photo-title">{t("game.casino.title.line1")}<br /><span className="ac2">{t("game.casino.title.line2")}</span></h2>
          <p>{t("game.casino.description")}</p>
        </div>
      </section>
    </>
  );
}
