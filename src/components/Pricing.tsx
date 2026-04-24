import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "ESSENCIAL",
    focus: "MÉDIA ESCALA",
    price: "R$ 1.497",
    features: ["Landing Page High-Performance", "Identidade Visual Minimalista", "Infraestrutura Cloud"],
    link: "/plano-essencial",
    id: "01"
  },
  {
    name: "PROFISSIONAL",
    focus: "ALTA AUTORIDADE",
    price: "R$ 3.997",
    features: ["Ecossistema Web Completo", "Branding Estratégico Pro", "SEO Geo-Local AI", "Motion Design Assets"],
    link: "/plano-profissional",
    highlight: true,
    id: "02"
  },
  {
    name: "EVOLUÇÃO",
    focus: "CONTROLE ELITE",
    price: "CONSULTA",
    features: ["Business Intelligence Integrado", "Gestão de Tráfego & ROI", "Consultoria de Expansão", "Product Architecture"],
    link: "/plano-evolucao",
    id: "03"
  }
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 md:py-48 bg-brand-bg">
      <div className="container mx-auto px-6">
        {/* DNA Header Grid */}
        <div className="dna-grid mb-24 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Lógica de Investimento</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-sans font-black text-white tracking-ultra-tight leading-[0.85]">
              ARQUITETURA <br /> <span className="italic font-serif font-light text-brand-secondary">DE VALOR.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end text-right">
             <p className="text-brand-secondary/60 text-sm font-mono uppercase tracking-widest leading-relaxed">
               [ Modelos de investimento projetados para transformar sua presença digital em um ativo de lucro constante. ]
             </p>
          </div>
        </div>

        {/* Pricing DNA Grid */}
        <div className="dna-grid mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`col-span-12 lg:col-span-4 p-10 md:p-14 rounded-[3.5rem] glass-premium relative flex flex-col justify-between overflow-hidden group ${plan.highlight ? 'border-brand-accent-light/20 glow-cyan' : 'border-white/5'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 p-8">
                   <div className="px-3 py-1 bg-brand-accent-light rounded-full text-[8px] font-black uppercase tracking-widest text-brand-bg">PREMIUM</div>
                </div>
              )}
              
              <div>
                <span className="font-mono text-[9px] text-brand-accent-light/40 mb-6 block">{plan.id} // {plan.focus}</span>
                <h3 className="text-4xl font-black text-white tracking-super-tight mb-4">{plan.name}</h3>
                <div className="text-xl font-bold text-brand-secondary mb-12 uppercase tracking-[0.1em]">{plan.price}</div>
                
                <ul className="space-y-6 mb-16">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-4 text-brand-secondary/80 text-xs uppercase tracking-widest leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-light shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to={plan.link}
                className="group/btn relative py-5 px-10 rounded-full border border-white/10 flex items-center justify-center gap-4 overflow-hidden transition-all hover:border-brand-accent-light"
              >
                <div className="absolute inset-0 bg-brand-accent-light scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500" />
                <span className="relative text-[10px] font-black uppercase tracking-widest text-white group-hover/btn:text-brand-bg transition-colors">Ver Estrutura</span>
                <ArrowRight className="relative text-brand-accent-light group-hover/btn:text-brand-bg group-hover/btn:translate-x-1 transition-all" size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tailored Section */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-12 p-12 md:p-20 rounded-[4rem] glass-premium border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-xl">
             <div className="flex gap-4 items-center mb-6">
                <div className="w-[1px] h-8 bg-brand-accent-light" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-secondary/60">Operações Especiais</span>
             </div>
             <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Projeto Fora da Curva?</h3>
             <p className="text-brand-secondary text-lg font-serif italic italic leading-relaxed">
               Desenvolvemos arquiteturas de software e branding personalizadas para desafios complexos e inovações de mercado.
             </p>
          </div>
          <a 
            href="https://wa.me/5511978959567"
            className="px-12 py-6 bg-brand-accent-light text-brand-bg rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent-light/20"
          >
            Consultoria Exclusiva
          </a>
        </motion.div>
      </div>
    </section>
  );
}
