import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ShareButton from "../../components/ShareButton";

export default function Article6() {
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
            Web & Performance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-black text-black tracking-tight leading-[1] mb-8"
          >

            Criação de site profissional: da usabilidade clássica à conversão no digital moderno
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-gray-400 text-[10px] font-mono uppercase tracking-widest"
          >
            <span>17 Abr 2026</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>6 min de leitura</span>
          </motion.div>
        </header>

        <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8 font-sans selection:bg-black selection:text-white">
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">Um site profissional não é apenas um cartão de visitas — é uma ferramenta estratégica de posicionamento e conversão. Segundo <strong>Steve Krug</strong>, autor de <em>Don’t Make Me Think</em>, um dos princípios mais importantes de usabilidade é a clareza. O usuário não deve precisar pensar para entender o que fazer.</p>
          
          <p className="text-xl md:text-2xl font-medium text-black/80 leading-snug">Essa base clássica de UX continua válida, mas o cenário atual exige mais. Especialistas contemporâneos como <strong>Peep Laja</strong> reforçam que um site precisa ser orientado à conversão. Além disso, <strong>Neil Patel</strong> destaca que SEO e conteúdo são fundamentais para atrair tráfego qualificado.</p>

          <div className="p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.02)] my-16">
            <h3 className="text-2xl font-black text-black tracking-tighter mb-8 uppercase">Um site profissional hoje precisa unir três pilares:</h3>
            <ul className="space-y-4 list-none p-0">
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">1. //</span>
                <div>
                  <strong className="text-black block mb-1">Clareza (UX)</strong>
                  <span className="text-gray-600">O visitante entende rapidamente o que você faz e como contratar.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">2. //</span>
                <div>
                  <strong className="text-black block mb-1">Posicionamento (Branding)</strong>
                  <span className="text-gray-600">Transmite valor, autoridade e profissionalismo.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-black font-black">3. //</span>
                <div>
                  <strong className="text-black block mb-1">Conversão (Marketing)</strong>
                  <span className="text-gray-600">Estrutura focada em guiar o usuário para a ação.</span>
                </div>
              </li>
            </ul>
          </div>

          <p>Em Indaiatuba, muitos sites ainda falham nesses pontos. São visualmente aceitáveis, mas não convertem porque não têm estratégia. Site, redes sociais e conteúdo precisam estar integrados.</p>

          <p>Para construir essa presença sólida, confira nosso <Link to="/blog/guia-marca-forte" className="text-black font-semibold underline decoration-brand-accent-light/30 hover:decoration-brand-accent-light transition-all">guia completo de construção de marca digital</Link>.</p>
        </div>

        <footer className="mt-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 md:p-20 rounded-[4rem] bg-white border border-gray-100 text-center shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
<div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-black tracking-ultra-tight uppercase mb-8 leading-[0.9]">Seu site atual converte ou apenas existe?</h3>
            <a 
              href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20artigo%20'Site%20em%20Indaiatuba'%20e%20quero%20criar%20um%20site%20estratégico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-all shadow-2xl hover:shadow-black/20"
            >
              Criar Site Estratégico <ArrowRight size={18} />
            </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent-light/5 blur-[60px] rounded-full" />
          </motion.div>
        </footer>
      </div>
    </article>
  );
}
