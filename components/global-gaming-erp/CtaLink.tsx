"use client";

import type { ReactNode } from "react";
import { useTranslation } from "@/components/traducaoButtons";

import styles from "./global-gaming-erp.module.css";

type CtaLinkProps = {
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "light";
};

export function CtaLink({
  children,
  href = "#",
  variant = "primary",
}: CtaLinkProps) {
  const { t } = useTranslation();
  return (
    <a
      className={`${styles.ctaButton} ${
        variant === "light" ? styles.ctaLight : ""
      }`}
      href={href}
    >
      {children ?? t("globalErp.cta")}
    </a>
  );
}
