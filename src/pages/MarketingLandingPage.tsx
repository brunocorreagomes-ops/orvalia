import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Search, Target, Zap, ArrowRight } from "lucide-react";
import { marketingPages } from "../data/marketingPages";
import SEO from "../components/SEO";

export default function MarketingLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const pageContent = marketingPages.find(p => p.slug === slug);

  if (!pageContent) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-mineral text-brand-ink pt-32 pb-20">
      <SEO 
        title={`${pageContent.title} | Orvalia Studio`}
        description={pageContent.problem.description}
        canonical={`https://orvalia.com.br/solucoes/${pageContent.slug}/`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": pageContent.title,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Orvalia Studio"
          },
          "areaServed": "Indaiatuba",
          "description": pageContent.problem.description
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[2px] bg-brand-cyan-dark" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                    Soluções para empresas em Indaiatuba
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-sans font-medium leading-[1.05] tracking-tight mb-8">
                  {pageContent.headline.split(' ').map((word, i) => (
                    <span key={i} className={i % 3 === 0 ? "italic font-serif font-light text-[#55605D]" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>

                <div className="flex flex-col sm:flex-row gap-6 mt-12">
                  <Link
                    to="/contato/"
                    className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-brand-ink text-brand-mineral rounded-full font-bold uppercase tracking-widest text-xs hover:-translate-y-1 transition-transform"
                  >
                    Pedir diagnóstico estratégico <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center gap-4 px-10 py-5 border border-brand-line text-brand-ink rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-ink hover:text-brand-warm transition-colors"
                  >
                    Ver Cases Reais
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Card Foco Local */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-10 bg-brand-warm rounded-[2rem] border border-brand-line relative overflow-hidden"
              >
                <div className="text-xs font-mono font-bold text-brand-cyan-dark uppercase tracking-widest mb-6">Foco Regional</div>
                <div className="text-3xl font-medium text-brand-ink mb-4">Indaiatuba & RMC</div>
                <p className="text-[#55615d] text-base leading-relaxed italic mb-10">
                  Especialistas em transformar empresas da região em referências digitais absolutas com websites de alta performance e branding estratégico.
                </p>
                <div className="pt-8 border-t border-brand-line flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-2xl font-bold text-brand-ink">TOPO</span>
                      <span className="text-xs font-mono font-bold text-[#4c5955] uppercase tracking-widest mt-1">Estrutura SEO</span>
                   </div>
                   <div className="h-8 w-[1px] bg-brand-line" />
                   <div className="flex flex-col">
                      <span className="text-2xl font-bold text-brand-ink">ELITE</span>
                      <span className="text-xs font-mono font-bold text-[#4c5955] uppercase tracking-widest mt-1">Design de Marca</span>
                   </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 border-y border-brand-line bg-brand-warm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* O Desafio */}
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#4c5955] mb-6 block">O Desafio</span>
              <h2 className="text-3xl md:text-5xl font-medium text-brand-ink tracking-tight mb-8">
                {pageContent.problem.title}
              </h2>
              <p className="text-xl text-[#475553] leading-relaxed font-serif italic border-l-2 border-brand-line pl-6">
                {pageContent.problem.description}
              </p>
            </div>

            {/* A Solução */}
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-dark mb-6 block">Nossa Solução</span>
              <h2 className="text-3xl md:text-5xl font-medium text-brand-ink tracking-tight mb-8">
                {pageContent.solution.title}
              </h2>
              <div className="space-y-6">
                {pageContent.solution.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-5 p-8 rounded-[2rem] bg-brand-mineral border border-brand-line">
                    <CheckCircle2 className="text-brand-cyan-dark shrink-0" size={24} strokeWidth={1.5} />
                    <div>
                      <h4 className="text-brand-ink font-bold text-lg mb-2">{feature.name}</h4>
                      <p className="text-[#55615d] text-sm leading-relaxed m-0">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Geo */}
      <section className="py-32 bg-brand-mineral">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xs font-mono font-bold text-brand-cyan-dark uppercase tracking-[0.4em] mb-8">Base de Operações: Indaiatuba</h3>
            <p className="text-3xl md:text-5xl text-brand-ink font-sans font-medium tracking-tight leading-[1.1]">
              Atendemos empresas em toda a <span className="italic font-serif font-light text-[#55605D]">Região Metropolitana de Campinas</span> que precisam apresentar seus serviços com clareza.
            </p>
          </div>
        </div>
      </section>

      {/* Related Case */}
      {pageContent.relatedCase && (
        <section className="py-24 border-t border-brand-line bg-brand-warm">
          <div className="container mx-auto px-6">
            
            <div className="mb-16">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-dark mb-4 block">Case Relacionado</span>
              <h2 className="text-4xl md:text-6xl font-medium text-brand-ink tracking-tight">
                Projetos <span className="italic font-serif font-light text-[#55605D]">selecionados.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-brand-mineral border border-brand-line rounded-[2rem] overflow-hidden group">
              
              {/* Image Side */}
              <div className={`relative overflow-hidden bg-[#d1d7d3] ${pageContent.relatedCase.image.startsWith("/cases/") ? "h-[560px] sm:h-[640px]" : "h-[350px] lg:h-auto"}`}>
                <img 
                  src={pageContent.relatedCase.image} 
                  width={pageContent.relatedCase.width}
                  height={pageContent.relatedCase.height}
                  loading="lazy"
                  decoding="async"
                  alt={pageContent.relatedCase.client} 
                  className={`w-full h-full ${pageContent.relatedCase.image.startsWith("/cases/") ? "object-contain p-5" : "object-cover filter saturate-[0.85] transition-transform duration-1000 group-hover:scale-105"}`}
                />
              </div>
              
              {/* Content Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-brand-line">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#4c5955] mb-4 block">
                  {pageContent.relatedCase.segment}
                </span>
                <h3 className="text-3xl md:text-5xl font-medium text-brand-ink mb-10">
                  {pageContent.relatedCase.client}
                </h3>
                
                <div className="space-y-8 mb-10">
                  <div className="border-l-2 border-brand-line pl-5 hover:border-brand-cyan-dark transition-colors">
                    <span className="block text-xs uppercase tracking-widest text-brand-muted font-bold mb-2">O Desafio</span>
                    <p className="text-[#475553] text-sm leading-relaxed m-0">
                      {pageContent.relatedCase.context}
                    </p>
                  </div>
                  <div className="border-l-2 border-brand-line pl-5 hover:border-brand-cyan-dark transition-colors">
                    <span className="block text-xs uppercase tracking-widest text-brand-cyan-dark font-bold mb-2">A Solução</span>
                    <p className="text-brand-ink font-medium text-sm leading-relaxed m-0">
                      {pageContent.relatedCase.solution}
                    </p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-brand-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex items-center gap-4 bg-brand-warm border border-brand-line px-5 py-3 rounded-xl">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-cyan-dark shrink-0">Resultado //</span>
                    <span className="font-medium text-sm text-brand-ink">
                      {pageContent.relatedCase.metric}
                    </span>
                  </div>
                  <Link
                    to="/portfolio" 
                    className="inline-flex items-center gap-2 text-brand-cyan-dark font-mono text-xs font-bold uppercase tracking-widest border-b border-brand-cyan-dark/30 pb-1 hover:border-brand-cyan-dark transition-all"
                  >
                    Ver mais <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* CTA Final (Deep Ink Contrast) */}
      <section className="py-32 bg-brand-ink text-brand-mineral text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.05]">
              {pageContent.cta}
            </h2>
            <p className="text-xl md:text-2xl text-[#b1bdb8] font-serif italic max-w-2xl mx-auto leading-relaxed mb-12">
              Não deixe a sua empresa invisível no digital. Comece hoje a sua transformação com um diagnóstico estratégico sem custos.
            </p>
            <a 
              href="https://wa.me/5511978959567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-brand-cyan text-brand-ink rounded-full font-bold uppercase tracking-widest text-xs hover:-translate-y-1 transition-transform"
            >
              Pedir diagnóstico estratégico <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
