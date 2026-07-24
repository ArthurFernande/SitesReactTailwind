"use client";

import { useState } from "react";
import { PlusIcon } from "./Icons";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const testimonials = [
  ["game.social.testimonial1.quote", "RC", "R. Carvalho", "game.social.testimonial1.role"],
  ["game.social.testimonial2.quote", "LF", "L. Ferraz", "game.social.testimonial2.role"],
  ["game.social.testimonial3.quote", "AM", "A. Mendes", "game.social.testimonial3.role"],
] as const satisfies ReadonlyArray<readonly [TranslationKey, string, string, TranslationKey]>;

export function SocialSections() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    [t("game.faq.cost.question"), <>{t("game.faq.cost.beforeHighlight")}<strong>{t("game.faq.cost.highlight")}</strong>{t("game.faq.cost.afterHighlight")}</>],
    [t("game.faq.time.question"), <>{t("game.faq.time.beforeHighlight")}<strong>{t("game.faq.time.highlight")}</strong>{t("game.faq.time.afterHighlight")}</>],
    [t("game.faq.team.question"), <>{t("game.faq.team.beforeHighlight")}<strong>{t("game.faq.team.highlight")}</strong>{t("game.faq.team.afterHighlight")}</>],
    [t("game.faq.affiliates.question"), <>{t("game.faq.affiliates.answer")}</>],
    [t("game.faq.compliance.question"), <>{t("game.faq.compliance.answer")}</>],
    [t("game.faq.payments.question"), <><strong>{t("game.faq.payments.highlight")}</strong>{t("game.faq.payments.afterHighlight")}</>],
  ] as const;

  return (
    <>
      <section className="testi">
        <div className="sec-head">
          <div className="sec-tag"><span className="num">09 /</span>{t("game.social.eyebrow")}</div>
          <h2 className="sec-title">{t("game.social.heading.line1")}<br /><span className="ac">{t("game.social.heading.line2")}</span></h2>
        </div>
        <div className="testi-grid">
          {testimonials.map(([quote, initials, name, role]) => (
            <div className="testi-card" key={name}>
              <div className="testi-quote">{t(quote)}</div>
              <div className="testi-author"><div className="testi-avatar">{initials}</div><div><div className="testi-name">{name}</div><div className="testi-role">{t(role)}</div></div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="sec-head center">
          <div className="sec-tag center-tag"><span className="num">10 /</span>{t("game.faq.eyebrow")}</div>
          <h2 className="sec-title">{t("game.faq.heading.beforeHighlight")}<span className="ac">{t("game.faq.heading.highlight")}</span></h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={question}>
                <button className="faq-q" type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
                  {question}
                  <span className="ic"><PlusIcon width="14" height="14" strokeWidth="2" /></span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? "220px" : "0px" }}><div className="faq-a-inner"><p>{answer}</p></div></div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
