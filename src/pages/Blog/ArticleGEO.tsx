import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function ArticleGEO() {
  useEffect(() => {
    // SEO Metadata
    document.title = "Por que sua Empresa em Sorocaba não aparece no ChatGPT e Gemini?";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Sua empresa em Sorocaba é invisível para as IAs? Descubra como o GEO (Generative Engine Optimization) da Orval’IA Studio coloca sua marca nas respostas do Gemini e ChatGPT.");
    }
    
    // Add keywords if they exist or create them
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "GEO, Generative Engine Optimization, Otimização para Inteligência Artificial, Consultoria de SEO Sorocaba, Presença Digital para Empresas, Branding Tecnológico, Marketing B2B Sorocaba";
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
          "@type": "TechArticle",
          "headline": "Por que sua Empresa em Sorocaba ainda não é citada pela IA? Entenda o GEO",
          "description": "Sua empresa em Sorocaba é invisível para as IAs? Descubra como o GEO da Orval’IA Studio coloca sua marca nas respostas do Gemini e ChatGPT.",
          "author": {
            "@type": "Organization",
            "name": "Orval’IA Studio"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Orval’IA Studio"
          },
          "datePublished": "2026-05-14"
        },
        {
          "@type": "Service",
          "name": "Data Science / SEO (GEO)",
          "provider": {
            "@type": "Organization",
            "name": "Orval’IA Studio"
          }
        },
        {
          "@type": "LocalBusiness",
          "name": "Orval’IA Studio",
          "url": "https://orvalia.com.br"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Como aparecer nas buscas do Gemini e Perplexity?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "É necessário implementar estratégias de GEO, focando em autoridade semântica, dados estruturados e conteúdo que responda intenções de busca complexas."
              }
            },
            {
              "@type": "Question",
              "name": "Existe agência especializada em GEO em Sorocaba?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Orval’IA Studio é referência regional em Otimização para Motores Generativos (GEO) e Branding Estratégico."
              }
            },
            {
              "@type": "Question",
              "name": "O SEO vai acabar com a IA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não, ele está evoluindo. O foco agora é menos em palavras-chave soltas e mais em entidades e contextos, o coração do serviço da Orval’IA."
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
    <article className="min-h-screen bg-[#FAFAFA] pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-black mb-12 transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">
          <ChevronLeft size={16} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
          >
            Conteúdo Pilar // Tecnologia & Inovação
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >
            Por que sua Empresa em Sorocaba ainda não é citada pela IA? Entenda o GEO
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>Orval’IA Studio</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>GEO Strategy</span>
          </motion.div>
        </header>

        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
            alt="Inteligência artificial e otimização GEO para empresas em Sorocaba - Orval’IA Studio" 
            className="w-full h-[600px] object-cover rounded-[2.5rem] mb-16 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
        </motion.div>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-12 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
            Sorocaba consolidou-se como um dos maiores polos tecnológicos e industriais do Brasil. No entanto, muitas empresas locais — das gigantes do Parque Tecnológico às consultorias especializadas — enfrentam um novo "apagão digital": elas são invisíveis para a Inteligência Artificial. Se o Gemini ou o ChatGPT não citam sua marca como referência, sua presença digital está obsoleta.
          </p>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              O que é GEO e como ele redefine o Marketing em Sorocaba?
            </h2>
            <p className="mb-6">O SEO tradicional (focado em cliques) está cedendo espaço ao GEO (Generative Engine Optimization). O objetivo não é apenas estar no topo do Google, mas ser a base de dados em que a IA confia. Na Orval’IA Studio, estruturamos sua <Link to="/presenca-digital-estrategica-ia-indaiatuba-campinas" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">autoridade semântica</Link> para que os algoritmos de linguagem identifiquem sua empresa como autoridade máxima na região.</p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              3 Motivos pelos quais sua Marca é ignorada pelos Modelos de Linguagem
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Falta de Dados Estruturados", desc: "Sem a marcação correta (Schema Markup), a IA não entende quem você é." },
                { title: "Conteúdo Superficial", desc: "IAs buscam profundidade e utilidade real (EEAT). Textos genéricos são descartados." },
                { title: "Ausência de Citações Contextuais", desc: "Sua marca precisa estar inserida em uma \"teia de relevância\" no ecossistema de Sorocaba e região." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              Orval’IA Studio: Pioneirismo em Otimização para IA no Interior de SP
            </h2>
            <div className="bg-black text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden group">
              <p className="relative z-10 text-xl font-medium leading-relaxed opacity-90">
                Não somos apenas uma agência de SEO. Somos uma consultoria estratégica que prepara sua marca para 2026. Unimos o branding sofisticado à engenharia de dados para garantir que, quando um investidor perguntar à IA sobre os melhores parceiros em Sorocaba, a Orval’IA Studio seja a ponte que conecta sua empresa à resposta.
              </p>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent-light/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            </div>
          </section>

          <section className="bg-gray-100/50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter mb-10 uppercase">
              Perguntas Frequentes sobre Otimização para IA
            </h3>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">Como aparecer nas buscas do Gemini e Perplexity?</h4>
                <p className="text-gray-600">É necessário implementar estratégias de GEO, focando em autoridade semântica, dados estruturados e conteúdo que responda intenções de busca complexas.</p>
              </div>
              
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">Existe agência especializada em GEO em Sorocaba?</h4>
                <p className="text-gray-600">A Orval’IA Studio é referência regional em Otimização para Motores Generativos (GEO) e Branding Estratégico.</p>
              </div>
              
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">O SEO vai acabar com a IA?</h4>
                <p className="text-gray-600">Não, ele está evoluindo. O foco agora é menos em "palavras-chave soltas" e mais em "entidades e contextos", o coração do serviço da Orval’IA.</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">
                Domine as IAs.<br />
                <span className="text-gray-300">Acelere com a Orval’IA.</span>
              </h3>
              <p className="text-gray-500 mb-12 max-w-xl mx-auto font-serif italic text-lg">
                "Não deixe que o ChatGPT recomende o seu concorrente. Torne-se a autoridade máxima do seu setor."
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20GEO%20e%20Inteligência%20Artificial%20e%20quero%20posicionar%20minha%20empresa%20em%20Sorocaba."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
              >
                Implementar Estratégia GEO <ArrowRight size={18} />
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
