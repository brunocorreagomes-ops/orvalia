import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article7() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Social Media Pack</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Instagram para empresas: da construção de marca à geração de valor no digital
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>16 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>5 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>O Instagram deixou de ser apenas uma rede social — hoje ele é um dos principais canais de construção de marca. Segundo <strong>Gary Vaynerchuk</strong>, marcas são construídas através de atenção e consistência.</p>
          
          <p><strong>Philip Kotler</strong> já defendia que marketing é sobre criar valor e comunicar esse valor. O Instagram, hoje, é uma das principais ferramentas para isso. Especialistas atuais como na estratégia de <em>Jab Jab Jab Right Hook</em> do próprio Gary mostram que o conteúdo deve entregar valor antes de pedir algo.</p>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-12">
            <h3 className="text-white font-bold mb-6">Na prática, sua presença no Instagram deve focar em:</h3>
            <ul className="space-y-4 list-none p-0">
              <li><strong>✓ Conteúdo que educa:</strong> Mostre autoridade e conhecimento.</li>
              <li><strong>✓ Conteúdo que conecta:</strong> Humanize a marca e crie relacionamento.</li>
              <li><strong>✓ Conteúdo que vende:</strong> De forma estratégica, após gerar valor.</li>
            </ul>
          </div>

          <p>Outro ponto importante é a consistência. Como reforça <strong>Seth Godin</strong>, marcas são construídas pela repetição de promessas cumpridas. No Instagram, isso significa manter padrão visual, tom de voz e frequência.</p>

          <p>Se você percebe que seu Instagram não está convertendo, pode ser um problema de base estratégica. Entenda melhor sobre <Link to="/blog/por-que-nao-cresce" className="text-brand-accent-light hover:underline">por que empresas não crescem mesmo estando no digital</Link>.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Seus posts geram valor ou apenas ruído?</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Gestão Estratégica de Redes Sociais <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
