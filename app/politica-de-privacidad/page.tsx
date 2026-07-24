import type { Metadata } from "next";

import { PrivacyPolicyContent } from "@/components/politica-de-privacidad";
import styles from "@/components/politica-de-privacidad/politica-de-privacidad.module.css";

export const metadata: Metadata = {
  title: "Pol\u00edtica de privacidad \u2013 GLOBAL TECH INTERNACIONAL",
  alternates: {
    canonical: "https://gtech.uy/politica-de-privacidad/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <PrivacyPolicyContent />
    </main>
  );
}
