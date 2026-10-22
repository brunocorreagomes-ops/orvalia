import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="gap-diagnostico" className="py-24 md:py-32 bg-brand-ink text-brand-warm selection:bg-brand-cyan selection:text-brand-ink">
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
          className="text-6xl md:text-[8vw] font-sans font-medium tracking-tight leading-[0.94] my-10 md:my-16"
        >
          Make value <br />
          <span className="italic font-serif font-light text-brand-cyan">visible.</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-[#56615d] pb-24">
          <p className="max-w-[520px] text-[#b1bdb8] text-lg md:text-xl leading-relaxed">
            O primeiro passo não é comprar um novo site. É identificar onde a perceção, a clareza e a conversão estão abaixo do potencial do seu negócio.
          </p>
          
          <a 
            href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20o%20site%20da%20Orvalia%20e%20quero%20um%20diagnóstico%20da%20minha%20marca/site."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between gap-6 px-8 py-5 bg-brand-cyan text-brand-ink font-bold text-xs uppercase tracking-widest hover:bg-[#80e6e2] transition-colors shrink-0"
          >
            Iniciar conversa estratégica <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Rodapé incorporado no CTA conforme o protótipo V3 */}
        <footer className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[#b3bfb9]">
          <div>
            <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-white mb-2">
              ORVALIA — Digital Value Studio
            </div>
            <p className="font-mono text-[9px] uppercase tracking-widest">
              Indaiatuba / SP · © {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-[9px] font-bold uppercase tracking-widest">
            <a href="/privacidade" className="hover:text-white transition-colors">Privacidade</a>
            <a href="/termos" className="hover:text-white transition-colors">Termos</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </footer>

      </div>
    </section>
  );
}
