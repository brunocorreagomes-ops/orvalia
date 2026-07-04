import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";

export default function Article8() {
  return (
    <article className="min-h-screen bg-brand-bg text-brand-text pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
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
            className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
          >
            Crescimento & Escala
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-brand-text tracking-tight leading-[1] mb-8"
          >

            Por que sua empresa não cresce no digital (mesmo com redes sociais)
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-brand-secondary text-[10px] font-mono uppercase tracking-widest"
          >
            <span>15 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>5 min de leitura</span>
          </motion.div>
        </header>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
        >
          <img
            src="/images/blog/12-por-que-sua-empresa-nao-cresce-no-digital.webp"
            alt="Por que sua empresa não cresce"
            loading="lazy" decoding="async"
            className="w-full aspect-video object-cover"
          onError={(e) => { e.currentTarget.style.opacity = '0'; }} />
        </motion.div>

        <div className="prose prose-invert prose-xl max-w-none text-brand-secondary leading-relaxed space-y-8 font-sans selection:bg-brand-surface selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-brand-text/80 leading-snug">Muitas empresas em Indaiatuba estão presentes no digital, mas poucas realmente crescem. Estar nas redes sociais não é o mesmo que ter uma estratégia de marca.</p>
          
          <p className="text-xl md:text-2xl font-medium text-brand-text/80 leading-snug">Segundo <strong>Philip Kotler</strong>, marketing é sobre gerar valor e comunicar esse valor com clareza. Quando isso não acontece, a presença digital se torna apenas operacional — e não estratégica.</p>

          <p><strong>Marty Neumeier</strong> explica que, quando uma marca não define sua percepção, o público define por conta própria — e geralmente isso resulta em algo genérico.</p>

          <div className="p-8 md:p-12 bg-white/5 border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">
            <h3 className="text-2xl font-black text-brand-text tracking-tighter mb-8 uppercase">Principais motivos que travam o crescimento:</h3>
            <ul className="space-y-4 list-none p-0">
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">1. //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Falta de branding</strong>
                  <span className="text-brand-secondary">Sem estratégia de marca, todo o resto perde força. O conteúdo não conecta.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">2. //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Comunicação inconsistente</strong>
                  <span className="text-brand-secondary">Segundo <strong>Donald Miller</strong>, marcas que não são claras são ignoradas.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">3. //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Conteúdo sem estratégia</strong>
                  <span className="text-brand-secondary"><strong>Gary Vaynerchuk</strong> reforça que conteúdo precisa gerar valor antes de tentar vender.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">4. //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Falta de integração</strong>
                  <span className="text-brand-secondary">Site, redes e comunicação estão desalinhados.</span>
                </div>
              </li>
            </ul>
          </div>

          <p>Empresas que crescem no digital seguem um padrão: posicionamento claro, identidade visual consistente e presença digital integrada. Esse conjunto cria percepção de valor — e percepção gera crescimento.</p>

          <p>Para destravar esse crescimento, veja nosso artigo sobre <Link to="/blog/branding-indaiatuba" className="text-brand-text font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">como construir uma marca forte em Indaiatuba</Link>.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white/5 border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
<div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-brand-text tracking-ultra-tight uppercase mb-8 leading-[0.9]">Sua empresa está estagnada no digital?</h3>
            <a 
              href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20estagnação%20digital%20e%20quero%20destravar%20meu%20crescimento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-brand-surface text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
            >
              Destravar Crescimento <ArrowRight size={18} />
            </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
