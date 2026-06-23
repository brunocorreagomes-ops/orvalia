import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface BlogCTAProps {
  articleTitle?: string;
}

export default function BlogCTA({ articleTitle }: BlogCTAProps) {
  const whatsappMessage = articleTitle 
    ? `Olá, Bruno. Li o artigo "${articleTitle}" no blog da Orvalia e gostaria de um diagnóstico gratuito para o meu negócio.`
    : `Olá, Bruno. Vi o blog da Orvalia e gostaria de um diagnóstico gratuito para o meu negócio.`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-12 md:p-16 rounded-[3rem] bg-brand-card border border-brand-accent-light/10 text-center relative overflow-hidden my-16 shadow-[0_0_50px_rgba(0,255,209,0.02)]"
    >
      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-4 block">
          Oportunidade Estratégica
        </span>
        <h3 className="text-3xl md:text-5xl font-black text-white tracking-ultra-tight uppercase mb-8 leading-[0.9]">
          Gostou dos insights?<br />
          <span className="text-brand-secondary/60">Transforme sua marca em um ativo de vendas</span>
        </h3>
        <p className="text-brand-secondary max-w-xl mx-auto italic font-serif text-lg leading-relaxed mb-10">
          Oferecemos um diagnóstico gratuito de posicionamento e performance digital para empresas selecionadas de Indaiatuba e região.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`https://wa.me/5511978959567?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-brand-accent-light text-brand-bg px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-xl shadow-brand-accent-light/10"
          >
            Solicitar diagnóstico gratuito <Zap size={14} />
          </a>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-accent-light/5 blur-[100px] rounded-full pointer-events-none" />
    </motion.div>
  );
}
