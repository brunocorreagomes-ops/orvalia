import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-24 md:py-48 px-6 bg-brand-bg relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-accent-light/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <div className="flex justify-center mb-12">
           <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Protocolo Final</span>
              <div className="w-12 h-[1px] bg-brand-accent-light" />
           </div>
        </div>

        <h2 className="responsive-subtitle font-sans font-black text-white leading-[0.85] tracking-ultra-tight mb-16 uppercase">
          PRONTO PARA <br /> <span className="text-gradient">EVOLUIR?</span>
        </h2>

        <p className="font-serif text-2xl md:text-4xl text-brand-secondary italic font-light mb-20 max-w-2xl mx-auto leading-relaxed">
          Sua marca merece uma arquitetura que <span className="text-white not-italic font-medium">multiplique valor</span> e domine o digital.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <motion.a 
              href="https://wa.me/5511978959567"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-6 px-16 py-8 bg-brand-accent-light rounded-full overflow-hidden transition-all shadow-2xl shadow-brand-accent-light/20"
            >
              <span className="relative z-10 font-sans text-xs font-black uppercase tracking-[0.3em] text-brand-bg">Começar Agora</span>
              <ArrowUpRight className="relative z-10 text-brand-bg group-hover:rotate-45 transition-transform" size={20} />
            </motion.a>

            <span className="font-mono text-[10px] text-brand-secondary/40 uppercase tracking-[0.2em] hidden md:block">
              // SEM MOTIVOS PARA ESPERAR //
            </span>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-12">
              <div className="flex flex-col gap-2 text-left">
                 <span className="font-mono text-[8px] text-brand-accent-light">VERSÃO ARQ</span>
                 <span className="text-[10px] text-white font-bold tracking-widest uppercase italic">2.0 Premium</span>
              </div>
              <div className="flex flex-col gap-2 text-left">
                 <span className="font-mono text-[8px] text-brand-accent-light">LOCALIZAÇÃO</span>
                 <span className="text-[10px] text-white font-bold tracking-widest uppercase">Indaiatuba, SP</span>
              </div>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-accent-light animate-pulse" />
              <span className="font-mono text-[9px] text-brand-secondary uppercase tracking-[0.2em]">Status do Sistema: Otimização Ativa</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
