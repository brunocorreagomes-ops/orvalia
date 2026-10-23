import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="gap-diagnostico" className="py-24 md:py-32 bg-brand-ink text-brand-warm">
      <div className="container mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[2px] bg-brand-cyan" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-[#b0d1cb]">
            08 / Diagnóstico Direto
          </span>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2.25rem,10vw,3.75rem)] md:text-[8vw] font-sans font-medium tracking-tight leading-[0.94] my-10 md:my-16"
        >
          Vamos conversar <br />
          <span className="italic font-serif font-light text-brand-cyan">sobre o seu projeto.</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-[#56615d] pb-24">
          <p className="max-w-[520px] text-[#b1bdb8] text-lg md:text-xl leading-relaxed">
            Conte como sua empresa funciona e o que precisa melhorar na marca ou no site. A conversa inicial ajuda a definir o escopo do trabalho.
          </p>
          
          <Link
            to="/contato/"
            data-analytics-event="contact_form_open"
            data-analytics-location="cta_final"
            className="inline-flex items-center justify-between gap-6 px-8 py-5 bg-brand-cyan text-brand-ink font-bold text-xs uppercase tracking-widest hover:bg-[#80e6e2] transition-colors shrink-0"
          >
            Agendar diagnóstico de marca <ArrowUpRight size={18} />
          </Link>
        </div>



      </div>
    </section>
  );
}
