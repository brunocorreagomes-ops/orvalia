import { motion } from "motion/react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Beth Olmeda",
    category: "Estética Facial",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg",
    color: "#8FA3B8"
  },
  {
    title: "Dario Eletricidade",
    category: "Website Mobile",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png",
    color: "#2D6BFF"
  },
  {
    title: "Marta Ana Chiconato",
    category: "Terapia Integrativa • Web • Branding • Social",
    image: "https://i.ibb.co/2366nSC3/marta-identidade.webp",
    color: "#8FA3B8"
  },
  {
    title: "KNJ TUR",
    category: "Website Estratégico • Social Media",
    image: "https://i.ibb.co/S7W7szP4/Gemini-Generated-Image-oyd0rboyd0rboyd0.png",
    color: "#5DAEFF"
  },
  {
    title: "Quinta de Caraíva",
    category: "Website Completo • Estratégico • Responsivo",
    image: "https://i.ibb.co/8nLt62wX/Captura-de-tela-2026-04-22-141843.webp",
    color: "#0055FF"
  }
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  return (
    <section id="projetos" className="py-32 px-8 md:px-24 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-brand-accent-light font-bold text-[10px] uppercase tracking-widest block mb-4">Portfólio Selecionado</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Trabalhos que elevam <br /> marcas ao próximo nível.</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-brand-accent-light transition-all focus:outline-none"
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-brand-accent-light transition-all focus:outline-none"
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="embla__container flex gap-8"
        >
          {projects.map((project, idx) => (
            <motion.a
              href="#"
              key={idx}
              variants={itemVariants}
              className="embla__slide flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] group relative h-[500px] md:h-[650px] rounded-[2.5rem] overflow-hidden glass cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent-light"
              aria-label={`Ver detalhes do projeto ${project.title} na categoria ${project.category}`}
            >
              <img 
                src={project.image} 
                alt="" 
                role="presentation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-brand-bg/0 to-transparent opacity-90" />
              
              <div className="absolute bottom-12 left-12 right-12 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[10px] font-black text-brand-accent-light uppercase tracking-[0.3em]">{project.category}</span>
                <h3 className="text-3xl md:text-4xl font-black text-white mt-3">{project.title}</h3>
                
                <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <div className="h-[1px] w-12 bg-brand-accent-light" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Ver Projeto</span>
                </div>
              </div>

              {/* Sophisticated Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_100px_rgba(0,85,255,0.1)]" />
              <div className="absolute -inset-1 border border-white/0 group-hover:border-brand-accent-light/20 rounded-[2.5rem] transition-all duration-700 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
