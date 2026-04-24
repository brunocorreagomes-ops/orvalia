import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Beth Olmeda",
    category: "Branding • Estética",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg",
    span: "col-span-12 lg:col-span-12 h-[600px]"
  },
  {
    title: "Marta Ana Chiconato",
    category: "Estratégia • Terapia",
    image: "https://i.ibb.co/2366nSC3/marta-identidade.webp",
    span: "col-span-12 lg:col-span-6 h-[700px]"
  },
  {
    title: "Quinta de Caraíva",
    category: "Web • Experiência",
    image: "https://i.ibb.co/8nLt62wX/Captura-de-tela-2026-04-22-141843.webp",
    span: "col-span-12 lg:col-span-6 h-[500px]"
  },
  {
    title: "Dario Eletricidade",
    category: "Marketing • Digital",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png",
    span: "col-span-12 lg:col-span-7 h-[600px]"
  },
  {
    title: "KNJ TUR",
    category: "Interface • Estratégia",
    image: "https://i.ibb.co/S7W7szP4/Gemini-Generated-Image-oyd0rboyd0rboyd0.png",
    span: "col-span-12 lg:col-span-5 h-[400px]"
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 md:py-40 bg-brand-bg relative z-10">
      <div className="container mx-auto px-6">
        {/* Header DNA Grid */}
        <div className="grid grid-cols-12 gap-6 mb-24 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-accent-light">Arquitetura de Portfólio</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-sans font-black tracking-ultra-tight text-white leading-[0.85]">
              RESULTADOS <br /> <span className="italic font-serif font-light text-brand-secondary">REAIS.</span>
            </h2>
          </motion.div>
          <div className="col-span-12 lg:col-span-6 flex justify-end pb-4">
             <p className="max-w-xs text-brand-secondary/60 text-sm font-mono uppercase tracking-widest leading-relaxed text-right">
               [ Arquitetura de marca e produtos digitais que definem novos padrões de mercado local. ]
             </p>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`${project.span} group relative overflow-hidden rounded-[3rem] cursor-pointer`}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-bg/40 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </motion.div>

              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-accent-light bg-brand-bg/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-full glass-premium flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="text-brand-accent-light" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
