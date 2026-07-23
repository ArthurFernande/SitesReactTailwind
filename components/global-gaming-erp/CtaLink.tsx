import type { ReactNode } from "react";

import styles from "./global-gaming-erp.module.css";

type CtaLinkProps = {
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "light";
};

export function CtaLink({
  children = "ADQUIRÍ AHORA",
  href = "#",
  variant = "primary",
}: CtaLinkProps) {
  return (
    <a
      className={`${styles.ctaButton} ${
        variant === "light" ? styles.ctaLight : ""
      }`}
      href={href}
    >
      {children}
    </a>
  );
}
