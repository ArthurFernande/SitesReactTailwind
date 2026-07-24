"use client";

import { useTranslation } from "@/components/traducaoButtons";
import { CtaLink } from "./CtaLink";
import styles from "./global-gaming-erp.module.css";

export function FinalCtaSection() {
  const { t } = useTranslation();
  return (
    <section className={styles.finalCtaSection} id="benefits">
      <div className={styles.finalCtaOverlay} />
      <div className={styles.finalCtaContent}>
        <h2>
          {t("globalErp.final.heading")}
        </h2>
        <p>
          {t("globalErp.final.beforeCompany")}<strong>Global Tech Internacional</strong>
          {t("globalErp.final.afterCompany")}
        </p>
        <CtaLink href="#link" variant="light" />
      </div>
    </section>
  );
}
