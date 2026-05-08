import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Authority from "../components/Authority";
import Process from "../components/Process";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import MonthlyPricing from "../components/MonthlyPricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Authority />
      <Process />
      <Services />
      <Pricing />
      <MonthlyPricing />
      <FAQ />
      <CTA />
    </>
  );
}
