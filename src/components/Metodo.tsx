import { motion } from "framer-motion";

export default function Metodo() {
  const camadas = [
    {
      num: "01",
      title: "MERCADO",
      subtitle: "Contexto & Concorrência Real",
      desc: "Onde sua empresa realmente compete e contra quais alternativas o cliente compara você. Identificamos os padrões visuais saturados da sua categoria para diferenciar sua marca do ruído comum."
    },
    {
      num: "02",
      title: "MENSAGEM",
      subtitle: "Clareza & Proposta de Valor",
      desc: "O que precisa ser entendido rapidamente para justificar atenção, confiança e escolha. Eliminamos jargões vazios para articular exatamente a competência técnica e o valor entregue."
    },
    {
      num: "03",
      title: "EXPERIÊNCIA",
      subtitle: "Identidade, Interface & Comportamento",
      desc: "Como identidade, conteúdo, interface e comportamento transformam estratégia em percepção. Cada escolha tipográfica, espaçamento e tempo de carregamento comunica autoridade."
    },
    {
      num: "04",
      title: "AQUISIÇÃO",
      subtitle: "Jornada Comercial & SEO Local",
      desc: "Como busca, conteúdo, páginas e caminhos comerciais aproximam intenção de contato. Estruturamos a navegação para conduzir a decisão do cliente sem barreiras."
    }
  ];

  return (
    <section id="metodo" className="py-24 md:py-36 bg-brand-bg relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-24 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-brand-red" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">
              MÉTODO ESTRATÉGICO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.02] tracking-tighter uppercase">
            ANTES DE DESENHAR, <br />
            <span className="text-brand-secondary">PRECISAMOS DESCOBRIR O QUE ESTÁ SENDO MAL PERCEBIDO.</span>
          </h2>

          <p className="text-lg md:text-xl text-brand-secondary font-sans leading-relaxed max-w-2xl">
            A Orvalia investiga quatro camadas da experiência antes de produzir qualquer linha de código ou tela.
          </p>
        </div>

        {/* 4 Layers Architectural Grid */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-px bg-white/10 border border-white/10">
          {camadas.map((item, idx) => (
            <motion.div 
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 bg-brand-bg flex flex-col justify-between space-y-8 relative group hover:bg-neutral-900/60 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-brand-red font-bold tracking-widest">
                    CAMADA {item.num}
                  </span>
                  <span className="w-2 h-2 bg-white/20 group-hover:bg-brand-red transition-colors" />
                </div>

                <div>
                  <h3 className="text-2xl font-sans font-black text-white tracking-tight uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[10px] text-brand-secondary uppercase tracking-widest font-semibold">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-sm text-brand-secondary leading-relaxed font-sans font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-brand-secondary/60 uppercase tracking-widest">
                <span>FASE {idx + 1} DE 4</span>
                <span className="group-hover:text-white transition-colors">DIAGNÓSTICO</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Method Conclusion */}
        <div className="mt-12 text-center p-8 bg-neutral-900/50 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left font-mono text-xs text-brand-secondary uppercase tracking-widest">
            PROCESSO ANÁLITICO PROPRIETÁRIO ORVALIA STUDIO
          </div>
          <div className="text-xl md:text-2xl font-sans font-black text-white uppercase tracking-tight">
            SÓ ENTÃO COMECAMOS O DESIGN.
          </div>
        </div>

      </div>
    </section>
  );
}
