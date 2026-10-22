import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  { city: "Indaiatuba", role: "Base estratégica" },
  { city: "Campinas", role: "Região Metropolitana" },
  { city: "Itu, Salto, Sorocaba e Jundiaí", role: "Atendimento regional" },
  { city: "São Paulo e Brasil", role: "Atuação ampliada" }
];

export default function PosicionamentoLocal() {
  return (
    <section id="regional" className="py-24 md:py-32 bg-[#e2e5df] text-brand-ink selection:bg-brand-cyan selection:text-brand-ink">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Esquerda: Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-cyan-dark" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                06 / Presença Regional
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-[4.7vw] font-sans font-medium tracking-tight leading-[1.08] my-8">
              Indaiatuba é a nossa base.<br />
              <span className="italic font-serif font-light text-[#63716a]">Não o nosso limite.</span>
            </h2>
            
            <p className="text-[#63716a] text-lg leading-relaxed mb-10 max-w-lg">
              Atendemos empresas de Indaiatuba, Campinas e região. As reuniões e o acompanhamento do projeto também podem ser feitos a distância.
            </p>

            <Link 
              to="/agencia-indaiatuba" 
              className="inline-flex items-center gap-3 text-brand-cyan-dark font-mono text-[10px] font-bold uppercase tracking-widest border-b border-brand-cyan-dark/30 pb-1 self-start hover:border-brand-cyan-dark transition-all"
            >
              Consultoria para a RMC <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          {/* Direita: Lista de Locais */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center border-t border-[#aeb9b2] lg:border-t-0"
          >
            <div className="lg:border-t border-[#aeb9b2]">
              {locations.map((loc, i) => (
                <div 
                  key={i} 
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-8 py-6 border-b border-[#aeb9b2] group hover:px-4 transition-all duration-500"
                >
                  <span className="text-lg font-medium text-brand-ink">{loc.city}</span>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-[#79857d]">{loc.role}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
