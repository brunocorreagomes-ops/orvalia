import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article10() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Guia Completo</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Como construir uma marca forte no digital: guia completo para empresas em Indaiatuba
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>13 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>8 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>Construir uma marca forte no digital exige mais do que presença — exige estratégia. Empresas em Indaiatuba que entendem isso conseguem crescer de forma consistente e sustentável.</p>
          
          <p>Segundo <strong>Al Ries</strong>, marketing é uma batalha de percepções. E no digital, essa batalha acontece todos os dias em cada clique e scroll.</p>

          <div className="p-8 rounded-3xl bg-brand-accent-light/5 border border-brand-accent-light/20 my-12">
            <h3 className="text-white font-bold mb-6">Os 4 pilares de uma marca forte:</h3>
            <ul className="space-y-4 list-none p-0">
              <li><strong>1. Posicionamento:</strong> Definir quem você é e para quem você fala. <strong>Philip Kotler</strong> reforça que posicionamento é ocupar um espaço claro.</li>
              <li><strong>2. Identidade visual:</strong> Traduz o posicionamento em forma visual. <strong>Marty Neumeier</strong> destaca que consistência é o que constrói reconhecimento.</li>
              <li><strong>3. Presença digital:</strong> Site, redes sociais e conteúdo alinhados.</li>
              <li><strong>4. Consistência:</strong> <strong>Seth Godin</strong> explica que marcas são construídas pela repetição de promessas cumpridas.</li>
            </ul>
          </div>

          <p>No cenário atual, conteúdo é o principal canal de construção de marca. <strong>Gary Vaynerchuk</strong> defende que marcas são construídas através da atenção. E atenção vem de relevância.</p>

          <p>Muitas empresas falham por tentar crescer sem essa base estratégica. Isso gera inconsistência e baixa percepção de valor. Se você sente que sua marca está desalinhada, comece lendo sobre os <Link to="/blog/erros-marca-amadora" className="text-brand-accent-light hover:underline">erros que fazem sua marca parecer amadora</Link>.</p>

          <p>Conclusão: marcas fortes não acontecem por acaso — são construídas com estratégia, paciência e consistência visual.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Pronto para começar a construir sua marca forte?</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Iniciar Projeto Estratégico <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
