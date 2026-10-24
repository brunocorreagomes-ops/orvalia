import Audience from "../components/Audience";
import { Link } from "react-router-dom";
import { homeFaqs, studioProfile } from "../data/studio";
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
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'ProfessionalService', '@id': 'https://orvalia.com.br/#organization', name: studioProfile.name, url: 'https://orvalia.com.br/', logo: 'https://orvalia.com.br/logo.png', description: 'Estratégia de marca, identidade visual, criação de sites e melhorias para buscas. Base em Indaiatuba, São Paulo; atendimento a Campinas e região e projetos a distância.', email: studioProfile.email, telephone: studioProfile.telephone, address: { '@type': 'PostalAddress', addressLocality: 'Indaiatuba', addressRegion: 'SP', addressCountry: 'BR' }, areaServed: studioProfile.areas, founder: { '@id': 'https://orvalia.com.br/#founder' } },
    { '@type': 'Person', '@id': 'https://orvalia.com.br/#founder', name: studioProfile.founder, jobTitle: 'Fundador e responsável pelos projetos da Orvalia', sameAs: [studioProfile.linkedin], worksFor: { '@id': 'https://orvalia.com.br/#organization' } },
    { '@type': 'WebSite', '@id': 'https://orvalia.com.br/#website', name: studioProfile.name, url: 'https://orvalia.com.br/', inLanguage: 'pt-BR', publisher: { '@id': 'https://orvalia.com.br/#organization' } },
    { '@type': 'FAQPage', '@id': 'https://orvalia.com.br/#faq', mainEntity: homeFaqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
  ],
};

export default function Home() {
  return (
    <>
      <SEO
        title="Identidade visual e criação de sites em Indaiatuba | Orvalia"
        description="Identidade visual, criação de sites e presença nas buscas para empresas de Indaiatuba, Campinas e região. Veja projetos e fale diretamente com Bruno."
        socialTitle="Orvalia Studio | Seu negócio vale mais do que parece."
        socialDescription="Estratégia de marca, identidade visual e sites para tornar visível o valor da sua empresa. Conheça a Orvalia e converse sobre seu projeto."
        canonical="https://orvalia.com.br/"
        schema={orgSchema}
      />
      {/* Abertura e identificação do público */}
      <Hero />
      <Audience />

      {/* 2. O GAP DE PERCEPÇÃO */}
      <GapPercepcao />

      <FormasTrabalhar />
      <nav className="container mx-auto px-6 py-7 flex flex-wrap gap-x-10 gap-y-3" aria-label="Planeje seu investimento">
        <Link className="project-detail-link" to="/blog/identidade-visual-precos/">O que define o custo de uma identidade visual ↗</Link>
        <Link className="project-detail-link" to="/blog/quanto-custa-site-indaiatuba/">Como comparar propostas de sites ↗</Link>
      </nav>

      {/* Projetos */}
      <Projects />

      {/* 4. MÉTODO */}
      <Metodo />


      {/* 6. BRUNO / VISÃO ESTRATÉGICA E COMERCIAL */}
      <BrunoSection />

      {/* 7. PRESENÇA REGIONAL / INDAIATUBA */}
      <PosicionamentoLocal />

      {/* FAQ visível e alinhado ao schema da página */}
      <section className="py-20 md:py-28 bg-brand-mineral text-brand-ink border-t border-brand-line">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan-dark mb-5">07 / Perguntas frequentes</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">Antes de dar o próximo passo.</h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-brand-line">
            {homeFaqs.map(item => <details key={item.question} className="py-6 group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan-dark">{item.question}<span aria-hidden="true" className="text-brand-cyan-dark text-2xl">+</span></summary>
              <p className="pt-4 text-brand-muted leading-relaxed max-w-3xl">{item.answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTA />
    </>
  );
}
