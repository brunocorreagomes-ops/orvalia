import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";

export default function Termos() {

  return (
    <article className="min-h-screen bg-brand-mineral pt-40 pb-20 px-8 md:px-24 text-brand-muted">
      <SEO title="Termos de Uso | Orvalia Studio" description="Consulte os termos de uso do site da Orvalia Studio." canonical="https://orvalia.com.br/termos/" />
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-cyan-dark mb-12 transition-colors">
          <ChevronLeft size={20} />
          Voltar para a página inicial
        </Link>
        
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-ink tracking-tighter mb-4">Termos de Uso</h1>
          <p className="text-brand-cyan-dark uppercase tracking-widest text-xs font-bold">Orvalia Studio | Indaiatuba</p>
        </motion.header>

        <section className="prose prose-brand max-w-none space-y-8 leading-relaxed text-lg">
          <p>Bem-vindo ao site da Orvalia Studio. Ao acessar este site, você concorda em cumprir estes termos de uso.</p>
          
          <h2 className="text-2xl font-bold text-brand-ink mt-12">1. Aceitação dos Termos</h2>
          <p>O acesso e uso do site orvalia.com.br estão sujeitos aos seguintes termos e condições e a todas as leis aplicáveis. Ao navegar no site, você aceita, sem limitação ou qualificação, estes Termos de Uso.</p>

          <h2 className="text-2xl font-bold text-brand-ink mt-12">2. Propriedade Intelectual</h2>
          <p>Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é de propriedade da Orvalia Studio ou de seus fornecedores de conteúdo e está protegido pelas leis de direitos autorais do Brasil e internacionais.</p>

          <h2 className="text-2xl font-bold text-brand-ink mt-12">3. Uso de Licença</h2>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais no site da Orvalia Studio apenas para visualização transitória pessoal e não comercial.</p>

          <h2 className="text-2xl font-bold text-brand-ink mt-12">4. Isenção de Responsabilidade</h2>
          <p>Os materiais no site da Orvalia Studio são fornecidos "como estão". A Orvalia Studio não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias.</p>
        </section>
      </div>
    </article>
  );
}
