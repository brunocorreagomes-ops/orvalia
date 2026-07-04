import fs from 'fs';
const filePath = 'src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix 1: section classes (reduce padding, change min-h)
content = content.replace(
  'className="hero-canvas relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-brand-bg"',
  'className="hero-canvas relative min-h-[100svh] md:min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-brand-bg"'
);

// Fix 2: lowercase removal and padding/margins in the text
content = content.replace(
  'className="block text-white/90 text-[6.5vw] sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-normal lowercase italic font-serif mt-3 md:mt-5"',
  'className="block text-white/90 text-[6.5vw] sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-normal italic font-serif mt-2 md:mt-4"'
);

// Fix 3: Wrapper gap and margins
content = content.replace(
  '<div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-8 md:gap-12">',
  '<div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-6 md:gap-8">'
);

// Reduce mt-8 md:mt-10 to mt-4 md:mt-6 on paragraph
content = content.replace(
  'className="text-base md:text-xl text-brand-secondary leading-relaxed max-w-3xl mx-auto font-sans px-4 mt-8 md:mt-10"',
  'className="text-base md:text-xl text-brand-secondary leading-relaxed max-w-3xl mx-auto font-sans px-4 mt-4 md:mt-6"'
);

// Reduce mt-4 md:mt-8 on Bottom Action Section wrapper
content = content.replace(
  '<div className="w-full mt-4 md:mt-8">',
  '<div className="w-full mt-2 md:mt-4">'
);

// Fix 'indaiatuba — rmc' -> 'Indaiatuba — RMC'
content = content.replace(
  '[ Orvalia Agency ] indaiatuba — rmc',
  '[ Orvalia Agency ] Indaiatuba — RMC'
);

// The icons block has mt-12, let's change to mt-8
content = content.replace(
  'className="flex flex-col items-center gap-6 mt-12 w-full hidden md:flex"',
  'className="flex flex-col items-center gap-4 mt-8 w-full hidden md:flex"'
);

fs.writeFileSync(filePath, content);
console.log('Hero.tsx fully updated');
