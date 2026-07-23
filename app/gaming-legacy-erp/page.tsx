import type { Metadata } from "next";

import {
  GamingLegacyHero,
  GamingLegacyLeadModal,
} from "@/components/gaming-legacy-erp";
import styles from "@/components/gaming-legacy-erp/gaming-legacy-erp.module.css";

export const metadata: Metadata = {
  title: "Gaming Legacy ERP \u2013 GLOBAL TECH INTERNACIONAL",
  alternates: {
    canonical: "https://gtech.uy/gaming-legacy-erp",
  },
};

export default function GamingLegacyErpPage() {
  return (
    <main className={styles.page}>
      <GamingLegacyHero />
      <GamingLegacyLeadModal />
    </main>
  );
}
