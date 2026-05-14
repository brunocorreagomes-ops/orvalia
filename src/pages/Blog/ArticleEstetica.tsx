import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import ShareButton from "../../components/ShareButton";

export default function ArticleEstetica() {
  useEffect(() => {
    // SEO Metadata
    document.title = "Percepção de Valor: Estratégias de Branding para Clínicas de Estética Premium";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Descubra como a Orval’IA Studio eleva a percepção de valor de clínicas de estética em Indaiatuba e Campinas através do branding de luxo e design estratégico.");
    }
    
    // Add keywords if they exist or create them
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "Percepção de Valor, Branding para clínicas de estética, Marketing de luxo Indaiatuba, Design estratégico para saúde e beleza, Posicionamento premium Campinas, Identidade visual para clínicas boutique, Orval’IA Studio";
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
          "headline": "Percepção de Valor: O Segredo por trás das Marcas de Estética mais Desejadas do Interior",
          "description": "Descubra como a Orval’IA Studio eleva a percepção de valor de clínicas de estética em Indaiatuba e Campinas através do branding de luxo e design estratégico.",
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
          "@type": "BeautySalon",
          "name": "Clínica de Estética de Alto Padrão",
          "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200",
          "@id": "",
          "url": "https://orvalia.com.br",
          "telephone": "+5511978959567",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Indaiatuba",
            "addressRegion": "SP",
            "addressCountry": "BR"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Por que o branding é importante para clínicas de estética?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Porque ele constrói a confiança e o desejo necessários para que o cliente escolha sua clínica pela qualidade e prestígio, não pelo menor preço."
              }
            },
            {
              "@type": "Question",
              "name": "Como atrair clientes de alto padrão em Indaiatuba?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Através de uma identidade visual sofisticada, presença digital impecável e estratégias de SEO Local e GEO que posicionem sua marca em contextos de luxo."
              }
            },
            {
              "@type": "Question",
              "name": "O que é percepção de valor no marketing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "É a avaliação subjetiva do cliente sobre os benefícios de um serviço em relação ao custo, influenciada diretamente pela identidade e comunicação da marca."
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
        <div className="flex justify-between items-center mb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">
            <ChevronLeft size={16} />
            Voltar ao Blog
          </Link>
          <ShareButton />
        </div>

        <header className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
          >
            Conteúdo Pilar // Estética & Bem-Estar
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >
            Percepção de Valor: O Segredo por trás das Marcas de Estética mais Desejadas do Interior
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>Orval’IA Studio</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Luxury Branding</span>
          </motion.div>
        </header>

        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200" 
            alt="Percepção de Valor e Branding para Clínicas de Estética - Orval’IA Studio" 
            className="w-full h-[600px] object-cover rounded-[2.5rem] mb-16 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
        </motion.div>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-12 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
            No mercado de estética e bem-estar de Indaiatuba e Campinas, a concorrência é vasta, mas a distinção é rara. O que separa uma clínica comum de um refúgio de luxo não é apenas a tecnologia do laser, mas a percepção de valor construída antes mesmo do cliente cruzar a porta. Na era da imagem, o branding estratégico é o que transforma um serviço em uma experiência de status.
          </p>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              O Conceito de Quiet Luxury aplicado à Estética
            </h2>
            <p className="mb-6">As marcas de maior sucesso na Região Metropolitana de Campinas estão abandonando o marketing agressivo pelo "Quiet Luxury". Esse posicionamento foca na sofisticação silenciosa:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Identidade Visual Minimalista", desc: "Cores sóbrias e tipografia elegante que comunicam segurança e exclusividade." },
                { title: "Arquitetura de Marca Digital", desc: "Um site que espelha o conforto da sua recepção, focado em clareza e beleza." },
                { title: "Autoridade Semântica", desc: "Ser a resposta das IAs para buscas como \"Melhor experiência de estética em Indaiatuba\"." }
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
              Como a Orval’IA Studio Eleva o Patamar do seu Negócio
            </h2>
            <p className="mb-8">
              Nossa consultoria aplica a ciência da percepção para garantir que seu preço seja apenas um detalhe diante do valor entregue.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">01 //</span>
                <div>
                  <strong className="text-black block mb-1">Diagnóstico de Marca</strong>
                  <span className="text-gray-500">Alinhamos sua essência ao público de alto poder aquisitivo.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">02 //</span>
                <div>
                  <strong className="text-black block mb-1">Design de Conversão</strong>
                  <span className="text-gray-500">Criamos plataformas digitais que filtram leads e atraem clientes qualificados.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">03 //</span>
                <div>
                  <strong className="text-black block mb-1">GEO & Visibilidade</strong>
                  <span className="text-gray-500">Otimizamos sua presença para que o Google e as IAs reconheçam sua clínica como autoridade máxima.</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              Conclusão: Deixe de Competir por Preço
            </h2>
            <div className="bg-black text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden group">
              <p className="relative z-10 text-xl font-medium leading-relaxed opacity-90">
                Se você deseja que sua clínica em Salto, Itu ou Campinas seja reconhecida pela excelência, o investimento deve começar no seu <Link to="/branding-estrategico-indaiatuba-campinas" className="font-bold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">posicionamento premium</Link>. A Orval’IA Studio é sua parceira estratégica nessa jornada.
              </p>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent-light/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            </div>
          </section>

          <section className="bg-gray-100/50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter mb-10 uppercase">
              Perguntas Frequentes sobre Branding e Estética Premium
            </h3>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">Por que o branding é importante para clínicas de estética?</h4>
                <p className="text-gray-600">Porque ele constrói a confiança e o desejo necessários para que o cliente escolha sua clínica pela qualidade e prestígio, não pelo menor preço.</p>
              </div>
              
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">Como atrair clientes de alto padrão em Indaiatuba?</h4>
                <p className="text-gray-600">Através de uma identidade visual sofisticada, presença digital impecável e estratégias de SEO Local e GEO que posicionem sua marca em contextos de luxo.</p>
              </div>
              
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">O que é percepção de valor no marketing?</h4>
                <p className="text-gray-600">É a avaliação subjetiva do cliente sobre os benefícios de um serviço em relação ao custo, influenciada diretamente pela identidade e comunicação da marca.</p>
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
                Construa Desejo.<br />
                <span className="text-gray-300">Fale com a Orval’IA.</span>
              </h3>
              <p className="text-gray-500 mb-12 max-w-xl mx-auto font-serif italic text-lg">
                "Não seja apenas uma escolha baseada em orçamento. Seja a decisão baseada em exclusividade e excelência."
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Percepção%20de%20Valor%20em%20Estética%20e%20quero%20elevar%20o%20posicionamento%20da%20minha%20clínica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
              >
                Eleve sua Clínica Agora <ArrowRight size={18} />
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
