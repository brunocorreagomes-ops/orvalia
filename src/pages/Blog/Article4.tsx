import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";

export default function Article4() {
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
            Conceitos & Fundamentos
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >

            Diferença entre logo e branding: do conceito clássico à construção de marca no digital
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>19 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>5 min de leitura</span>
          </motion.div>
        </header>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">Muitas empresas em Indaiatuba ainda confundem logo com branding — e esse é um dos principais fatores que limitam crescimento no digital.</p>
          
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">De forma direta: <strong>logo é um elemento visual. Branding é o sistema completo de percepção da marca.</strong></p>

          <p>Segundo <strong>Marty Neumeier</strong>, marca é a percepção que o público constrói ao longo do tempo. Já o logo é apenas um dos pontos de contato dessa percepção. Essa visão também é reforçada por <strong>David Aaker</strong>, que descreve branding como um conjunto de ativos — incluindo nome, identidade, posicionamento e associações mentais.</p>

          <p>Mas quando trazemos isso para o cenário atual, vemos uma evolução clara. Profissionais contemporâneos como <strong>Chris Do</strong> reforçam que o branding hoje não pode existir separado do digital. Para ele, o design precisa comunicar valor estratégico e não apenas estética.</p>

          <p>Da mesma forma, <strong>Gary Vaynerchuk</strong> destaca que a construção de marca acontece diariamente através de conteúdo, redes sociais e interação com o público. Ou seja, o branding deixou de ser estático e passou a ser contínuo.</p>

          <div className="p-8 rounded-3xl bg-brand-accent-light/5 border border-brand-accent-light/20 my-12">
            <h3 className="text-black font-bold mb-4">O branding moderno escala através de três elementos:</h3>
            <ul className="space-y-4 list-none p-0">
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">1. //</span>
                <div>
                  <strong className="text-black block mb-1">Estratégia</strong>
                  <span className="text-gray-600">Público-alvo, promessa e tom de voz.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">2. //</span>
                <div>
                  <strong className="text-black block mb-1">Identidade</strong>
                  <span className="text-gray-600">Visual harmônico e sistema de design.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">3. //</span>
                <div>
                  <strong className="text-black block mb-1">Presença</strong>
                  <span className="text-gray-600">Site rápido, redes ativas e conteúdo de valor.</span>
                </div>
              </li>
            </ul>
          </div>

          <p>O erro não é investir em design. É parar no design. Se você quer construir uma marca que realmente resista ao tempo, precisa olhar para o sistema como um todo. Comece entendendo nosso artigo sobre <Link to="/blog/branding-indaiatuba" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">branding estratégico</Link>.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
<div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">Sua marca é um sistema ou apenas um desenho?</h3>
            <a 
              href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20'Logo%20não%20é%20Branding'%20e%20gostaria%20de%20iniciar%20uma%20consultoria%20de%20marca."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
            >
              Consultoria de Marca <ArrowRight size={18} />
            </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
