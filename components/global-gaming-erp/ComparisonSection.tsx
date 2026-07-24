"use client";

import Image from "next/image";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";
import styles from "./global-gaming-erp.module.css";

const imageRoot = "/assets/imgs/global-gaming-erp";

const rows = [
  ["globalErp.comparison.sportsbook", "star-gtech.svg", "star-gtech-2.svg"],
  ["globalErp.comparison.casino", "star-gtech.svg", "star-gtech.svg"],
  ["globalErp.comparison.crm", "star-gtech.svg", "star-gtech-1.svg"],
  ["globalErp.comparison.infrastructure", "star-gtech.svg", "star-gtech-2.svg"],
  ["globalErp.comparison.multimarket", "star-gtech-4.svg", "star-gtech-2.svg"],
  [
    "globalErp.comparison.affiliates",
    "star-gtech-4.svg",
    "star-gtech-2.svg",
  ],
  [
    "globalErp.comparison.admin",
    "star-gtech-4.svg",
    "star-gtech-3.svg",
  ],
] as const satisfies ReadonlyArray<readonly [TranslationKey, string, string]>;

export function ComparisonSection() {
  const { t } = useTranslation();
  return (
    <section className={styles.comparisonSection}>
      <div className={styles.comparisonOverlay} />
      <Reveal animation="slideInLeft" className={styles.comparisonContent}>
        <h2 className={styles.sectionTitle}>{t("globalErp.comparison.heading")}</h2>
        <p className={styles.comparisonIntro}>
          {t("globalErp.comparison.intro.beforeProduct")}<strong>Global Gaming ERP</strong>
          {t("globalErp.comparison.intro.afterProduct")}
        </p>

        <div className={styles.tableScroller}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>{t("globalErp.comparison.functionality")}</th>
                <th>Global Gaming ERP</th>
                <th>{t("globalErp.comparison.commonPlatforms")}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, erpRating, commonRating]) => (
                <tr key={label}>
                  <td>
                    <a
                      href="https://royal-elementor-addons.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t(label)}
                    </a>
                  </td>
                  <td>
                    <Image
                      src={`${imageRoot}/${erpRating}`}
                      alt=""
                      width={100}
                      height={19}
                    />
                  </td>
                  <td>
                    <Image
                      src={`${imageRoot}/${commonRating}`}
                      alt=""
                      width={100}
                      height={19}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.centeredCta}>
          <CtaLink />
        </div>
      </Reveal>
    </section>
  );
}
