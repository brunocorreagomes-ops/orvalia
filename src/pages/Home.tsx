import SEO from "../components/SEO";
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

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://orvalia.com.br/#organization",
      "name": "Orvalia Studio",
      "url": "https://orvalia.com.br/",
      "logo": "https://orvalia.com.br/logo.png"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://orvalia.com.br/#localbusiness",
      "name": "Orvalia Studio",
      "url": "https://orvalia.com.br/",
      "telephone": "+5511978959567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indaiatuba",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "areaServed": ["Indaiatuba", "Campinas", "RMC", "Brasil"]
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Orvalia Studio | Branding e Sites em Indaiatuba" 
        description="Agência de posicionamento digital, branding premium e criação de sites focados em conversão em Indaiatuba e região."
        canonical="https://orvalia.com.br/"
        schema={orgSchema}
      />
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
