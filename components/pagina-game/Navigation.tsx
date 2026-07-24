"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const links = [
  ["#quem-somos", "game.nav.about"],
  ["#plataforma", "game.nav.platform"],
  ["#operacao", "game.nav.operation"],
  ["#compliance", "game.compliance.heading.highlight"],
  ["#faq", "game.faq.eyebrow"],
] as const satisfies ReadonlyArray<readonly [string, TranslationKey]>;

export function Navigation() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav" aria-label={t("game.nav.mainAria")}>
        <div className="nav-left">
          <a href="#top" className="logo" aria-label={t("game.nav.logoAria")}>
            <span className="logo-mark" />
            <span className="logo-text">global tech<span className="d">INTERNATIONAL</span></span>
          </a>
          <div className="nav-links">
            {links.map(([href, labelKey]) => <a href={href} key={href}>{t(labelKey)}</a>)}
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-status"><span className="d" />{t("game.nav.status")}</div>
          <a href="#contato" className="nav-cta">{t("game.nav.contact")}</a>
          <button className="nav-burger" type="button" aria-label={t("game.nav.open")} aria-expanded={open} onClick={() => setOpen(true)}>
            <MenuIcon width="24" height="24" />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " on" : ""}`} aria-hidden={!open}>
        <button className="mobile-close" type="button" aria-label={t("game.nav.close")} onClick={() => setOpen(false)}>
          <CloseIcon width="26" height="26" />
        </button>
        {links.map(([href, labelKey]) => <a href={href} key={href} onClick={() => setOpen(false)}>{t(labelKey)}</a>)}
        <a href="#contato" onClick={() => setOpen(false)} style={{ color: "var(--cyan)" }}>{t("game.nav.contact")} →</a>
      </div>
    </>
  );
}
