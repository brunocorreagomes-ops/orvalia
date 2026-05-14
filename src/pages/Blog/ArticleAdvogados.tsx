import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import ShareButton from "../../components/ShareButton";

export default function ArticleAdvogados() {
  useEffect(() => {
    // SEO Metadata
    document.title = "Posicionamento Digital para Advogados em Indaiatuba e Região";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Descubra como a Orval’IA Studio constrói autoridade digital e percepção premium para advogados em Indaiatuba. Estratégias éticas de branding e presença online.");
    }
    
    // Add keywords if they exist or create them
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "Posicionamento Digital para Advogados, Advogados em Indaiatuba, Branding Jurídico, Marketing Jurídico, Orval’IA Studio, Região de Indaiatuba, SEO para Advogados";
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
          "headline": "Posicionamento Digital para Advogados: Construindo Autoridade Inabalável em Indaiatuba",
          "description": "Descubra como a Orval’IA Studio constrói autoridade digital e percepção premium para advogados em Indaiatuba.",
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
          "@type": "LegalService",
          "name": "Escritório de Advocacia Exemplo",
          "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
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
          "@type": "LocalBusiness",
          "name": "Orval’IA Studio",
          "url": "https://orvalia.com.br"
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
            Conteúdo Pilar // Setor Jurídico
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >
            Posicionamento Digital para Advogados: Construindo Autoridade Inabalável em Indaiatuba
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>Orval’IA Studio</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Legal Branding</span>
          </motion.div>
        </header>

        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200" 
            alt="Posicionamento Digital para Advogados em Indaiatuba - Orval’IA Studio" 
            className="w-full h-[600px] object-cover rounded-[2.5rem] mb-16 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
        </motion.div>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-12 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
            No Direito, a reputação é o ativo mais valioso. Em mercados competitivos como Indaiatuba, Itu e Campinas, o notório saber jurídico precisa estar acompanhado de uma presença digital estratégica. O desafio para o advogado moderno é projetar autoridade e sofisticação de forma ética, transformando o meio digital em uma extensão do seu escritório físico.
          </p>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              Branding Jurídico: A Diferença entre Publicidade e Posicionamento
            </h2>
            <p className="mb-6">Diferente do marketing convencional, o branding para advogados na Orval’IA Studio foca na substância. Não se trata de "vender serviços", mas de posicionar o profissional como autoridade em sua área de atuação.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Identidade Visual Sóbria", desc: "Cores e tipografia que comunicam confiança, tradição e modernidade." },
                { title: "Comunicação de Valor", desc: "Conteúdo que demonstra especialidade (EEAT) e resolve dúvidas complexas do cliente ideal." },
                { title: "Presença em Buscadores de IA", desc: "Estruturamos sua marca para que, ao ser questionada sobre \"Melhor advogado tributarista em Indaiatuba\", a IA cite seu nome como referência." }
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
              O Impacto do Provimento 205/21 e a Modernização Digital
            </h2>
            <p className="mb-8">
              Com a flexibilização ética para o marketing jurídico, abriu-se uma janela de oportunidade. Escritórios em Indaiatuba que adotam uma presença digital premium saem na frente. Na Orval’IA, unimos o design estratégico à conformidade ética, garantindo que sua marca respeite os limites da OAB enquanto domina os resultados de busca.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              Design de Sites para Advogados: Sua Segunda Sede
            </h2>
            <p className="mb-8">
              Seu site é o seu cartão de visitas na era da inteligência artificial. Ele deve ser:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">01 //</span>
                <div>
                  <strong className="text-black block mb-1">Minimalista e Rápido</strong>
                  <span className="text-gray-500">Refletindo a eficiência do seu escritório.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">02 //</span>
                <div>
                  <strong className="text-black block mb-1">Otimizado para GEO</strong>
                  <span className="text-gray-500">Capturando a intenção de busca local (Indaiatuba, Salto, Itu).</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">03 //</span>
                <div>
                  <strong className="text-black block mb-1">Focado em Conversão Qualificada</strong>
                  <span className="text-gray-500">Facilitando o contato de clientes que buscam soluções de alto ticket.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-gray-100/50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter mb-10 uppercase">
              Perguntas Frequentes sobre Marketing Jurídico e Autoridade Digital
            </h3>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">Advogado pode fazer marketing digital?</h4>
                <p className="text-gray-600">Sim, desde que seja informativo, discreto e não configure captação indevida de clientela, seguindo os preceitos da OAB.</p>
              </div>
              
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">Como um escritório de Indaiatuba pode se destacar no Google?</h4>
                <p className="text-gray-600">Através de SEO Local e produção de conteúdo de alta autoridade (Topical Authority) focado nas dores jurídicas da região.</p>
              </div>
              
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">O que é o branding para advogados?</h4>
                <p className="text-gray-600">É a construção da percepção pública sobre o profissional, unindo sua especialidade técnica a uma identidade visual e verbal coerente e sofisticada.</p>
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
                Construa Sua Autoridade.<br />
                <span className="text-gray-300">Fale com a Orval’IA.</span>
              </h3>
              <p className="text-gray-500 mb-12 max-w-xl mx-auto font-serif italic text-lg">
                "No mercado jurídico moderno, a excelência oculta não gera negócios. Faça seu valor ser percebido antes mesmo da primeira reunião."
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Posicionamento%20Digital%20para%20Advogados%20e%20quero%20elevar%20a%20autoridade%20do%20meu%20escritório."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
              >
                Eleve sua Autoridade Jurídica <ArrowRight size={18} />
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
