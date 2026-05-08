import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article8() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Crescimento & Escala</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Por que sua empresa não cresce no digital (mesmo com redes sociais)
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>15 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>5 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>Muitas empresas em Indaiatuba estão presentes no digital, mas poucas realmente crescem. Estar nas redes sociais não é o mesmo que ter uma estratégia de marca.</p>
          
          <p>Segundo <strong>Philip Kotler</strong>, marketing é sobre gerar valor e comunicar esse valor com clareza. Quando isso não acontece, a presença digital se torna apenas operacional — e não estratégica.</p>

          <p><strong>Marty Neumeier</strong> explica que, quando uma marca não define sua percepção, o público define por conta própria — e geralmente isso resulta em algo genérico.</p>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-12">
            <h3 className="text-white font-bold mb-6">Principais motivos que travam o crescimento:</h3>
            <ul className="space-y-4 list-none p-0">
              <li><strong>1. Falta de branding:</strong> Sem estratégia de marca, todo o resto perde força. O conteúdo não conecta.</li>
              <li><strong>2. Comunicação inconsistente:</strong> Segundo <strong>Donald Miller</strong>, marcas que não são claras são ignoradas.</li>
              <li><strong>3. Conteúdo sem estratégia:</strong> <strong>Gary Vaynerchuk</strong> reforça que conteúdo precisa gerar valor antes de tentar vender.</li>
              <li><strong>4. Falta de integração:</strong> Site, redes e comunicação estão desalinhados.</li>
            </ul>
          </div>

          <p>Empresas que crescem no digital seguem um padrão: posicionamento claro, identidade visual consistente e presença digital integrada. Esse conjunto cria percepção de valor — e percepção gera crescimento.</p>

          <p>Para destravar esse crescimento, veja nosso artigo sobre <Link to="/blog/branding-indaiatuba" className="text-brand-accent-light hover:underline">como construir uma marca forte em Indaiatuba</Link>.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Sua empresa está estagnada no digital?</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Destravar Crescimento <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
