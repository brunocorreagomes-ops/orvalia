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
      metaDescription.setAttribute("content", "Identidade visual e sites para apresentar projetos, serviços e informações de contato de escritórios de arquitetura em Itu e Jundiaí.");
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
          "description": "Identidade visual e sites para apresentar os projetos e os serviços de escritórios de arquitetura em Itu e Jundiaí.",
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
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Por que arquitetos precisam de branding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A identidade visual ajuda a reconhecer o escritório no site, nas propostas e nas apresentações de projeto."
              }
            },
            {
              "@type": "Question",
              "name": "Como a Orvalia Studio ajuda escritórios em Jundiaí?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Criamos identidades visuais e sites com apresentação dos serviços, portfólio e informações de atendimento."
              }
            },
            {
              "@type": "Question",
              "name": "O que é um site otimizado para IA na arquitetura?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "É um site com descrição dos serviços, dados corretos e páginas acessíveis às ferramentas de busca. Isso não garante uma recomendação por IA."
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
            O site de um escritório de arquitetura pode reunir os projetos, as áreas de atuação e as informações para solicitar uma proposta. Fotos acompanhadas de contexto ajudam o interessado a conhecer o trabalho antes da primeira reunião.
          </p>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-brand-text tracking-tighter mb-8 uppercase">
              A Diferença entre Portfólio e Marca Estratégica
            </h2>
            <p className="mb-6">Além das fotos, vale explicar quais serviços o escritório oferece e como participa de cada projeto:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Identidade Visual de Nicho", desc: "Uma linguagem visual que comunica seu estilo arquitetônico (minimalista, clássico, contemporâneo)." },
                { title: "Descrição dos projetos", desc: "Tipo de projeto, localização, pedido do cliente e participação do escritório." },
                { title: "Portfólio organizado", desc: "Projetos agrupados por tipo de trabalho, com fotos legíveis no celular e contato acessível." }
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
              Como apresentar a região atendida
            </h2>
            <p className="mb-8">
              Apresente a região atendida, os tipos de projeto e fotos autorizadas dos trabalhos. Essas informações ajudam o interessado a avaliar se o escritório atende ao que ele procura. A revisão do site não inclui promessa de recomendação por ferramentas de IA.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-brand-text tracking-tighter mb-8 uppercase">
              O que conferir no site do escritório
            </h2>
            <p className="mb-8">
              Ao revisar o portfólio, confira estes pontos:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">01 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Priorizar o Visual</strong>
                  <span className="text-brand-secondary">Fotos nítidas, com tamanho de arquivo adequado e legendas quando necessário.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">02 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">SEO & GEO Local</strong>
                  <span className="text-brand-secondary">Descrição dos serviços e das cidades em que o escritório atende.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">03 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Informações de contato</strong>
                  <span className="text-brand-secondary">Um caminho para enviar o pedido, com orientações sobre as informações necessárias.</span>
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
                <p className="text-brand-secondary">A identidade visual ajuda a reconhecer o escritório no site, nas propostas e nas apresentações de projeto.</p>
              </div>
              
              <div>
                <h4 className="font-black text-brand-text uppercase text-xs tracking-widest mb-4">Como a Orvalia Studio ajuda escritórios em Jundiaí?</h4>
                <p className="text-brand-secondary">Criamos identidades visuais e sites com apresentação dos serviços, portfólio e informações de atendimento.</p>
              </div>
              
              <div>
                <h4 className="font-black text-brand-text uppercase text-xs tracking-widest mb-4">O que é um site otimizado para IA na arquitetura?</h4>
                <p className="text-brand-secondary">É um site com descrição dos serviços, dados corretos e páginas acessíveis às ferramentas de busca. Isso não garante uma recomendação por IA.</p>
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
                Converse sobre a identidade visual e o portfólio do seu escritório. A proposta pode incluir textos, organização dos projetos e criação do site.
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
