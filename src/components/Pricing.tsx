import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    focus: "Pequenos Negócios",
    price: "a partir de R$ 1.497",
    features: ["Landing Page", "Identidade Visual", "Suporte 15 dias"],
    link: "/plano-essencial"
  },
  {
    name: "Profissional",
    focus: "Empresas em Crescimento",
    price: "a partir de R$ 3.997",
    features: ["Site Completo", "Branding Pro", "SEO & GEO (IA) Integrado", "Social Media Pack"],
    link: "/plano-profissional"
  },
  {
    name: "Evolução",
    focus: "Escalabilidade Máxima",
    price: "sob consulta",
    features: ["Estratégia GEO & SEO Elite", "Dashboards de BI", "Consultoria Mensal", "Gestão de Tráfego"],
    link: "/plano-evolucao"
  }
];

import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <section id="precos" className="py-32 px-8 md:px-24">
      <div className="text-center mb-24">
        <span className="text-brand-accent-light font-bold text-[10px] uppercase tracking-widest block mb-4">Posicionamento</span>
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
          O plano ideal para cada estágio.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 20px 60px -15px rgba(88, 194, 255, 0.12)",
              borderColor: "rgba(88, 194, 255, 0.3)"
            }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
            className={`p-10 md:p-14 rounded-[3rem] glass-premium border border-white/10 flex flex-col justify-between transition-colors duration-500 ${idx === 1 ? 'glow-subtle border-brand-accent-light/30' : ''}`}
          >
            <div>
              <span className="text-xs text-brand-accent-light font-black uppercase tracking-widest mb-4 block shrink-0">{plan.focus}</span>
              <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">{plan.name}</h3>
              <div className="text-xl font-bold text-white mb-10 opacity-70 tracking-tight">{plan.price}</div>
              
              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-4 text-brand-secondary text-sm leading-snug">
                    <Check size={18} className="text-brand-accent-light shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              to={plan.link} 
              className="w-full py-5 rounded-full border border-white/10 hover:bg-white text-white hover:text-brand-bg font-black transition-all text-center text-sm uppercase tracking-widest"
            >
              Saber mais sobre plano {plan.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Horizontal Custom Plan Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.015, 
          boxShadow: "0 20px 60px -15px rgba(88, 194, 255, 0.12)",
          borderColor: "rgba(88, 194, 255, 0.3)"
        }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="mt-12 p-8 md:p-12 rounded-[3rem] glass-premium border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-500"
      >
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-2">
            Quer um projeto diferente desses 3 planos?
          </h3>
          <p className="text-brand-secondary text-lg">
            Fazemos sob medida um plano personalizado para a sua necessidade específica.
          </p>
        </div>
        
        <a 
          href="https://wa.me/5511978959567?text=Olá,%20gostaria%20de%20solicitar%20um%20plano%20personalizado%20e%20sob%20medida"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 bg-white text-brand-bg rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-accent-light transition-all shadow-xl whitespace-nowrap shrink-0"
        >
          Consulte agora!
        </a>
      </motion.div>
    </section>
  );
}
