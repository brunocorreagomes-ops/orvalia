const fs = require('fs');

let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

content = content.replace(
  /<div className="dewdrop-animation absolute top-1\/4 right-\[10%\][^>]*\/>/g,
  `<div className="dewdrop-animation absolute top-1/4 right-[10%] w-32 h-32 md:w-64 md:h-64 opacity-20 pointer-events-none z-[1]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-accent-light blur-2xl">
          <path d="M47.7,-57.2C59.9,-46.8,66.6,-28.9,69.5,-10.8C72.3,7.4,71.2,25.9,61.8,40.1C52.4,54.4,34.7,64.4,15.7,68.8C-3.4,73.1,-23.7,71.7,-41.7,62.8C-59.7,53.8,-75.3,37.3,-79.8,17.9C-84.3,-1.5,-77.7,-23.7,-64.7,-38.7C-51.6,-53.6,-32,-61.2,-14,-62.7C4,-64.2,23.3,-59.6,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>`
);

content = content.replace(
  /<div className="dewdrop-animation absolute bottom-1\/4 left-\[5%\][^>]*\/>/g,
  `<div className="dewdrop-animation absolute bottom-1/4 left-[5%] w-20 h-20 md:w-40 md:h-40 opacity-20 pointer-events-none z-[1]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-accent-dark blur-2xl">
          <path d="M37.9,-54.2C51.1,-43.3,65.3,-34.5,72.6,-21.4C79.9,-8.3,80.3,9.1,72.6,23.1C64.8,37,49,47.4,33.5,56.8C18.1,66.2,3.1,74.7,-11.2,76.5C-25.5,78.3,-39.1,73.4,-49.2,63.1C-59.3,52.8,-65.9,37,-72.1,20.8C-78.3,4.6,-84.1,-12,-79.3,-25.9C-74.5,-39.8,-59,-51,-44.2,-61C-29.4,-71,-14.7,-79.8,-0.9,-78.6C12.9,-77.4,24.7,-65.1,37.9,-54.2Z" transform="translate(100 100)" />
        </svg>
      </div>`
);

fs.writeFileSync('src/components/Hero.tsx', content);
