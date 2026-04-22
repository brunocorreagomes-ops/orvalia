import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos seu mercado, público e objetivos reais para 2026."
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Criamos o caminho visual e técnico para sua empresa se destacar."
  },
  {
    num: "03",
    title: "Execução",
    desc: "Design e desenvolvimento com foco total em usabilidade e performance."
  },
  {
    num: "04",
    title: "Lançamento",
    desc: "Sua marca no ar, pronta para converter e escalar suas vendas."
  }
];

export default function Process() {
  return (
    <section id="processo" className="py-32 px-8 md:px-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-accent-light font-bold text-[10px] uppercase tracking-widest block mb-4">Como trabalhamos</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Processo simplificado, <br /> resultados sofisticados.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-bold opacity-10 mb-8 font-mono">{step.num}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">{step.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-[25px] left-full w-full h-[1px] bg-white/5 -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
