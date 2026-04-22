import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Privacidade() {
  useEffect(() => {
    document.title = "Política de Privacidade | Orvalia Studio - Branding em Indaiatuba";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Saiba como a Orvalia Studio protege seus dados. Estúdio de branding e design em Indaiatuba.");
  }, []);

  return (
    <article className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24 text-brand-secondary">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar para a página inicial
        </Link>
        
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">Privacidade</h1>
          <p className="text-brand-accent-light uppercase tracking-widest text-[10px] font-black">Orvalia Studio — Indaiatuba</p>
        </motion.header>

        <section className="prose prose-invert prose-brand max-w-none space-y-8 leading-relaxed text-lg">
          <p>A sua privacidade é importante para nós. É política da Orvalia Studio respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Orvalia Studio, e outros sites que possuímos e operamos.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12">1. Coleta de Informações</h2>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>

          <h2 className="text-2xl font-bold text-white mt-12">2. Uso das Informações</h2>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemo-los dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

          <h2 className="text-2xl font-bold text-white mt-12">3. Compartilhamento de Dados</h2>
          <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

          <h2 className="text-2xl font-bold text-white mt-12">4. Compromisso do Usuário</h2>
          <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Orvalia Studio oferece no site.</p>
        </section>
      </div>
    </article>
  );
}
