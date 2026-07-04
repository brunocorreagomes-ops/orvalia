import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import ShareButton from "../../components/ShareButton";
import BlogImage from "../../components/BlogImage";

export default function ArticleArquitetura() {
  useEffect(() => {
    // SEO Metadata
    document.title = "Design Estratégico para Escritórios de Arquitetura em Itu e Jundiaí";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Eleve seu escritório de arquitetura ao patamar premium. A Orvalia Studio cria identidades visuais e sites de luxo para arquitetos em Itu e Jundiaí. Descubra o poder do branding estratégico.");
    }
    
    // Add keywords if they exist or create them
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "Design Estratégico para Arquitetos, Arquitetura em Itu, Arquitetura em Jundiaí, Branding para Arquitetos, Orvalia Studio, Marcas de Luxo, Portfólio Premium";
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }
    
    // Add JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Design Estratégico para Arquitetos: Consolidando a Autoridade Premium em Itu e Jundiaí",
          "description": "Eleve seu escritório de arquitetura ao patamar premium. A Orvalia Studio cria identidades visuais e sites de luxo para arquitetos em Itu e Jundiaí.",
          "author": {
            "@type": "Organization",
            "name": "Orvalia Studio"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Orvalia Studio"
          },
          "datePublished": "2026-05-14"
        },
        {
          "@type": "ProfessionalService",
          "name": "Escritório de Arquitetura Exemplo",
          "image": "https://images.unsplash.com/photo-1600607687931-cebf80211ff1?auto=format&fit=crop&q=80&w=1200",
          "@id": "",
          "url": "https://orvalia.com.br",
          "telephone": "+5511978959567",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Itu",
            "addressRegion": "SP",
            "addressCountry": "BR"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Por que arquitetos precisam de branding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O branding diferencia o profissional em um mercado saturado, permitindo a cobrança de honorários condizentes com a autoridade percebida."
              }
            },
            {
              "@type": "Question",
              "name": "Como a Orvalia Studio ajuda escritórios em Jundiaí?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Criamos identidades visuais exclusivas, sites de alta performance e estratégias de posicionamento que atraem o público AAA."
              }
            },
            {
              "@type": "Question",
              "name": "O que é um site otimizado para IA na arquitetura?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "É um site estruturado semânticamente para que motores como Gemini e ChatGPT identifiquem suas especialidades e o recomendem para buscas específicas."
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <article className="min-h-screen bg-brand-bg text-brand-text pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-16 md:mb-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-text transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">
            <ChevronLeft size={16} />
            Voltar ao Blog
          </Link>
          <ShareButton />
        </div>

        <header className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] block mb-6 md:mb-8"
          >
            Conteúdo Pilar // Arquitetura e Design
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.6rem,4vw,4.4rem)] font-sans font-black text-brand-text tracking-[-0.03em] leading-[0.98] mb-12 max-w-[12ch] md:max-w-[14ch]"
          >
            Design Estratégico para Arquitetos: Consolidando a Autoridade Premium em Itu e Jundiaí
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-brand-secondary text-[10px] font-mono uppercase tracking-widest"
          >
            <span>Orvalia Studio</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Architecture Branding</span>
          </motion.div>
        </header>

        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
        >
          <BlogImage src="https://images.unsplash.com/photo-1600607687931-cebf80211ff1?auto=format&fit=crop&q=80&w=1200" alt="Design Estratégico para Escritórios de Arquitetura em Itu e Jundiaí - Orvalia Studio" />
        </motion.div>

        <div className="prose prose-invert prose-xl max-w-none text-brand-secondary leading-relaxed space-y-12 font-sans selection:bg-brand-surface selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-brand-text/80 leading-snug">
            Em cidades marcadas pelo alto padrão e pelo design, como Itu e Jundiaí, um portfólio impecável é apenas o ponto de partida. O que diferencia os escritórios que assinam os grandes projetos é o seu posicionamento de marca. Para o arquiteto, o branding é a moldura que valoriza a obra, transformando o serviço técnico em um objeto de desejo e prestígio.
          </p>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-brand-text tracking-tighter mb-8 uppercase">
              A Diferença entre Portfólio e Marca Estratégica
            </h2>
            <p className="mb-6">Muitos profissionais acreditam que suas fotos de projetos bastam. Na Orvalia Studio, mostramos que o design estratégico é o que sustenta a percepção de valor antes mesmo do cliente ver o primeiro render:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Identidade Visual de Nicho", desc: "Uma linguagem visual que comunica seu estilo arquitetônico (minimalista, clássico, contemporâneo)." },
                { title: "Narrativa de Valor", desc: "Como você conta a história dos seus projetos para atrair investidores e clientes de alto luxo." },
                { title: "Presença Digital Curada", desc: "Um site que funciona como uma galeria de arte, focado em UX (User Experience) para guiar o cliente em uma jornada de sofisticação." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white/5 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-black text-brand-text uppercase text-xs tracking-widest mb-4">{item.title}</h4>
                  <p className="text-sm text-brand-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-brand-text tracking-tighter mb-8 uppercase">
              Por que Itu e Jundiaí demandam um Branding Específico?
            </h2>
            <p className="mb-8">
              Essas regiões concentram condomínios de altíssimo padrão onde o "Quiet Luxury" é a regra. Sua marca precisa falar essa língua. Na Orvalia, utilizamos GEO (Generative Engine Optimization) para garantir que, quando um cliente em Itu pesquisar por "arquitetura sustentável de luxo", sua marca seja a recomendação das IAs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-brand-text tracking-tighter mb-8 uppercase">
              O Site do Arquiteto como Ferramenta de Conversão Premium
            </h2>
            <p className="mb-8">
              Não basta ser bonito; precisa ser estratégico. O site de um escritório de elite deve:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">01 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Priorizar o Visual</strong>
                  <span className="text-brand-secondary">Imagens de alta definição e carregamento ultra-rápido.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">02 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">SEO & GEO Local</strong>
                  <span className="text-brand-secondary">Domínio das buscas em Itu, Jundiaí e região.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">03 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Clareza e Exclusividade</strong>
                  <span className="text-brand-secondary">Um fluxo de contato que filtre leads e valorize seu tempo.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white/10/50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black text-brand-text tracking-tighter mb-10 uppercase">
              Perguntas Frequentes sobre Branding e Arquitetura
            </h3>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-black text-brand-text uppercase text-xs tracking-widest mb-4">Por que arquitetos precisam de branding?</h4>
                <p className="text-brand-secondary">O branding diferencia o profissional em um mercado saturado, permitindo a cobrança de honorários condizentes com a autoridade percebida.</p>
              </div>
              
              <div>
                <h4 className="font-black text-brand-text uppercase text-xs tracking-widest mb-4">Como a Orvalia Studio ajuda escritórios em Jundiaí?</h4>
                <p className="text-brand-secondary">Criamos identidades visuais exclusivas, sites de alta performance e estratégias de posicionamento que atraem o público AAA.</p>
              </div>
              
              <div>
                <h4 className="font-black text-brand-text uppercase text-xs tracking-widest mb-4">O que é um site otimizado para IA na arquitetura?</h4>
                <p className="text-brand-secondary">É um site estruturado semânticamente para que motores como Gemini e ChatGPT identifiquem suas especialidades e o recomendem para buscas específicas.</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white/5 border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-brand-text tracking-ultra-tight uppercase mb-8 leading-[0.9]">
                Projete sua Marca.<br />
                <span className="text-gray-300">Fale com a Orvalia.</span>
              </h3>
              <p className="text-brand-secondary mb-12 max-w-xl mx-auto font-serif italic text-lg">
                "Grandes projetos merecem uma assinatura à altura. Transforme seu escritório em uma marca de prestígio."
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Design%20Estratégico%20para%20Arquitetura%20e%20quero%20elevar%20o%20posicionamento%20do%20meu%20escritório."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-brand-surface text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
              >
                Diagnóstico Gratuito <ArrowRight size={18} />
              </a>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
