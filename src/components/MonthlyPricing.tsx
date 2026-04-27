import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Presença",
    price: "R$ 1.800",
    period: "/mês",
    focus: "MÁXIMA CONSISTÊNCIA",
    features: ["4 Posts Profissionais / semana", "Gestão de Bio & Identidade", "Relatório Mensal de Performance", "Suporte VIP WhatsApp"],
    id: "01"
  },
  {
    name: "Estratégia",
    price: "R$ 2.800",
    period: "/mês",
    focus: "CRESCIMENTO ACELERADO",
    features: ["6 Posts Profissionais / semana", "Estratégia de Reels & Trends", "Engajamento Ativo Pro", "Análise de Concorrência Local"],
    id: "02",
    highlight: true
  },
  {
    name: "Autoridade",
    price: "R$ 4.500",
    period: "/mês",
    focus: "DOMÍNIO DE MERCADO",
    features: ["Conteúdo Diário Premium", "Criação de Artigos SEO", "Gestão de Tráfego Inclusa", "Consultoria de Marca Mensal"],
    id: "03"
  },
  {
    name: "360° Elite",
    price: "R$ 6.800",
    period: "/mês",
    focus: "ECOSSISTEMA TOTAL",
    features: ["Comunicação Omnichannel", "Produção de Vídeo Mensal", "SEO Técnico Contínuo", "Growth Hacking Estratégico"],
    id: "04"
  }
];

export default function MonthlyPricing() {
  return (
    <section id="planos-mensais" className="py-24 md:py-48 bg-brand-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent-light/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="dna-grid mb-24 items-end">
          <div className="col-span-4 lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Recorrência Estratégica</span>
            </div>
            <h2 className="responsive-subtitle font-sans font-black text-white tracking-tighter md:tracking-ultra-tight leading-[0.85]">
              PLANOS DE <br /> <span className="italic font-serif font-light text-brand-secondary text-gradient">COMUNICAÇÃO.</span>
            </h2>
          </div>
          <div className="col-span-4 lg:col-span-5 flex flex-col justify-end text-left lg:text-right">
             <p className="text-brand-secondary/60 text-sm font-mono uppercase tracking-widest leading-relaxed">
               [ Gestão contínua de marca e conteúdo para empresas que buscam autoridade inabalável em Indaiatuba e região. ]
             </p>
          </div>
        </div>

        <div className="dna-grid gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`col-span-4 lg:col-span-3 p-10 rounded-[3rem] glass-premium relative flex flex-col justify-between overflow-hidden group border border-white/5 transition-all duration-500 hover:border-brand-accent-light/30 ${plan.highlight ? 'ring-1 ring-brand-accent-light/40 shadow-[0_0_50px_rgba(0,255,209,0.1)]' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 p-6">
                   <div className="px-3 py-1 bg-brand-accent-light rounded-full text-[8px] font-black uppercase tracking-widest text-brand-bg">MAIS BUSCADO</div>
                </div>
              )}
              
              <div>
                <span className="font-mono text-[9px] text-brand-accent-light/40 mb-4 block">{plan.id} // {plan.focus}</span>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-2 uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-2xl font-black text-brand-accent-light tracking-tighter">{plan.price}</span>
                  <span className="text-xs text-brand-secondary/40 font-mono uppercase">{plan.period}</span>
                </div>
                
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-4 text-brand-secondary/80 text-[10px] uppercase tracking-widest leading-relaxed font-mono">
                      <Check className="text-brand-accent-light shrink-0 mt-0.5" size={12} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://wa.me/5511978959567"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative py-4 px-8 rounded-full border border-white/10 flex items-center justify-center gap-4 overflow-hidden transition-all hover:border-brand-accent-light bg-white/5 hover:bg-brand-accent-light/10"
              >
                <span className="relative text-[9px] font-black uppercase tracking-widest text-white transition-colors">Contratar Agora</span>
                <ArrowRight className="relative text-brand-accent-light transition-all" size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-brand-secondary/40 text-[10px] font-mono uppercase tracking-[0.2em] italic">
            * Contratos com fidelidade mínima de 6 meses garantem 10% de desconto adicional.
          </p>
        </div>
      </div>
    </section>
  );
}
