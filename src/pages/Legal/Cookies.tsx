import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";

export default function Cookies() {

  return (
    <article className="min-h-screen bg-brand-mineral pt-40 pb-20 px-8 md:px-24 text-brand-muted">
      <SEO title="Política de Cookies | Orvalia Studio" description="Informações sobre cookies e recursos externos do site da Orvalia Studio." canonical="https://orvalia.com.br/cookies/" />
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
          <h1 className="text-4xl md:text-6xl font-bold text-brand-ink tracking-tighter mb-4">Política de Cookies</h1>
          <p className="text-brand-cyan-dark uppercase tracking-widest text-xs font-bold">Orvalia Studio | Indaiatuba</p>
        </motion.header>

        <section className="prose prose-brand max-w-none space-y-8 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-brand-ink mt-12">Recursos do site</h2>
          <p>O site institucional não oferece cadastro ou login de visitantes. As fontes são servidas pelo próprio site. Nesta versão, não há uma ferramenta de analytics configurada para coletar visitas ou conversões.</p>
          <h2 className="text-2xl font-bold text-brand-ink mt-12">Serviços externos</h2>
          <p>Ao enviar o formulário, uma nova aba abre o Google Forms para mostrar a confirmação. Links de WhatsApp, redes sociais e algumas imagens também usam serviços externos. Esses serviços podem tratar dados de conexão ou utilizar cookies conforme suas próprias políticas.</p>
          <h2 className="text-2xl font-bold text-brand-ink mt-12">Preferências do navegador</h2>
          <p>Você pode consultar e gerenciar cookies nas configurações do seu navegador. Alterações nessas preferências podem afetar o funcionamento dos serviços externos acessados a partir do site.</p>
          <p>Para informações sobre os dados enviados pelo formulário, consulte a <Link to="/privacidade/" className="underline underline-offset-4">Política de Privacidade</Link>.</p>
        </section>
      </div>
    </article>
  );
}
