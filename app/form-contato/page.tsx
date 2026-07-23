
import { CommunityQuoteSection } from "../../components/form-contato/CommunityQuoteSection";
import { DifferencesSection } from "../../components/form-contato/DifferencesSection";
import { Footer } from "../../components/form-contato/Footer";
import { HeroSection } from "../../components/form-contato/HeroSection";
import { NewEraSection } from "../../components/form-contato/NewEraSection";
import { OperationalFeaturesSection } from "../../components/form-contato/OperationalFeaturesSection";
import { UnlockBenefitsSection } from "../../components/form-contato/UnlockBenefitsSection.";
import { WhatsAppButton } from "../../components/whatsapButton/WhatsapButton";


export default function FormContatoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <OperationalFeaturesSection />
      <NewEraSection />
      <DifferencesSection />
      <CommunityQuoteSection />
      <UnlockBenefitsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
