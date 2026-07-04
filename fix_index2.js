import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

content = content.replace(
  /onError=\{\(e\) => \{ e\.currentTarget\.style\.opacity = '0'; \}\} onError=\{\(e\) => \{ e\.currentTarget\.style\.opacity = '0'; \}\} \/>/g,
  'onError={(e) => { e.currentTarget.style.opacity = \'0\'; }} />'
);

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
