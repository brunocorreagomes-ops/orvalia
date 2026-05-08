import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";

export default function Article2() {
  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar ao Blog
        </Link>

        <header className="mb-16">
          <span className="text-brand-accent-light text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Investimento & Valor</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            Quanto custa uma identidade visual em Indaiatuba? (E por que o barato pode sair caro)
          </h1>
          <div className="flex items-center gap-4 text-brand-secondary text-sm">
            <span>21 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>5 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-invert prose-brand max-w-none text-brand-secondary leading-relaxed text-lg space-y-8">
          <p>Uma das dúvidas mais comuns entre empresas e profissionais liberais em Indaiatuba é sobre o valor de uma identidade visual. Mas a pergunta mais importante não é “quanto custa?”, e sim “o que está sendo entregue?”.</p>
          
          <p>De acordo com <strong>David Aaker</strong>, referência mundial em gestão de marcas e autor de <em>Building Strong Brands</em>, uma marca forte é um dos ativos mais valiosos de uma empresa. Isso significa que investir em identidade visual não deve ser visto como custo, mas como investimento estratégico.</p>

          <p>Na prática, os valores em Indaiatuba variam bastante: projetos básicos costumam ser focados apenas na estética superficial, enquanto projetos estratégicos envolvem posicionamento, conceito e construção real de valor.</p>

          <p>O problema é que muitas empresas optam pelo mais barato, sem entender o impacto disso. Uma identidade visual mal construída pode transmitir amadorismo, gerar desconfiança e afastar clientes.</p>

          <p>Segundo <strong>Seth Godin</strong>, autor de <em>This is Marketing</em>, as pessoas não compram produtos — elas compram histórias, percepções e conexões. E a identidade visual é uma das principais formas de comunicar isso.</p>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 my-12">
            <h3 className="text-white font-bold mb-6">Quando você investe de forma estratégica, sua marca passa a:</h3>
            <ul className="space-y-4 list-none p-0">
              <li className="flex gap-4">
                <span className="text-brand-accent-light font-bold">✓</span>
                <span><strong>Cobrar mais:</strong> A percepção de valor permite margens maiores.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-accent-light font-bold">✓</span>
                <span><strong>Atrair clientes melhores:</strong> O visual comunica quem você quer atender.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-accent-light font-bold">✓</span>
                <span><strong>Construir autoridade:</strong> O profissionalismo se torna evidente no primeiro contato.</span>
              </li>
            </ul>
          </div>

          <p>Outro ponto importante é a consistência. Como destaca <strong>Kevin Lane Keller</strong>, especialista em branding, marcas fortes são construídas através de experiências consistentes ao longo do tempo. Uma identidade visual bem estruturada facilita isso.</p>

          <p>Se você quer entender como construir essa base estratégica antes de investir, leia sobre <Link to="/blog/branding-indaiatuba" className="text-brand-accent-light hover:underline">branding estratégico em Indaiatuba</Link> e como evitar um <Link to="/blog/posicionamento-premium" className="text-brand-accent-light hover:underline">posicionamento desalinhado</Link>.</p>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="p-12 rounded-[2.5rem] glass-premium border border-brand-accent-light/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Quer um orçamento estratégico para sua marca?</h3>
            <a 
              href="https://wa.me/5511978959567" 
              className="inline-flex items-center gap-3 bg-brand-whatsapp text-brand-bg px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
            >
              Solicitar Proposta <ArrowRight size={18} />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
