import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Beth Olmeda",
    category: "Branding • Estética",
    metric: "280% de crescimento no tráfego em 60 dias",
    location: "Indaiatuba/SP",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg",
    span: "col-span-4 lg:col-span-12 h-[400px] md:h-[600px]"
  },
  {
    title: "Marta Ana Chiconato",
    category: "Estratégia • Terapia",
    metric: "Posicionamento premium consolidado",
    location: "Campinas/SP",
    image: "https://i.ibb.co/2366nSC3/marta-identidade.webp",
    span: "col-span-4 lg:col-span-6 h-[500px] md:h-[700px]"
  },
  {
    title: "Quinta de Caraíva",
    category: "Web • Experiência",
    metric: "Arquitetura de reservas otimizada",
    location: "Bahia/BR",
    image: "https://i.ibb.co/8nLt62wX/Captura-de-tela-2026-04-22-141843.webp",
    span: "col-span-4 lg:col-span-6 h-[400px] md:h-[500px]"
  },
  {
    title: "Dario Eletricidade",
    category: "Marketing • Digital",
    metric: "+150% em conversão de leads",
    location: "Indaiatuba/SP",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png",
    span: "col-span-4 lg:col-span-7 h-[500px] md:h-[600px]"
  },
  {
    title: "KNJ TUR",
    category: "Interface • Estratégia",
    metric: "Redesign de plataforma global",
    location: "São Paulo/BR",
    image: "https://i.ibb.co/S7W7szP4/Gemini-Generated-Image-oyd0rboyd0rboyd0.png",
    span: "col-span-4 lg:col-span-5 h-[350px] md:h-[400px]"
  }
];

function ProjectCard({ project, idx }: { project: any; idx: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current, 
        { yPercent: -10 },
        { 
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`${project.span} group relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] cursor-pointer bg-brand-bg/20 border border-white/5 transition-all duration-700 hover:border-brand-accent-light/30`}
    >
      <div className="absolute inset-0 z-0 scale-110 transition-transform duration-1000 group-hover:scale-100">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-[120%] object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-brand-bg/60 mix-blend-multiply group-hover:bg-brand-bg/20 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
      </div>

      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-secondary/60 group-hover:text-brand-accent-light transition-colors">
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-light" />
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40">
                {project.location}
              </span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl glass-premium border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight className="text-brand-accent-light" size={20} />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-ultra-tight uppercase leading-[0.9]">
            {project.title.split(' ')[0]} <br />
            <span className="text-white/40 group-hover:text-white transition-colors">
              {project.title.split(' ').slice(1).join(' ')}
            </span>
          </h3>
          
          <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-white/5">
            {project.metric && (
              <div className="flex items-center gap-3 bg-brand-accent-light/10 backdrop-blur px-5 py-2.5 rounded-2xl border border-brand-accent-light/20">
                <div className="w-2 h-2 rounded-full bg-brand-accent-light animate-pulse" />
                <span className="text-brand-accent-light font-black text-sm md:text-base uppercase tracking-tighter">
                  {project.metric}
                </span>
              </div>
            )}
            <div className="hidden md:flex px-4 py-2 border border-white/10 rounded-xl font-mono text-[9px] text-white/20 uppercase tracking-widest">
              Performance Otimizada
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="py-20 md:py-40 bg-brand-bg relative z-10">
      <div className="container mx-auto px-6">
        {/* Header DNA Grid */}
        <div className="dna-grid mb-24 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-4 lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent-light">Arquitetura de Portfólio</span>
            </div>
            <h2 className="responsive-subtitle font-sans font-black tracking-tighter md:tracking-ultra-tight text-white leading-[0.85]">
              RESULTADOS <br /> <span className="italic font-serif font-light text-brand-secondary">REAIS.</span>
            </h2>
          </motion.div>
          <div className="col-span-4 lg:col-span-6 flex lg:justify-end pb-4">
             <p className="max-w-xs text-brand-secondary/60 text-sm font-mono uppercase tracking-widest leading-relaxed text-left lg:text-right">
               [ Arquitetura de marca e produtos digitais que definem novos padrões de mercado local. ]
             </p>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="dna-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
