const fs = require('fs');

let content = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');

// Replace grid with a list
content = content.replace(
  /<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">/,
  '<div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/10">'
);

// Remove card background and make it inline padding
content = content.replace(
  /className="p-8 rounded-\[2\.5rem\] bg-white\/\[0\.02\] border border-white\/5 hover:border-brand-accent-light\/30 transition-all group"/g,
  'className="p-8 lg:px-12 flex-1 flex flex-col items-center text-center transition-all group"'
);

fs.writeFileSync('src/components/TrustSection.tsx', content);
