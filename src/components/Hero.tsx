import { motion } from "framer-motion";
import { ArrowRight, Globe, Code, Palette } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-bg">
      {/* Noise Overlay from DNA vibes */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Structural Atmosphere */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-accent-light/5 blur-[150px] -mr-[40vw] -mt-[40vw] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-brand-accent-dark/5 blur-[150px] -ml-[30vw] -mb-[30vw] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="dna-grid">
          {/* Top Detail Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-4 lg:col-span-4 mb-12 lg:mb-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Arquitetura de Estúdio</span>
            </div>
            <p className="font-serif text-xl md:text-2xl text-brand-secondary leading-relaxed italic font-light">
              Elevando o design para um padrão <span className="text-white not-italic font-medium">high-tech</span> e autoridade digital em Indaiatuba.
            </p>
          </motion.div>

          {/* Main Headline Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
            className="col-span-4 lg:col-span-8 flex flex-col justify-end"
          >
            <div className="relative">
              <h1 className="responsive-title font-sans font-black leading-[0.85] tracking-tighter md:tracking-ultra-tight text-white mb-10 flex flex-col">
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="block"
                >
                  DESIGN
                </motion.span>
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="block text-gradient"
                >
                  ESTRATÉGICO
                </motion.span>
              </h1>
              
              {/* Secondary Detail Floating */}
              <div className="absolute -top-10 right-0 hidden lg:block group cursor-default">
                <div className="glass-premium p-6 rounded-2xl flex flex-col gap-3 max-w-[200px]">
                  <div className="w-8 h-8 rounded-full bg-brand-accent-light/10 flex items-center justify-center">
                    <Globe className="text-brand-accent-light" size={16} />
                  </div>
                  <p className="text-[11px] font-mono leading-relaxed text-brand-secondary">
                    ESTRATÉGIA GEO E SEO LOCAL INTEGRADOS NO DNA DE CADA PROJETO.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Action Section */}
          <div className="col-span-4 lg:col-span-12 mt-20 md:mt-32 dna-grid">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="col-span-4 lg:col-span-6 flex flex-col md:flex-row gap-8 items-center"
            >
              <a 
                href="#projetos"
                className="group relative flex items-center gap-6 px-10 py-6 bg-transparent overflow-hidden rounded-full border border-white/20 transition-all hover:border-brand-accent-light"
              >
                <div className="absolute inset-0 bg-brand-accent-light opacity-0 group-hover:opacity-1 group-hover:scale-110 transition-all duration-500" />
                <span className="relative font-sans text-sm font-black uppercase tracking-[0.2em] text-white">Saber Mais</span>
                <ArrowRight className="text-brand-accent-light group-hover:translate-x-2 transition-transform" size={20} />
              </a>

              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-bg bg-brand-accent-light/20 backdrop-blur-sm" />
                ))}
                <div className="pl-6 flex flex-col justify-center">
                  <span className="text-[10px] font-black text-brand-accent-light uppercase tracking-widest">Índice de Confiança</span>
                  <span className="text-xs text-white font-medium">+150 Projetos</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="col-span-4 lg:col-span-6 flex justify-end items-center mt-12 md:mt-0"
            >
              <div className="flex flex-col gap-10">
                <div className="flex gap-12 items-center">
                  <div className="flex flex-col gap-2">
                    <Palette className="text-brand-accent-light" size={20} />
                    <span className="text-[10px] font-mono text-brand-secondary">DNA DO DESIGN</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Code className="text-brand-accent-dark" size={20} />
                    <span className="text-[10px] font-mono text-brand-secondary">ARQ DE CÓDIGO</span>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-xs font-mono text-brand-secondary/60 text-right uppercase tracking-[0.2em]">
                  [ Orvalia Studio ] indaiatuba — sp
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
