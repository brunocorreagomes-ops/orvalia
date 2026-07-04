import fs from 'fs';
const filePath = 'src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `                {/* Microcopy below CTAs */}
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
}`;

const replacementStr = `                {/* Microcopy below CTAs */}
                <div className="text-center mt-2 mb-8">
                  <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-brand-secondary/60">
                    Atendimento direto <span className="text-brand-accent-light mx-2">•</span> Diagnóstico estratégico <span className="text-brand-accent-light mx-2">•</span> Projetos sob medida
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 w-full border-t border-white/5 pt-8">
                  <div className="flex flex-col justify-center text-center">
                    <span className="text-[10px] font-black text-brand-accent-light uppercase tracking-widest leading-none mb-1">Autoridade Regional</span>
                    <span className="text-xs text-white/80 font-medium">Indaiatuba, Campinas, Itu, Sorocaba e RMC</span>
                  </div>
                </div>

              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8
                    }
                  }
                }}
                className="flex flex-col items-center gap-6 mt-12 w-full hidden md:flex"
              >
                <div className="flex gap-8 md:gap-16 items-center scale-90 md:scale-100">
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: paletteY }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Palette className="text-brand-accent-light" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">IDENTIDADE SOB MEDIDA</span>
                  </motion.div>

                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: globeY }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Globe className="text-brand-accent-light" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">POSICIONAMENTO DIGITAL</span>
                  </motion.div>

                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ y: codeY }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Code className="text-brand-accent-dark" size={20} />
                    <span className="text-[9px] font-mono text-brand-secondary tracking-widest">SITE RÁPIDO E EFICIENTE</span>
                  </motion.div>
                </div>

                <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <p className="text-[10px] font-mono text-brand-secondary/60 uppercase tracking-[0.3em]">
                  [ Orvalia Agency ] indaiatuba — rmc
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`;

content = content.replace(targetStr, replacementStr);
fs.writeFileSync(filePath, content);
console.log('Hero.tsx fully restored in normal flow');
