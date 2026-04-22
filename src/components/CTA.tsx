import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-32 px-8 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-brand-bg border border-white/5 p-12 md:p-32 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-10">
            Vamos transformar seu <br /> negócio em uma referência <br /> <span className="text-brand-accent-light">em Indaiatuba?</span>
          </h2>
          
          <motion.a 
            href="https://wa.me/5511978959567?text=Olá,%20vim%20através%20do%20site%20Orvalia%20e%20gostaria%20de%20maiores%20informações"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-6 bg-brand-whatsapp text-brand-bg rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-2xl shadow-brand-whatsapp/20 group"
          >
            Começar Agora
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
