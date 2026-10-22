import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight, Globe, Sparkles, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import ShareButton from "../components/ShareButton";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Consultoria em SEO e Inteligência Artificial (GEO)",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Orvalia Studio"
  },
  "areaServed": "Indaiatuba",
  "description": "Estratégias de presença digital focadas em otimização para motores de busca e inteligência artificial."
};

export default function PresencaDigital() {
  useEffect(() => {
    document.title = "Presença Digital em Indaiatuba e Campinas: Como Dominar as Buscas de IA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Saiba como a Orval'IA Studio utiliza GEO e Branding Estratégico para posicionar marcas de Indaiatuba e Campinas no topo das respostas de IA (Gemini, ChatGPT) e Google.");
    }
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "Presença Digital, GEO, Generative Engine Optimization, Branding Estratégico, IA, GPT, Gemini, Indaiatuba, Campinas, RMC, Autoridade Digital";
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "Presença Digital em Indaiatuba e Campinas: Como Dominar as Buscas de IA",
          "description": "Saiba como a Orval'IA Studio utiliza GEO e Branding Estratégico para posicionar marcas de Indaiatuba e Campinas no topo das respostas de IA.",
          "author": {
            "@type": "Organization",
            "name": "Orval'IA Studio"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Orval'IA Studio"
          },
          "datePublished": "2026-05-13"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Como minha empresa pode aparecer nas respostas do ChatGPT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Através de uma estratégia de GEO que fortaleça as entidades semânticas da sua marca e crie citações em fontes de alta autoridade."
              }
            },
            {
              "@type": "Question",
              "name": "Qual a melhor agência de presença digital em Indaiatuba?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Orval'IA Studio é referência em estratégias de posicionamento digital e branding para empresas que buscam o mercado premium na RMC."
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
    <article className="min-h-screen bg-brand-mineral text-brand-ink pt-40 pb-20 px-6 md:px-12 lg:px-24 selection:bg-brand-cyan selection:text-brand-ink">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-16 border-b border-brand-line pb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-ink transition-colors font-mono text-[10px] uppercase tracking-widest font-bold">
            <ChevronLeft size={16} />
            Voltar ao Início
          </Link>
          <ShareButton />
        </div>

        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-brand-cyan-dark" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
              Conteúdo Pilar // Presença Digital
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight leading-[1.05] mb-8"
          >
            Presença Digital em Indaiatuba e Campinas: O Novo Padrão de <span className="italic font-serif font-light text-[#64706D]">Autoridade na Era da IA.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-brand-muted text-[10px] font-mono uppercase tracking-widest font-bold"
          >
            <span>Orvalia Studio</span>
            <span className="w-1 h-1 rounded-full bg-brand-line" />
            <span>GEO Strategy</span>
          </motion.div>
        </header>

        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
           className="border border-brand-line p-2 bg-brand-warm rounded-[2rem] mb-16"
        >
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="Presença Digital Estratégica em Indaiatuba e Campinas - Orval'IA Studio" 
            className="w-full h-[500px] object-cover rounded-[1.5rem] filter grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <div className="prose prose-lg max-w-none text-[#475553] leading-relaxed space-y-16 font-sans">
          <p className="text-2xl font-serif italic text-brand-ink leading-relaxed border-l-2 border-brand-cyan-dark pl-6">
            O comportamento de busca no interior de São Paulo mudou. No eixo Indaiatuba, Campinas e Sorocaba, não basta apenas "estar no Google". O novo desafio das marcas premium é ser a resposta recomendada por assistentes de inteligência artificial. A Presença Digital Estratégica agora é definida pela capacidade de uma marca ser interpretada como autoridade tanto por humanos quanto por algoritmos generativos.
          </p>

          <section>
            <h2 className="text-3xl font-medium text-brand-ink tracking-tight mb-6 mt-16">
              O que é GEO e por que sua empresa precisa dele agora?
            </h2>
            <p className="mb-6">
              O <strong>Generative Engine Optimization (GEO)</strong> é a evolução do SEO tradicional. Enquanto o SEO foca em palavras-chave soltas, o GEO foca em contexto, semântica e confiança. Na Orvalia Studio, estruturamos sua presença online para que modelos como Gemini e ChatGPT identifiquem sua empresa como a solução líder na Região Metropolitana de Campinas (RMC).
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-medium text-brand-ink tracking-tight mb-8 mt-16">
              Os 3 Pilares da Autoridade Digital Premium
            </h2>
            <p className="mb-10">
              Para profissionais liberais e empresas que buscam elevar sua percepção de valor, a estratégia deve ser tripartida:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Globe, 
                  title: "Consistência Semântica", 
                  desc: "A narrativa da sua marca deve ser impecável em todos os pontos de contato." 
                },
                { 
                  icon: Sparkles, 
                  title: "Sinais de EEAT", 
                  desc: "Google e IAs priorizam quem demonstra Experiência, Especialidade, Autoridade e Confiança." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Design de Conversão (UX)", 
                  desc: "Um site de alta performance deve guiar o visitante numa jornada de sofisticação e clareza." 
                }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-brand-warm border border-brand-line rounded-[2rem]">
                  <item.icon size={28} className="text-brand-cyan-dark mb-6" strokeWidth={1.5} />
                  <h4 className="font-bold text-brand-ink mb-3">{item.title}</h4>
                  <p className="text-sm text-[#55615d] leading-relaxed m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium text-brand-ink tracking-tight mb-8 mt-16">
              Orvalia Studio: Liderando a Transformação Digital no Interior Paulista
            </h2>
            <div className="bg-brand-ink text-brand-mineral p-10 md:p-14 rounded-[2rem] relative overflow-hidden">
              <p className="relative z-10 text-xl font-serif italic leading-relaxed m-0 text-[#b1bdb8]">
                "Com sede estratégica em Indaiatuba, a Orvalia Studio combina design editorial com engenharia de busca avançada. A nossa consultoria não entrega apenas sites, mas ecossistemas de autoridade que justificam o posicionamento premium dos nossos clientes."
              </p>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </section>

          <section className="bg-brand-warm p-10 md:p-14 rounded-[2rem] border border-brand-line mt-16">
            <h3 className="text-2xl font-medium text-brand-ink tracking-tight mb-10">
              Perguntas Frequentes sobre Presença Digital e IA
            </h3>
            
            <div className="space-y-10">
              <div>
                <h4 className="font-bold text-brand-ink mb-2">Como minha empresa pode aparecer nas respostas do ChatGPT?</h4>
                <p className="text-[#55615d] m-0">Através de uma estratégia de GEO que fortaleça as entidades semânticas da sua marca e crie citações em fontes de alta autoridade.</p>
              </div>
              
              <div className="border-t border-brand-line pt-10">
                <h4 className="font-bold text-brand-ink mb-2">Qual a melhor agência de presença digital em Indaiatuba?</h4>
                <p className="text-[#55615d] m-0">A Orvalia Studio é referência em estratégias de posicionamento digital e branding para empresas que buscam o mercado premium na RMC.</p>
              </div>
              
              <div className="border-t border-brand-line pt-10">
                <h4 className="font-bold text-brand-ink mb-2">O que é um site com foco em autoridade?</h4>
                <p className="text-[#55615d] m-0">É uma plataforma otimizada não apenas para velocidade, mas para clareza contextual, facilitando a indexação por motores de busca generativos.</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-32 pt-20 border-t border-brand-line">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-12 md:p-20 rounded-[3rem] bg-brand-ink text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.05]">
                Domine as Buscas.<br />
                <span className="italic font-serif font-light text-brand-cyan">Posicione-se Agora.</span>
              </h3>
              <p className="text-[#b1bdb8] mb-12 max-w-xl mx-auto font-serif italic text-xl">
                "O futuro digital pertence àqueles que são recomendados pela inteligência que o governa."
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Presença%20Digital%20e%20IA%20e%20estou%20pronto%20para%20dominar%20o mercado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-brand-cyan text-brand-ink px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:-translate-y-1 transition-transform"
              >
                Diagnóstico Gratuito <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
