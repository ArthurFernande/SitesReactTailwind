"use client";

import { FormEvent, useEffect, useState } from "react";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

import styles from "./gaming-legacy-erp.module.css";

const teamSizes = [
  ["1 a 10", "legacy.modal.team1"],
  ["11 a 50", "legacy.modal.team2"],
  ["51 a 100", "legacy.modal.team3"],
  ["Mais de 100", "legacy.modal.team4"],
] as const satisfies ReadonlyArray<readonly [string, TranslationKey]>;

export function GamingLegacyLeadModal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setIsOpen(true);

    if (window.location.hash === "#lead") {
      openModal();
    }

    window.addEventListener("gaming-legacy-lead-open", openModal);
    return () => window.removeEventListener("gaming-legacy-lead-open", openModal);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalLayer} role="presentation">
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legacy-lead-title"
      >
        <button
          className={styles.closeButton}
          type="button"
          aria-label={t("legacy.modal.close")}
          onClick={() => setIsOpen(false)}
        >
          {"\u00d7"}
        </button>
        <form className={styles.leadForm} onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label htmlFor="legacy-name">{t("legacy.modal.name")} <span>*</span></label>
            <input id="legacy-name" name="name" type="text" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="legacy-email">
              {t("legacy.modal.email")} <span>*</span>
            </label>
            <input id="legacy-email" name="email" type="email" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="legacy-phone">{t("legacy.modal.phone")} <span>*</span></label>
            <input id="legacy-phone" name="phone" type="tel" inputMode="tel" required />
          </div>
          <fieldset className={styles.radioField}>
            <legend id="legacy-lead-title">
              {t("legacy.modal.teamSize")} <span>*</span>
            </legend>
            <div className={styles.radioGrid}>
              {teamSizes.map(([value, labelKey]) => {
                const id = `legacy-team-${value.replaceAll(" ", "-")}`;
                return (
                  <div key={value}>
                    <input id={id} name="team-size" type="radio" value={value} required />
                    <label htmlFor={id}>{t(labelKey)}</label>
                  </div>
                );
              })}
            </div>
          </fieldset>
          <button className={styles.submitButton} type="submit">{t("legacy.modal.submit")}</button>
        </form>
      </section>
    </div>
  );
}
