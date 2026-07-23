import ArcadeContactSection from "../../components/arcade/ArcadeContactSection";
import ContactCtaSection from "../../components/arcade/ContactCtaSection";
import GTechDeliverySection from "../../components/arcade/GTechDeliverySection";
import HeroSection from "../../components/arcade/HeroSection";
import IdealSection from "../../components/arcade/IdealSection";
import SolutionSection from "../../components/arcade/SolutionSection";
import StartFastSection from "../../components/arcade/StartFastSection";
import ValueSection from "../../components/arcade/ValueSection";
import WhyArcadeSection from "../../components/arcade/WhyArcadeSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <HeroSection/>
      <SolutionSection/>
     <ValueSection/>
     <IdealSection/>
     <WhyArcadeSection/>
     <StartFastSection/>
     <GTechDeliverySection/>
     <ArcadeContactSection/>
     <ContactCtaSection/>
     <Footer/>
    </main>
  );
}
