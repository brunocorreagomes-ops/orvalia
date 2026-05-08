import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article5() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Estratégia Premium</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Como posicionar sua empresa como premium: estratégia clássica aplicada ao digital atual
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>18 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>5 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>Posicionamento premium não tem relação direta com preço — tem relação com percepção. Segundo <strong>Al Ries</strong>, o posicionamento acontece na mente do consumidor. Ou seja, não é o que você cobra que define se sua marca é premium — é como ela é percebida.</p>
          
          <p>Essa visão também é reforçada por <strong>Philip Kotler</strong>, que destaca que marcas fortes ocupam espaços claros e diferenciados na mente do público.</p>

          <p>No cenário atual, especialistas contemporâneos como <strong>Seth Godin</strong> defendem que marcas premium não tentam agradar todo mundo. Elas são específicas, claras e até polarizadoras. Já <strong>Alex Hormozi</strong> traz um ponto mais direto: percepção de valor vem da clareza da oferta e da transformação prometida.</p>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-12">
            <h3 className="text-white font-bold mb-6">Empresas premium em Indaiatuba e região costumam seguir estes padrões:</h3>
            <ul className="space-y-4 list-none p-0">
              <li><strong>1. Clareza de posicionamento:</strong> Elas sabem exatamente quem atendem.</li>
              <li><strong>2. Comunicação objetiva:</strong> Sem excesso de explicação ou tentativa de convencer.</li>
              <li><strong>3. Identidade visual consistente:</strong> Tudo parece alinhado — do site ao Instagram.</li>
              <li><strong>4. Presença estratégica:</strong> Conteúdo não é aleatório, ele reforça autoridade.</li>
            </ul>
          </div>

          <p>O erro mais comum é tentar parecer premium apenas com estética. Mas sem estratégia, isso não se sustenta. Marcas que investem dessa forma estratégica conseguem cobrar mais e atrair clientes melhores.</p>

          <p>Para profissionais liberais que buscam esse status, recomendamos a leitura sobre <Link to="/blog/identidade-profissionais-liberais" className="text-brand-accent-light hover:underline">identidade visual para profissionais liberais</Link>.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Quer elevar o nível do seu posicionamento?</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Consultoria Premium <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
