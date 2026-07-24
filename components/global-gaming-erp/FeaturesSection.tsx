"use client";

import Image from "next/image";
import { useTranslation } from "@/components/traducaoButtons";

import { Reveal } from "./Reveal";
import styles from "./global-gaming-erp.module.css";

const imageRoot = "/assets/imgs/global-gaming-erp";

export function FeaturesSection() {
  const { t } = useTranslation();
  const features = [
    {
      title: t("globalErp.features.sportsbook.title"),
      description: <>{t("globalErp.features.sportsbook.beforeBrand")}<strong>Genius Sports</strong>{t("globalErp.features.sportsbook.afterBrand")}</>,
      image: "sport-ball.png", width: 500, height: 333, tone: "navy",
    },
    {
      title: <>{t("globalErp.features.casino.title.line1")} <br />{t("globalErp.features.casino.title.line2")}</>,
      description: <>{t("globalErp.features.casino.beforeProviders")}<strong>{t("globalErp.features.casino.providers")}</strong>{t("globalErp.features.casino.afterProviders")}</>,
      image: "casino-game.png", width: 500, height: 500, tone: "purple",
    },
    {
      title: t("globalErp.features.admin.title"),
      description: t("globalErp.features.admin.description"),
      image: "dashboard.png", width: 500, height: 500, tone: "purple",
    },
    {
      title: t("globalErp.features.infrastructure.title"),
      description: <>{t("globalErp.features.infrastructure.beforeBrand")}<strong>Oracle</strong>{t("globalErp.features.infrastructure.afterBrand")}</>,
      image: "network-infrastructure.png", width: 500, height: 500, tone: "navy",
    },
    {
      title: t("globalErp.features.crm.title"),
      description: <>{t("globalErp.features.crm.beforeBrand")}<strong>Smartico</strong>{t("globalErp.features.crm.afterBrand")}</>,
      image: "marketing-team.png", width: 500, height: 500, tone: "navy",
    },
    {
      title: t("globalErp.features.affiliates.title"),
      description: t("globalErp.features.affiliates.description"),
      image: "affiliate-marketing.png", width: 500, height: 500, tone: "purple",
    },
    {
      title: t("globalErp.features.finance.title"),
      description: t("globalErp.features.finance.description"),
      image: "financial-report.png", width: 500, height: 500, tone: "purple",
    },
    {
      title: t("globalErp.features.expansion.title"),
      description: t("globalErp.features.expansion.description"),
      image: "language-translator.png", width: 500, height: 500, tone: "navy",
    },
  ] as const;
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionInner}>
        <Reveal animation="slideInLeft">
          <h2 className={styles.sectionTitle}>
            {t("globalErp.features.heading")}
          </h2>
        </Reveal>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <Reveal
              key={index}
              animation={index % 2 === 0 ? "slideInRight" : "slideInLeft"}
              className={`${styles.featureCard} ${
                feature.tone === "purple"
                  ? styles.featurePurple
                  : styles.featureNavy
              }`}
            >
              <div className={styles.featureText}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className={styles.featureImage}>
                <Image
                  src={`${imageRoot}/${feature.image}`}
                  alt=""
                  width={feature.width}
                  height={feature.height}
                  sizes="(max-width: 767px) 80vw, 30vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
