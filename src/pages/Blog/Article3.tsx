import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";

export default function Article3() {
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
            Erros & Soluções
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >

            Erros que fazem sua empresa parecer amadora no digital (e como evitar)
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>20 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>4 min de leitura</span>
          </motion.div>
        </header>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">Muitas empresas em Indaiatuba estão presentes no digital, mas poucas realmente se posicionam. E isso acontece por erros simples — mas extremamente prejudiciais.</p>
          
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">O primeiro erro é tratar branding como algo superficial. Segundo <strong>Marty Neumeier</strong>, quando não existe clareza de marca, o público cria sua própria interpretação — e isso raramente joga a seu favor.</p>

          <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl my-8">
            <h3 className="text-black font-bold mb-4">Entre os erros mais comuns estão:</h3>
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

          <p>Em cidades como Indaiatuba, corrigir esses problemas já coloca você à frente de grande parte da concorrência. Se você sente que sua empresa está travada nesse amadorismo, veja nosso guia sobre <Link to="/blog/por-que-nao-cresce" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">por que empresas não crescem no digital</Link>.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
<div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">Sua empresa parece amadora? Vamos mudar isso.</h3>
            <a 
              href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20sobre%20Os%203%20Maiores%20Erros%20de%20Posicionamento%20e%20gostaria%20de%20uma%20auditoria%20de%20marca."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
            >
              Auditoria de Marca Grátis <ArrowRight size={18} />
            </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
