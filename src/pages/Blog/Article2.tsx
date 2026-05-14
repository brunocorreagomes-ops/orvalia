import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";

export default function Article2() {
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
            Investimento & Valor
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >

            Quanto custa uma identidade visual em Indaiatuba? (E por que o barato pode sair caro)
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>21 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>5 min de leitura</span>
          </motion.div>
        </header>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">Uma das dúvidas mais comuns entre empresas e profissionais liberais em Indaiatuba é sobre o valor de uma identidade visual. Mas a pergunta mais importante não é “quanto custa?”, e sim “o que está sendo entregue?”.</p>
          
          <p>De acordo com <strong>David Aaker</strong>, referência mundial em gestão de marcas e autor de <em>Building Strong Brands</em>, uma marca forte é um dos ativos mais valiosos de uma empresa. Isso significa que investir em identidade visual não deve ser visto como custo, mas como investimento estratégico.</p>

          <p>Na prática, os valores em Indaiatuba variam bastante: projetos básicos costumam ser focados apenas na estética superficial, enquanto projetos estratégicos envolvem posicionamento, conceito e construção real de valor.</p>

          <p>O problema é que muitas empresas optam pelo mais barato, sem entender o impacto disso. Uma identidade visual mal construída pode transmitir amadorismo, gerar desconfiança e afastar clientes.</p>

          <p>Segundo <strong>Seth Godin</strong>, autor de <em>This is Marketing</em>, as pessoas não compram produtos — elas compram histórias, percepções e conexões. E a identidade visual é uma das principais formas de comunicar isso.</p>

          <div className="p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">
            <h3 className="text-2xl font-black text-black tracking-tighter mb-8 uppercase">Quando você investe de forma estratégica, sua marca passa a:</h3>
            <ul className="space-y-4 list-none p-0">
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">✓ //</span>
                <div>
                  <strong className="text-black block mb-1">Cobrar mais:</strong>
                  <span className="text-gray-600">A percepção de valor permite margens maiores.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">✓ //</span>
                <div>
                  <strong className="text-black block mb-1">Atrair clientes melhores:</strong>
                  <span className="text-gray-600">O visual comunica quem você quer atender.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">✓ //</span>
                <div>
                  <strong className="text-black block mb-1">Construir autoridade:</strong>
                  <span className="text-gray-600">O profissionalismo se torna evidente no primeiro contato.</span>
                </div>
              </li>
            </ul>
          </div>

          <p>Outro ponto importante é a consistência. Como destaca <strong>Kevin Lane Keller</strong>, especialista em branding, marcas fortes são construídas através de experiências consistentes ao longo do tempo. Uma identidade visual bem estruturada facilita isso.</p>

          <p>Se você quer entender como construir essa base estratégica antes de investir, leia sobre <Link to="/blog/branding-indaiatuba" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">branding estratégico em Indaiatuba</Link> e como evitar um <Link to="/blog/posicionamento-premium" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">posicionamento desalinhado</Link>.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
<div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">Quer um orçamento estratégico para sua marca?</h3>
            <a 
              href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Identidade%20Visual%20e%20gostaria%20de%20solicitar%20uma%20proposta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
            >
              Solicitar Proposta <ArrowRight size={18} />
            </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
