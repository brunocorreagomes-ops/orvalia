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
    },
    {
      "@type": "FAQPage",
      "@id": "https://orvalia.com.br/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é o diagnóstico estratégico da Orvalia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É uma conversa inicial para entender o momento da empresa e identificar oportunidades de melhoria na marca, no site e na presença digital."
          }
        },
        {
          "@type": "Question",
          "name": "A Orvalia atende empresas fora de Indaiatuba?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. A Orvalia atende Indaiatuba, Campinas e região, além de poder conduzir projetos remotamente."
          }
        },
        {
          "@type": "Question",
          "name": "Quais serviços a Orvalia oferece?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A atuação inclui estratégia de marca e branding, criação de sites estratégicos e otimização de presença nas buscas, incluindo SEO e GEO."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Orvalia Studio | Branding e Sites Estratégicos em Indaiatuba" 
        description="Identidade visual, criação de sites e SEO local para empresas de Indaiatuba e região. Conheça os projetos e fale com Bruno sobre sua empresa."
        socialTitle="Orvalia Studio | Seu negócio vale mais do que parece."
        socialDescription="Estratégia de marca, branding e sites para tornar visível o valor da sua empresa. Conheça a Orvalia e converse sobre seu projeto."
        canonical="https://orvalia.com.br/"
        schema={orgSchema}
      />
      {/* 1. HERO V3 (Cinematic + Interactive Gap) */}
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

      {/* FAQ visível e alinhado ao schema da página */}
      <section className="py-20 md:py-28 bg-brand-mineral text-brand-ink border-t border-brand-line">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan-dark mb-5">Perguntas frequentes</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">Antes de dar o próximo passo.</h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-brand-line">
            <details className="py-6 group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan-dark">
                O que é o diagnóstico estratégico da Orvalia?
                <span aria-hidden="true" className="text-brand-cyan-dark text-2xl">+</span>
              </summary>
              <p className="pt-4 text-brand-muted leading-relaxed max-w-3xl">É uma conversa inicial para entender o momento da empresa e identificar oportunidades de melhoria na marca, no site e na presença digital.</p>
            </details>
            <details className="py-6 group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan-dark">
                A Orvalia atende empresas fora de Indaiatuba?
                <span aria-hidden="true" className="text-brand-cyan-dark text-2xl">+</span>
              </summary>
              <p className="pt-4 text-brand-muted leading-relaxed max-w-3xl">Sim. A Orvalia atende Indaiatuba, Campinas e região, além de poder conduzir projetos remotamente.</p>
            </details>
            <details className="py-6 group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan-dark">
                Quais serviços a Orvalia oferece?
                <span aria-hidden="true" className="text-brand-cyan-dark text-2xl">+</span>
              </summary>
              <p className="pt-4 text-brand-muted leading-relaxed max-w-3xl">A atuação inclui estratégia de marca e branding, criação de sites estratégicos e otimização de presença nas buscas, incluindo SEO e GEO.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTA />
    </>
  );
}
