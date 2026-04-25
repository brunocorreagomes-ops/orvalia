import { motion } from "framer-motion";
import { ArrowRight, Globe, Code, Palette } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação da Gota (Parallax)
      gsap.to(".dewdrop-animation", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      });

      // Animação sutil do Texto
      gsap.to(".hero-content h1", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-canvas relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-bg">
      {/* Noise Overlay from DNA vibes */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Structural Atmosphere */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-accent-light/5 blur-[150px] -mr-[40vw] -mt-[40vw] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-brand-accent-dark/5 blur-[150px] -ml-[30vw] -mb-[30vw] rounded-full pointer-events-none" />

      {/* Dewdrop Element (GSAP Parallax) */}
      <div className="dewdrop-animation absolute top-1/4 right-[10%] w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl opacity-20 pointer-events-none z-[1]" />
      <div className="dewdrop-animation absolute bottom-1/4 left-[5%] w-20 h-20 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-brand-accent-light/10 to-transparent blur-2xl opacity-20 pointer-events-none z-[1]" />

      <div className="container mx-auto px-6 relative z-10 hero-content">
        <div className="dna-grid">
          {/* Top Detail Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-4 lg:col-span-12 flex flex-col items-center text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Branding Estratégico em Indaiatuba & RMC</span>
              <div className="w-12 h-[1px] bg-brand-accent-light" />
            </div>
            <p className="font-serif text-xl md:text-3xl text-brand-secondary leading-relaxed italic font-light max-w-3xl">
              A Orvalia é a agência de branding e websites de Indaiatuba e RMC. <span className="text-white not-italic font-medium">Transformamos negócios</span> em marcas que dominam o digital.
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
            className="col-span-4 lg:col-span-12 flex flex-col items-center text-center"
          >
            <div className="relative w-full overflow-visible py-4">
              <h1 className="responsive-title font-sans font-black leading-[1.1] md:leading-[0.95] tracking-tight md:tracking-tighter text-white mb-10 flex flex-col items-center">
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="block relative"
                >
                  DESIGN
                </motion.span>
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="block text-gradient relative py-4"
                >
                  ESTRATÉGICO
                </motion.span>
              </h1>
            </div>
          </motion.div>

          {/* Bottom Action Section */}
          <div className="col-span-4 lg:col-span-12 mt-12 md:mt-20">
            <div className="flex flex-col items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col md:flex-row gap-12 items-center justify-center w-full"
              >
                <a 
                  href="https://wa.me/5511978959567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-8 px-14 py-8 bg-brand-accent-light overflow-hidden rounded-full transition-all hover:shadow-[0_0_60px_rgba(0,255,209,0.5)] hover:scale-105 active:scale-95 z-20"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative font-sans text-base font-black uppercase tracking-[0.3em] text-brand-bg">Diagnóstico Gratuito</span>
                  <ArrowRight className="relative text-brand-bg group-hover:translate-x-2 transition-transform" size={24} />
                </a>

                <div className="flex -space-x-4 items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-bg bg-brand-accent-light/20 backdrop-blur-sm overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="User" className="w-full h-full object-cover grayscale" />
                      </div>
                    ))}
                  </div>
                  <div className="pl-8 flex flex-col justify-center border-l border-white/10 ml-4">
                    <span className="text-[10px] font-black text-brand-accent-light uppercase tracking-widest leading-none mb-1">Autoridade Digital</span>
                    <span className="text-xs text-white font-medium">+50 Projetos Locais</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="flex gap-16 items-center">
                  <div className="flex flex-col items-center gap-2">
                    <Palette className="text-brand-accent-light" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">DNA DO DESIGN</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Globe className="text-brand-accent-light" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">ESTRATÉGIA GEO</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Code className="text-brand-accent-dark" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">ARQ DE CÓDIGO</span>
                  </div>
                </div>
                <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-[10px] font-mono text-brand-secondary/60 uppercase tracking-[0.3em]">
                  [ Orvalia Agency ] indaiatuba — rmc
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
