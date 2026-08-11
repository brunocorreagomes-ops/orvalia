import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-brand-bg border-b border-white/5">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Structural Accent Marker */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.03] pointer-events-none hidden lg:block" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.03] pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10 my-auto">
        <div className="max-w-5xl mx-auto flex flex-col items-start text-left space-y-8 md:space-y-12">
          
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-[2px] bg-brand-red" />
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-white font-semibold">
              ORVALIA / ESTRATÉGIA DE MARCA + EXPERIÊNCIA DIGITAL
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-2 md:space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-sans font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
              Seu negócio cresceu.
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-sans font-extrabold leading-[1.02] tracking-[-0.03em] text-[#B4BCCB]">
              Sua presença digital <br className="hidden sm:inline" />
              <span className="text-white relative inline-block">
                ficou para trás.
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-brand-red/80" />
              </span>
            </h1>
          </motion.div>

          {/* Body Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-brand-secondary font-sans font-normal leading-relaxed max-w-3xl"
          >
            Reposicionamos marca, mensagem e site para empresas que já entregam valor no mundo real, mas ainda não conseguem transmitir essa força com a mesma clareza no digital.
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full pt-2"
          >
            <MagneticWrapper>
              <a 
                href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20mapear%20o%20gap%20de%20percepção%20da%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-4 px-8 md:px-10 py-5 bg-brand-red hover:bg-red-600 text-white transition-all rounded-none font-sans text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-red/20"
              >
                <span>Mapear meu gap de percepção</span>
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={18} />
              </a>
            </MagneticWrapper>

            <a 
              href="#cases"
              className="flex items-center justify-center gap-3 px-8 py-5 border border-white/20 text-white hover:border-white hover:bg-white/5 transition-all text-xs md:text-sm font-black uppercase tracking-[0.2em]"
            >
              <span>Ver transformações</span>
              <ArrowDown size={16} className="text-brand-secondary group-hover:text-white" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Supporting Footer Ribbon */}
      <div className="container mx-auto px-6 relative z-10 pt-12">
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-brand-secondary text-xs font-sans tracking-wide">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-white font-medium">Indaiatuba + Região Metropolitana de Campinas</span>
          </div>
          <div>
            <span className="text-brand-secondary/80">Estratégia • Branding • Sites • Presença Digital</span>
          </div>
        </div>
      </div>
    </section>
  );
}
