import { motion } from "framer-motion";
import { Star, CheckCircle2, TrendingUp, Users, Shield, Cpu } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Posicionamento de Elite",
    desc: "Especialistas em atrair clientes de alto valor que buscam qualidade, confiança e autoridade de marca na região."
  },
  {
    icon: Shield,
    title: "SEO & Autoridade Local",
    desc: "Sua marca no topo do Google em Indaiatuba e RMC, preparada para pesquisas tradicionais e de Inteligência Artificial (GEO)."
  },
  {
    icon: CheckCircle2,
    title: "Design de Alto Padrão",
    desc: "Sites autorais, rápidos e de estética minimalista que elevam instantaneamente o valor percebido do seu negócio."
  }
];



export default function TrustSection() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* [5 — CONTEÚDO PARA GEO] Por que a Orvalia */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-4 block">Diferenciais</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Por que escolher a <span className="text-gradient">Orvalia Studio?</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {differentiators.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand-accent-light/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-accent-light/10 flex items-center justify-center mb-6 border border-brand-accent-light/20 group-hover:bg-brand-accent-light/20 transition-all">
                  <item.icon className="text-brand-accent-light" size={24} />
                </div>
                <h3 className="text-white font-black text-lg uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-brand-secondary/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
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
            >
              Falar no WhatsApp
              <TrendingUp size={18} />
            </motion.a>
          </div>
        </div>

        </div></section>
  );
}
