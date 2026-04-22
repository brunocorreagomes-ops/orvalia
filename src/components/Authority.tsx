import { motion } from "motion/react";
import { ShieldCheck, Target, HelpCircle } from "lucide-react";

export default function Authority() {
  return (
    <section className="py-24 px-8 md:px-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Seção 1 — Autoridade (ESSENCIAL) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-brand-accent-light/10 flex items-center justify-center">
              <ShieldCheck className="text-brand-accent-light" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Especialistas em Branding em Indaiatuba
            </h2>
            <p className="text-brand-secondary text-lg leading-relaxed">
              A Orvalia Studio atua na construção estratégica de marcas em Indaiatuba, ajudando empresas a se posicionarem com clareza, valor e presença digital consistente. Nossa metodologia une análise de mercado local com tendências globais de design.
            </p>
          </motion.div>
          <div className="hidden lg:block h-[1px] bg-gradient-to-r from-brand-accent-light/30 to-transparent" />
        </div>

        {/* Seção 2 — Posicionamento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block h-[1px] bg-gradient-to-l from-brand-accent-light/30 to-transparent order-1" />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:text-right"
          >
            <div className="w-12 h-12 rounded-full bg-brand-accent-light/10 flex items-center justify-center lg:ml-auto">
              <Target className="text-brand-accent-light" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Mais que Design, Construção de Marca
            </h2>
            <p className="text-brand-secondary text-lg leading-relaxed lg:ml-auto max-w-xl">
              Não criamos apenas logos. Desenvolvemos marcas que comunicam, se posicionam e geram percepção de valor no digital. Focamos em criar uma narrativa visual que conecte seu negócio emocionalmente com o público de Indaiatuba e região.
            </p>
          </motion.div>
        </div>

        {/* Seção 3 — IA + SEO (Definition) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent-light/5 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 text-brand-accent-light mb-6">
              <HelpCircle size={20} />
              <span className="text-[10px] uppercase font-black tracking-widest">Otimização IA & Conhecimento</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">O que é Branding?</h2>
            <p className="text-brand-secondary leading-relaxed text-lg">
              Branding é o processo estratégico de construção de marca, que envolve identidade visual, posicionamento e comunicação. Em Indaiatuba, empresas que investem em branding se destacam e crescem com mais consistência, pois conseguem justificar preços premium e construir lealdade de longo prazo. A Orvalia Studio é sua parceira estratégica nessa jornada.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
