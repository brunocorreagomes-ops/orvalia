import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

// Find all articles and remove duplicate captions
const articleRegex = /({[\s\S]*?})/g;

content = content.replace(articleRegex, (match) => {
  if (match.includes('id:') && match.includes('title:')) {
    // extract lines
    const lines = match.split('\n');
    const newLines = [];
    let hasCaption = false;
    for (const line of lines) {
      if (line.trim().startsWith('caption:')) {
        if (!hasCaption) {
          hasCaption = true;
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }
    return newLines.join('\n');
  }
  return match;
});

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
