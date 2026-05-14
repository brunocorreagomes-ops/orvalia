import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";

export default function Article7() {
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
            Social Media Pack
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >

            Instagram para empresas: da construção de marca à geração de valor no digital
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>16 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>5 min de leitura</span>
          </motion.div>
        </header>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">O Instagram deixou de ser apenas uma rede social — hoje ele é um dos principais canais de construção de marca. Segundo <strong>Gary Vaynerchuk</strong>, marcas são construídas através de atenção e consistência.</p>
          
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug"><strong>Philip Kotler</strong> já defendia que marketing é sobre criar valor e comunicar esse valor. O Instagram, hoje, é uma das principais ferramentas para isso. Especialistas atuais como na estratégia de <em>Jab Jab Jab Right Hook</em> do próprio Gary mostram que o conteúdo deve entregar valor antes de pedir algo.</p>

          <div className="p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">
            <h3 className="text-2xl font-black text-black tracking-tighter mb-8 uppercase">Na prática, sua presença no Instagram deve focar em:</h3>
            <ul className="space-y-4 list-none p-0">
              <li><strong>✓ Conteúdo que educa:</strong> Mostre autoridade e conhecimento.</li>
              <li><strong>✓ Conteúdo que conecta:</strong> Humanize a marca e crie relacionamento.</li>
              <li><strong>✓ Conteúdo que vende:</strong> De forma estratégica, após gerar valor.</li>
            </ul>
          </div>

          <p>Outro ponto importante é a consistência. Como reforça <strong>Seth Godin</strong>, marcas são construídas pela repetição de promessas cumpridas. No Instagram, isso significa manter padrão visual, tom de voz e frequência.</p>

          <p>Se você percebe que seu Instagram não está convertendo, pode ser um problema de base estratégica. Entenda melhor sobre <Link to="/blog/por-que-nao-cresce" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">por que empresas não crescem mesmo estando no digital</Link>.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
<div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">Seus posts geram valor ou apenas ruído?</h3>
            <a 
              href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Gestão%20de%20Redes%20Sociais%20e%20gostaria%20de%20conhecer%20os%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
            >
              Gestão de Redes Sociais <ArrowRight size={18} />
            </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
