import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Authority from "../components/Authority";
import FounderSection from "../components/FounderSection";
import Process from "../components/Process";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
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
        title="Orvalia Studio | Branding, Sites e Presença Digital em Indaiatuba" 
        description="Agência de branding em Indaiatuba especializada em identidade visual, sites premium, SEO local e comunicação estratégica para negócios que querem elevar sua presença digital."
        canonical="https://orvalia.com.br/"
        schema={orgSchema}
      />
      <Hero />
      <Projects />
      <Authority />
      <FounderSection />
      <TrustSection />
      <ForWho />
      <Process />
      <Services />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
