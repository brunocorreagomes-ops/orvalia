import fs from 'fs';
const filePath = 'src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// The file has overlapping elements because of this structure:
// <div className="text-center mb-4">...</div>
// <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">...</div>
// </motion.div>
// <motion.div ...>...</div>
// Remove the whole second motion div and the Autoridade regional block to keep it clean.

const parts = content.split('                {/* Microcopy below CTAs */}');
if (parts.length > 1) {
    const start = parts[0];
    const newEnd = `                {/* Microcopy below CTAs */}
                <div className="text-center mt-2">
                  <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-brand-secondary/60">
                    Atendimento direto <span className="text-brand-accent-light mx-2">•</span> Diagnóstico estratégico <span className="text-brand-accent-light mx-2">•</span> Projetos sob medida
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    fs.writeFileSync(filePath, start + newEnd);
    console.log('Hero.tsx fixed properly');
}
