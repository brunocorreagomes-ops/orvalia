import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight } from "lucide-react";
import SEO from "../../components/SEO";
import ShareButton from "../../components/ShareButton";
import BlogImage from "../../components/BlogImage";

export default function ArticleArquiteturaSitesAltaPerformance() {
  return (
    <article className="min-h-screen bg-brand-bg text-brand-text pt-40 pb-20 px-6 md:px-24">
      <SEO title="Como organizar o site da sua empresa para facilitar a consulta aos serviços | Orvalia Studio" description="Serviços, trabalhos, dúvidas e contato: o que organizar no site para ajudar o cliente a encontrar as informações de que precisa." canonical="https://orvalia.com.br/blog/arquitetura-sites-alta-performance-campinas" />
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-text font-mono text-[10px] uppercase tracking-[0.2em]">
            <ChevronLeft size={16} /> Voltar ao Blog
          </Link>
          <ShareButton />
        </div>
        <header className="mb-12">
          <p className="text-xs text-brand-secondary font-mono mb-6">03 Jul 2026 · Sites e conteúdo</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">Como organizar o site da sua empresa para facilitar a consulta aos serviços</h1>
        </header>
        <div className="mb-12 overflow-hidden rounded-3xl border border-white/5">
          <BlogImage src="https://i.ibb.co/mrW1xwFV/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp" alt="Organização de páginas e conteúdo de um site empresarial" caption="Serviços, exemplos de trabalho e contato em páginas fáceis de consultar" />
        </div>
        <div className="prose prose-invert prose-lg max-w-none text-brand-secondary font-serif">
          <p className="mb-6 leading-relaxed">Quem chega ao site precisa entender o que a empresa faz, onde atende e como falar com alguém. Essas informações devem aparecer sem exigir uma busca longa entre menus e textos de apresentação.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Comece pelas dúvidas do cliente</h2>
          <p className="mb-6 leading-relaxed">Liste as perguntas que costumam surgir antes de uma contratação. Por exemplo: o serviço atende ao meu caso? O que está incluído? Como funciona o orçamento? Quais informações preciso enviar?</p>
          <p className="mb-6 leading-relaxed">Use essas perguntas para decidir a ordem das seções. Um escritório pode apresentar suas áreas de atuação; uma clínica, os atendimentos disponíveis; uma empresa de serviços, os tipos de trabalho que realiza.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Separe os serviços quando houver informação suficiente</h2>
          <p className="mb-6 leading-relaxed">Uma página por serviço pode ser útil quando cada um tem público, processo ou dúvidas diferentes. Descreva o que é feito, para quem e como funciona o atendimento. Evite repetir o mesmo texto trocando apenas o nome da cidade.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Mostre o trabalho com contexto</h2>
          <p className="mb-6 leading-relaxed">Fotos e projetos ajudam quando vêm acompanhados de uma explicação: qual era o pedido, o que foi entregue e qual foi a participação da empresa. Use trabalhos reais e identifique imagens apenas ilustrativas.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Confira no celular</h2>
          <ul className="list-disc space-y-3 pl-6 mb-8"><li>Os textos podem ser lidos sem ampliar a tela?</li><li>As imagens mostram a parte necessária do projeto?</li><li>Os botões são fáceis de tocar?</li><li>O menu e o WhatsApp continuam acessíveis?</li></ul>
          <p className="mb-6 leading-relaxed">Imagens horizontais nem sempre cabem em um recorte vertical. Para um portfólio, pode ser melhor mostrar a imagem inteira e deixar a explicação logo abaixo.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Use títulos e links que expliquem o destino</h2>
          <p className="mb-6 leading-relaxed">O nome de cada página deve corresponder ao assunto tratado. Prefira links como “Ver serviços de instalação elétrica” ou “Consultar atendimentos” quando isso descreve melhor o destino do que um simples “Saiba mais”.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">E a leitura pelas ferramentas de busca?</h2>
          <p className="mb-6 leading-relaxed">O <a className="text-brand-text underline underline-offset-4" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">guia do Google</a> recomenda manter informações úteis e uma estrutura técnica clara. Não há uma marcação especial que garanta destaque nas respostas com IA.</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-text font-sans mt-12 mb-5">Uma revisão prática</h2>
          <p className="mb-6 leading-relaxed">Abra o site pelo celular e tente encontrar um serviço e entrar em contato. Anote o que ficou confuso, repetido ou difícil de acessar. Essa lista ajuda a definir quais mudanças merecem prioridade.</p>
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
