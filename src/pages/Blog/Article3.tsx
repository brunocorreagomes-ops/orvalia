import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article3() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Erros & Soluções</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Erros que fazem sua empresa parecer amadora no digital (e como evitar)
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>20 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>4 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>Muitas empresas em Indaiatuba estão presentes no digital, mas poucas realmente se posicionam. E isso acontece por erros simples — mas extremamente prejudiciais.</p>
          
          <p>O primeiro erro é tratar branding como algo superficial. Segundo <strong>Marty Neumeier</strong>, quando não existe clareza de marca, o público cria sua própria interpretação — e isso raramente joga a seu favor.</p>

          <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl my-8">
            <h3 className="text-white font-bold mb-4">Entre os erros mais comuns estão:</h3>
            <ul className="space-y-3 list-none p-0">
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>Identidade visual inconsistente:</strong> Cores e fontes diferentes transmitem desorganização.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>Comunicação genérica:</strong> Frases vazias que não diferenciam sua empresa.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>Falta de posicionamento:</strong> Tentar falar com todo mundo e não se conectar com ninguém.</span>
              </li>
            </ul>
          </div>

          <p>De acordo com <strong>Donald Miller</strong>, autor de <em>Building a StoryBrand</em>, marcas precisam ser claras para serem eficazes. Quando a comunicação é confusa, o cliente simplesmente ignora. O cérebro humano está programado para ignorar o que não entende rapidamente.</p>

          <p>Outro erro crítico é focar apenas em estética. Como explica <strong>Simon Sinek</strong>, pessoas não compram o que você faz — compram o porquê você faz. Sem um propósito claro, sua marca não gera conexão real.</p>

          <p>Em cidades como Indaiatuba, corrigir esses problemas já coloca você à frente de grande parte da concorrência. Se você sente que sua empresa está travada nesse amadorismo, veja nosso guia sobre <Link to="/blog/por-que-nao-cresce" className="text-brand-accent-light hover:underline">por que empresas não crescem no digital</Link>.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Sua empresa parece amadora? Vamos mudar isso.</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Auditoria de Marca Grátis <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
