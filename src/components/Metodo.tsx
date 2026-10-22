import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Mercado",
    subtitle: "Contexto e concorrência real",
    desc: "Onde a empresa compete, quais alternativas o cliente considera e que códigos da categoria estão saturados."
  },
  {
    num: "02",
    title: "Mensagem",
    subtitle: "Clareza e proposta de valor",
    desc: "O que precisa ser compreendido rapidamente para justificar atenção, confiança e escolha."
  },
  {
    num: "03",
    title: "Experiência",
    subtitle: "Identidade e interface",
    desc: "Como a identidade visual, o conteúdo e o comportamento digital traduzem a estratégia em percepção."
  },
  {
    num: "04",
    title: "Aquisição",
    subtitle: "Jornada comercial e SEO",
    desc: "Como as buscas, o conteúdo, as páginas indexáveis e os caminhos comerciais transformam interesse em contacto."
  }
];

export default function Metodo() {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-brand-mineral text-brand-ink selection:bg-brand-cyan selection:text-brand-ink">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-cyan-dark" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                03 / Método Estratégico
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight leading-[1.05] max-w-2xl">
              Antes do desenho, <br />
              <span className="italic font-serif font-light text-[#64706D]">a decisão.</span>
            </h2>
          </div>
          <p className="max-w-[330px] text-[#475553] leading-relaxed text-lg">
            A Orvalia investiga quatro camadas fundamentais da experiência antes de produzir uma interface ou uma única linha de código.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-brand-line pt-8 gap-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="lg:border-r border-brand-line lg:pr-8 lg:mr-8 last:border-r-0 last:mr-0 last:pr-0"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#53625d] block mb-12">
                {step.num} / Camada
              </span>
              <h3 className="text-2xl font-medium tracking-tight mb-2">{step.title}</h3>
              <h4 className="text-xs font-bold text-[#75807d] mb-5 uppercase tracking-widest">{step.subtitle}</h4>
              <p className="text-[#67716e] text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
