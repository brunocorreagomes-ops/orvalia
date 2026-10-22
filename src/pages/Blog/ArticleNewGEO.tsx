import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import SEO from "../../components/SEO";
import ShareButton from "../../components/ShareButton";
import BlogImage from "../../components/BlogImage";

export default function ArticleNewGEO() {
  return (
    <article className="min-h-screen bg-brand-bg text-brand-text pt-40 pb-20 px-6 md:px-24">
      <SEO title="GEO e buscas com IA: o que revisar no site da sua empresa | Orvalia Studio" description="Uma revisão de conteúdo, informações de atendimento e navegação para empresas que querem manter sua presença nas buscas clara e atualizada." canonical="https://orvalia.com.br/blog/geo-generative-engine-optimization-buscas-ia" />
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-text font-mono text-[10px] uppercase tracking-[0.2em]">
            <ChevronLeft size={16} /> Voltar ao Blog
          </Link>
          <ShareButton />
        </div>
        <header className="mb-12">
          <p className="text-xs text-brand-secondary font-mono mb-6">26 Mai 2026 · Sites e conteúdo</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">GEO e buscas com IA: o que revisar no site da sua empresa</h1>
        </header>
        <div className="mb-12 overflow-hidden rounded-3xl border border-white/5">
          <BlogImage src="https://i.ibb.co/DfY9bnCR/04-o-que-e-geo-e-como-preparar-sua-marca.webp" alt="Conteúdo de um site e buscas com inteligência artificial" caption="Informações úteis e atualizadas para quem pesquisa os serviços da empresa" />
        </div>
        <div className="prose prose-invert prose-lg max-w-none text-brand-secondary font-serif">
          <p className="mb-6 leading-relaxed">GEO é a sigla usada para Generative Engine Optimization, um termo comum nas discussões sobre visibilidade em respostas geradas por inteligência artificial. Para quem mantém um site, vale começar pelas informações que o cliente precisa consultar.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Descreva os serviços com exemplos</h2>
          <p className="mb-6 leading-relaxed">Explique o que sua empresa faz, quais pedidos atende e em quais situações o serviço é indicado. Exemplos do trabalho ajudam mais do que repetir palavras como “excelência”, “inovação” e “solução completa”.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Mantenha os dados de atendimento em dia</h2>
          <p className="mb-6 leading-relaxed">Confira telefone, endereço, região atendida e horários. Revise também os perfis comerciais que a própria empresa mantém. Dados antigos podem confundir quem está tentando entrar em contato.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Publique o que a empresa consegue demonstrar</h2>
          <p className="mb-6 leading-relaxed">Use trabalhos autorizados, informações sobre a equipe, descrição do processo e respostas às dúvidas recebidas no atendimento. Evite números, depoimentos e resultados que não possam ser confirmados.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Organize o conteúdo para as pessoas</h2>
          <p className="mb-6 leading-relaxed">Títulos claros, links entre assuntos relacionados e textos legíveis ajudam o visitante a consultar o site. Divida o conteúdo conforme o assunto, sem repetir a mesma informação em várias páginas.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">É preciso criar um formato especial para o Google?</h2>
          <p className="mb-6 leading-relaxed">Segundo o <a className="text-brand-text underline underline-offset-4" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">guia do Google sobre buscas com IA</a>, não há uma marcação especial obrigatória nem a necessidade de reescrever o conteúdo exclusivamente para sistemas de IA. As boas práticas de SEO continuam relevantes.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">O trabalho garante que a empresa será recomendada?</h2>
          <p className="mb-6 leading-relaxed">Não prometemos uma posição ou uma recomendação específica. A revisão organiza o conteúdo, corrige informações e facilita a consulta ao site. A proposta deve descrever essas entregas de forma verificável.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Como a Orvalia pode ajudar</h2>
          <p className="mb-6 leading-relaxed">Revisamos os textos de apresentação, as páginas de serviços, os títulos e os caminhos de contato. A partir dessa revisão, combinamos quais mudanças fazem sentido para o negócio e como acompanhar o trabalho.</p>
          <div className="mt-16 p-6 md:p-12 bg-brand-surface rounded-3xl">
            <h2 className="text-2xl font-semibold text-brand-text font-sans">Quer revisar o seu site?</h2>
            <p className="mb-6 leading-relaxed">Conte quais serviços sua empresa oferece e o que precisa melhorar. Podemos conversar sobre o conteúdo, a navegação e o contato com seus clientes.</p>
            <a href="https://wa.me/5511978959567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-brand-text font-sans font-semibold">
              Conversar com Bruno <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
