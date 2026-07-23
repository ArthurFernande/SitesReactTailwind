import type { Metadata } from "next";

import {
  ComparisonSection,
  FeaturesSection,
  FinalCtaSection,
  HeroSection,
  PartnersSection,
  WhyChooseSection,
} from "@/components/global-gaming-erp";
import styles from "@/components/global-gaming-erp/global-gaming-erp.module.css";

export const metadata: Metadata = {
  title: "Global Gaming ERP – GLOBAL TECH INTERNACIONAL",
  alternates: {
    canonical: "https://gtech.uy/global-gaming-erp",
  },
};

export default function GlobalGamingErpPage() {
  return (
        <main className="min-h-screen bg-slate-950 text-white">

      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <PartnersSection />
      <WhyChooseSection />
      <FinalCtaSection />
    </main>
  );
}
