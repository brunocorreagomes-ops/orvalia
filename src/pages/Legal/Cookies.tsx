import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Cookies() {
  useEffect(() => {
    document.title = "Política de Cookies | Orvalia Studio - Estúdio de Branding em Indaiatuba";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Entenda como usamos cookies no site da Orvalia Studio, especialista em branding e design em Indaiatuba.");
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
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">Política de Cookies</h1>
          <p className="text-brand-accent-light uppercase tracking-widest text-[10px] font-black">Orvalia Studio — Indaiatuba</p>
        </motion.header>

        <section className="prose prose-invert prose-brand max-w-none space-y-8 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-white mt-12">O que são cookies?</h2>
          <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12">Como usamos os cookies?</h2>
          <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site.</p>

          <h2 className="text-2xl font-bold text-white mt-12">Desativar cookies</h2>
          <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita.</p>

          <h2 className="text-2xl font-bold text-white mt-12">Cookies que definimos</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Cookies relacionados à conta</li>
            <li>Cookies relacionados ao login</li>
            <li>Cookies de preferências do site</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
