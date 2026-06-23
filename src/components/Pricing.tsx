import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Diagnóstico Digital",
    focus: "Mapeamento e Clareza",
    price: "Diagnóstico Gratuito",
    features: ["Varredura completa de SEO local", "Auditoria de experiência mobile", "Mapeamento de gargalos de conversão", "Plano de ação imediato"],
    desc: "Para entender o que está travando sua imagem, clareza e conversão.",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20o%20Diagnóstico%20de%20Presença%20Digital%20gratuito%20da%20minha%20empresa.",
    id: "01"
  },
  {
    name: "Landing Page Premium",
    focus: "Performance e Contatos",
    price: "A partir de R$ 1.890",
    features: ["Design exclusivo e autoral", "Copywriting comercial refinado", "Otimização SEO Local agressiva", "Foco absoluto em conversão"],
    desc: "Para empresas que precisam de uma página forte, elegante e preparada para gerar contatos.",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Tenho%20interesse%20na%20Landing%20Page%20Premium.%20Meu%20negócio%20é:",
    highlight: true,
    id: "02"
  },
  {
    name: "Branding Estratégico",
    focus: "Diferenciação e Valor",
    price: "A partir de R$ 3.890",
    features: ["Nova identidade visual & logo", "Estudo de narrativa e tom de voz", "Manual de direcionamento de arte", "Estratégia de posicionamento"],
    desc: "Para marcas que precisam se reposicionar com consistência, diferenciação e percepção de valor.",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Tenho%20interesse%20no%20Branding%20Estratégico.%20Meu%20negócio%20é:",
    id: "03"
  },
  {
    name: "Presença Completa",
    focus: "Domínio e Crescimento",
    price: "Sob Consulta",
    features: ["Branding Estratégico integrado", "Site multi-páginas de elite", "SEO Geo-Local & Tráfego Pago", "Gestão de comunicação mensal"],
    desc: "Para quem quer marca, site, conteúdo e SEO trabalhando juntos.",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Tenho%20interesse%20na%20Presença%20Digital%20Completa.%20Meu%20negócio%20é:",
    id: "04"
  }
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 md:py-40 bg-brand-bg relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* DNA Header Grid */}
        <div className="dna-grid mb-20 items-end">
          <div className="col-span-4 lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Pontos de Entrada</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[1.1]">
              Escolha por onde <br /> sua marca <span className="text-gradient">começa a evoluir.</span>
            </h2>
          </div>
          <div className="col-span-4 lg:col-span-5 flex flex-col justify-end text-left lg:text-right pb-2">
             <p className="text-brand-secondary/60 text-xs md:text-sm font-mono uppercase tracking-widest leading-relaxed">
               [ Diferentes caminhos projetados para alinhar seu posicionamento digital ao nível real do seu negócio. ]
             </p>
          </div>
        </div>

        {/* Pricing DNA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`p-8 rounded-[2.5rem] bg-white/[0.01] border relative flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:border-brand-accent-light/30 ${plan.highlight ? 'border-brand-accent-light/30 ring-1 ring-brand-accent-light/20 shadow-[0_0_50px_rgba(0,255,209,0.08)]' : 'border-white/5'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 p-6 z-10">
                   <div className="px-2.5 py-1 bg-brand-accent-light rounded-full text-[8px] font-black uppercase tracking-widest text-brand-bg">MAIS RECOMENDADO</div>
                </div>
              )}
              
              <div>
                <span className="font-mono text-[9px] text-brand-accent-light/40 mb-4 block">{plan.id} // {plan.focus}</span>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2 uppercase leading-none">{plan.name}</h3>
                <div className="text-sm font-semibold text-brand-accent-light mb-4 tracking-wider uppercase">{plan.price}</div>
                
                <p className="text-brand-secondary/80 text-xs mb-8 font-light leading-relaxed min-h-[40px]">
                  {plan.desc}
                </p>
                
                <div className="h-[1px] w-full bg-white/5 mb-6" />
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-brand-secondary/70 text-[10px] uppercase tracking-wider leading-relaxed font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-light shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative py-4 px-6 rounded-full border border-white/10 flex items-center justify-center gap-3 overflow-hidden transition-all hover:border-brand-accent-light bg-white/[0.02]"
              >
                <div className="absolute inset-0 bg-brand-accent-light scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500" />
                <span className="relative text-[9px] font-black uppercase tracking-widest text-white group-hover/btn:text-brand-bg transition-colors">Iniciar Evolução</span>
                <ArrowRight className="relative text-brand-accent-light group-hover/btn:text-brand-bg group-hover/btn:translate-x-1 transition-all" size={14} />
              </a>
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
            href="https://wa.me/5511978959567?text=Olá!%20Tenho%20um%20projeto%20especial%20e%20gostaria%20de%20uma%20consultoria%20exclusiva%20da%20Orvalia."
            className="px-12 py-6 bg-brand-accent-light text-brand-bg rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent-light/20"
          >
            Consultoria Exclusiva
          </a>
        </motion.div>
      </div>
    </section>
  );
}
