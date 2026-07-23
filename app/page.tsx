import Footer from "../components/Footer";
import ArcadeSection from "../components/gtech/ArcadeSection";
import HeroSection from "../components/gtech/HeroSection";
import PartnerSection from "../components/gtech/PartnerSection";
import RegulatedMarketsSection from "../components/gtech/RegulatedMarketSection";
import SolutionsSection from "../components/gtech/SolutionsSection";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <HeroSection/>
      <SolutionsSection/>
      <PartnerSection/>
      <RegulatedMarketsSection/>
      <ArcadeSection/>
      <Footer/>
    </main>
  );
}
