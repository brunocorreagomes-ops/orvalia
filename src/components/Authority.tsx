import { motion } from "motion/react";
import { ShieldCheck, Target, HelpCircle } from "lucide-react";

export default function Authority() {
  return (
    <section className="py-40 px-8 md:px-24 bg-brand-bg relative overflow-hidden border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Layout 1 */}
        <div className="flex flex-col lg:flex-row gap-20 mb-40 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3 pt-4"
          >
            <span className="text-brand-accent-light text-[10px] uppercase font-black tracking-[0.3em] mb-6 block">Legacy & Excellence</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] leading-[1] mb-8">
              Branding de <br /> Autoridade.
            </h2>
            <div className="w-20 h-[1px] bg-brand-accent-light/30" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full lg:w-2/3"
          >
            <p className="text-brand-secondary text-xl md:text-2xl leading-relaxed font-medium mb-10 max-w-2xl">
              Nossa abordagem em Indaiatuba transcende a estética. Criamos um sistema de marca capaz de sustentar preços premium e liderança de mercado.
            </p>
            <p className="text-brand-secondary/60 text-lg leading-relaxed max-w-xl">
              Unimos rigor estratégico com execução tecnológica de ponta. Cada pixel é planejado para converter visitantes em clientes fiéis à sua promessa de marca.
            </p>
          </motion.div>
        </div>

        {/* Minimalist Question Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative group cursor-default"
        >
          <div className="absolute inset-0 bg-brand-accent-light/[0.02] transform scale-[0.98] blur-2xl group-hover:bg-brand-accent-light/[0.05] transition-all duration-700" />
          <div className="relative border-y border-white/[0.05] py-20 flex flex-col md:flex-row gap-12 items-center justify-between px-4">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">O que é Branding Estratégico?</h3>
              <p className="text-brand-secondary/80 leading-relaxed">
                Não é apenas um logo. É a percepção emocional construída através de cada ponto de contato. Do site rápido à identidade visual, garantimos que sua empresa em Indaiatuba seja a primeira escolha.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-4 group">
              <div className="w-16 h-[1px] bg-white/10 group-hover:w-24 transition-all duration-500" />
              <ShieldCheck className="text-brand-accent-light/40 group-hover:text-brand-accent-light transition-colors" size={32} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
