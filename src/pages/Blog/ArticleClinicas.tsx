import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import ShareButton from "../../components/ShareButton";

export default function ArticleClinicas() {
  useEffect(() => {
    // SEO Metadata
    document.title = "Branding para Clínicas em Campinas e Indaiatuba: Posicionamento de Alto Valor";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Eleve o patamar da sua clínica com branding estratégico. A Orval’IA Studio transforma consultórios em marcas de luxo no eixo Campinas-Indaiatuba. Atraia pacientes de alto valor hoje.");
    }
    
    // Add keywords if they exist or create them
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "Branding para Clínicas, Posicionamento Premium, Campinas, Indaiatuba, Orval’IA Studio, Saúde, Marcas de Luxo";
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
          "@type": "MedicalBusiness",
          "name": "Clínica de Exemplo",
          "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
          "@id": "",
          "url": "https://orvalia.com.br",
          "telephone": "+5511978959567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. José de Souza Campos",
            "addressLocality": "Campinas",
            "addressRegion": "SP",
            "addressCountry": "BR"
          }
        },
        {
          "@type": "Service",
          "name": "Branding para Clínicas",
          "provider": {
            "@type": "Organization",
            "name": "Orval’IA Studio"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quanto tempo leva para construir uma marca médica forte?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O branding é contínuo, mas um reposicionamento estratégico com a Orval’IA gera percepção imediata de valor desde o lançamento da nova identidade e site."
              }
            },
            {
              "@type": "Question",
              "name": "Como atrair pacientes particulares em Campinas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Através de um mix de posicionamento premium, design estratégico e autoridade digital (SEO/GEO) que remova a barreira do preço."
              }
            },
            {
              "@type": "Question",
              "name": "O que é UX na saúde?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "É a User Experience aplicada ao paciente, garantindo que o contato digital e físico com a marca seja fluido, elegante e confiável."
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
            Conteúdo Pilar // Setor Saúde
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >
            Branding para Clínicas: O Segredo das Marcas de Saúde que Dominam o Mercado Premium em Campinas
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>Orval’IA Studio</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Healthcare</span>
          </motion.div>
        </header>

        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
            alt="Branding para Clínicas em Campinas e Indaiatuba - Orval’IA Studio" 
            className="w-full h-[600px] object-cover rounded-[2.5rem] mb-16 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
        </motion.div>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-12 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
            No competitivo mercado de saúde da Região Metropolitana de Campinas (RMC), a competência técnica é o pré-requisito, mas o branding estratégico é o diferencial que define quem atrai o paciente de alto valor. Para clínicas em Indaiatuba, Campinas e região, a transição do "nome no convênio" para uma marca proprietária forte é o único caminho para a liberdade financeira e o reconhecimento profissional.
          </p>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              Por que o Posicionamento Premium é Vital para Clínicas e Médicos?
            </h2>
            <p className="mb-6">O paciente moderno não busca apenas um tratamento; ele busca uma experiência que valide seu investimento. Na Orval’IA Studio, entendemos que o branding para clínicas envolve:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Percepção de Valor", desc: "Onde cada detalhe visual comunica autoridade e cuidado." },
                { title: "Diferenciação Semântica", desc: "Como sua clínica é descrita pelas IAs quando alguém busca por \"Melhor clínica de estética em Indaiatuba\"?" },
                { title: "Experiência do Usuário (UX)", desc: "Do primeiro clique no site ao ambiente físico, a jornada deve ser impecável." }
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
              Elementos de uma Identidade Visual de Luxo na Saúde
            </h2>
            <p className="mb-8">
              Esqueça os clichês de bancos de imagens genéricos. O design estratégico da Orval’IA foca em:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">01 //</span>
                <div>
                  <strong className="text-black block mb-1">Minimalismo Autoritativo</strong>
                  <span className="text-gray-500">Cores e tipografias que transmitem calma, luxo e precisão.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">02 //</span>
                <div>
                  <strong className="text-black block mb-1">Presença Digital Sofisticada</strong>
                  <span className="text-gray-500">Sites rápidos, seguros e visualmente deslumbrantes que funcionam como sua recepção digital 24h.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">03 //</span>
                <div>
                  <strong className="text-black block mb-1">GEO (Generative Engine Optimization)</strong>
                  <span className="text-gray-500">Garantir que sua especialidade seja a resposta principal para buscas locais no Gemini e ChatGPT.</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-8 uppercase">
              Orval’IA Studio: Transformando Consultórios em Referências Regionais
            </h2>
            <div className="bg-black text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden group">
              <p className="relative z-10 text-xl font-medium leading-relaxed opacity-90">
                Seja em um escritório na Av. José de Souza Campos (Norte-Sul) em Campinas ou em uma clínica conceito em Indaiatuba, o posicionamento estratégico é o que separa os profissionais saturados dos profissionais desejados.
              </p>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent-light/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            </div>
          </section>

          <section className="bg-gray-100/50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter mb-10 uppercase">
              Perguntas Frequentes sobre Marketing e Branding Médico
            </h3>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">Quanto tempo leva para construir uma marca médica forte?</h4>
                <p className="text-gray-600">O branding é contínuo, mas um reposicionamento estratégico com a Orval’IA gera percepção imediata de valor desde o lançamento da nova identidade e site.</p>
              </div>
              
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">Como atrair pacientes particulares em Campinas?</h4>
                <p className="text-gray-600">Através de um mix de posicionamento premium, design estratégico e autoridade digital (SEO/GEO) que remova a barreira do preço.</p>
              </div>
              
              <div>
                <h4 className="font-black text-black uppercase text-xs tracking-widest mb-4">O que é UX na saúde?</h4>
                <p className="text-gray-600">É a User Experience aplicada ao paciente, garantindo que o contato digital e físico com a marca seja fluido, elegante e confiável.</p>
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
                Eleve sua Clínica.<br />
                <span className="text-gray-300">Fale com a Orval’IA.</span>
              </h3>
              <p className="text-gray-500 mb-12 max-w-xl mx-auto font-serif italic text-lg">
                "Não seja apenas mais uma escolha no catálogo. Torne-se a referência inquestionável na sua especialidade."
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Branding%20para%20Clínicas%20e%20quero%20elevar%20o%20posicionamento%20do%20meu%20consultório."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
              >
                Eleve seu Posicionamento <ArrowRight size={18} />
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
