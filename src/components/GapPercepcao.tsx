import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function GapPercepcao() {
  const tensoes = [
    {
      num: "01",
      tag: "PERCEPÇÃO",
      title: "Seu negócio é melhor do que parece.",
      desc: "A identidade, a linguagem ou a experiência digital ainda não correspondem ao nível real da empresa. O cliente vê um visual genérico onde deveria enxergar autoridade."
    },
    {
      num: "02",
      tag: "CLAREZA",
      title: "O cliente precisa trabalhar para entender você.",
      desc: "Oferta demais, argumento demais e hierarquia de menos transformam competência em ruído. Sem clareza imediata, a decisão é adiantada para a concorrência."
    },
    {
      num: "03",
      tag: "CONVERSÃO",
      title: "O site informa, mas não conduz.",
      desc: "A pessoa visita, entende parcialmente, não encontra segurança suficiente para decidir e vai embora. O tráfego existe, mas a intenção se evapora."
    }
  ];

  return (
    <section id="gap-percepcao" className="py-24 md:py-36 bg-brand-bg relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 md:mb-24 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-brand-red" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">
              O PROBLEMA
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.02] tracking-tighter uppercase">
            NÃO FALTA QUALIDADE. <br />
            <span className="text-brand-secondary">FALTA TRADUÇÃO.</span>
          </h2>

          <p className="text-lg md:text-2xl text-brand-secondary font-sans leading-relaxed max-w-3xl">
            Uma empresa pode ter excelente atendimento, conhecimento técnico, reputação e clientes satisfeitos — e ainda parecer comum quando alguém abre seu site. É aí que o valor se perde antes da primeira conversa.
          </p>
        </div>

        {/* Diagnostic Signature Banner: Gap Visual */}
        <div className="my-12 p-8 md:p-12 border border-white/10 bg-white/[0.01] relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="font-mono text-xs uppercase tracking-widest text-white">
              SISTEMA DE DIAGNÓSTICO DE MARCA // <span className="text-brand-red">GAP DE PERCEPÇÃO</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-brand-secondary">
              Distância entre valor entregue vs. valor percebido
            </div>
          </div>

          {/* Visual Gap Line */}
          <div className="relative py-6">
            <div className="flex justify-between items-center text-xs md:text-sm font-black uppercase tracking-wider text-white mb-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white" /> VALOR REAL DA SUA EMPRESA
              </span>
              <span className="flex items-center gap-2 text-brand-red">
                PERCEPÇÃO DIGITAL ATUAL <span className="w-2 h-2 bg-brand-red" />
              </span>
            </div>

            {/* Gap Bar */}
            <div className="relative h-4 w-full bg-neutral-900 border border-white/10 overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-white w-full" />
              <motion.div 
                initial={{ width: "100%" }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-y-0 right-0 bg-brand-red/90 flex items-center justify-center"
              >
                <span className="font-mono text-[9px] font-bold text-white uppercase tracking-widest hidden md:inline px-2 whitespace-nowrap">
                  GAP DE PERCEPÇÃO (-65%)
                </span>
              </motion.div>
            </div>

            <div className="mt-4 flex justify-between items-center text-[11px] font-mono text-brand-secondary">
              <span>Competência real & reputação de mercado</span>
              <span className="text-brand-red font-semibold">Onde o cliente desiste antes do contato</span>
            </div>
          </div>
        </div>

        {/* 3 Tensões Principais - Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 pt-12 border-t border-white/10">
          {tensoes.map((item) => (
            <div key={item.num} className="space-y-4 group">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-brand-red font-bold tracking-widest">
                  [{item.num}] // {item.tag}
                </span>
                <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-brand-red transition-colors" />
              </div>

              <h3 className="text-xl md:text-2xl font-sans font-black text-white leading-snug uppercase">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-brand-secondary leading-relaxed font-sans font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section Closing Banner */}
        <div className="mt-16 md:mt-24 p-8 md:p-12 border border-brand-red/40 bg-brand-red/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
              SOLUÇÃO ESTRATÉGICA
            </span>
            <h4 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">
              A Orvalia trabalha exatamente nessa distância.
            </h4>
          </div>

          <a 
            href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20entender%20como%20a%20Orvalia%20trabalha%20o%20gap%20de%20percepção%20da%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest flex items-center gap-3 shrink-0 transition-colors"
          >
            <span>Mapear meu gap</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
