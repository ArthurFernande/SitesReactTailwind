"use client";

import { FormEvent, useEffect, useState } from "react";

import styles from "./gaming-legacy-erp.module.css";

const teamSizes = ["1 a 10", "11 a 50", "51 a 100", "M\u00e1s de 100"];

const copy = {
  email: "Em qual endere\u00e7o de e-mail corporativo voc\u00ea gostaria de receber a proposta?",
  phone: "Voc\u00ea poderia me dar seu n\u00famero de telefone?",
  teamSize: "Por fim, quantos funcion\u00e1rios sua empresa possui?",
};

export function GamingLegacyLeadModal() {
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
          aria-label="Close"
          onClick={() => setIsOpen(false)}
        >
          {"\u00d7"}
        </button>
        <form className={styles.leadForm} onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label htmlFor="legacy-name">Como se chama ? <span>*</span></label>
            <input id="legacy-name" name="name" type="text" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="legacy-email">
              {copy.email} <span>*</span>
            </label>
            <input id="legacy-email" name="email" type="email" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="legacy-phone">{copy.phone} <span>*</span></label>
            <input id="legacy-phone" name="phone" type="tel" inputMode="tel" required />
          </div>
          <fieldset className={styles.radioField}>
            <legend id="legacy-lead-title">
              {copy.teamSize} <span>*</span>
            </legend>
            <div className={styles.radioGrid}>
              {teamSizes.map((teamSize) => {
                const id = `legacy-team-${teamSize.replaceAll(" ", "-")}`;
                return (
                  <div key={teamSize}>
                    <input id={id} name="team-size" type="radio" value={teamSize} required />
                    <label htmlFor={id}>{teamSize}</label>
                  </div>
                );
              })}
            </div>
          </fieldset>
          <button className={styles.submitButton} type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}
