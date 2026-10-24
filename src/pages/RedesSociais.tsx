import { Link } from "react-router-dom";
import { ArrowUpRight, ChartNoAxesCombined, Images, Film, ClipboardList } from "lucide-react";
import SEO from "../components/SEO";

const deliverables = [
  { icon: ChartNoAxesCombined, title: "Análise da presença digital", text: "Leitura do site, dos perfis e dos caminhos de contato para entender o que está claro, onde há lacunas e o que merece prioridade." },
  { icon: ClipboardList, title: "Planejamento de conteúdo", text: "Definição de temas, linguagem, canais e formatos de acordo com os serviços, o público e a capacidade de atendimento da empresa." },
  { icon: Images, title: "Publicações com imagens (feed)", text: "Criação de peças e textos para apresentar serviços, responder dúvidas e manter uma comunicação alinhada à identidade da marca." },
  { icon: Film, title: "Vídeos curtos (stories)", text: "Produção de vídeos no formato vertical para os temas combinados. Roteiro, materiais, duração e edição são definidos conforme o projeto." },
];
const faqs = [
  { question: "Vocês analisam a presença digital antes de propor publicações?", answer: "Sim. Podemos avaliar o site, os perfis e os caminhos de contato para identificar prioridades. A análise pode ser contratada como uma etapa própria ou fazer parte de um projeto de conteúdo, conforme a proposta." },
  { question: "Posso contratar apenas um pacote de publicações?", answer: "Sim. O pacote pode reunir posts estáticos para o feed e vídeos para stories, conforme a estratégia. Quantidade, formatos, canais, frequência de entrega e revisões são combinados antes da contratação." },
  { question: "O serviço inclui publicar nas contas e responder mensagens?", answer: "A criação dos materiais, o agendamento, a publicação e o atendimento de mensagens são atividades diferentes. A proposta informa quais delas entram no trabalho e quem fica responsável por cada etapa." },
  { question: "Preciso refazer minha marca ou meu site para contratar conteúdo?", answer: "Não necessariamente. Primeiro olhamos para os materiais existentes e a necessidade da empresa. O trabalho pode partir da identidade atual, com ajustes apenas quando fizerem sentido para o escopo." },
  { question: "Quem fornece fotos, informações e aprova os materiais?", answer: "Essas responsabilidades são combinadas na proposta, incluindo os materiais que a empresa precisa enviar, os direitos de uso, as etapas de aprovação e os prazos de cada parte." },
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "@id": "https://orvalia.com.br/redes-sociais/#service", name: "Análise de presença digital e conteúdo para redes sociais", url: "https://orvalia.com.br/redes-sociais/", description: "Análise da presença digital, planejamento e pacotes de conteúdo com posts estáticos para o feed e vídeos para stories, conforme a estratégia e o escopo contratado.", provider: { "@id": "https://orvalia.com.br/#organization" }, areaServed: ["Indaiatuba", "Campinas", "Brasil"] },
    { "@type": "FAQPage", mainEntity: faqs.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://orvalia.com.br/" }, { "@type": "ListItem", position: 2, name: "Redes sociais", item: "https://orvalia.com.br/redes-sociais/" }] },
  ],
};
export default function RedesSociais() {
  return <article className="pt-28 md:pt-36 pb-20 bg-brand-mineral text-brand-ink">
    <SEO title="Redes sociais e análise de presença digital em Indaiatuba | Orvalia" description="Análise da presença digital e pacotes de publicações: posts para o feed e vídeos para stories. Conteúdo conforme a estratégia da empresa. Indaiatuba e região." canonical="https://orvalia.com.br/redes-sociais/" schema={schema} />
    <div className="container mx-auto px-6">
      <nav className="project-breadcrumb" aria-label="Caminho da página"><Link to="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Redes sociais</span></nav>
      <header className="max-w-5xl mb-16">
        <p className="editorial-label mb-6">Análise, planejamento e conteúdo · Indaiatuba e região</p>
        <h1 className="page-title mb-8">Sua presença digital.<br /><span className="text-[#55605d]">Com direção e conteúdo.</span></h1>
        <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-3xl">Além de marca e site, a Orvalia analisa a presença digital da empresa e produz conteúdo para redes sociais. Posts estáticos para o feed, vídeos para stories e pacotes de publicações entram no trabalho quando fazem sentido para a estratégia.</p>
        <Link to="/contato/" className="project-contact-button mt-8 max-w-sm">Conversar sobre meu projeto <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </header>
      <section className="border-y border-brand-line py-14 mb-16" aria-labelledby="social-deliverables">
        <p className="editorial-label mb-5">O que pode entrar no projeto</p><h2 id="social-deliverables" className="text-3xl md:text-5xl mb-10">Do olhar sobre a empresa<br />ao conteúdo que ela publica.</h2>
        <div className="grid md:grid-cols-2 gap-6">{deliverables.map(item => <div key={item.title} className="bg-brand-warm border border-brand-line p-7 md:p-9"><item.icon size={28} className="text-brand-cyan-dark mb-5" aria-hidden="true" /><h3 className="text-2xl mb-4">{item.title}</h3><p className="text-brand-muted leading-relaxed">{item.text}</p></div>)}</div>
      </section>
      <section className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16" aria-labelledby="social-scope">
        <div><p className="editorial-label mb-5">Estratégia antes da quantidade</p><h2 id="social-scope" className="text-3xl md:text-5xl mb-6">Um pacote que responde<br />à necessidade do negócio.</h2><p className="text-brand-muted text-lg leading-relaxed">Nem toda empresa precisa dos mesmos canais ou de publicar todos os dias. A proposta parte do que você precisa comunicar e das condições para produzir, aprovar e atender os contatos.</p></div>
        <div className="bg-brand-warm border border-brand-line p-7 md:p-9"><h3 className="text-2xl mb-5">O que fica combinado</h3><ul className="list-disc pl-5 space-y-3 text-brand-muted leading-relaxed"><li>Objetivo, público, canais e temas prioritários.</li><li>Quantidade de peças, formatos e frequência de entrega.</li><li>Textos, roteiros, imagens e vídeos incluídos.</li><li>Materiais fornecidos pela empresa e direitos de uso.</li><li>Revisões, aprovações e responsabilidades pela publicação.</li><li>Acompanhamento e indicadores, quando fizerem parte do escopo.</li></ul></div>
      </section>
      <section className="mb-16" aria-labelledby="social-faq"><h2 id="social-faq" className="text-3xl md:text-5xl mb-8">Antes de começar.</h2><div className="divide-y divide-brand-line border-y border-brand-line">{faqs.map(item => <details key={item.question} className="py-6"><summary className="text-lg font-medium cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan-dark">{item.question}</summary><p className="pt-4 text-brand-muted leading-relaxed max-w-4xl">{item.answer}</p></details>)}</div></section>
      <section className="bg-brand-ink text-brand-warm p-7 md:p-12"><h2 className="text-3xl md:text-5xl mb-6">Vamos entender o momento<br />da sua empresa.</h2><p className="text-[#c3d0c8] text-lg leading-relaxed max-w-3xl mb-8">Envie o site ou o perfil da empresa e conte o que precisa melhorar. Bruno analisa o contexto e responde pelo e-mail informado para combinar o próximo passo.</p><Link to="/contato/" className="inline-flex items-center gap-4 bg-brand-cyan text-brand-ink px-6 py-4 font-semibold">Conversar sobre meu projeto <ArrowUpRight size={18} aria-hidden="true" /></Link><p className="mt-6 text-sm text-[#c3d0c8]"><Link className="underline underline-offset-4" to="/blog/instagram-estrategico/">Leia também: conteúdo e atendimento no Instagram para empresas</Link></p></section>
    </div>
  </article>;
}
