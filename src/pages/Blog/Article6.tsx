import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article6() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Web & Performance</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Criação de site profissional: da usabilidade clássica à conversão no digital moderno
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>17 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>6 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>Um site profissional não é apenas um cartão de visitas — é uma ferramenta estratégica de posicionamento e conversão. Segundo <strong>Steve Krug</strong>, autor de <em>Don’t Make Me Think</em>, um dos princípios mais importantes de usabilidade é a clareza. O usuário não deve precisar pensar para entender o que fazer.</p>
          
          <p>Essa base clássica de UX continua válida, mas o cenário atual exige mais. Especialistas contemporâneos como <strong>Peep Laja</strong> reforçam que um site precisa ser orientado à conversão. Além disso, <strong>Neil Patel</strong> destaca que SEO e conteúdo são fundamentais para atrair tráfego qualificado.</p>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-12">
            <h3 className="text-white font-bold mb-6">Um site profissional hoje precisa unir três pilares:</h3>
            <ul className="space-y-4 list-none p-0">
              <li><strong>1. Clareza (UX):</strong> O visitante entende rapidamente o que você faz e como contratar.</li>
              <li><strong>2. Posicionamento (Branding):</strong> Transmite valor, autoridade e profissionalismo.</li>
              <li><strong>3. Conversão (Marketing):</strong> Estrutura focada em guiar o usuário para a ação.</li>
            </ul>
          </div>

          <p>Em Indaiatuba, muitos sites ainda falham nesses pontos. São visualmente aceitáveis, mas não convertem porque não têm estratégia. Site, redes sociais e conteúdo precisam estar integrados.</p>

          <p>Para construir essa presença sólida, confira nosso <Link to="/blog/guia-marca-forte" className="text-brand-accent-light hover:underline">guia completo de construção de marca digital</Link>.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Seu site atual converte ou apenas existe?</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Criar Site Estratégico <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
