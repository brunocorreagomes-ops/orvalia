import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";

export default function Article10() {
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
            Guia Completo
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >
            Como construir uma marca forte no digital: guia completo para empresas em Indaiatuba
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>13 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>8 min de leitura</span>
          </motion.div>
        </header>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
            Construir uma marca forte no digital exige mais do que presença — exige estratégia. Empresas em Indaiatuba que entendem isso conseguem crescer de forma consistente e sustentável.
          </p>
          
          <p>Segundo <strong>Al Ries</strong>, marketing é uma batalha de percepções. E no digital, essa batalha acontece todos os dias em cada clique e scroll.</p>

          <div className="p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">
            <h3 className="text-2xl font-black text-black tracking-tighter mb-8 uppercase">Os 4 pilares de uma marca forte:</h3>
            <ul className="space-y-6 list-none p-0">
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">01 //</span>
                <div>
                  <strong className="text-black block mb-1">Posicionamento</strong>
                  <span className="text-gray-600">Definir quem você é e para quem você fala. <strong>Philip Kotler</strong> reforça que posicionamento é ocupar um espaço claro.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">02 //</span>
                <div>
                  <strong className="text-black block mb-1">Identidade visual</strong>
                  <span className="text-gray-600">Traduz o posicionamento em forma visual. <strong>Marty Neumeier</strong> destaca que consistência é o que constrói reconhecimento.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">03 //</span>
                <div>
                  <strong className="text-black block mb-1">Presença digital</strong>
                  <span className="text-gray-600">Site, redes sociais e conteúdo alinhados.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">04 //</span>
                <div>
                  <strong className="text-black block mb-1">Consistência</strong>
                  <span className="text-gray-600"><strong>Seth Godin</strong> explica que marcas são construídas pela repetição de promessas cumpridas.</span>
                </div>
              </li>
            </ul>
          </div>

          <p>No cenário atual, conteúdo é o principal canal de construção de marca. <strong>Gary Vaynerchuk</strong> defende que marcas são construídas através da atenção. E atenção vem de relevância.</p>

          <p>Muitas empresas falham por tentar crescer sem essa base estratégica. Isso gera inconsistência e baixa percepção de valor. Se você sente que sua marca está desalinhada, comece lendo sobre os <Link to="/blog/erros-marca-amadora" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">erros que fazem sua marca parecer amadora</Link>.</p>

          <p>Conclusão: marcas fortes não acontecem por acaso — são construídas com estratégia, paciência e consistência visual.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">
                Crescimento Sólido.<br />
                <span className="text-gray-300">Começa com a Orval’IA.</span>
              </h3>
              <p className="text-gray-500 mb-12 max-w-xl mx-auto font-serif italic text-lg">
                "As melhores marcas são aquelas que criam um espaço único na mente do seu público."
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20Guia%20Definitivo%20para%20uma%20Marca%20Forte%20e%20estou%20pronto%20para%20iniciar%20meu%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
              >
                Iniciar Projeto Estratégico <ArrowRight size={18} />
              </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
