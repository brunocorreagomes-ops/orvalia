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
    let changed = false;
    content = content.replace(/(<a[^>]*href="https:\/\/wa\.me[^>]*>)([\s\S]*?)(<\/a>)/g, (match, p1, p2, p3) => {
      if (p2.includes('<svg') || p2.includes('<img') || p1.includes('w-10 h-10') || p1.includes('fixed') || p1.includes('whatsapp') || p2.toLowerCase().includes('whatsapp')) {
        // preserve floating button or social links
        if (!p1.includes('Diagnóstico Gratuito') && !p2.includes('Diagnóstico Gratuito') && p1.includes('bg-brand-accent-light')) {
           return p1 + '\n                Diagnóstico Gratuito' + (p2.includes('TrendingUp') ? ' <TrendingUp size={18} />' : '') + '\n              ' + p3;
        }
        return match;
      }
      
      let newText = 'Diagnóstico Gratuito';
      if (p2.includes('TrendingUp')) {
        newText = 'Diagnóstico Gratuito <TrendingUp size={18} />';
      } else if (p2.includes('ArrowRight')) {
        newText = 'Diagnóstico Gratuito <ArrowRight size={18} />';
      } else if (p2.includes('MessageSquare')) {
        newText = 'Diagnóstico Gratuito <MessageSquare size={18} />';
      }
      changed = true;
      return p1 + '\n                ' + newText + '\n              ' + p3;
    });
    
    // Also change "Começar Agora" to "Diagnóstico Gratuito" 
    content = content.replace(/>\s*Começar Agora\s*</g, '>Diagnóstico Gratuito<');
    content = content.replace(/>\s*Falar no WhatsApp\s*</g, '>Diagnóstico Gratuito<');
    content = content.replace(/>\s*WhatsApp\s*</g, '>Diagnóstico Gratuito<');

    if (changed || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
    }
  }
});
