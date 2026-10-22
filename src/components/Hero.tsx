import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Captura o progresso de scroll da seção para sincronizar as animações The Gap -> The Point
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Movimentos coreografados atrelados ao scroll (0 a 0.6 do progresso)
  const leftSurfaceX = useTransform(scrollYProgress, [0, 0.6], [-95, 0]);
  const rightSurfaceX = useTransform(scrollYProgress, [0, 0.6], [95, 0]);
  const pointScale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1.08]);
  const barScaleX = useTransform(scrollYProgress, [0, 0.6], [0.05, 1]);
  
  // Fallback Mobile (Clique para alinhar, sem depender do sticky scroll)
  const [mobileAligned, setMobileAligned] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 760);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[150svh] bg-brand-mineral text-brand-ink isolate">
      <div className="sticky top-0 min-h-[100svh] flex items-center px-6 md:px-16 pt-28 pb-8">
        
        <div className="w-full max-w-[1550px] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-center gap-10 md:gap-16">
          
          {/* Coluna Esquerda: Narrativa Editorial */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.19em] font-bold text-brand-muted mb-8 md:mb-16">
              <span className="block w-2.5 h-2.5 rounded-full bg-[#008a86] border-2 border-[#4fcfc9]"></span>
              ORVALIA / DIGITAL VALUE STUDIO
            </div>
            
            <h1 className="text-5xl md:text-[5.5vw] font-medium leading-[0.96] tracking-tight max-w-[880px] text-brand-ink m-0">
              Seu negócio vale <br className="hidden md:block"/>
              <span className="text-[#808a87]">mais do que parece.</span>
            </h1>
            
            <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-[610px] mt-8">
              Reposicionamos marca, mensagem e site para empresas que já entregam valor no mundo real, mas ainda não conseguem transmitir essa força com a mesma clareza no digital.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
              <a 
                href="https://wa.me/5511978959567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-6 px-6 py-4 bg-brand-ink text-brand-warm border border-brand-ink text-sm font-semibold min-w-[200px] hover:bg-[#2c4141] hover:-translate-y-0.5 transition-all"
              >
                Mapear meu gap <ArrowUpRight size={16} className="text-brand-cyan" />
              </a>
              <a 
                href="#cases" 
                className="inline-flex items-center gap-3 text-brand-ink text-sm font-semibold border-b border-[#7d8683] pb-1 hover:border-brand-ink transition-all"
              >
                Ver transformações ↘
              </a>
            </div>

            <div className="flex justify-between items-center gap-4 max-w-[640px] border-t border-[#bec4bf] pt-4 mt-16 md:mt-24 text-[10px] text-brand-muted tracking-widest uppercase">
              <span>Indaiatuba · Campinas · Brasil</span>
              <span>Make value visible.</span>
            </div>
          </div>

          {/* Coluna Direita: O Palco Cinematográfico (The Gap -> The Point) */}
          <div className="relative mt-2 md:mt-0">
            <div className="relative overflow-hidden w-full h-[60vh] md:h-[70vh] bg-[#101C1F] shadow-2xl isolate">
              
              {/* Vídeo Cinematográfico Veo 3.1 + Poster Fallback */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
                style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAwIDEzNTAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIHNsaWNlIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iLjA4IiB5MT0iMCIgeDI9Ii45IiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iIzA3MTMxNiIvPjxzdG9wIG9mZnNldD0iLjQyIiBzdG9wLWNvbG9yPSIjMjMzZDQyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDcwZTExIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjExMDAiIGhlaWdodD0iMTM1MCIgZmlsbD0idXJsKCNiZykiLz48L3N2Zz4=')` }} 
              />
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="metadata" 
                className="absolute inset-0 w-full h-full object-cover z-10 opacity-70"
              >
                {/* <source src="/video/orvalia-cinematic-loop.mp4" type="video/mp4" /> */}
              </video>
              <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#010B0E]/30 via-transparent to-[#010B0E]/60" />

              {/* Informação Superior do Palco */}
              <div className="absolute top-6 left-6 right-6 flex justify-between z-30 text-[#e3eeed] text-[9px] md:text-[10px] font-semibold tracking-widest uppercase">
                <span>01 / THE GAP</span>
                <span>REAL → PERCEIVED</span>
              </div>

              {/* Linha Central de Colisão */}
              <div className="absolute top-[4%] bottom-[4%] left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#a4f7f0]/80 to-transparent z-40" />

              {/* Superfícies Móveis (The Gap) e O Ponto de Orvalho */}
              <div className="absolute inset-0 z-50 flex justify-center items-center pointer-events-none">
                <motion.div 
                  className="absolute w-[52%] h-[49%] border border-[#d3f4f4]/60 right-1/2 border-r-0 backdrop-blur-sm"
                  style={{ 
                    clipPath: 'polygon(0 0, 100% 25%, 100% 78%, 0 100%)',
                    background: 'linear-gradient(105deg, rgba(220,246,239,0.02), rgba(138,207,208,0.19))',
                    x: isMobile ? (mobileAligned ? 0 : -72) : leftSurfaceX 
                  }}
                />
                <motion.div 
                  className="absolute w-[52%] h-[49%] border border-[#d3f4f4]/60 left-1/2 border-l-0 backdrop-blur-sm"
                  style={{ 
                    clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 78%)',
                    background: 'linear-gradient(260deg, rgba(220,246,239,0.02), rgba(138,207,208,0.15))',
                    x: isMobile ? (mobileAligned ? 0 : 72) : rightSurfaceX 
                  }}
                />
                <motion.span 
                  className="block relative z-[60] w-3 h-3 rounded-full bg-brand-cyan"
                  style={{ 
                    boxShadow: '0 0 0 7px rgba(102,231,225,0.1), 0 0 25px rgba(102,231,225,0.45)',
                    scale: isMobile ? (mobileAligned ? 1.08 : 0.6) : pointScale 
                  }}
                />
              </div>

              {/* Informação Inferior do Palco (Contador Dinâmico) */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 z-30 text-[#e3eeed] text-[9px] md:text-[10px] font-semibold tracking-widest uppercase">
                <span>VALOR REAL</span>
                <div className="flex-1 max-w-[105px] h-[1px] bg-[#718c8d] relative">
                  <motion.i 
                    className="absolute inset-y-[-1px] left-0 bg-brand-cyan origin-left" 
                    style={{ scaleX: isMobile ? (mobileAligned ? 1 : 0.05) : barScaleX }} 
                  />
                </div>
                <span className="text-right">VALOR PERCEBIDO</span>
              </div>
            </div>

            {/* Legenda e Botão de Interação Mobile */}
            <div className="flex justify-between items-center py-4 border-b border-[#bfc8c4] text-[#606e69] text-[9px] md:text-[10px] tracking-widest uppercase mt-1">
              <span>O ponto em que o valor se torna visível.</span>
              <span>DEW POINT / 00</span>
            </div>
            
            {isMobile && (
              <button 
                onClick={() => setMobileAligned(!mobileAligned)}
                className="w-full flex justify-between items-center py-4 text-brand-ink font-bold text-xs uppercase border-b border-[#bfc8c4] text-left"
              >
                {mobileAligned ? 'Rever o intervalo' : 'Alinhar valor e percepção'} <span>↗</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
