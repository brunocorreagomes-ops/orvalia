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

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO, TechIndaia",
    content: "A Orvalia transformou nosso posicionamento digital em Indaiatuba. Passamos a atrair clientes muito mais qualificados e alinhados ao nosso real valor.",
    rating: 5
  },
  {
    name: "Ana Silveira",
    role: "Fundadora, Studio AS",
    content: "O melhor investimento em branding que já fizemos. O site é rápido, elegante e transmite exatamente nossa autoridade.",
    rating: 5
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

        {/* [5 — CONTEÚDO PARA GEO] Depoimentos com microdata */}
        <div className="pt-24 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">Relatos de <span className="text-gradient">Sucesso Local</span></h2>
            <p className="text-brand-secondary italic font-serif text-lg">O que dizem os líderes que transformaram seus negócios conosco.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testi, idx) => (
              <div 
                key={idx} 
                itemScope 
                itemType="https://schema.org/Review" 
                className="p-10 rounded-[3rem] glass-premium relative border border-white/5"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand-accent-light fill-brand-accent-light" />
                  ))}
                </div>
                <div itemProp="reviewBody" className="text-white text-lg leading-relaxed mb-8 italic">
                  "{testi.content}"
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent-light/10 flex items-center justify-center text-brand-accent-light font-black">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <div itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name" className="text-white font-black uppercase tracking-widest text-xs">{testi.name}</span>
                    </div>
                    <div className="text-brand-secondary/60 text-[10px] uppercase tracking-widest font-mono">{testi.role}</div>
                  </div>
                </div>
                {/* Meta info for SEO */}
                <meta itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" content={testi.rating.toString()} />
                <meta itemProp="itemReviewed" itemScope itemType="https://schema.org/ProfessionalService" content="Orvalia Studio" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
