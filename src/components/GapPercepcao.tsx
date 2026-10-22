import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GapPercepcao() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animação do palco (as linhas convergem conforme o scroll)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });
  
  const leftTrackX = useTransform(scrollYProgress, [0, 1], ["-6%", "0%"]);
  const rightTrackX = useTransform(scrollYProgress, [0, 1], ["6%", "0%"]);

  return (
    <section id="gap-percepcao" ref={containerRef} className="py-24 md:py-32 bg-brand-ink text-brand-warm selection:bg-brand-cyan selection:text-brand-ink overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="w-8 h-[2px] bg-brand-cyan" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan">
            01 / O Gap de Percepção
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.55fr] gap-10 lg:gap-20 items-end mb-16 md:mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-[5.5vw] font-sans font-medium leading-[1.05] tracking-tight m-0">
            Não falta qualidade.<br />
            <span className="text-[#94a7a3] italic font-light font-serif">Falta tradução.</span>
          </h2>
          <p className="text-[#a9b8b3] text-lg md:text-xl leading-relaxed mb-2">
            Seu negócio cresceu. Sua presença digital ficou para trás. O desafio está na distância entre o que sua empresa entrega e o que o mercado reconhece.
          </p>
        </div>

        {/* O Palco do Gap */}
        <div className="relative border-y border-[#53615d] min-h-[205px] md:min-height-[230px] py-8 flex flex-col justify-between overflow-hidden my-16">
          <div className="flex justify-between items-center gap-4 font-mono text-[8px] md:text-[11px] font-bold tracking-widest text-[#b7c5c0] uppercase">
            <span>Valor Real</span>
            <span className="text-brand-cyan">The Point / Alinhamento</span>
            <span>Valor Percebido</span>
          </div>
          
          <div className="relative w-full grid grid-cols-2 items-center z-10 py-10">
            {/* O ponto de orvalho central */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-brand-cyan z-20 shadow-[0_0_0_10px_rgba(102,231,225,0.08)]" />
            
            {/* Pistas móveis */}
            <motion.span 
              className="block h-[2px] bg-[#c0d4cd] w-full origin-right"
              style={{ x: leftTrackX }}
            />
            <motion.span 
              className="block h-[2px] bg-[#557571] w-full origin-left"
              style={{ x: rightTrackX }}
            />
          </div>

          <div className="flex justify-between items-center gap-4 font-mono text-[9px] md:text-[11px] font-bold tracking-widest text-[#8b9f99] uppercase">
            <span>Competência Existente</span>
            <span>Expressão de Marca</span>
          </div>
        </div>

        {/* Dores (Painpoints) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mt-16 md:mt-20">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-[#455450] pt-6"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-cyan mb-5">01 / Percepção</div>
            <h3 className="text-2xl font-medium mb-4 leading-snug">Seu negócio é melhor do que parece.</h3>
            <p className="text-[#a8b5b1] text-sm leading-relaxed">
              A identidade, a linguagem ou a experiência digital ainda não correspondem ao nível real da empresa e ao público que você deseja atingir.
            </p>
          </motion.article>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-t border-[#455450] pt-6"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-cyan mb-5">02 / Clareza</div>
            <h3 className="text-2xl font-medium mb-4 leading-snug">O cliente precisa trabalhar para entender você.</h3>
            <p className="text-[#a8b5b1] text-sm leading-relaxed">
              Oferta demais e hierarquia de menos transformam competência em ruído. Um site confuso afasta quem tem pouco tempo.
            </p>
          </motion.article>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-[#455450] pt-6"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-cyan mb-5">03 / Conversão</div>
            <h3 className="text-2xl font-medium mb-4 leading-snug">O site informa, mas não conduz.</h3>
            <p className="text-[#a8b5b1] text-sm leading-relaxed">
              O tráfego orgânico ou pago até existe, mas faltam sinais claros, design de conversão e segurança para o utilizador avançar para o contacto.
            </p>
          </motion.article>
        </div>

      </div>
    </section>
  );
}
