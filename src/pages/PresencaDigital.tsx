import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight, CheckCircle2, Zap, Layout, Target } from "lucide-react";

export default function PresencaDigital() {
  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/blog/branding-estrategico-indaiatuba-campinas" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Artigo
        </Link>
        
        <header className="max-w-4xl mb-16">
          <span className="text-brand-accent-light text-[10px] uppercase tracking-[0.3em] font-black mb-4 block">Presença Digital</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
            Domine sua <span className="text-gradient">Marca no Digital</span>
          </h1>
          <p className="text-brand-secondary text-lg leading-relaxed max-w-2xl italic font-serif">
            A presença digital não é apenas estar na internet. É criar um ecossistema que trabalha 24 horas por dia para vender, encantar e fidelizar seus clientes na RMC.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Layout, title: "Sites de Elite", desc: "Plataformas otimizadas para converter tráfego em receita, focadas na experiência do usuário e na velocidade." },
            { icon: Zap, title: "SEO Semântico", desc: "Apareça quando seu cliente precisar. Otimização para as buscas locais de Indaiatuba, Campinas e região." },
            { icon: Target, title: "Posicionamento", desc: "Estratégia de branding que eleva sua percepção de valor, fugindo da guerra de preços com a concorrência." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-accent-light/30 transition-all"
            >
              <item.icon size={32} className="text-brand-accent-light mb-6" />
              <h3 className="text-xl font-black text-white uppercase mb-4">{item.title}</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="p-12 md:p-20 bg-brand-accent-light rounded-[3rem] text-center">
          <h2 className="text-3xl md:text-5xl font-black text-brand-bg uppercase tracking-tight mb-8">
            Acelere sua Autoridade Digital
          </h2>
          <p className="text-brand-bg/80 text-lg mb-12 max-w-xl mx-auto italic font-serif">
            Pare de perder espaço para concorrentes menores com presenças digitais melhores. Comece hoje a transformação do seu negócio online.
          </p>
          <a 
            href="https://wa.me/5511978959567?text=Olá!%20Li%20sobre%20Presença%20Digital%20e%20gostaria%20de%20iniciar%20meu%20projeto%20com%20vocês."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-bg text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl"
          >
            Falar com Especialistas <ArrowRight size={18} />
          </a>
        </section>
      </div>
    </div>
  );
}
