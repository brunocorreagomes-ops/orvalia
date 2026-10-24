import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, Search, FileText, MessageCircle } from "lucide-react";
import ShareButton from "../components/ShareButton";

const faqs = [
  { question: "Qual é a diferença entre SEO e GEO?", answer: "SEO organiza a estrutura e o conteúdo para facilitar a descoberta nas buscas. GEO é o nome usado para o trabalho voltado à compreensão do conteúdo em respostas de inteligência artificial. Os dois dependem de informações úteis, acessíveis e verificáveis." },
  { question: "O serviço garante o primeiro lugar no Google ou uma indicação por IA?", answer: "Não. A Orvalia não controla a seleção dos resultados nem promete posições, recomendações ou prazos de indexação. A proposta define as melhorias e como acompanhar os sinais disponíveis." },
  { question: "O que pode entrar no projeto?", answer: "Diagnóstico técnico, revisão das páginas de serviços, títulos e descrições, navegação, informações locais, links internos e dados estruturados compatíveis com o conteúdo visível. As páginas, entregas e etapas de acompanhamento são definidas na proposta." },
  { question: "Vocês precisam refazer o meu site?", answer: "Nem sempre. Primeiro avaliamos o conteúdo e a plataforma atual. Algumas melhorias cabem no site existente; outras dependem de acesso técnico ou de uma mudança de estrutura. Isso é discutido antes da contratação." },
  { question: "Como os resultados podem ser acompanhados?", answer: "Com acesso autorizado ao Google Search Console, podemos observar indexação, consultas, impressões e cliques. Contatos e conversões precisam de uma medição configurada. A análise deve considerar o período e as mudanças realizadas, sem atribuir todo resultado a uma única ação." },
  { question: "Em quanto tempo aparecem resultados?", answer: "O prazo de entrega do projeto é definido por escopo. Mudanças nos resultados de busca dependem do rastreamento, da concorrência e do histórico do site. Por isso, prazo de implementação e prazo de resultado são tratados separadamente." },
  { question: "Um arquivo llms.txt faz a empresa aparecer nas respostas de IA?", answer: "Não há garantia. Ele pode servir como referência resumida sobre o site, mas não substitui páginas acessíveis, conteúdo relevante nem comprovação das informações publicadas." },
  { question: "Como começar e quais regiões vocês atendem?", answer: "Envie o endereço do site e conte quais serviços quer apresentar melhor. A Orvalia tem base em Indaiatuba, atende Campinas e região e também conduz projetos remotamente." },
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "@id": "https://orvalia.com.br/seo-geo/#service", name: "SEO e GEO: presença nas buscas e em IA", url: "https://orvalia.com.br/seo-geo/", provider: { "@id": "https://orvalia.com.br/#organization" }, areaServed: ["Indaiatuba", "Campinas", "Brasil"], description: "Diagnóstico técnico e revisão de conteúdo, páginas de serviços, informações locais e dados estruturados, com escopo definido por projeto." },
    { "@type": "FAQPage", mainEntity: faqs.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://orvalia.com.br/" }, { "@type": "ListItem", position: 2, name: "SEO e GEO", item: "https://orvalia.com.br/seo-geo/" }] },
  ],
};

export default function PresencaDigital() {
  return (
    <article className="min-h-screen bg-brand-mineral text-brand-ink pt-28 md:pt-36 pb-20">
      <SEO title="SEO e GEO em Indaiatuba e Campinas | Buscas e IA | Orvalia" description="SEO técnico, conteúdo e GEO para empresas de Indaiatuba e Campinas. Conheça o processo, as entregas e como acompanhar a presença nas buscas e em IA." canonical="https://orvalia.com.br/seo-geo/" schema={schema} />
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center gap-4 mb-12 border-b border-brand-line pb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-muted text-sm"><ChevronLeft size={16} /> Voltar ao início</Link><ShareButton />
        </div>
        <header className="max-w-5xl mb-14">
          <p className="editorial-label mb-6">Sua empresa nas buscas · Indaiatuba e Campinas</p>
          <h1 className="page-title mb-8">Serviços fáceis de encontrar.<br /><span className="text-[#55605d]">Uma empresa fácil de entender.</span></h1>
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-3xl">Seu cliente pesquisa antes de conversar. Organizamos a estrutura e o conteúdo do seu site para explicar o que sua empresa faz, onde atende e por que o trabalho merece atenção.</p>
          <Link to="/contato/" className="inline-flex gap-3 items-center mt-8 border-b border-brand-ink pb-2 font-semibold">Pedir diagnóstico estratégico <ArrowRight size={18} /></Link>
        </header>

        <figure className="border border-brand-line bg-brand-warm p-6 md:p-10 mb-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[{ icon: Search, title: "Ser encontrado", text: "Páginas acessíveis e relacionadas ao que o cliente procura." }, { icon: FileText, title: "Fazer sentido", text: "Serviços, região e informações que podem ser conferidas." }, { icon: MessageCircle, title: "Facilitar o contato", text: "Um próximo passo claro para quem quer conversar." }].map(item => <div key={item.title}><item.icon className="text-brand-cyan-dark mb-5" size={26} aria-hidden="true" /><h2 className="text-2xl mb-3">{item.title}</h2><p className="text-brand-muted leading-relaxed">{item.text}</p></div>)}
          </div>
          <figcaption className="text-xs text-brand-muted border-t border-brand-line pt-5 mt-8">Três etapas da experiência de busca. Este esquema explica o trabalho; não representa um resultado medido.</figcaption>
        </figure>

        <div className="service-content text-brand-muted leading-relaxed space-y-16">
          <section className="service-section">
            <h2 className="section-title text-brand-ink mb-6">SEO e GEO começam pela informação.</h2>
            <p className="mb-5"><strong>SEO</strong> considera como as páginas são encontradas, acessadas e compreendidas pelos mecanismos de busca. <strong>GEO</strong> é o termo usado para a presença do conteúdo em respostas geradas por inteligência artificial.</p>
            <p>O Google informa que suas experiências de IA continuam apoiadas nos fundamentos de SEO. Não existe um código especial que garanta uma citação. Nosso foco é corrigir barreiras técnicas e tornar a informação mais útil e verificável.</p>
            <a className="inline-block text-sm underline underline-offset-4 mt-6" href="https://developers.google.com/search/docs/appearance/ai-features?hl=pt-br" target="_blank" rel="noopener noreferrer">Leia a orientação do Google sobre buscas com IA</a>
          </section>

          <section>
            <h2 className="section-title text-brand-ink mb-8">O que pode ser entregue.</h2>
            <p className="mb-8">A proposta define as páginas e os itens do projeto. Estas são as frentes avaliadas no diagnóstico:</p>
            <dl className="divide-y divide-brand-line border-y border-brand-line">
              {[
                ["Diagnóstico técnico", "Verificação de acesso às páginas, indexação, links, navegação no celular e oportunidades de carregamento. Uma lista de prioridades orienta a implementação."],
                ["Conteúdo de serviços", "Revisão de títulos, descrições, dúvidas frequentes e textos que expliquem a oferta e o atendimento, com base nas informações fornecidas pela empresa."],
                ["Informações locais", "Conferência de nome, contatos, horários e região atendida. Quando incluído no escopo e com acesso autorizado, revisão do Perfil da Empresa no Google."],
                ["Estrutura e dados", "Organização de links internos, URLs canônicas, sitemap e dados estruturados coerentes com a informação que o visitante consegue ler."],
                ["Acompanhamento", "Registro do que foi alterado e dos indicadores disponíveis no período combinado. Configuração de medição e acesso às ferramentas são definidos na proposta."],
              ].map(([title, text]) => <div key={title} className="grid md:grid-cols-[.7fr_1.3fr] gap-3 md:gap-10 py-7"><dt className="text-brand-ink text-xl font-medium">{title}</dt><dd className="text-base leading-relaxed">{text}</dd></div>)}
            </dl>
          </section>

          <section>
            <h2 className="section-title text-brand-ink mb-8">Da revisão ao acompanhamento.</h2>
            <ol className="grid md:grid-cols-2 gap-6">
              {[
                ["Entender a procura", "Conversamos sobre serviços, clientes e regiões. Você envia o site e as informações que a empresa pode comprovar."],
                ["Definir prioridades", "Separamos problemas técnicos, lacunas de conteúdo e ajustes de atendimento. Você recebe um escopo e uma proposta."],
                ["Implementar e conferir", "Revisamos as páginas combinadas e verificamos conteúdo, navegação, metadados e contato antes da publicação."],
                ["Observar e ajustar", "Quando contratado, o acompanhamento considera os dados disponíveis e o período acordado, com próximos passos documentados."],
              ].map(([title, text], i) => <li key={title} className="p-7 bg-brand-warm border border-brand-line"><span className="editorial-label mb-4">Etapa {i + 1}</span><h3 className="text-2xl text-brand-ink mb-4">{title}</h3><p className="text-base">{text}</p></li>)}
            </ol>
          </section>

          <section className="service-section">
            <h2 className="section-title text-brand-ink mb-8">Uma descrição que ajuda a decidir.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="text-lg text-brand-ink mb-4">Informação genérica</h3><p>“Soluções completas com qualidade e excelência.”</p></div>
              <div><h3 className="text-lg text-brand-ink mb-4">Informação concreta</h3><p>“Manutenção elétrica industrial em Indaiatuba. Conheça os serviços, a experiência da equipe e os canais de atendimento.”</p></div>
            </div>
            <p className="text-sm mt-8">Exemplo ilustrativo de clareza de conteúdo. Não é depoimento, promessa de posição ou medição de resultado de um cliente. <Link to="/portfolio/" className="underline underline-offset-4">Conheça os projetos reais da Orvalia</Link>.</p>
          </section>

          <section>
            <h2 className="section-title text-brand-ink mb-8">Perguntas sobre SEO, GEO e IA.</h2>
            <div className="divide-y divide-brand-line border-y border-brand-line">{faqs.map(item => <details key={item.question} className="py-6"><summary className="cursor-pointer text-lg text-brand-ink font-medium pr-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan-dark">{item.question}</summary><p className="text-base leading-relaxed pt-4 max-w-4xl">{item.answer}</p></details>)}</div>
          </section>
        </div>
        <section className="mt-20 p-7 md:p-14 bg-brand-ink text-brand-warm">
          <h2 className="text-3xl md:text-5xl font-medium mb-6">Vamos olhar para o que seu cliente procura.</h2>
          <p className="text-[#c3d0c8] text-lg leading-relaxed max-w-2xl mb-8">Conte quais serviços você quer apresentar melhor e envie o endereço do site. A conversa inicial ajuda a definir por onde começar.</p>
          <Link to="/contato/" className="inline-flex items-center gap-4 bg-brand-cyan text-brand-ink px-6 py-4 font-semibold">Pedir diagnóstico estratégico <ArrowRight size={18} /></Link>
        </section>
      </div>
    </article>
  );
}
