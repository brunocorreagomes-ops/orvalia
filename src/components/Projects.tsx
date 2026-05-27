import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Beth Olmeda. 280% de tráfego",
    category: "Branding • Estética",
    metric: "280% de crescimento no tráfego em 60 dias",
    location: "Indaiatuba/SP",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg",
    span: "col-span-4 lg:col-span-12 h-[400px] md:h-[600px]"
  },
  {
    title: "Ryna Hayashi. Posicionamento de Elite",
    category: "Estratégia • Psicologia",
    metric: "Atração de clientes de alto padrão sob demanda",
    location: "São Paulo/BR",
    image: "https://i.ibb.co/S7733Rfs/ryna-hayashi.webp",
    span: "col-span-4 lg:col-span-12 h-[400px] md:h-[600px]"
  },
  {
    title: "Marta Ana Chiconato. Posicionamento Premium",
    category: "Estratégia • Terapia",
    metric: "Autoridade consolidada na RMC",
    location: "Campinas/SP",
    image: "https://i.ibb.co/2366nSC3/marta-identidade.webp",
    span: "col-span-4 lg:col-span-6 h-[500px] md:h-[700px]"
  },
  {
    title: "Quinta de Caraíva. Arquitetura Digital",
    category: "Web • Experiência",
    metric: "Fluxo de reservas automatizado",
    location: "Bahia/BR",
    image: "https://i.ibb.co/8nLt62wX/Captura-de-tela-2026-04-22-141843.webp",
    span: "col-span-4 lg:col-span-6 h-[400px] md:h-[500px]"
  },
  {
    title: "Dario Eletricidade. +150% em Conversão",
    category: "Marketing • Digital",
    metric: "Domínio orgânico em Indaiatuba",
    location: "Indaiatuba/SP",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png",
    span: "col-span-4 lg:col-span-7 h-[500px] md:h-[600px]"
  },
  {
    title: "KNJ TUR. Redesign Global",
    category: "Interface • Estratégia",
    metric: "Presença digital internacional de elite",
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
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-[120%] object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-brand-bg/80 mix-blend-multiply group-hover:bg-brand-bg/10 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
      </div>

      <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-brand-secondary/60 group-hover:text-brand-accent-light transition-colors">
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-light" />
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/60">
                {project.location}
              </span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-2xl glass-premium border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-700 shadow-2xl">
            <ArrowUpRight className="text-brand-accent-light" size={24} />
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-4xl md:text-7xl font-black text-white tracking-ultra-tight uppercase leading-[0.85]">
            {project.title.split(' ')[0]} <br />
            <span className="text-white/20 group-hover:text-white transition-colors duration-700">
              {project.title.split(' ').slice(1).join(' ')}
            </span>
          </h3>
          
          <div className="flex flex-wrap gap-4 items-center pt-8 border-t border-white/10">
            {project.metric && (
              <div className="flex items-center gap-4 bg-brand-accent-light text-brand-bg px-6 py-3 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-brand-accent-light/20 transition-all">
                <TrendingUp size={18} />
                <span className="font-black text-sm md:text-base uppercase tracking-tighter">
                  {project.metric}
                </span>
              </div>
            )}
            <div className="hidden md:flex px-5 py-3 border border-white/20 rounded-xl font-mono text-[10px] text-white uppercase tracking-widest bg-white/5 backdrop-blur-sm">
              Elite Standard
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
          {/* Projetos CTA - Enhanced UX and Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-4 lg:col-span-12 mt-20 p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-brand-accent-light text-center border border-white/10 relative overflow-hidden group shadow-[0_0_80px_rgba(0,255,209,0.15)]"
          >
            <div className="relative z-10">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="inline-block px-4 py-1.5 bg-brand-bg/10 rounded-full font-mono text-[10px] uppercase tracking-[0.3em] text-brand-bg/60 mb-8"
               >
                 Inicie sua transformação
               </motion.div>
               
              <h3 className="text-4xl md:text-7xl font-black text-brand-bg tracking-ultra-tight uppercase mb-8 leading-[0.9]">
                 Gostou dos <br className="hidden md:block" /> <span className="text-white">Resultados?</span>
               </h3>
               
               <p className="text-brand-bg/90 text-lg md:text-2xl font-serif italic mb-12 max-w-2xl mx-auto leading-tight">
                 "O posicionamento de elite não é sobre ser visto, é sobre ser desejado pelo valor que você entrega."
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                 <motion.a 
                   href="https://wa.me/5511978959567?text=Olá!%20Acabei%20de%20ver%20os%20cases%20da%20agência%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="group relative inline-flex items-center gap-6 bg-brand-bg text-brand-accent-light px-12 md:px-18 py-6 md:py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl hover:shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all"
                 >
                   <span>Seja o próximo Case</span>
                   <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform" />
                 </motion.a>
                 
                 <span className="font-mono text-[9px] text-brand-bg/40 uppercase tracking-widest">
                   Consultoria Grátis inclusa
                 </span>
               </div>
            </div>
            
            {/* Background elements - Animated and subtle */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
            
            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
