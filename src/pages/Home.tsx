import SEO from "../components/SEO";
import Hero from "../components/Hero";
import GapPercepcao from "../components/GapPercepcao";
import Projects from "../components/Projects";
import Metodo from "../components/Metodo";
import FormasTrabalhar from "../components/FormasTrabalhar";
import BrunoSection from "../components/BrunoSection";
import PosicionamentoLocal from "../components/PosicionamentoLocal";
import CTA from "../components/CTA";

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://orvalia.com.br/#organization",
      "name": "Orvalia Studio",
      "url": "https://orvalia.com.br/",
      "logo": "https://orvalia.com.br/logo.png",
      "description": "Estúdio de estratégia de marca, criação de sites e posicionamento digital em Indaiatuba.",
      "founder": {
        "@type": "Person",
        "name": "Bruno Correa Gomes",
        "jobTitle": "Diretor Estratégico"
      }
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
        title="Orvalia Studio — Branding e Sites Estratégicos em Indaiatuba" 
        description="Estratégia de marca, criação de sites, posicionamento e SEO local para empresas de Indaiatuba e região que precisam elevar sua presença digital."
        canonical="https://orvalia.com.br/"
        schema={orgSchema}
      />
      {/* 1. HERO */}
      <Hero />

      {/* 2. O GAP DE PERCEPÇÃO */}
      <GapPercepcao />

      {/* 3. CASES / TRANSFORMAÇÕES */}
      <Projects />

      {/* 4. MÉTODO */}
      <Metodo />

      {/* 5. FORMAS DE TRABALHAR */}
      <FormasTrabalhar />

      {/* 6. BRUNO / VISÃO ESTRATÉGICA E COMERCIAL */}
      <BrunoSection />

      {/* 7. PRESENÇA REGIONAL / INDAIATUBA */}
      <PosicionamentoLocal />

      {/* 8. CTA FINAL */}
      <CTA />
    </>
  );
}
