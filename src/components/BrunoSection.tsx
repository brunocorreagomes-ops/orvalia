import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BrunoSection() {
  return (
    <section id="autoridade" className="py-24 md:py-36 bg-brand-bg relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden bg-neutral-900 border border-white/10 aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img 
                src="https://i.ibb.co/xqmr9M3F/bruno-correa-gomes.jpg" 
                alt="Bruno Correa Gomes - Direção Estratégica Orvalia Studio" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="text-white font-black uppercase text-sm tracking-wider">Bruno Correa Gomes</p>
                <p className="text-brand-red font-mono text-[10px] uppercase tracking-widest font-bold">Direção Estratégica — Orvalia Studio</p>
              </div>
            </div>
            
            {/* Architectural accent border */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-brand-red pointer-events-none hidden sm:block" />
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-red" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">
                  LIDERANÇA ESTRATÉGICA
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black text-white leading-[1.05] tracking-tighter uppercase">
                ESTRATÉGIA COMERCIAL <br />
                <span className="text-brand-secondary">ANTES DO LAYOUT.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-brand-secondary font-sans leading-relaxed">
              <p className="text-white font-medium text-lg md:text-xl font-serif italic border-l-2 border-brand-red pl-4 py-1">
                "A Orvalia não nasceu da ideia de fazer telas bonitas. Nosso ponto de partida é entender como uma empresa é percebida, como seu cliente decide e quais sinais fazem uma marca parecer mais clara, confiável e valiosa."
              </p>

              <p>
                Depois usamos estratégia, design, tecnologia e conteúdo para corrigir o que estiver entre o negócio e essa percepção.
              </p>

              <p>
                À frente da Orvalia está <strong className="text-white font-bold">Bruno Correa Gomes</strong>. Com mais de 18 anos de trajetória executiva e comercial no setor financeiro, pós-graduações e MBA pela Fundação Getulio Vargas (FGV) e certificação CEA, Bruno aplica inteligência de mercado e visão de negócios a cada projeto do estúdio.
              </p>

              <p>
                Essa bagagem orienta a forma como cada projeto é analisado e construído — garantindo que marca e site trabalhem como instrumentos comerciais estratégicos para acelerar a decisão do cliente.
              </p>
            </div>

            {/* Qualifications Ribbon */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 font-mono text-[10px] uppercase tracking-wider text-brand-secondary">
              <div className="p-3 bg-white/[0.02] border border-white/5">
                <span className="text-white font-bold block mb-1">18+ ANOS</span>
                <span>Experiência Comercial</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5">
                <span className="text-white font-bold block mb-1">FGV</span>
                <span>MBA & Pós-Graduações</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5">
                <span className="text-white font-bold block mb-1">CEA</span>
                <span>Certificação de Mercado</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Li%20sua%20apresentação%20no%20site%20da%20Orvalia%20e%20gostaria%20de%20conversar%20sobre%20o%20posicionamento%20da%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest transition-colors"
              >
                <span>Falar com o Bruno</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
