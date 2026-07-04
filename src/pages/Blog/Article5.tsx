import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";
import BlogImage from "../../components/BlogImage";

export default function Article5() {
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
            Estratégia Premium
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.6rem,4vw,4.4rem)] font-sans font-black text-brand-text tracking-[-0.03em] leading-[0.98] mb-12 max-w-[12ch] md:max-w-[14ch]"
          >

            Como posicionar sua empresa como premium: estratégia clássica aplicada ao digital atual
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-brand-secondary text-[10px] font-mono uppercase tracking-widest"
          >
            <span>18 Abr 2026</span>
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
          <BlogImage src="https://i.ibb.co/vvwvVyVp/09-como-posicionar-sua-empresa-como-premium.webp" alt="Como posicionar sua empresa como premium" caption="Posicionamento Premium: O guia para cobrar mais" />
        </motion.div>

        <div className="prose prose-invert prose-xl max-w-none text-brand-secondary leading-relaxed space-y-8 font-sans selection:bg-brand-surface selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-brand-text/80 leading-snug">Posicionamento premium não tem relação direta com preço — tem relação com percepção. Segundo <strong>Al Ries</strong>, o posicionamento acontece na mente do consumidor. Ou seja, não é o que você cobra que define se sua marca é premium — é como ela é percebida.</p>
          
          <p className="text-xl md:text-2xl font-medium text-brand-text/80 leading-snug">Essa visão também é reforçada por <strong>Philip Kotler</strong>, que destaca que marcas fortes ocupam espaços claros e diferenciados na mente do público.</p>

          <p>No cenário atual, especialistas contemporâneos como <strong>Seth Godin</strong> defendem que marcas premium não tentam agradar todo mundo. Elas são específicas, claras e até polarizadoras. Já <strong>Alex Hormozi</strong> traz um ponto mais direto: percepção de valor vem da clareza da oferta e da transformação prometida.</p>

          <div className="p-8 md:p-12 bg-white/5 border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">
            <h3 className="text-2xl font-black text-brand-text tracking-tighter mb-8 uppercase">Empresas premium em Indaiatuba e região costumam seguir estes padrões:</h3>
            <ul className="space-y-4 list-none p-0">
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">1. //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Clareza de posicionamento</strong>
                  <span className="text-brand-secondary">Elas sabem exatamente quem atendem.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">2. //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Comunicação objetiva</strong>
                  <span className="text-brand-secondary">Sem excesso de explicação ou tentativa de convencer.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">3. //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Identidade visual consistente</strong>
                  <span className="text-brand-secondary">Tudo parece alinhado — do site ao Instagram.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-brand-text font-black">4. //</span>
                <div>
                  <strong className="text-brand-text block mb-1">Presença estratégica</strong>
                  <span className="text-brand-secondary">Conteúdo não é aleatório, ele reforça autoridade.</span>
                </div>
              </li>
            </ul>
          </div>

          <p>O erro mais comum é tentar parecer premium apenas com estética. Mas sem estratégia, isso não se sustenta. Marcas que investem dessa forma estratégica conseguem cobrar mais e atrair clientes melhores.</p>

          <p>Para profissionais liberais que buscam esse status, recomendamos a leitura sobre <Link to="/blog/identidade-profissionais-liberais" className="text-brand-text font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">identidade visual para profissionais liberais</Link>.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white/5 border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
<div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-brand-text tracking-ultra-tight uppercase mb-8 leading-[0.9]">Quer elevar o nível do seu posicionamento?</h3>
            <a 
              href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Ser%20a%20Marca%20Mais%20Cara%20e%20gostaria%20de%20agendar%20uma%20consultoria%20premium."
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
