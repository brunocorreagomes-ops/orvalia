import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IconBrand, IconAuthority, IconWeb } from "./CustomIcons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaterDropAnimation from "./WaterDropAnimation";
import MagneticWrapper from "./MagneticWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const globeY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const paletteY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const codeY = useTransform(scrollYProgress, [0, 1], [0, -10]);

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
    <section ref={heroRef} className="hero-canvas relative min-h-[100svh] md:min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-brand-bg">
      {/* Noise Overlay from DNA vibes */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Structural Atmosphere */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-accent-light/5 blur-[150px] -mr-[40vw] -mt-[40vw] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-brand-accent-dark/5 blur-[150px] -ml-[30vw] -mb-[30vw] rounded-full pointer-events-none" />

      {/* Dewdrop Element (GSAP Parallax) */}
      <div className="dewdrop-animation absolute top-1/4 right-[10%] w-32 h-32 md:w-64 md:h-64 opacity-20 pointer-events-none z-[1]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-accent-light blur-2xl">
          <path d="M47.7,-57.2C59.9,-46.8,66.6,-28.9,69.5,-10.8C72.3,7.4,71.2,25.9,61.8,40.1C52.4,54.4,34.7,64.4,15.7,68.8C-3.4,73.1,-23.7,71.7,-41.7,62.8C-59.7,53.8,-75.3,37.3,-79.8,17.9C-84.3,-1.5,-77.7,-23.7,-64.7,-38.7C-51.6,-53.6,-32,-61.2,-14,-62.7C4,-64.2,23.3,-59.6,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="dewdrop-animation absolute bottom-1/4 left-[5%] w-20 h-20 md:w-40 md:h-40 opacity-20 pointer-events-none z-[1]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-accent-dark blur-2xl">
          <path d="M37.9,-54.2C51.1,-43.3,65.3,-34.5,72.6,-21.4C79.9,-8.3,80.3,9.1,72.6,23.1C64.8,37,49,47.4,33.5,56.8C18.1,66.2,3.1,74.7,-11.2,76.5C-25.5,78.3,-39.1,73.4,-49.2,63.1C-59.3,52.8,-65.9,37,-72.1,20.8C-78.3,4.6,-84.1,-12,-79.3,-25.9C-74.5,-39.8,-59,-51,-44.2,-61C-29.4,-71,-14.7,-79.8,-0.9,-78.6C12.9,-77.4,24.7,-65.1,37.9,-54.2Z" transform="translate(100 100)" />
        </svg>
      </div>

            <div className="container mx-auto px-6 relative z-10 hero-content w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-6 md:gap-8">
          {/* Top Detail Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center w-full"
          >
            <WaterDropAnimation />
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-brand-accent-light/50" />
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Orvalia Studio • Agência Boutique</span>
              <div className="w-12 h-[1px] bg-brand-accent-light/50" />
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
            className="flex flex-col items-center text-center w-full"
          >
            <div className="relative w-full overflow-visible">
              {/* [3 — H1 E HERO] SEO: H1 explícito e otimizado */}
              <h1 className="text-[9vw] md:text-6xl lg:text-[5.5rem] font-sans font-black leading-[1.05] tracking-tight md:tracking-tighter text-white flex flex-col items-center uppercase max-w-5xl mx-auto">
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
                  className="block text-gradient relative py-1 md:py-2"
                >
                  presença digital premium
                </motion.span>
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="block text-white/90 text-[6.5vw] sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-normal italic font-serif mt-2 md:mt-4"
                >
                  para negócios de Indaiatuba e região
                </motion.span>
              </h1>
              
              {/* Proposta de valor clara */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base md:text-xl text-brand-secondary leading-relaxed max-w-3xl mx-auto font-sans px-4 mt-4 md:mt-6"
              >
                Transformamos empresas locais em marcas mais desejadas, confiáveis e preparadas para vender melhor no digital — com estratégia, design, site e comunicação.
              </motion.p>
              
              <p className="sr-only">Orvalia Studio: Branding Estratégico, Criação de Sites e Performance Digital em Indaiatuba, Campinas, Itu, Sorocaba e RMC.</p>
            </div>
          </motion.div>

          {/* Bottom Action Section */}
          <div className="w-full mt-2 md:mt-4">
            <div className="flex flex-col items-center gap-6 w-full relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center justify-center w-full"
              >
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
                  <MagneticWrapper>
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
                      <span className="relative font-sans text-xs md:text-sm font-black uppercase tracking-[0.25em] text-brand-bg">Quero meu diagnóstico gratuito</span>
                      <ArrowRight className="relative text-brand-bg group-hover:translate-x-2 transition-transform" size={20} />
                    </motion.a>
                  </MagneticWrapper>
                  
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
                <div className="text-center mt-2 mb-8">
                  <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-brand-secondary/60">
                    Atendimento direto <span className="text-brand-accent-light mx-2">•</span> Diagnóstico estratégico <span className="text-brand-accent-light mx-2">•</span> Projetos sob medida
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 w-full">
                  {/* Buttons wrapper inside parent motion.div */}
                </div>

              </motion.div>

              {/* 1. Autoridade Regional Block */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-xl mx-auto py-8 border-y border-white/5 my-10 select-none"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] md:text-[11px] font-black text-brand-accent-light uppercase tracking-[0.3em] leading-none mb-3 font-mono">
                    Autoridade Regional
                  </span>
                  <span className="text-xs md:text-sm text-brand-secondary/80 font-light tracking-wide px-4">
                    Indaiatuba, Campinas, Itu, Sorocaba e RMC
                  </span>
                </div>
              </motion.div>
              
              {/* 2 & 3. Custom Key Features Row (3 items normalized) */}
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
                      delayChildren: 0.2
                    }
                  }
                }}
                className="flex flex-col items-center gap-10 w-full mt-6"
              >
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-14 lg:gap-16 items-center justify-center w-full max-w-5xl px-4">
                  {/* Item 1 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: paletteY }}
                    className="flex flex-col items-center text-center gap-3 shrink-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-accent-light/5 border border-brand-accent-light/10 flex items-center justify-center shadow-sm shrink-0">
                      <IconBrand className="text-brand-accent-light" size={18} />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-mono text-brand-secondary/90 font-medium tracking-[0.2em] whitespace-nowrap">IDENTIDADE SOB MEDIDA</span>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: globeY }}
                    className="flex flex-col items-center text-center gap-3 shrink-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-accent-light/5 border border-brand-accent-light/10 flex items-center justify-center shadow-sm shrink-0">
                      <IconAuthority className="text-brand-accent-light" size={18} />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-mono text-brand-secondary/90 font-medium tracking-[0.2em] whitespace-nowrap">POSICIONAMENTO DIGITAL</span>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: codeY }}
                    className="flex flex-col items-center text-center gap-3 shrink-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-accent-light/5 border border-brand-accent-light/10 flex items-center justify-center shadow-sm shrink-0">
                      <IconWeb className="text-brand-accent-light" size={18} />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-mono text-brand-secondary/90 font-medium tracking-[0.2em] whitespace-nowrap">SITE RÁPIDO E EFICIENTE</span>
                  </motion.div>
                </div>

                <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-white/10 to-transparent mt-4" />
                
                <p className="text-[9px] md:text-[10px] font-mono text-brand-secondary/40 uppercase tracking-[0.3em] mt-2">
                  [ Orvalia Studio ] Indaiatuba — RMC
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
