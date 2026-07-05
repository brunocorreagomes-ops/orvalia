const fs = require('fs');

let content = fs.readFileSync('src/components/Projects.tsx', 'utf8');

content = content.replace(
  /className="absolute inset-0 z-0 scale-110 transition-transform duration-1000 group-hover:scale-100"/,
  'className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105"'
);

// We need to change the structure of ProjectCard. Let's replace the whole function.
const newCard = `function ProjectCard({ project, idx }: { project: any; idx: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current, 
        { yPercent: -5 },
        { 
          yPercent: 5,
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
      className={\`\${project.span} group flex flex-col relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] cursor-pointer bg-white/[0.02] border border-white/5 transition-all duration-700 hover:border-brand-accent-light/30\`}
    >
      <div className="relative w-full h-[50%] md:h-[55%] overflow-hidden bg-brand-bg/50">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.client} 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-[120%] object-cover object-top transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent z-10" />
        
        {/* Top: Client Name & Segment (moved into image area) */}
        <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-20">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-brand-secondary/90 group-hover:text-brand-accent-light transition-colors drop-shadow-md">
              {project.segment}
            </span>
            <h3 className="text-xl md:text-3xl font-sans font-black text-white tracking-tight uppercase drop-shadow-lg">
              {project.client}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl glass-premium border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-2xl bg-black/20 backdrop-blur-md">
            <ArrowUpRight className="text-brand-accent-light" size={18} />
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between z-10 bg-gradient-to-b from-brand-bg/40 to-transparent">
        {/* Middle/Bottom: Context, Solution, and Metric */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-left">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-brand-secondary/60 block mb-2 font-mono">Contexto</span>
              <p className="text-brand-secondary/80 font-light leading-relaxed line-clamp-3">
                {project.context}
              </p>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-brand-accent-light block mb-2 font-mono">Solução Orvalia</span>
              <p className="text-brand-secondary/80 font-light leading-relaxed line-clamp-3">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end pt-6 mt-6 border-t border-white/5">
          {project.metric && (
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 text-brand-secondary px-4 py-2 rounded-xl">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-accent-light shrink-0">Resultado //</span>
              <span className="font-sans font-medium text-xs text-white/90 tracking-tight text-left">
                {project.metric}
              </span>
            </div>
          )}
          <div className="flex items-center gap-4 ml-auto shrink-0 mt-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent-light font-black group-hover:underline transition-all">
              {project.cta || "Ver projeto"}
            </span>
            <div className="px-4 py-2 border border-white/10 rounded-xl font-mono text-[9px] text-brand-secondary/60 uppercase tracking-widest">
              {project.location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}`;

content = content.replace(/function ProjectCard\(\{ project, idx \}: \{ project: any; idx: number \}\) \{[\s\S]*?\}\s*export default function Projects/m, newCard + '\n\nexport default function Projects');

fs.writeFileSync('src/components/Projects.tsx', content);
