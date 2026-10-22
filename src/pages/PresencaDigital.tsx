import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight, Globe, Sparkles, ShieldCheck } from "lucide-react";
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

  return (
    <article className="min-h-screen bg-brand-mineral text-brand-ink pt-40 pb-20 px-6 md:px-12 lg:px-24 selection:bg-brand-cyan selection:text-brand-ink">
      <SEO title="Presença digital e SEO em Indaiatuba e Campinas | Orvalia Studio" description="Revisão de conteúdo, páginas de serviços e informações de contato para empresas de Indaiatuba e Campinas." canonical="https://orvalia.com.br/presenca-digital/" schema={serviceSchema} />
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
            Presença digital em Indaiatuba e Campinas: <span className="italic font-serif font-light text-[#64706D]">serviços fáceis de encontrar e entender.</span>
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
            O site precisa explicar o que sua empresa faz, onde atende e como o cliente pode entrar em contato. Revisamos essas informações e a forma como estão distribuídas nas páginas.
          </p>

          <section>
            <h2 className="text-3xl font-medium text-brand-ink tracking-tight mb-6 mt-16">
              O que revisar na presença digital?
            </h2>
            <p className="mb-6">
              Confira as descrições dos serviços, os títulos das páginas, as informações de atendimento e os links de contato. Esse é o ponto de partida da nossa revisão de <strong>SEO e conteúdo</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-medium text-brand-ink tracking-tight mb-8 mt-16">
              Três pontos da revisão
            </h2>
            <p className="mb-10">
              O trabalho considera o que a empresa publica e o que o cliente precisa consultar:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Globe, 
                  title: "Dados de atendimento",
                  desc: "Telefone, endereço, horários e região atendida precisam estar corretos."
                },
                { 
                  icon: Sparkles, 
                  title: "Informações sobre o trabalho",
                  desc: "Serviços, equipe e exemplos de projetos devem ser descritos com informações verificáveis."
                },
                { 
                  icon: ShieldCheck, 
                  title: "Navegação e contato",
                  desc: "Menu, leitura no celular e botões de contato precisam funcionar sem dificuldade."
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
              Como a Orvalia trabalha
            </h2>
            <div className="bg-brand-ink text-brand-mineral p-10 md:p-14 rounded-[2rem] relative overflow-hidden">
              <p className="relative z-10 text-xl font-serif italic leading-relaxed m-0 text-[#b1bdb8]">
                "Conversamos sobre os serviços e o atendimento da empresa. Depois, definimos quais páginas, textos e informações precisam ser criados ou revisados."
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
                <h4 className="font-bold text-brand-ink mb-2">O serviço garante uma recomendação por IA?</h4>
                <p className="text-[#55615d] m-0">Não prometemos recomendações ou posições específicas. O trabalho combina revisão de conteúdo, informações e funcionamento do site.</p>
              </div>
              
              <div className="border-t border-brand-line pt-10">
                <h4 className="font-bold text-brand-ink mb-2">O que está incluído na proposta?</h4>
                <p className="text-[#55615d] m-0">A proposta informa quais páginas e textos serão revisados, as entregas combinadas e o prazo de acompanhamento.</p>
              </div>
              
              <div className="border-t border-brand-line pt-10">
                <h4 className="font-bold text-brand-ink mb-2">Como começar?</h4>
                <p className="text-[#55615d] m-0">Envie o endereço do site e conte o que precisa melhorar. A conversa inicial ajuda a identificar as prioridades.</p>
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
                Vamos revisar o seu site.<br />
                <span className="italic font-serif font-light text-brand-cyan">Comece pelo que precisa melhorar.</span>
              </h3>
              <p className="text-[#b1bdb8] mb-12 max-w-xl mx-auto font-serif italic text-xl">
                Conte quais informações seus clientes procuram e onde o site tem dificultado o atendimento.
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Quero%20conversar%20sobre%20a%20revisão%20do%20site%20da%20minha%20empresa."
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
