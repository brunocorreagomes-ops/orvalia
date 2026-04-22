import { motion } from "motion/react";
import { Sparkles, Layout, BarChart, Target, Compass, Search } from "lucide-react";

const services = [
  {
    title: "Branding",
    desc: "Identidade visual completa que comunica os valores da sua marca de forma única.",
    icon: <Sparkles className="text-brand-accent-light" size={32} />
  },
  {
    title: "Criação de Sites",
    desc: "Websites de alta performance otimizados para busca e experiência do usuário.",
    icon: <Layout className="text-brand-accent-light" size={32} />
  },
  {
    title: "Design para Crescimento",
    desc: "Design focado em conversão e retenção, impulsionando suas métricas digitais.",
    icon: <BarChart className="text-brand-accent-light" size={32} />
  },
  {
    title: "Planejamento Estratégico",
    desc: "Estratégias de marketing e comunicação personalizadas para o seu nicho.",
    icon: <Compass className="text-brand-accent-light" size={32} />
  },
  {
    title: "Análise Empresarial",
    desc: "Diagnóstico completo do seu negócio de acordo com seus objetivos de mercado.",
    icon: <Search className="text-brand-accent-light" size={32} />
  },
  {
    title: "Estratégia Digital",
    desc: "Planejamento tático para posicionar sua empresa à frente da concorrência.",
    icon: <Target className="text-brand-accent-light" size={32} />
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 px-8 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-brand-accent-light font-bold text-[10px] uppercase tracking-widest block mb-4">Especialidades</span>
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8 leading-tight">Soluções completas <br /> para sua evolução.</h2>
          <p className="text-brand-secondary text-lg leading-relaxed max-w-lg">
            Não entregamos apenas arquivos. Entregamos ativos digitais que trabalham para o seu negócio 24 horas por dia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] glass-premium group hover:border-brand-accent-light/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Internal glow for depth */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent-light/5 blur-3xl group-hover:bg-brand-accent-light/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
