import fs from 'fs';
const filePath = 'src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `      <div className="container mx-auto px-6 relative z-10 hero-content">
        <div className="dna-grid">
          {/* Top Detail Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-4 lg:col-span-12 flex flex-col items-center text-center mb-6"
          >
            <div className="flex items-center justify-center gap-3 mb-0">
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
              <h1 className="text-[8.5vw] md:text-6xl lg:text-[5.5rem] font-sans font-black leading-[1.1] tracking-tight md:tracking-tighter text-white mb-5 flex flex-col items-center uppercase max-w-5xl mx-auto">
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
                  className="block text-white/90 text-[6vw] md:text-4xl lg:text-5xl font-light tracking-normal lowercase italic font-serif mt-2"
                >
                  para negócios de Indaiatuba e região
                </motion.span>
              </h1>
              
              {/* Proposta de valor clara */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base md:text-xl text-brand-secondary leading-relaxed max-w-3xl mx-auto mb-8 font-sans px-4 mt-6"
              >
                Transformamos empresas locais em marcas mais desejadas, confiáveis e preparadas para vender melhor no digital — com estratégia, design, site e comunicação.
              </motion.p>
              
              <p className="sr-only">Orvalia Studio: Branding Estratégico, Criação de Sites e Performance Digital em Indaiatuba, Campinas, Itu, Sorocaba e RMC.</p>
            </div>
          </motion.div>

          {/* Bottom Action Section */}
          <div className="col-span-4 lg:col-span-12 mt-10 md:mt-16 w-full">
            <div className="flex flex-col items-center gap-4 w-full relative">`;

const replacementStr = `      <div className="container mx-auto px-6 relative z-10 hero-content w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-8 md:gap-12">
          {/* Top Detail Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center w-full"
          >
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
                  className="block text-white/90 text-[6.5vw] sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-normal lowercase italic font-serif mt-3 md:mt-5"
                >
                  para negócios de Indaiatuba e região
                </motion.span>
              </h1>
              
              {/* Proposta de valor clara */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base md:text-xl text-brand-secondary leading-relaxed max-w-3xl mx-auto font-sans px-4 mt-8 md:mt-10"
              >
                Transformamos empresas locais em marcas mais desejadas, confiáveis e preparadas para vender melhor no digital — com estratégia, design, site e comunicação.
              </motion.p>
              
              <p className="sr-only">Orvalia Studio: Branding Estratégico, Criação de Sites e Performance Digital em Indaiatuba, Campinas, Itu, Sorocaba e RMC.</p>
            </div>
          </motion.div>

          {/* Bottom Action Section */}
          <div className="w-full mt-4 md:mt-8">
            <div className="flex flex-col items-center gap-6 w-full relative">`;

// Handle slight mismatches by replacing everything between `<div className="container mx-auto px-6 relative z-10 hero-content">` and `<div className="flex flex-col items-center gap-4 w-full relative">`

const startIdx = content.indexOf('<div className="container mx-auto px-6 relative z-10 hero-content">');
const endIdx = content.indexOf('<div className="flex flex-col items-center gap-4 w-full relative">');

if (startIdx !== -1 && endIdx !== -1) {
    const before = content.slice(0, startIdx);
    const after = content.slice(endIdx + '<div className="flex flex-col items-center gap-4 w-full relative">'.length);
    const newContent = before + replacementStr + after;
    fs.writeFileSync(filePath, newContent);
    console.log('Hero.tsx updated with Flexbox successfully');
} else {
    console.log('Could not find start or end index.');
}
