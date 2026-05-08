import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article4() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Conceitos & Fundamentos</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Diferença entre logo e branding: do conceito clássico à construção de marca no digital
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>19 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>5 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>Muitas empresas em Indaiatuba ainda confundem logo com branding — e esse é um dos principais fatores que limitam crescimento no digital.</p>
          
          <p>De forma direta: <strong>logo é um elemento visual. Branding é o sistema completo de percepção da marca.</strong></p>

          <p>Segundo <strong>Marty Neumeier</strong>, marca é a percepção que o público constrói ao longo do tempo. Já o logo é apenas um dos pontos de contato dessa percepção. Essa visão também é reforçada por <strong>David Aaker</strong>, que descreve branding como um conjunto de ativos — incluindo nome, identidade, posicionamento e associações mentais.</p>

          <p>Mas quando trazemos isso para o cenário atual, vemos uma evolução clara. Profissionais contemporâneos como <strong>Chris Do</strong> reforçam que o branding hoje não pode existir separado do digital. Para ele, o design precisa comunicar valor estratégico e não apenas estética.</p>

          <p>Da mesma forma, <strong>Gary Vaynerchuk</strong> destaca que a construção de marca acontece diariamente através de conteúdo, redes sociais e interação com o público. Ou seja, o branding deixou de ser estático e passou a ser contínuo.</p>

          <div className="p-8 rounded-3xl bg-brand-accent-light/5 border border-brand-accent-light/20 my-12">
            <h3 className="text-white font-bold mb-4">O branding moderno escala através de três elementos:</h3>
            <ul className="space-y-4 list-none p-0">
              <li><strong>1. Estratégia:</strong> Público-alvo, promessa e tom de voz.</li>
              <li><strong>2. Identidade:</strong> Visual harmônico e sistema de design.</li>
              <li><strong>3. Presença:</strong> Site rápido, redes ativas e conteúdo de valor.</li>
            </ul>
          </div>

          <p>O erro não é investir em design. É parar no design. Se você quer construir uma marca que realmente resista ao tempo, precisa olhar para o sistema como um todo. Comece entendendo nosso artigo sobre <Link to="/blog/branding-indaiatuba" className="text-brand-accent-light hover:underline">branding estratégico</Link>.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Sua marca é um sistema ou apenas um desenho?</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Consultoria de Marca <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
