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

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-8 max-w-4xl mx-auto uppercase">
          Pronto para sua marca parecer <br className="hidden md:block" /> tão forte quanto o seu <br className="hidden md:block" /> <span className="text-gradient">negócio realmente é?</span>
        </h2>

        <p className="text-lg md:text-2xl text-brand-secondary/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Receba uma análise inicial da sua presença digital e veja quais ajustes podem aumentar sua percepção de valor, autoridade e conversão.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <motion.a 
              href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20o%20site%20da%20Orvalia%20e%20quero%20um%20diagnóstico%20da%20minha%20marca/site.%20Meu%20negócio%20é:"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-between gap-6 px-10 md:px-14 py-6 md:py-8 bg-brand-accent-light rounded-full overflow-hidden transition-all shadow-[0_0_60px_rgba(0,255,209,0.3)] w-full md:w-auto"
            >
              <span className="relative z-10 font-sans text-xs md:text-sm font-black uppercase tracking-[0.3em] text-brand-bg">Quero meu diagnóstico gratuito</span>
              <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shrink-0">
                <ArrowUpRight className="text-brand-accent-light" size={18} />
              </div>
              
              {/* Internal Glow */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.a>

            <div className="flex flex-col items-center md:items-start opacity-40">
               <span className="font-mono text-[10px] text-brand-secondary uppercase tracking-[0.3em]">
                 Fila de espera para Junho/2026 
               </span>
               <span className="font-mono text-[9px] text-brand-accent-light uppercase tracking-widest mt-1">
                 // Apenas 2 vagas restantes //
               </span>
            </div>
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
