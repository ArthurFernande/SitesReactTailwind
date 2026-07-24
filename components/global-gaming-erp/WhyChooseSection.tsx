"use client";

import Image from "next/image";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";
import styles from "./global-gaming-erp.module.css";

const imageRoot = "/assets/imgs/global-gaming-erp";

const reasons = [
  "globalErp.why.reason1",
  "globalErp.why.reason2",
  "globalErp.why.reason3",
  "globalErp.why.reason4",
  "globalErp.why.reason5",
] satisfies readonly TranslationKey[];

function CheckIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true">
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248Zm-276.686 131.314 184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001Z" />
    </svg>
  );
}

export function WhyChooseSection() {
  const { t } = useTranslation();
  return (
    <section className={styles.whySection} id="about">
      <div className={styles.whyInner}>
        <Reveal animation="slideInLeft" className={styles.whyImage}>
          <Image
            src={`${imageRoot}/authentic-small-youthful-marketing-agency-1.png`}
            alt=""
            width={1436}
            height={957}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>

        <Reveal animation="slideInRight" className={styles.whyCopy}>
          <h2 className={styles.sectionTitle}>
            {t("globalErp.why.heading")}
          </h2>
          <ul className={styles.reasonList}>
            {reasons.map((reason) => (
              <li key={reason}>
                <span className={styles.checkIcon}>
                  <CheckIcon />
                </span>
                <span>{t(reason)}</span>
              </li>
            ))}
          </ul>
          <CtaLink />
        </Reveal>
      </div>
    </section>
  );
}
