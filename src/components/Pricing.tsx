import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const paths = [
  {
    name: "Diagnóstico de Presença Digital",
    focus: "Diagnóstico Estratégico",
    desc: "Mapeamento cirúrgico de gargalos comerciais e de posicionamento que travam suas vendas locais e regionais.",
    features: [
      "Varredura completa de SEO local",
      "Auditoria detalhada de conversão mobile",
      "Mapeamento de jornada comercial",
      "Entregável com plano de ação imediato"
    ],
    cta: "Quero meu diagnóstico gratuito",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20o%20Diagnóstico%20de%20Presença%20Digital%20gratuito%20da%20minha%20empresa.",
    id: "01",
    highlight: true
  },
  {
    name: "Landing Page Estratégica",
    focus: "Campanhas & Performance",
    desc: "Páginas de alta performance e elegância incomparável prontas para converter cliques em contatos reais no WhatsApp.",
    features: [
      "Design 100% autoral e exclusivo",
      "Copywriting estratégico de vendas",
      "Otimização móvel e velocidade extrema",
      "Foco absoluto em captação de leads"
    ],
    cta: "Conversar sobre meu projeto",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Tenho%20interesse%20na%20Landing%20Page%20Estratégica.%20Meu%20negócio%20é:",
    id: "02"
  },
  {
    name: "Site Institucional Premium",
    focus: "Autoridade & Presença Local",
    desc: "Desenvolvimento sob medida projetado para posicionar sua marca com destaque e alta competitividade em buscas locais e orgânicas do Google.",
    features: [
      "Arquitetura robusta estruturada",
      "SEO local e regional nativo integrado",
      "Velocidade ultra-rápida (Web Vitals)",
      "Integrações de contato inteligentes"
    ],
    cta: "Avaliar minha presença digital",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20saber%20mais%20sobre%20o%20Site%20Institucional%20Premium.%20Meu%20negócio%20é:",
    id: "03"
  },
  {
    name: "Branding e Reposicionamento",
    focus: "Diferenciação & Valor Percebido",
    desc: "Criação de identidade visual e estudo de narrativa para marcas que necessitam elevar sua percepção e preço cobrado.",
    features: [
      "Nova marca, logo e manual de design",
      "Estudo de posicionamento estratégico",
      "Alinhamento de narrativa e tom de voz",
      "Direcionamento visual de canais"
    ],
    cta: "Ver melhor ponto de partida",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Gostaria%20de%20entender%20como%20minha%20marca%20pode%20vender%20melhor%20com%20Branding.",
    id: "04"
  },
  {
    name: "Jornada Comercial Sincronizada",
    focus: "Instagram & WhatsApp Comercial",
    desc: "Sincronização dos canais e pontos de contato comerciais para garantir que nenhuma oportunidade ou lead seja perdido.",
    features: [
      "Estruturação de fluxo de respostas ágeis",
      "Otimização estratégica de links & bios",
      "Alinhamento de caminhos do cliente",
      "Otimização de jornada comercial local"
    ],
    cta: "Entender como minha marca pode vender melhor",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20otimizar%20meus%20pontos%20de%20contato%20e%20jornada%20comercial.",
    id: "05"
  },
  {
    name: "Acompanhamento Mensal",
    focus: "Mentoria & Growth Contínuo",
    desc: "Parceria estratégica contínua para guiar o crescimento digital do seu negócio através de dados, tráfego e melhorias.",
    features: [
      "Consultoria de posicionamento mensal",
      "Análise de dados de campanhas locais",
      "Otimização contínua de SEO Local",
      "Evolução ágil de páginas e marca"
    ],
    cta: "Conversar sobre meu projeto",
    link: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Gostaria%20de%20saber%20como%20funciona%20o%20Acompanhamento%20Mensal%20da%20Orvalia.",
    id: "06"
  }
];

export default function Pricing() {
  return (
    <section id="pontos-partida" className="py-24 md:py-40 bg-brand-bg relative z-10 border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-accent-light/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* DNA Header Grid */}
        <div className="dna-grid mb-20 items-end">
          <div className="col-span-4 lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Pontos de Partida</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[1.1]">
              Como sua marca <br /> <span className="text-gradient">pode começar a crescer.</span>
            </h2>
          </div>
          <div className="col-span-4 lg:col-span-5 flex flex-col justify-end text-left lg:text-right pb-2">
            <p className="text-brand-secondary/60 text-xs md:text-sm font-mono uppercase tracking-widest leading-relaxed line-clamp-2">
              [ Caminhos estratégicos projetados para alinhar seu posicionamento digital ao nível real do seu negócio. ]
            </p>
          </div>
        </div>

        {/* 3-Column Grid for the 6 Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {paths.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`p-8 rounded-[2.5rem] bg-white/[0.01] border relative flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:border-brand-accent-light/30 ${
                path.highlight 
                  ? "border-brand-accent-light/30 ring-1 ring-brand-accent-light/20 shadow-[0_0_50px_rgba(0,255,209,0.08)]" 
                  : "border-white/5"
              }`}
            >
              {path.highlight && (
                <div className="absolute top-0 right-0 p-6 z-10">
                  <div className="px-2.5 py-1 bg-brand-accent-light rounded-full text-[8px] font-black uppercase tracking-widest text-brand-bg flex items-center gap-1">
                    <Sparkles size={8} /> RECOMENDADO PARA COMEÇAR
                  </div>
                </div>
              )}
              
              <div>
                <span className="font-mono text-[9px] text-brand-accent-light/40 mb-4 block">
                  {path.id} // {path.focus}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-4 uppercase leading-tight min-h-[56px] flex items-center">
                  {path.name}
                </h3>
                
                <p className="text-brand-secondary/80 text-xs md:text-sm mb-8 font-light leading-relaxed min-h-[64px]">
                  {path.desc}
                </p>
                
                <div className="h-[1px] w-full bg-white/5 mb-6" />
                
                <ul className="space-y-4 mb-10">
                  {path.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-brand-secondary/70 text-[10px] uppercase tracking-wider leading-relaxed font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-light shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={path.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative py-4 px-6 rounded-full border border-white/10 flex items-center justify-center gap-3 overflow-hidden transition-all hover:border-brand-accent-light bg-white/[0.02]"
              >
                <div className="absolute inset-0 bg-brand-accent-light scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500" />
                <span className="relative text-[9px] font-black uppercase tracking-widest text-white group-hover/btn:text-brand-bg transition-colors">
                  {path.cta}
                </span>
                <ArrowRight className="relative text-brand-accent-light group-hover/btn:text-brand-bg group-hover/btn:translate-x-1 transition-all" size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Consultive Note & Tailored Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 rounded-[4rem] glass-premium border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left"
        >
          <div className="max-w-2xl">
            <div className="flex gap-4 items-center justify-center lg:justify-start mb-6">
              <div className="w-[1px] h-8 bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-secondary/60">
                Alinhamento Consultivo
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">
              Cada marca tem seu tempo.
            </h3>
            <p className="text-brand-secondary text-base md:text-lg font-serif italic leading-relaxed">
              "Cada projeto é definido de forma personalizada após o diagnóstico, considerando o momento, a prioridade estratégica e o potencial real de crescimento comercial da marca."
            </p>
          </div>
          <div className="shrink-0">
            <MagneticWrapper>
              <a 
                href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Gostaria%20de%20bater%20um%20papo%20sobre%20meu%20projeto%20e%20entender%20o%20melhor%20ponto%20de%20partida."
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 bg-brand-accent-light text-brand-bg rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent-light/20 block text-center"
              >
                Conversar sobre meu projeto
              </a>
            </MagneticWrapper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
