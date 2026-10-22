import { motion } from "framer-motion";

export default function BrunoSection() {
  return (
    <section id="autoridade" className="py-32 bg-brand-warm text-brand-ink border-t border-brand-line selection:bg-brand-cyan selection:text-brand-ink">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-center">
          
          {/* Foto Editorial */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#ced6d0] border border-brand-line aspect-[4/5] max-w-lg mx-auto lg:mx-0 w-full overflow-hidden group"
          >
            <img 
              src="https://i.ibb.co/xqmr9M3F/bruno-correa-gomes.jpg" 
              alt="Bruno Correa Gomes, direção estratégica da Orvalia" 
              loading="lazy" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-brand-ink/5 mix-blend-multiply pointer-events-none" />
          </motion.div>

          {/* Conteúdo */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px] bg-brand-cyan-dark" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                05 / Direção Estratégica
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight leading-[1.05] mb-8">
              Estratégia comercial <br className="hidden md:block" />
              <span className="italic font-serif font-light text-[#64706D]">antes do layout.</span>
            </h2>

            <div className="border-l-2 border-brand-cyan-dark pl-6 my-10">
              <p className="text-xl md:text-2xl font-serif italic text-brand-ink leading-relaxed">
                “Antes de desenhar o site, quero entender o que sua empresa vende, como atende e o que o cliente precisa saber para contratar.”
              </p>
            </div>

            <div className="space-y-6 text-[#475553] text-lg leading-relaxed mb-12">
              <p>
                À frente da Orvalia está <strong>Bruno Correa Gomes</strong>, com mais de 18 anos de trajetória executiva e comercial no setor financeiro. Essa experiência orienta o planejamento dos projetos e a organização das informações comerciais.
              </p>
              <p>
                Tem pós-graduação e MBA pela <strong>Fundação Getulio Vargas (FGV)</strong> e certificação <strong>CEA da ANBIMA</strong> (Especialista em Investimentos). Na Orvalia, acompanha o projeto e o contato com cada cliente.
              </p>
            </div>

            {/* Grid de Autoridade */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-brand-line pt-10">
              <div>
                <strong className="block text-3xl font-medium text-brand-ink mb-2">18+ anos</strong>
                <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-brand-muted">Trajetória executiva</span>
              </div>
              <div>
                <strong className="block text-3xl font-medium text-brand-ink mb-2">FGV & CEA</strong>
                <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-brand-muted">MBA e Certificações</span>
              </div>
              <div>
                <strong className="block text-3xl font-medium text-brand-ink mb-2">Direta</strong>
                <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-brand-muted">Atenção Sênior no Projeto</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
