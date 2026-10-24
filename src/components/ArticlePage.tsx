import { projects } from "../data/projects";
import { editorialOrganization } from "../data/editorial";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import SEO from "./SEO";
import ShareButton from "./ShareButton";
import { articles, categories, type ArticleCategory } from "../data/articles";

export function EditorialArt({ category }: { category: ArticleCategory }) {
  return (
    <svg viewBox="0 0 960 300" aria-hidden="true" className="editorial-art">
      <rect width="960" height="300" fill="#101e20" />
      {[60, 120, 180, 240].map(y => <path key={y} d={`M0 ${y}H960`} stroke="#263c3c" />)}
      {[120, 240, 360, 480, 600, 720, 840].map(x => <path key={x} d={`M${x} 0V300`} stroke="#263c3c" />)}
      {category === 'branding' ? <>
        <circle cx="480" cy="150" r="105" stroke="#c3d0c8" strokeWidth="2" fill="none" />
        <circle cx="480" cy="150" r="67" stroke="#66e7e1" strokeWidth="24" fill="none" strokeDasharray="340 85" />
        <path d="M300 150H660" stroke="#c3d0c8" /><circle cx="547" cy="150" r="12" fill="#66e7e1" />
      </> : category === 'sites' ? <>
        <rect x="230" y="45" width="500" height="210" fill="#183234" stroke="#c3d0c8" />
        <path d="M230 85H730M405 85V255M230 195H405M435 118H685M435 145H620M435 172H650" stroke="#90aaa6" />
        <rect x="435" y="205" width="110" height="20" fill="#66e7e1" />
      </> : category === 'busca' ? <>
        <path d="M240 70L480 150L720 60M240 235L480 150L720 240M480 30V270" stroke="#92ada8" strokeWidth="2" />
        {[[240,70],[720,60],[240,235],[720,240],[480,30],[480,270]].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="10" fill="#c3d0c8" />)}
        <circle cx="480" cy="150" r="38" fill="#66e7e1" /><circle cx="480" cy="150" r="60" fill="none" stroke="#66e7e1" />
      </> : <>
        <path d="M230 65L430 100V205L230 240ZM730 65L530 100V205L730 240Z" fill="#203e40" stroke="#b5cac2" strokeWidth="2" />
        <path d="M480 30V270" stroke="#66e7e1" /><circle cx="480" cy="150" r="11" fill="#66e7e1" />
      </>}
    </svg>
  );
}
export const articleDate = (value: string) => new Date(`${value}T12:00:00Z`).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });

export default function ArticlePage({ id }: { id: string }) {
  const article = articles.find(item => item.id === id);
  if (!article) throw new Error(`Artigo não cadastrado: ${id}`);
  const canonical = `https://orvalia.com.br${article.slug}`;
  const image = `https://orvalia.com.br/blog/capas/${article.id}.png`;
  const related = article.related.map(key => articles.find(item => item.id === key)).filter((item): item is typeof article => Boolean(item));
  const relatedProjects = projects.filter(project => article.relatedProjects?.includes(project.slug));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [editorialOrganization,
      {
        '@type': 'BlogPosting', '@id': `${canonical}#artigo`, url: canonical,
        headline: article.title, description: article.description, image: [image],
        datePublished: article.published || undefined, dateModified: article.modified,
        inLanguage: 'pt-BR', articleSection: categories[article.category],
        author: { '@type': 'Organization', name: 'Orvalia Studio', url: 'https://orvalia.com.br/sobre/' },
        publisher: { '@id': 'https://orvalia.com.br/#organization' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        isPartOf: { '@type': 'Blog', '@id': 'https://orvalia.com.br/blog/#blog' },
        citation: article.sources.map(source => source.url),
      },
      {
        '@type': 'BreadcrumbList', '@id': `${canonical}#caminho`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://orvalia.com.br/' },
          { '@type': 'ListItem', position: 2, name: 'Perspectivas', item: 'https://orvalia.com.br/blog/' },
          { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage', '@id': `${canonical}#duvidas`,
        mainEntity: article.faq.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
      },
    ],
  };
  return (
    <article className="article-page" aria-labelledby="article-title">
      <SEO title={`${article.title} | Orvalia`} description={article.description} canonical={canonical} schema={schema}
        type="article" image={image} imageAlt={article.title} published={article.published ?? undefined} modified={article.modified} />
      <div className="article-container">
        <div className="article-tools">
          <nav aria-label="Caminho da página"><Link to="/">Início</Link><ChevronRight size={13} /><Link to="/blog/">Perspectivas</Link><ChevronRight size={13} /><span aria-current="page">Artigo</span></nav>
          <ShareButton />
        </div>
        <header className="article-header">
          <Link className="editorial-label" to={`/blog/?tema=${article.category}`}>{categories[article.category]}</Link>
          <h1 id="article-title">{article.title}</h1>
          <p className="article-deck">{article.description}</p>
          <div className="article-byline">
            <Link to="/sobre/">Redação Orvalia Studio</Link>
            {article.published && <span>Publicado em <time dateTime={article.published}>{articleDate(article.published)}</time></span>}
            <span>Revisto em <time dateTime={article.modified}>{articleDate(article.modified)}</time></span>
            <span>{article.readTime} min de leitura</span>
          </div>
        </header>
        <figure className="article-figure">
          {article.image ? <img src={article.image} alt="" width="1200" height="675" loading="eager" decoding="async" /> : <EditorialArt category={article.category} />}
          <figcaption>{article.image ? 'Imagem ilustrativa. ' : 'Estudo visual Orvalia. '}{categories[article.category]} / Perspectivas</figcaption>
        </figure>
        <div className="article-grid">
          <aside className="article-sidebar">
            <nav aria-label="Neste artigo" className="article-toc">
              <p className="editorial-label">Neste artigo</p>
              <ol>{article.sections.map((section, i) => <li key={section.id}><a href={`#${section.id}`}><span>{String(i + 1).padStart(2, '0')}</span>{section.title}</a></li>)}</ol>
              <a href="#checklist">Lista de revisão</a><a href="#duvidas">Perguntas frequentes</a>
            </nav>
          </aside>
          <div className="article-reading">
            <section className="article-answer" aria-labelledby="resumo-title">
              <h2 id="resumo-title" className="editorial-label">O essencial</h2>
              <p>{article.answer}</p>
            </section>
            <div className="article-body">
              {article.sections.map(section => <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              </section>)}
              <section className="article-checklist" aria-labelledby="checklist">
                <h2 id="checklist">Lista de revisão</h2>
                <ul>{article.checklist.map(item => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul>
              </section>
              <section aria-labelledby="duvidas"><h2 id="duvidas">Perguntas frequentes</h2>
                {article.faq.map(item => <details key={item.question} className="article-faq"><summary>{item.question}</summary><p>{item.answer}</p></details>)}
              </section>
              {article.sources.length > 0 && <section className="article-sources" aria-labelledby="fontes"><h2 id="fontes">Referências para consulta</h2>
                <p>As orientações editoriais da Orvalia são complementadas pelas fontes abaixo. Normas e documentações podem ser atualizadas.</p>
                <ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul>
              </section>}
            </div>
            <div className="article-author"><span className="editorial-label">Sobre a publicação</span><p>Conteúdo editorial da <Link to="/sobre/">Orvalia Studio</Link>, estúdio de estratégia de marca, identidade visual e sites com base em Indaiatuba. Orientações práticas para organizar a apresentação de empresas e profissionais.</p></div>
          </div>
        </div>
        {relatedProjects.length > 0 ? <section className="article-related" aria-label="Projetos relacionados"><span className="editorial-label">Do conteúdo à prática</span><h2>Conheça os materiais apresentados.</h2><div>{relatedProjects.map(project => <Link key={project.slug} to={`/portfolio/${project.slug}/`}><h3>{project.client}</h3><p>{project.description}</p><span className="article-related-action">Conhecer o projeto <ArrowUpRight size={17} /></span></Link>)}</div></section> : null}
        <section className="article-related" aria-labelledby="related-title"><span className="editorial-label">Continue a leitura</span><h2 id="related-title">Assuntos que se conectam.</h2>
          <div>{related.map(item => <Link key={item.id} to={item.slug}><span className="editorial-label">{categories[item.category]}</span><h3>{item.title}</h3><span className="article-related-action">Ler artigo <ArrowUpRight size={17} /></span></Link>)}</div>
        </section>
        <section className="article-contact" aria-labelledby="contact-title"><div><span className="editorial-label">Da leitura à prática</span><h2 id="contact-title">O que precisa ficar mais claro na sua empresa?</h2><p>Converse sobre marca, conteúdo e site com Bruno Correa Gomes.</p></div>
          <a href={`https://wa.me/5511978959567?text=${encodeURIComponent(`Olá, Bruno! Li o artigo “${article.title}” no blog da Orvalia e gostaria de conversar sobre meu projeto.`)}`} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-location="blog_article">Conversar sobre meu projeto <ArrowUpRight size={18} /></a>
        </section>
        <Link to="/blog/" className="article-back">← Ver todas as perspectivas</Link>
      </div>
    </article>
  );
}
