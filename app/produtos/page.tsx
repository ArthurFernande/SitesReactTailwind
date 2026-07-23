
import { HeroSection } from "@/components/produtos/HeroSection";
import { Header } from "../../components/produtos/Header";
import { DifferencesSection } from "@/components/produtos/DifferencesSection";
import { SolutionsSection } from "@/components/produtos/SolutionsSection";
import { ContactSection } from "@/components/produtos/ContactSection";
import Footer from "@/components/produtos/Footer";


export default function FormContatoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header/>
      <HeroSection/>
      <DifferencesSection/>
      <SolutionsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}
