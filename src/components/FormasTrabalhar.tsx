import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FormasTrabalhar() {
  const momentos = [
    {
      num: "01",
      momento: "REPOSICIONAR",
      quando: "Quando o negócio evoluiu, mas a marca não acompanhou.",
      foco: "Alinhamento de percepção entre maturidade comercial e expressão de marca.",
      entregaveis: [
        "Estratégia de marca e posicionamento",
        "Redesign de identidade visual",
        "Narrativa institucional e tom de voz",
        "Diretrizes de aplicação de marca",
        "Arquitetura de mensagens comerciais"
      ]
    },
    {
      num: "02",
      momento: "RECONSTRUIR",
      quando: "Quando o digital transmite menos valor do que a empresa entrega.",
      foco: "Criação de experiência digital completa para fechar o gap de percepção.",
      entregaveis: [
        "Site institucional de alta performance",
        "Landing pages estratégicas de conversão",
        "Copywriting editorial e comercial",
        "Design de interface UX/UI exclusivo",
        "Arquitetura de informação e SEO local"
      ]
    },
    {
      num: "03",
      momento: "EVOLUIR",
      quando: "Quando a base existe e precisa começar a trabalhar melhor.",
      foco: "Otimização contínua de presença, buscas com IA e caminhos de aquisição.",
      entregaveis: [
        "Otimização e atualização de páginas",
        "Estratégia SEO e visibilidade GEO (IA)",
        "Refinamento de jornada comercial",
        "Direção contínua de expressão de marca",
        "Acompanhamento de autoridade digital"
      ]
    }
  ];

  return (
    <section id="formas-trabalhar" className="py-24 md:py-36 bg-brand-bg relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-brand-red" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">
              MOMENTOS DE ATUAÇÃO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-[1.04] tracking-[-0.03em]">
            Não vendemos uma lista <br />
            <span className="text-brand-secondary">de entregáveis.</span>
          </h2>

          <p className="text-lg md:text-xl text-brand-secondary font-sans leading-relaxed max-w-2xl">
            Existem três momentos principais em que somos contratados por empresas que precisam corrigir a transmissão do seu valor.
          </p>
        </div>

        {/* 3 Momentos Editorial Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-b border-white/10">
          {momentos.map((m, idx) => (
            <motion.div
              key={m.momento}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10 last:border-r-0 last:border-b-0 flex flex-col justify-between space-y-8 group hover:bg-white/[0.01] transition-colors"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2">
                  <span className="font-sans text-xs text-brand-red font-bold tracking-wider">
                    [0{idx + 1}]
                  </span>
                  <span className="font-sans text-xs text-brand-secondary uppercase tracking-widest">
                    Situação {m.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-white tracking-tight mb-2">
                    {m.momento}
                  </h3>
                  <p className="text-sm font-sans text-white/90 font-medium leading-relaxed">
                    {m.quando}
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="font-sans text-xs font-semibold text-brand-secondary block">
                    Objetivo Principal:
                  </span>
                  <p className="text-xs text-brand-secondary/90 font-sans leading-relaxed">
                    {m.foco}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-sans text-xs uppercase tracking-wider text-white font-semibold block">
                    Escopo Estrutural:
                  </span>
                  <ul className="space-y-2">
                    {m.entregaveis.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-brand-secondary font-sans">
                        <span className="w-1.5 h-1.5 bg-brand-red mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <a 
                  href={`https://wa.me/5511978959567?text=Olá,%20Bruno.%20Minha%20empresa%20está%20no%20momento%20de%20${m.momento}.%20Gostaria%20de%20conversar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-white font-bold group-hover:text-brand-red transition-colors"
                >
                  <span>Identificar meu momento</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
