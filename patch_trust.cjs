const fs = require('fs');

let content = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');

// Change text-center header to a left-aligned wide header
content = content.replace(
  /<div className="text-center mb-16">[\s\S]*?<\/div>/,
  `<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
    <div>
      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-4 block">Diferenciais</span>
      <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">Por que escolher a <br/><span className="text-gradient">Orvalia Studio?</span></h2>
    </div>
    <div className="flex justify-start lg:justify-end">
      <p className="text-brand-secondary/80 max-w-sm text-sm font-light">Elevamos o nível do seu negócio na internet, para que você não precise competir por preço, e sim por valor.</p>
    </div>
  </div>`
);

// Change symmetric divide-x text-center items to a staggered grid or left-aligned cards
content = content.replace(
  /<div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white\/10">[\s\S]*?\{differentiators\.map\(\(item, idx\) => \([\s\S]*?className="p-8 lg:px-12 flex-1 flex flex-col items-center text-center transition-all group"[\s\S]*?>[\s\S]*?<div className="w-12 h-12 rounded-2xl bg-brand-accent-light\/10 flex items-center justify-center mb-6 border border-brand-accent-light\/20 group-hover:bg-brand-accent-light\/20 transition-all">[\s\S]*?<item.icon className="text-brand-accent-light" size=\{24\} \/>[\s\S]*?<\/div>[\s\S]*?<h3 className="text-white font-black text-lg uppercase tracking-tight mb-4">\{item\.title\}<\/h3>[\s\S]*?<p className="text-brand-secondary\/70 text-sm leading-relaxed line-clamp-2">\{item\.desc\}<\/p>[\s\S]*?<\/motion\.div>[\s\S]*?\)\)}[\s\S]*?<\/div>/,
  `<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {differentiators.map((item, idx) => (
      <motion.div 
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className={\`p-8 lg:p-10 bg-white/[0.02] border border-white/5 rounded-3xl transition-all group relative overflow-hidden \${idx === 1 ? 'md:-translate-y-6' : ''}\`}
      >
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
           <item.icon size={120} className="text-white" />
        </div>
        
        <div className="w-12 h-12 rounded-xl bg-brand-accent-light/10 flex items-center justify-center mb-10 border border-brand-accent-light/20 group-hover:bg-brand-accent-light/20 transition-all">
          <item.icon className="text-brand-accent-light" size={24} />
        </div>
        <h3 className="text-white font-black text-lg uppercase tracking-tight mb-4 pr-8">{item.title}</h3>
        <p className="text-brand-secondary/80 text-sm leading-relaxed">{item.desc}</p>
        
        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
           <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Diferencial {idx + 1}</span>
           <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-light/50" />
        </div>
      </motion.div>
    ))}
  </div>`
);

content = content.replace(/<div className="mt-16 flex justify-center">/, '<div className="mt-20 flex justify-center">');

fs.writeFileSync('src/components/TrustSection.tsx', content);
