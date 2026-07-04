import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

content = content.replace(
  /onLoad=\{\(e\) => \{ e\.currentTarget\.style\.opacity = '1'; e\.currentTarget\.style\.filter = 'none'; \}\} style=\{\{ filter: 'blur\(10px\)', opacity: 0, transition: 'filter 0\.5s ease-out, opacity 0\.5s ease-out' \}\} \/>/g,
  'onError={(e) => { e.currentTarget.style.opacity = \'0\'; }} />'
);

// wait, let's just do a simpler regex:
content = content.replace(/onError=\{\(e\) => \{ e\.currentTarget\.style\.opacity = '0'; \}\} onLoad=.* \/>/g, 
  'onError={(e) => { e.currentTarget.style.opacity = \'0\'; }} />');

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
