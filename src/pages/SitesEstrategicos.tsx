import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Target, Zap, TrendingUp, BarChart3, Search, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { num: "+200%", label: "crescimento médio em presença digital" },
  { num: "3×", label: "mais engajamento após lançamento" }
];

const problems = [
  "Você busca seu serviço e sua empresa não aparece",
  "Seu site não gera mensagens no WhatsApp",
  "Clientes confiam mais no Instagram do que no seu site",
  "Você investe em tráfego, mas não converte"
];

const solutions = [
  {
    icon: Search,
    title: "SEO desde a base",
    desc: "Estrutura pensada para ranquear no Google desde o primeiro dia."
  },
  {
    icon: Target,
    title: "Copy estratégica",
    desc: "Textos que guiam o usuário e aumentam conversão."
  },
  {
    icon: Zap,
    title: "UX focada em resultado",
    desc: "Cada elemento existe para gerar ação."
  }
];

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Análise do seu negócio e concorrência." },
  { num: "02", title: "Estratégia", desc: "Definição de posicionamento e estrutura." },
  { num: "03", title: "Produção", desc: "Design, desenvolvimento e copy." },
  { num: "04", title: "Lançamento", desc: "Publicação + suporte inicial." }
];

export default function SitesEstrategicos() {
  return (
    <div className="min-h-screen bg-brand-bg pt-32">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="dna-grid gap-12 items-center">
            <div className="col-span-4 lg:col-span-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-6 block">
                  Indaiatuba · RMC Campinas
                </span>
                <h1 className="responsive-title font-sans font-black text-white leading-[1.1] md:leading-[0.95] tracking-tight md:tracking-tighter uppercase mb-8">
                  Se o seu site não gera clientes, <br />
                  ele está <span className="text-gradient">custando dinheiro.</span>
                </h1>
                <p className="font-serif text-2xl text-brand-secondary italic leading-relaxed max-w-2xl mb-12">
                  Criamos sites em Indaiatuba que não só parecem profissionais — eles aparecem no Google, transmitem autoridade e transformam visitantes em clientes todos os dias.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="#diagnostico" 
                    className="px-10 py-5 bg-brand-accent-light text-brand-bg rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all text-center"
                  >
                    Quero um diagnóstico gratuito
                  </a>
                  <a 
                    href="#cases" 
                    className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all text-center"
                  >
                    Ver resultados
                  </a>
                </div>
                <p className="mt-8 font-mono text-[10px] text-brand-secondary/60 uppercase tracking-widest italic">
                  +50 projetos entregues · Foco em resultado · Atendimento na região
                </p>
              </motion.div>
            </div>

            <div className="col-span-4 lg:col-span-4 space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-10 rounded-[3rem] glass-premium border border-white/5 relative overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="text-5xl font-black text-brand-accent-light mb-2">{stat.num}</div>
                    <div className="text-xs font-mono text-brand-secondary uppercase tracking-widest leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent-light/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="dna-grid gap-12">
            <div className="col-span-4 lg:col-span-6">
              <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase mb-8">
                A maioria dos <br /> <span className="italic font-serif font-light text-brand-secondary">sites não funciona.</span>
              </h2>
              <p className="text-xl text-brand-secondary leading-relaxed mb-12">
                Eles são bonitos — mas não aparecem no Google, não passam confiança e não geram clientes.
              </p>
            </div>
            <div className="col-span-4 lg:col-span-6">
              <ul className="space-y-6">
                {problems.map((prob, i) => (
                  <motion.li 
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-brand-accent-light shrink-0" />
                    <span className="text-lg text-white font-medium">{prob}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quebra de Crença */}
      <section className="py-32 relative text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-ultra-tight uppercase mb-8">
              Um site não é design. <br /> É um <span className="text-gradient">sistema de aquisição.</span>
            </h2>
            <p className="text-2xl text-brand-secondary font-serif italic max-w-2xl mx-auto leading-relaxed">
              Um site precisa ser encontrado, convencer e converter. Sem isso, ele é só um cartão de visita caro.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-accent-light/5 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* Solução */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="dna-grid mb-20">
            <div className="col-span-4 lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-6 block">Como resolvemos isso</span>
              <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase">
                Sites que trabalham <br /> <span className="italic font-serif font-light text-brand-secondary">para sua empresa.</span>
              </h2>
            </div>
          </div>

          <div className="dna-grid gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="col-span-4 lg:col-span-4 p-10 rounded-[3rem] glass-premium border border-white/5 hover:border-brand-accent-light/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent-light/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <sol.icon className="text-brand-accent-light" size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{sol.title}</h3>
                <p className="text-brand-secondary leading-relaxed italic">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregas */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="dna-grid gap-12 items-center">
            <div className="col-span-4 lg:col-span-5">
              <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase mb-6">
                O que você <br /> <span className="italic font-serif font-light text-brand-secondary">recebe.</span>
              </h2>
              <div className="p-8 rounded-[2rem] border border-brand-accent-light/20 bg-brand-accent-light/5 italic">
                <p className="text-xl text-brand-accent-light leading-relaxed">
                  “Enquanto outras agências entregam layout, nós entregamos <span className="font-bold underline decoration-brand-accent-light/30">resultado mensurável.</span>”
                </p>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-7">
              <div className="space-y-4">
                {[
                  "Site profissional otimizado para SEO",
                  "Design alinhado ao posicionamento",
                  "Integração com WhatsApp e leads",
                  "Alta performance (carregamento rápido)",
                  "Estrutura pronta para crescimento"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-brand-bg border border-white/5 hover:border-brand-accent-light/20 transition-all"
                  >
                    <CheckCircle2 className="text-brand-accent-light shrink-0" size={24} />
                    <span className="text-lg text-white font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase">
              Como <span className="italic font-serif font-light text-brand-secondary">funciona.</span>
            </h2>
          </div>

          <div className="dna-grid gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="col-span-4 lg:col-span-3 text-center"
              >
                <div className="text-7xl font-sans font-black text-white/5 mb-[-20px] select-none">{step.num}</div>
                <div className="relative z-10 px-6 py-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-brand-accent-light/20 transition-all">
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest">{step.title}</h3>
                  <p className="text-sm text-brand-secondary/80 leading-relaxed font-mono uppercase tracking-widest">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Captura / Pressão */}
      <section className="py-24 bg-brand-accent-dark/20 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="dna-grid gap-12 items-center">
            <div className="col-span-4 lg:col-span-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-ultra-tight uppercase mb-8">
                Enquanto você decide, seu <span className="text-gradient">concorrente avança.</span>
              </h2>
              <p className="text-xl text-brand-secondary leading-relaxed opacity-80">
                Todo dia que sua empresa não aparece no Google, você perde clientes para quem já entendeu o jogo digital.
              </p>
            </div>
            <div id="diagnostico" className="col-span-4 lg:col-span-6">
              <div className="p-10 md:p-12 rounded-[3.5rem] bg-brand-bg border border-brand-accent-light/20 shadow-2xl relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase">Descubra por que seu site não gera clientes</h3>
                  <p className="text-brand-secondary text-sm">Receba um diagnóstico inicial em minutos.</p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Seu nome" className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-brand-accent-light transition-colors" required />
                  <input type="text" placeholder="WhatsApp" className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-brand-accent-light transition-colors" required />
                  <input type="text" placeholder="Seu site (opcional)" className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-brand-accent-light transition-colors" />
                  <button className="w-full py-5 bg-brand-accent-light text-brand-bg rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:bg-white hover:text-brand-bg mt-4">
                    Quero meu diagnóstico
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
          >
            <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase mb-8">
              Pronto para transformar seu site em um <br /> <span className="text-gradient">ativo de vendas?</span>
            </h2>
            <p className="text-xl text-brand-secondary leading-relaxed mb-12 max-w-2xl mx-auto italic">
              Solicite um diagnóstico gratuito e veja exatamente o que está impedindo seu crescimento no digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:orvaliastudio@gmail.com" 
                className="px-12 py-6 bg-white text-brand-bg rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-accent-light transition-all"
              >
                Solicitar via E-mail
              </a>
              <a 
                href="https://wa.me/5511978959567" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-brand-accent-light animate-pulse" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
