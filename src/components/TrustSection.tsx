import { motion } from "framer-motion";
import { TrendingUp } from 'lucide-react';
import { IconElite, IconAuthority, IconDesign, IconDewdrop } from './CustomIcons';
import MagneticWrapper from './MagneticWrapper';

const differentiators = [
  {
    icon: IconElite,
    title: "Posicionamento de Elite",
    desc: "Especialistas em atrair clientes de alto valor que buscam qualidade, confiança e autoridade de marca na região."
  },
  {
    icon: IconAuthority,
    title: "SEO & Autoridade Local",
    desc: "Sua marca no topo do Google em Indaiatuba e RMC, preparada para pesquisas tradicionais e de Inteligência Artificial (GEO)."
  },
  {
    icon: IconDesign,
    title: "Design de Alto Padrão",
    desc: "Sites autorais, rápidos e de estética minimalista que elevam instantaneamente o valor percebido do seu negócio."
  }
];



export default function TrustSection() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* [5 | CONTEÚDO PARA GEO] Por que a Orvalia */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
    <div>
      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-4 block">Diferenciais</span>
      <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">Por que escolher a <br/><span className="text-gradient">Orvalia Studio?</span></h2>
    </div>
    <div className="flex justify-start lg:justify-end">
      <p className="text-brand-secondary/80 max-w-sm text-sm font-light">Elevamos o nível do seu negócio na internet, para que você não precise competir por preço, e sim por valor.</p>
    </div>
  </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
    {differentiators.map((item, idx) => (
      <motion.div 
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className={`p-8 lg:p-10 rounded-3xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between ${
          idx === 1 
            ? 'bg-gradient-to-b from-white/[0.04] to-brand-bg/90 border-2 border-brand-accent-light/30 shadow-[0_0_50px_rgba(0,255,209,0.06)] md:-translate-y-6 md:scale-[1.04] z-10' 
            : 'bg-white/[0.02] border border-white/5'
        }`}
      >
        {/* Subtle background element - Gota d'água / Orvalho (Option A) */}
        {idx === 0 && (
          <div className="absolute -top-12 -right-12 p-6 opacity-[0.05] pointer-events-none rotate-[15deg] text-white">
             <IconDewdrop size={180} />
          </div>
        )}
        {idx === 1 && (
          <div className="absolute -bottom-16 -right-10 p-6 opacity-[0.07] pointer-events-none -rotate-[25deg] text-brand-accent-light">
             <IconDewdrop size={200} />
          </div>
        )}
        {idx === 2 && (
          <div className="absolute -top-10 -left-16 p-6 opacity-[0.05] pointer-events-none rotate-[45deg] text-white">
             <IconDewdrop size={190} />
          </div>
        )}

        {idx === 1 && (
          <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[8px] uppercase tracking-widest px-3 py-1 rounded-full">
            Mais Solicitado
          </div>
        )}
        
        <div>
          <div className="w-12 h-12 rounded-xl bg-brand-accent-light/10 flex items-center justify-center mb-10 border border-brand-accent-light/20 group-hover:bg-brand-accent-light/20 transition-all">
            <item.icon className="text-brand-accent-light" size={24} />
          </div>
          <h3 className="text-white font-black text-lg uppercase tracking-tight mb-4 pr-8">{item.title}</h3>
          <p className="text-brand-secondary/80 text-sm leading-relaxed mb-6">{item.desc}</p>
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
           <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Diferencial {idx + 1}</span>
           <div className={`w-1.5 h-1.5 rounded-full ${idx === 1 ? 'bg-emerald-400' : 'bg-brand-accent-light/50'}`} />
        </div>
      </motion.div>
    ))}
  </div>

          <div className="mt-20 flex justify-center">
            <MagneticWrapper>
              <motion.a
                href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20o%20site%20da%20Orvalia%20e%20quero%20um%20diagnóstico%20da%20minha%20marca/site.%20Meu%20negócio%20é:"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 209, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-brand-accent-light text-brand-bg px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-xl transition-all"
              >Avaliar minha presença digital<TrendingUp size={18} />
              </motion.a>
            </MagneticWrapper>
          </div>
        </div>

        </div></section>
  );
}
