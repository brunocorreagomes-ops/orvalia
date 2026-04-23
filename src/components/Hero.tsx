import { motion } from "motion/react";
import { ChevronRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 md:px-24 bg-brand-bg overflow-hidden pt-44 lg:pt-32">
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent-light/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full lg:w-1/2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1.5 rounded-full border border-brand-accent-light/20 glass text-[10px] uppercase tracking-[0.3em] font-black text-brand-accent-light mb-8"
          >
            Digital Solution Studio
          </motion.span>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[7.5rem] font-black leading-[0.9] tracking-[-0.05em] text-white mb-10"
          >
            Design <br /> <span className="text-gradient">Estratégico</span>.
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-brand-secondary text-lg md:text-xl max-w-lg leading-relaxed font-medium"
          >
            Construindo marcas de autoridade em Indaiatuba através de um sistema visual minimalista, alta performance e posicionamento premium.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 mt-12"
          >
            <a 
              href="/#precos"
              className="group bg-brand-accent-light text-brand-bg px-8 py-4 rounded-full font-extrabold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-accent-light"
              aria-label="Ver opções de serviços e soluções"
            >
              Ver opções
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
            </a>

            <motion.a 
              href="https://wa.me/5511978959567?text=Olá,%20vim%20através%20do%20site%20Orvalia%20e%20gostaria%20de%20maiores%20informações"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-brand-whatsapp font-black uppercase tracking-widest text-xs transition-all text-brand-bg flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-whatsapp shadow-xl shadow-brand-whatsapp/10"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Falar no WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full lg:w-1/2 mt-20 lg:mt-0 flex justify-center lg:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full max-w-lg aspect-[4/5] lg:aspect-square"
        >
          {/* Subtle Glow Behind Image */}
          <div className="absolute inset-0 bg-brand-accent-light/10 blur-3xl rounded-full" />
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden glass border border-white/10 p-2"
          >
            <img 
              src="https://i.ibb.co/wrcD7jMB/orvalia-studio-foto.webp" 
              alt="Orvalia Studio Ambience" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </motion.div>

          {/* Floating Detail Elements */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-white/10 shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-accent-light flex items-center justify-center text-black font-bold text-sm">
                AI
              </div>
              <div>
                <p className="text-[10px] text-brand-accent-light font-black uppercase tracking-widest">Powered Studio</p>
                <p className="text-white font-bold text-sm">Design Strategy</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative lines or elements */}
      <div 
        className="absolute bottom-12 left-8 md:left-24 text-[10px] font-mono text-brand-secondary uppercase tracking-widest whitespace-nowrap hidden lg:block"
        aria-hidden="true"
      >
        [ 01 ] Concept — Strategy — Execution
      </div>
    </section>
  );
}
