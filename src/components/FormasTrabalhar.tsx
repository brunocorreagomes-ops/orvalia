import { motion } from "framer-motion";

const offers = [
  {
    num: "01",
    title: "Reposicionar",
    desc: "Quando o negócio evoluiu, mas a sua marca ainda comunica um estágio anterior."
  },
  {
    num: "02",
    title: "Reconstruir",
    desc: "Quando a presença digital transmite menos valor do que a empresa entrega."
  },
  {
    num: "03",
    title: "Evoluir",
    desc: "Quando existe uma base e ela precisa trabalhar melhor em visibilidade, autoridade e aquisição."
  }
];

export default function FormasTrabalhar() {
  return (
    <section id="formas-trabalhar" className="py-24 md:py-32 bg-[#dbe0da] text-brand-ink">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-cyan-dark" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                04 / Momentos de atuação
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight leading-[1.05] max-w-2xl">
              A solução começa <br />
              <span className="italic font-serif font-light text-[#53615b]">pela situação.</span>
            </h2>
          </div>
          <p className="max-w-[330px] text-[#53615b] leading-relaxed text-lg">
            Três pontos críticos em que a estratégia, a marca e a presença digital podem ter um papel decisivo.
          </p>
        </div>

        <div className="border-t border-[#aeb9b2]">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] items-start md:items-center gap-6 md:gap-8 py-10 md:py-12 border-b border-[#aeb9b2] group hover:bg-black/[0.02] transition-colors duration-500"
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#687971]">
                {offer.num} /
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
                {offer.title}
              </h3>
              <p className="text-[#53615b] text-base leading-relaxed max-w-[360px] md:justify-self-end">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
