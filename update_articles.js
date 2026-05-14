import fs from 'fs';

const files = [
  'Article3.tsx', 'Article4.tsx',
  'Article5.tsx', 'Article6.tsx', 'Article7.tsx', 'Article8.tsx'
];

files.forEach(file => {
  const path = `./src/pages/Blog/${file}`;
  if (!fs.existsSync(path)) return;
  
  let content = fs.readFileSync(path, 'utf8');

  // Add ShareButton import
  if (!content.includes('ShareButton')) {
    content = content.replace(
      /import { ChevronLeft, ArrowRight } from "lucide-react";/g,
      'import { ChevronLeft, ArrowRight } from "lucide-react";\nimport ShareButton from "../../components/ShareButton";'
    );
  }

  // Replace background and container
  content = content.replace(
    /className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24"/g,
    'className="min-h-screen bg-[#FAFAFA] pt-40 pb-20 px-8 md:px-24"'
  );

  // Replace Back link and ShareButton
  content = content.replace(
    /<Link to="\/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">([\s\S]*?)<\/Link>/,
    `<div className="flex justify-between items-center mb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">
            <ChevronLeft size={16} />
            Voltar ao Blog
          </Link>
          <ShareButton />
        </div>`
  );

  // Replace header span
  content = content.replace(
    /<span className="text-brand-accent-light text-\[10px\] font-black uppercase tracking-\[0\.3em\] block mb-4">(.*?)<\/span>/,
    `<motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
          >
            $1
          </motion.span>`
  );

  // Replace H1
  content = content.replace(
    /<h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-\[1\.1\] mb-8">([\s\S]*?)<\/h1>/,
    `<motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >
$1</motion.h1>`
  );

  // Replace Meta info
  content = content.replace(
    /<div className="flex items-center gap-4 text-brand-secondary text-sm">\s*<span>(.*?)<\/span>\s*<span className="w-1 h-1 rounded-full bg-white\/20" \/>\s*<span>(.*?)<\/span>\s*<\/div>/,
    `<motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>$1</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>$2</span>
          </motion.div>`
  );

  // Replace prose wrapper
  content = content.replace(
    /<div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">/,
    `<div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8 font-sans selection:bg-black selection:text-white">`
  );

  // Replace first paragraph
  content = content.replace(
    /<p>(.*?)<\/p>/,
    '<p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">$1</p>'
  );

  // Replace Box
  content = content.replace(
    /<div className="p-8 rounded-3xl bg-white\/5 border border-white\/10 my-12">/,
    `<div className="p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">`
  );

  // Replace H3 in box
  content = content.replace(
    /<h3 className="text-white font-bold mb-6">(.*?)<\/h3>/,
    `<h3 className="text-2xl font-black text-black tracking-tighter mb-8 uppercase">$1</h3>`
  );

  // Replace text-brand-accent-light font-bold checkmarks
  content = content.replace(
    /<li className="flex gap-4">\s*<span className="text-brand-accent-light font-bold">(.*?)<\/span>\s*<span><strong>(.*?)<\/strong>\s*(.*?)<\/span>\s*<\/li>/g,
    `<li className="flex gap-4">
                <span className="font-mono text-black font-black">$1 //</span>
                <div>
                  <strong className="text-black block mb-1">$2</strong>
                  <span className="text-gray-600">$3</span>
                </div>
              </li>`
  );

  // For bullet points without strong tags
  content = content.replace(
    /<li className="flex gap-4">\s*<span className="text-brand-accent-light font-bold">(.*?)<\/span>\s*<span>(.*?)<\/span>\s*<\/li>/g,
    `<li className="flex gap-4">
                <span className="font-mono text-black font-black">$1 //</span>
                <div>
                  <span className="text-gray-600">$2</span>
                </div>
              </li>`
  );
  
  // List with <li><strong>X. title:</strong> content</li>
  content = content.replace(
    /<li><strong>(\d+\.)\s+(.*?):?<\/strong>\s*(.*?)<\/li>/g,
    `<li className="flex gap-4">
                <span className="font-mono text-black font-black">$1 //</span>
                <div>
                  <strong className="text-black block mb-1">$2</strong>
                  <span className="text-gray-600">$3</span>
                </div>
              </li>`
  );
  
  // Replace inline links
  content = content.replace(
    /className="text-brand-accent-light hover:underline"/g,
    'className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all"'
  );

  // Footer format
  content = content.replace(
    /<footer className="mt-20 pt-10 border-t border-white\/5">/,
    `<footer className="mt-32">`
  );

  content = content.replace(
    /<div className="p-12 rounded-\[2\.5rem\] glass-premium border border-brand-accent-light\/20 text-center">/,
    `<motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >\n<div className="relative z-10">`
  );

  content = content.replace(
    /<h3 className="text-2xl font-bold text-white mb-6">(.*?)<\/h3>/,
    `<h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">$1</h3>`
  );

  content = content.replace(
    /className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-\[0_0_30px_rgba\(25,211,101,0\.3\)\]"/g,
    `className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"`
  );

  content = content.replace(
    /<\/a>\s*<\/div>\s*<\/footer>/,
    `</a>\n            </div>\n            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />\n          </motion.div>\n        </footer>`
  );

  // Replace text-white class if any remaining in list items
  content = content.replace(/text-white/g, 'text-black');
  
  // Revert back some black elements to white
  content = content.replace(/bg-black text-black/g, 'bg-black text-white');
  content = content.replace(/selection:text-black/g, 'selection:text-white');
  content = content.replace(/text-black group-hover:text-black/g, 'text-white group-hover:text-white');

  fs.writeFileSync(path, content, 'utf8');
});

console.log("Done");
