const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add line-clamp-2 to common paragraph classes
    content = content.replace(/className="([^"]*text-brand-secondary[^"]*text-sm[^"]*leading-relaxed[^"]*)"/g, (match, p1) => {
      if (!p1.includes('line-clamp')) {
        return `className="${p1} line-clamp-2"`;
      }
      return match;
    });
    
    // And also for white/80 paragraphs in features/cards
    content = content.replace(/className="([^"]*text-white\/80[^"]*font-light[^"]*text-sm[^"]*)"/g, (match, p1) => {
      if (!p1.includes('line-clamp')) {
        return `className="${p1} line-clamp-3"`;
      }
      return match;
    });

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
    }
  }
});
