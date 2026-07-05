const fs = require('fs');
let content = fs.readFileSync('src/components/Process.tsx', 'utf8');

content = content.replace(
  /<div className="text-center mb-24">[\s\S]*?<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-4 gap-12">[\s\S]*?\{steps\.map\(\(step, idx\) => \([\s\S]*?className="relative"[\s\S]*?>[\s\S]*?<div className="text-5xl font-bold opacity-10 mb-8 font-mono">\{step\.num\}<\/div>[\s\S]*?<h3 className="text-xl font-bold text-white mb-4">\{step\.title\}<\/h3>[\s\S]*?<p className="text-brand-secondary text-sm leading-relaxed line-clamp-2">\{step\.desc\}<\/p>[\s\S]*?\{idx < steps\.length - 1 && \([\s\S]*?<div className="hidden md:block absolute top-\[25px\] left-full w-full h-\[1px\] bg-white\/5 -translate-x-1\/2" \/>[\s\S]*?\)\][\s\S]*?<\/motion\.div>[\s\S]*?\)\)}[\s\S]*?<\/div>/m,
  `<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 flex flex-col justify-start">
            <span className="text-brand-accent-light font-bold text-[10px] uppercase tracking-widest block mb-6">Metodologia</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.1]">Processo simplificado, <span className="text-gradient">resultados sofisticados.</span></h2>
            <div className="mt-12 pt-8 border-t border-white/5 hidden lg:block">
              <p className="italic font-serif text-brand-secondary/70 text-sm leading-relaxed">
                "O design só funciona quando a estratégia é inquestionável." <br/><br/>
                <span className="font-sans font-black text-[9px] uppercase tracking-widest text-white/40 not-italic">— Orvalia Studio</span>
              </p>
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={\`relative \${idx % 2 !== 0 ? 'sm:mt-12' : ''}\`}
              >
                <div className="flex items-end gap-4 mb-6 border-b border-white/5 pb-4">
                  <div className="text-3xl md:text-4xl font-bold opacity-20 font-mono text-brand-accent-light leading-none">{step.num}</div>
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight leading-none mb-1">{step.title}</h3>
                </div>
                <p className="text-brand-secondary/80 text-sm md:text-base font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>`
);

fs.writeFileSync('src/components/Process.tsx', content);
