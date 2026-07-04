const fs = require('fs');
let content = fs.readFileSync('src/pages/MarketingLandingPage.tsx', 'utf8');

content = content.replace(
  /<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6 border-t border-white\/5">/g,
  `<div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                      <Link to="/agencia-indaiatuba" className="inline-block text-[10px] font-black uppercase tracking-widest text-brand-accent-light hover:text-white transition-colors border-b border-brand-accent-light hover:border-white pb-1">
                        Ver mais projetos como este
                      </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6 mt-4 border-t border-white/5">`
);

fs.writeFileSync('src/pages/MarketingLandingPage.tsx', content);
