import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Code, Palette } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const globeY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const paletteY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const codeY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação da Gota (Parallax)
      gsap.to(".dewdrop-animation", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top+=50px center",
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
            className="col-span-4 lg:col-span-12 flex flex-col items-center text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Orvalia Studio • Agência Boutique</span>
              <div className="w-12 h-[1px] bg-brand-accent-light" />
            </div>
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
            <div className="relative w-full overflow-visible py-2">
              {/* [3 — H1 E HERO] SEO: H1 explícito e otimizado */}
              <h1 className="text-[8.5vw] md:text-6xl lg:text-[5.5rem] font-sans font-black leading-[1.1] tracking-tight md:tracking-tighter text-white mb-8 flex flex-col items-center uppercase max-w-5xl mx-auto">
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="block relative"
                >
                  Branding, sites e
                </motion.span>
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="block text-gradient relative py-2"
                >
                  presença digital premium
                </motion.span>
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="block text-white/90 text-[6vw] md:text-4xl lg:text-5xl font-light tracking-normal lowercase italic font-serif"
                >
                  para negócios de Indaiatuba e região
                </motion.span>
              </h1>
              
              {/* Proposta de valor clara */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base md:text-xl text-brand-secondary leading-relaxed max-w-3xl mx-auto mb-12 font-sans px-4"
              >
                Transformamos empresas locais em marcas mais desejadas, confiáveis e preparadas para vender melhor no digital — com estratégia, design, site e comunicação.
              </motion.p>
              
              <p className="sr-only">Orvalia Studio: Branding Estratégico, Criação de Sites e Performance Digital em Indaiatuba, Campinas, Itu, Sorocaba e RMC.</p>
            </div>
          </motion.div>

          {/* Bottom Action Section */}
          <div className="col-span-4 lg:col-span-12 mt-4 md:mt-8">
            <div className="flex flex-col items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center justify-center w-full"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-6">
                  <motion.a 
                    href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20a%20landing%20da%20Orvalia%20e%20quero%20um%20diagnóstico%20da%20minha%20marca/site.%20Meu%20negócio%20é:"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(0, 255, 209, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center gap-8 px-12 py-6 bg-brand-accent-light overflow-hidden rounded-full transition-all z-20"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <span className="relative font-sans text-sm font-black uppercase tracking-[0.3em] text-brand-bg">Solicitar diagnóstico gratuito</span>
                    <ArrowRight className="relative text-brand-bg group-hover:translate-x-2 transition-transform" size={20} />
                  </motion.a>
                  
                  <motion.a 
                    href="#projetos"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(255, 255, 255, 0.05)",
                      backgroundColor: "rgba(0, 255, 209, 0.05)",
                      borderColor: "rgba(0, 255, 209, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 px-10 py-6 border border-white/10 rounded-full font-black uppercase tracking-widest text-[10px] text-white transition-all duration-500"
                  >
                    Ver resultados reais
                  </motion.a>
                </div>

                {/* Microcopy below CTAs */}
                <div className="text-center mb-12">
                  <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-brand-secondary/60">
                    Atendimento direto <span className="text-brand-accent-light mx-2">•</span> Diagnóstico estratégico <span className="text-brand-accent-light mx-2">•</span> Projetos sob medida
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-bg bg-brand-accent-light/20 backdrop-blur-sm overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="User" referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale" />
                      </div>
                    ))}
                  </div>
                  <div className="sm:pl-8 flex flex-col justify-center sm:border-l border-white/10 text-center sm:text-left">
                    <span className="text-[10px] font-black text-brand-accent-light uppercase tracking-widest leading-none mb-1">Autoridade Regional</span>
                    <span className="text-xs text-white/80 font-medium">Indaiatuba, Campinas, Itu, Sorocaba e RMC</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8
                    }
                  }
                }}
                className="flex flex-col items-center gap-8"
              >
                <div className="flex gap-16 items-center">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: paletteY }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Palette className="text-brand-accent-light" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">DNA DO DESIGN</span>
                  </motion.div>
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: globeY }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Globe className="text-brand-accent-light" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">ESTRATÉGIA GEO</span>
                  </motion.div>
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: codeY }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Code className="text-brand-accent-dark" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">ARQ DE CÓDIGO</span>
                  </motion.div>
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
