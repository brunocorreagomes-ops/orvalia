import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";
import BlogImage from "../../components/BlogImage";

export default function Article9() {
  return (
    <article className="min-h-screen bg-brand-bg text-brand-text pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-16 md:mb-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-text transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">
            <ChevronLeft size={16} />
            Voltar ao Blog
          </Link>
          <ShareButton />
        </div>

        <header className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] block mb-6 md:mb-8"
          >
            Profissionais Liberais
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.6rem,4vw,4.4rem)] font-sans font-black text-brand-text tracking-[-0.03em] leading-[0.98] mb-12 max-w-[12ch] md:max-w-[14ch]"
          >
            Identidade visual para profissionais liberais em Indaiatuba: como transmitir autoridade e confiança
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-brand-secondary text-[10px] font-mono uppercase tracking-widest"
          >
            <span>14 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>5 min de leitura</span>
          </motion.div>
        </header>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
        >
          <BlogImage src="https://i.ibb.co/Y79hhg1n/13-identidade-visual-para-profissionais-liberais-em-indaiatuba.webp" alt="Identidade visual para profissionais liberais em Indaiatuba" caption="Identidade de Elite para Médicos e Advogados" />
        </motion.div>

        <div className="prose prose-invert prose-xl max-w-none text-brand-secondary leading-relaxed space-y-8 font-sans selection:bg-brand-surface selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-brand-text/80 leading-snug">
            Profissionais liberais como advogados, dentistas e esteticistas dependem diretamente da confiança. E no digital, essa confiança começa pela percepção visual.
          </p>
          
          <p><strong>David Aaker</strong> destaca que marcas fortes criam associações positivas na mente do público. Para profissionais liberais, isso significa transmitir profissionalismo e segurança desde o primeiro contato.</p>

          <p>No ambiente digital, o cliente avalia sua credibilidade em segundos. <strong>Seth Godin</strong> reforça que pessoas não escolhem apenas pelo serviço, mas pela confiança e identificação com a marca.</p>

          <div className="p-8 md:p-12 bg-white/5 border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">
            <h3 className="text-2xl font-black text-brand-text tracking-tighter mb-8 uppercase">Elementos essenciais para autoridade visual:</h3>
            <ul className="space-y-6 list-none p-0">
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">01 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Clareza Visual</strong>
                  <span className="text-brand-secondary">Cores e tipografias que transmitem segurança.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">02 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Consistência</strong>
                  <span className="text-brand-secondary">Instagram, site e materiais com o mesmo padrão.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">03 //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Posicionamento</strong>
                  <span className="text-brand-secondary">Visual alinhado ao público que deseja atrair.</span>
                </div>
              </li>
            </ul>
          </div>

          <p>Muitos profissionais em Indaiatuba ainda usam soluções genéricas, o que enfraquece sua percepção no mercado. <strong>Chris Do</strong> destaca que design não é estética: é comunicação de valor.</p>

          <p>Se você busca atrair clientes de maior ticket e elevar sua percepção, veja nosso artigo sobre <Link to="/posicionamento-digital-advogados-indaiatuba" className="text-brand-text font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">como se posicionar como premium</Link>.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white/5 border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-brand-text tracking-ultra-tight uppercase mb-8 leading-[0.9]">
                Sua imagem profissional<br />
                <span className="text-gray-300">transmite confiança?</span>
              </h3>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Identidade%20para%20Profissionais%20Liberais%20e%20quero%20construir%20minha%20autoridade."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-brand-surface text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
              >
                Diagnóstico Gratuito <ArrowRight size={18} />
              </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
