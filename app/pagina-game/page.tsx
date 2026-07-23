import type { Metadata } from "next";
import {
  ComplianceSection,
  ContactFooter,
  HeroSection,
  HighlightsSection,
  InstitutionalSections,
  Navigation,
  OperationsSection,
  PageEffects,
  ProductSections,
  ShowcaseSection,
  SocialSections,
  Ticker,
} from "@/components/pagina-game";

export const metadata: Metadata = {
  title: "Global Tech International — Plataforma iGaming · XSA Sports",
  description: "Plataforma completa de iGaming: 6.000+ jogos, cassino ao vivo, apostas esportivas, KYC, compliance Lei 14.790/23 e gestão operacional. União XSA Sports + Global Tech.",
  alternates: {
    canonical: "https://gtech.uy/pagina-game",
  },
  icons: {
    icon: "/assets/imgs/pagina-game/favicon.svg",
  },
};

export default function PaginaGamePage() {
  return (
    <main className="pagina-game">
      <PageEffects />
      <Navigation />
      <HeroSection />
      <Ticker />
      <InstitutionalSections />
      <ShowcaseSection />
      <HighlightsSection />
      <OperationsSection />
      <ProductSections />
      <ComplianceSection />
      <SocialSections />
      <ContactFooter />
    </main>
  );
}
