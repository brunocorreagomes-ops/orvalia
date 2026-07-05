const fs = require('fs');

let content = fs.readFileSync('src/components/Authority.tsx', 'utf8');

// Replace lucide-react with CustomIcons
content = content.replace(/import \{ ShieldCheck, Target, Zap \} from "lucide-react";/, "import { ShieldCheck } from 'lucide-react';\nimport { IconElite, IconWeb } from './CustomIcons';");

content = content.replace(/<Target/g, '<IconElite');
content = content.replace(/<Zap/g, '<IconWeb');

// Add authorship micro-detail
content = content.replace(
  /<span className="font-mono text-\[8px\] md:text-\[9px\] uppercase tracking-super-tight text-white\/40">Desenvolvido por Orvalia Studio<\/span>/,
  '<span className="font-mono text-[8px] md:text-[9px] uppercase tracking-super-tight text-white/40">Assinado: Bruno G.</span>'
);

fs.writeFileSync('src/components/Authority.tsx', content);
