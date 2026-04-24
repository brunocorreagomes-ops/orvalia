import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article9() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Profissionais Liberais</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Identidade visual para profissionais liberais em Indaiatuba: como transmitir autoridade e confiança
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>14 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>5 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>Profissionais liberais como advogados, dentistas e esteticistas dependem diretamente da confiança. E no digital, essa confiança começa pela percepção visual.</p>
          
          <p><strong>David Aaker</strong> destaca que marcas fortes criam associações positivas na mente do público. Para profissionais liberais, isso significa transmitir profissionalismo e segurança desde o primeiro contato.</p>

          <p>No ambiente digital, o cliente avalia sua credibilidade em segundos. <strong>Seth Godin</strong> reforça que pessoas não escolhem apenas pelo serviço — escolhem pela confiança e identificação com a marca.</p>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-12">
            <h3 className="text-white font-bold mb-6">Elementos essenciais para autoridade visual:</h3>
            <ul className="space-y-4 list-none p-0">
              <li><strong>✓ Clareza Visual:</strong> Cores e tipografias que transmitem segurança.</li>
              <li><strong>✓ Consistência:</strong> Instagram, site e materiais com o mesmo padrão.</li>
              <li><strong>✓ Posicionamento:</strong> Visual alinhado ao público que deseja atrair.</li>
            </ul>
          </div>

          <p>Muitos profissionais em Indaiatuba ainda usam soluções genéricas, o que enfraquece sua percepção no mercado. <strong>Chris Do</strong> destaca que design não é estética — é comunicação de valor.</p>

          <p>Se você busca atrair clientes de maior ticket e elevar sua percepção, veja nosso artigo sobre <Link to="/blog/posicionamento-premium" className="text-brand-accent-light hover:underline">como se posicionar como premium</Link>.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Sua imagem profissional transmite confiança?</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Construir Minha Autoridade <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
