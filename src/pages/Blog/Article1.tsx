import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight, ChevronRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";

export default function Article1() {
  return (
    <article className="min-h-screen bg-[#FAFAFA] pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">
            <ChevronLeft size={16} />
            Voltar ao Blog
          </Link>
          <ShareButton />
        </div>

        <header className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
          >
            Branding & Estratégia
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >
            Branding em Indaiatuba: Como construir uma marca forte com base em estratégia
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>22 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>6 min de leitura</span>
          </motion.div>
        </header>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
            Criar uma marca forte vai muito além de desenvolver um logotipo. Em cidades em crescimento como Indaiatuba, empresas que entendem branding como estratégia conseguem se posicionar melhor, atrair clientes de maior valor e crescer com consistência no digital.
          </p>
          
          <p>Segundo <strong>Philip Kotler</strong>, considerado um dos maiores nomes do marketing moderno, uma marca não é apenas um nome ou símbolo, mas um conjunto de percepções construídas na mente do consumidor. Isso significa que branding está diretamente ligado à forma como sua empresa é percebida — e não apenas à sua estética.</p>

          <p>Já <strong>Marty Neumeier</strong>, autor do livro <em>The Brand Gap</em>, define marca como “a percepção intuitiva de uma pessoa sobre um produto, serviço ou organização”. Ou seja, sua marca não é o que você diz que ela é — é o que o público entende.</p>

          <p>Na prática, empresas em Indaiatuba que investem apenas em um logo bonito, sem estratégia, acabam competindo por preço. Isso acontece porque não existe diferenciação clara. Sem posicionamento, você vira mais uma opção no mercado.</p>

          <div className="p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">
            <h3 className="text-2xl font-black text-black tracking-tighter mb-8 uppercase">A construção de uma marca forte passa por três pilares fundamentais:</h3>
            <ul className="space-y-6 list-none p-0">
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">01 //</span>
                <div>
                  <strong className="text-black block mb-1">Posicionamento claro</strong>
                  <span className="text-gray-600">Você precisa definir para quem sua marca existe e qual problema resolve.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">02 //</span>
                <div>
                  <strong className="text-black block mb-1">Identidade visual estratégica</strong>
                  <span className="text-gray-600">Design não é decoração. Ele traduz posicionamento.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">03 //</span>
                <div>
                  <strong className="text-black block mb-1">Consistência no digital</strong>
                  <span className="text-gray-600">Seu site e redes sociais precisam falar a mesma linguagem.</span>
                </div>
              </li>
            </ul>
          </div>

          <p>Outro ponto importante é a percepção de valor. Como explica <strong>Al Ries</strong>, especialista em posicionamento, “o marketing não é uma batalha de produtos, é uma batalha de percepções”. Isso significa que, muitas vezes, a marca mais forte vence — não necessariamente a melhor tecnicamente.</p>

          <p>Em um mercado local como Indaiatuba, isso é ainda mais evidente. Empresas que investem em branding estratégico conseguem se destacar rapidamente porque a concorrência ainda é, em grande parte, focada apenas no operacional.</p>

          <p>Se você quer construir uma marca forte no digital, o caminho não é começar pelo design — é começar pela estratégia.</p>
          
          <p className="border-t border-gray-200 pt-8 italic">
            Para entender melhor como isso se aplica a sistemas completos, veja nosso artigo sobre a <Link to="/blog/logo-vs-branding" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">diferença entre logo e branding</Link> e também nosso <Link to="/blog/guia-marca-forte" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">guia completo de construção de marca</Link>.
          </p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden mb-16"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">
                Pronto para<br />
                <span className="text-gray-300">transformar sua marca?</span>
              </h3>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Branding%20em%20Indaiatuba%20e%20gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
              >
                Falar com um Especialista <ArrowRight size={18} />
              </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 border-t border-gray-100 pt-16">
            <div className="w-full sm:w-auto opacity-40 cursor-not-allowed">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                  <ChevronLeft size={20} className="text-gray-400" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Anterior</span>
                  <span className="text-sm font-bold text-gray-400">Início do Blog</span>
                </div>
              </div>
            </div>

            <Link 
              to="/blog/identidade-visual-precos" 
              className="w-full sm:w-auto group"
            >
              <div className="flex items-center justify-end gap-6 hover:translate-x-2 transition-transform">
                <div className="text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">Próximo</span>
                  <span className="text-sm font-bold text-black group-hover:text-gray-600 transition-colors">Preços de Identidade Visual</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all shrink-0">
                  <ChevronRight size={20} className="text-black group-hover:text-white" />
                </div>
              </div>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
