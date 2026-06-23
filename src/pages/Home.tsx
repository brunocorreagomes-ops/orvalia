import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Authority from "../components/Authority";
import Process from "../components/Process";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import MonthlyPricing from "../components/MonthlyPricing";
import TrustSection from "../components/TrustSection";
import ForWho from "../components/ForWho";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Authority />
      <TrustSection />
      <ForWho />
      <Process />
      <Services />
      <Pricing />
      <MonthlyPricing />
      <FAQ />
      <CTA />
    </>
  );
}
