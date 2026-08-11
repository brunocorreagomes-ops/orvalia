import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

export default function CTA() {
  return (
    <section id="gap-diagnostico" className="py-24 md:py-36 bg-brand-bg relative z-10 overflow-hidden border-b border-white/10">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-xs uppercase tracking-[0.25em] font-semibold"
          >
            <span className="w-2 h-2 bg-brand-red animate-pulse" />
            DIAGNÓSTICO ESTRATÉGICO DE MARCA & PRESENÇA
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.02] tracking-tighter uppercase"
          >
            SE SUA EMPRESA JÁ ENTREGA MAIS DO QUE O DIGITAL CONSEGUE MOSTRAR, <br className="hidden sm:inline" />
            <span className="text-brand-red">ENCONTRAMOS A DIFERENÇA.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-brand-secondary font-sans leading-relaxed max-w-2xl mx-auto"
          >
            O primeiro passo não é comprar um novo site. É descobrir onde percepção, clareza e conversão estão ficando abaixo do potencial do negócio.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4 flex flex-col items-center gap-4"
          >
            <MagneticWrapper>
              <a 
                href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20meu%20diagnóstico%20de%20percepção%20para%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-6 bg-brand-red hover:bg-red-600 text-white font-sans text-xs md:text-sm font-black uppercase tracking-[0.25em] transition-all shadow-xl shadow-brand-red/20"
              >
                <MessageCircle size={20} />
                <span>Quero meu diagnóstico de percepção</span>
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={18} />
              </a>
            </MagneticWrapper>

            <p className="font-mono text-[11px] text-brand-secondary uppercase tracking-widest pt-2">
              Sem formulário interminável. Uma conversa direta sobre marca, negócio e próximo movimento.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
