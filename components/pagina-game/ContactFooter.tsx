"use client";

import { FormEvent, useState } from "react";
import { ArrowRightIcon, CheckIcon, MailIcon, MessageIcon } from "./Icons";
import { useTranslation } from "@/components/traducaoButtons";

export function ContactFooter() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="cta" id="contato">
        <div className="cta-inner">
          <div className="eyebrow"><span className="d" />{t("game.contact.eyebrow")}</div>
          <h2 className="cta-title">{t("game.contact.heading.beforeHighlight")}<span className="h">{t("game.contact.heading.highlight")}</span></h2>
          <p className="cta-sub">{t("game.contact.description")}</p>

          <div className="lead-block lead-block-react">
            <div className="lead-eyebrow">{t("game.contact.form.eyebrow")}</div>
            <div className="lead-title">{t("game.contact.form.heading.beforeHighlight")}<span className="h">{t("game.contact.form.heading.highlight")}</span></div>
            {!submitted ? (
              <form className="lead-form" onSubmit={handleSubmit}>
                <div className="fg full"><label htmlFor="pagina-game-nome">{t("game.contact.form.name")}</label><input id="pagina-game-nome" type="text" name="nome" placeholder={t("game.contact.form.namePlaceholder")} required /></div>
                <div className="fg"><label htmlFor="pagina-game-whatsapp">{t("game.contact.form.whatsapp")}</label><input id="pagina-game-whatsapp" type="tel" name="whatsapp" placeholder="+55 00 00000-0000" required /></div>
                <div className="fg"><label htmlFor="pagina-game-cidade">{t("game.contact.form.city")}</label><input id="pagina-game-cidade" type="text" name="cidade" placeholder={t("game.contact.form.cityPlaceholder")} required /></div>
                <div className="fg full"><label htmlFor="pagina-game-email">{t("game.contact.form.email")}</label><input id="pagina-game-email" type="email" name="email" placeholder="seu@email.com" /></div>
                <div className="fg full">
                  <label htmlFor="pagina-game-experiencia">{t("game.contact.form.experience")}</label>
                  <select id="pagina-game-experiencia" name="experiencia" required defaultValue="">
                    <option value="" disabled>{t("game.contact.form.select")}</option>
                    <option value="nenhuma">{t("game.contact.form.none")}</option>
                    <option value="pouca">{t("game.contact.form.little")}</option>
                    <option value="intermediaria">{t("game.contact.form.intermediate")}</option>
                    <option value="avancada">{t("game.contact.form.advanced")}</option>
                  </select>
                </div>
                <button type="submit" className="fsub"><ArrowRightIcon width="14" height="14" strokeWidth="2" />{t("game.contact.form.submit")}</button>
                <div className="lead-trust lead-trust-full"><span><span className="c">✓</span> {t("game.contact.form.trust.free")}</span><span><span className="c">✓</span> {t("game.contact.form.trust.response")}</span><span><span className="c">✓</span> {t("game.contact.form.trust.safe")}</span></div>
              </form>
            ) : (
              <div className="form-success on" role="status">
                <div className="ic"><CheckIcon width="22" height="22" strokeWidth="2" /></div>
                <div className="t">{t("game.contact.form.successTitle")}</div>
                <div className="s">{t("game.contact.form.successMessage")}</div>
              </div>
            )}
          </div>

          <div className="contact-card">
            <div className="person"><div className="av">PF</div><div><div className="nm">Pedro Frej</div><div className="rl">COMERCIAL · GLOBAL TECH INTERNACIONAL</div></div></div>
            <div className="sep" />
            <a href="mailto:pedro.frej@gtech.uy"><MailIcon width="14" height="14" />pedro.frej@gtech.uy</a>
            <a href="https://wa.me/59897859466" target="_blank" rel="noopener noreferrer"><MessageIcon width="14" height="14" />+598 97859466</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#top" className="logo"><span className="logo-mark" /><span className="logo-text">global tech<span className="d">INTERNATIONAL</span></span></a>
            <p className="desc">{t("game.footer.description")}</p>
            <span className="responsible-tag">{t("game.footer.responsibleBadge")}</span>
          </div>
          <div className="foot-col"><h6>{t("game.footer.platform")}</h6><ul><li><a href="#plataforma">{t("game.footer.features")}</a></li><li><a href="#produto">{t("game.footer.verticals")}</a></li><li><a href="#operacao">{t("game.footer.backoffice")}</a></li><li><a href="#fluxo">White Label</a></li></ul></div>
          <div className="foot-col"><h6>{t("game.footer.company")}</h6><ul><li><a href="#compliance">Compliance</a></li><li><a href="https://gtech.uy" target="_blank" rel="noopener noreferrer">gtech.uy</a></li><li><a href="#faq">FAQ</a></li><li><a href="#contato">{t("game.footer.contact")}</a></li></ul></div>
          <div className="foot-col"><h6>{t("game.footer.legal")}</h6><ul><li><a href="#">{t("game.footer.terms")}</a></li><li><a href="#">{t("game.footer.privacy")}</a></li><li><a href="#">{t("game.footer.responsible")}</a></li><li><a href="#">LGPD</a></li></ul></div>
        </div>
        <div className="foot-disclaim"><div className="age-badge">18+</div><div><strong className="inline-white">{t("game.footer.warningTitle")}</strong>{t("game.footer.warning")}</div></div>
        <div className="foot-bottom"><span>© 2026 GLOBAL TECH INTERNACIONAL · GTECH.UY</span><span>BUILD 2026.05.15 · v3.1</span></div>
      </footer>
    </>
  );
}
