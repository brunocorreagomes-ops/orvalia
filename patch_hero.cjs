const fs = require('fs');

let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');
content = content.replace(
  /<div className="absolute top-1\/4 -right-1\/4[^>]*><\/div>/g, 
  `<div className="absolute top-1/4 -right-1/4 w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-brand-accent-dark/10 rounded-full blur-[100px] md:blur-[150px] opacity-50 mix-blend-screen animate-float" />
          {/* Organic Shape Dewdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] opacity-20 pointer-events-none mix-blend-screen z-0 dewdrop-animation">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-accent-light blur-3xl">
               <path d="M47.7,-57.2C59.9,-46.8,66.6,-28.9,69.5,-10.8C72.3,7.4,71.2,25.9,61.8,40.1C52.4,54.4,34.7,64.4,15.7,68.8C-3.4,73.1,-23.7,71.7,-41.7,62.8C-59.7,53.8,-75.3,37.3,-79.8,17.9C-84.3,-1.5,-77.7,-23.7,-64.7,-38.7C-51.6,-53.6,-32,-61.2,-14,-62.7C4,-64.2,23.3,-59.6,47.7,-57.2Z" transform="translate(100 100)" />
             </svg>
          </div>`
);

fs.writeFileSync('src/components/Hero.tsx', content);
