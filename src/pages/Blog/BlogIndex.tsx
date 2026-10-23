import { editorialOrganization } from "../../data/editorial";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Search, X } from "lucide-react";
import SEO from "../../components/SEO";
import { articles, categories, type ArticleCategory } from "../../data/articles";
import { articleDate, EditorialArt } from "../../components/ArticlePage";

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const sortedArticles = [...articles].sort((a, b) => (b.published || '').localeCompare(a.published || '') || a.title.localeCompare(b.title, 'pt-BR'));

export default function BlogIndex() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const requestedCategory = params.get('tema') || 'all';
  const activeCategory = requestedCategory in categories ? requestedCategory : 'all';
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const filtered = sortedArticles.filter(article => {
    const haystack = normalize([article.title, article.description, article.answer, categories[article.category], ...article.sections.flatMap(section => [section.title, ...section.paragraphs])].join(' '));
    return (activeCategory === 'all' || article.category === activeCategory) && terms.every(term => haystack.includes(term));
  });
  const updateFilters = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value && value !== 'all') next.set(key, value); else next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  };
  const lead = articles.find(article => article.id === 'gap-de-percepcao-digital-empresas-excelentes-comuns')!;
  const schema = {
    '@context': 'https://schema.org', '@graph': [editorialOrganization,
      { '@type': 'Blog', '@id': 'https://orvalia.com.br/blog/#blog', url: 'https://orvalia.com.br/blog/', name: 'Perspectivas | Orvalia Studio', inLanguage: 'pt-BR', publisher: { '@id': 'https://orvalia.com.br/#organization' } },
      { '@type': 'CollectionPage', '@id': 'https://orvalia.com.br/blog/', name: 'Blog Orvalia: branding, sites, SEO e GEO', mainEntity: { '@type': 'ItemList', numberOfItems: articles.length, itemListElement: sortedArticles.map((article, i) => ({ '@type': 'ListItem', position: i + 1, name: article.title, url: `https://orvalia.com.br${article.slug}` })) } },
    ],
  };
  return (
    <div className="blog-index">
      <SEO title="Blog Orvalia: branding, sites, SEO e GEO | Perspectivas" description="Guias e análises sobre marca, posicionamento, sites e buscas com IA. Encontre artigos por assunto e leve as ideias para o seu negócio." canonical="https://orvalia.com.br/blog/" schema={schema} image="https://orvalia.com.br/blog/capas/perspectivas.png" imageAlt="Perspectivas: marca, sites e busca. Blog Orvalia." />
      <div className="article-container">
        <header className="blog-header"><span className="editorial-label">Orvalia / Perspectivas</span><h1>Ideias que tornam<br /><em>o valor visível.</em></h1><p>Marca, experiência digital e descoberta. Leituras para entender o que sua empresa comunica e o que pode ficar mais claro.</p></header>
        {activeCategory === 'all' && !query && <Link to={lead.slug} className="blog-lead"><div><span className="editorial-label">Comece por aqui / Gap de percepção</span><h2>{lead.title}</h2><p>{lead.description}</p><span className="article-related-action">Ler a perspectiva <ArrowUpRight size={19} /></span></div><EditorialArt category="gap" /></Link>}
        <section className="blog-discovery" aria-labelledby="explore-title"><div className="blog-explore-header"><h2 id="explore-title">Encontre sua próxima leitura.</h2><span>{articles.length} perspectivas</span></div>
          <form role="search" onSubmit={event => event.preventDefault()}><label htmlFor="blog-search">Buscar no blog</label><div className="blog-search"><Search size={20} aria-hidden="true" /><input id="blog-search" type="search" name="q" placeholder="Marca, site, Campinas, IA…" value={query} onChange={event => updateFilters('q', event.target.value)} />{query && <button type="button" aria-label="Limpar busca" onClick={() => updateFilters('q', '')}><X size={19} /></button>}</div></form>
          <div className="blog-filters" role="group" aria-label="Filtrar por assunto">{[['all', 'Todos os assuntos'], ...Object.entries(categories)].map(([id, label]) => <button key={id} type="button" aria-pressed={activeCategory === id} onClick={() => updateFilters('tema', id)}>{label}<span>{id === 'all' ? articles.length : articles.filter(article => article.category === id as ArticleCategory).length}</span></button>)}</div>
        </section>
        <p className="blog-result-count" role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}{query ? ` para “${query}”` : ''}{activeCategory !== 'all' ? ` em ${categories[activeCategory as ArticleCategory]}` : ''}</p>
        <div className="blog-articles">{filtered.map((article, index) => <article key={article.id} className="blog-card"><span className="blog-card-number">{String(index + 1).padStart(2, '0')}</span><div><Link to={`/blog/?tema=${article.category}`} className="editorial-label">{categories[article.category]}</Link><h2><Link to={article.slug}>{article.title}</Link></h2><p>{article.description}</p><div className="blog-card-bottom"><span>{article.published ? <time dateTime={article.published}>{articleDate(article.published)}</time> : <>Revisto em <time dateTime={article.modified}>{articleDate(article.modified)}</time></>} · {article.readTime} min</span><Link to={article.slug} aria-label={`Ler: ${article.title}`}><ArrowUpRight size={21} /></Link></div></div></article>)}</div>
        {filtered.length === 0 && <div className="blog-empty"><h2>Nenhum artigo com esses filtros.</h2><p>Tente outra palavra ou consulte todos os assuntos.</p><button type="button" onClick={() => setParams({}, { replace: true })}>Ver todos os artigos</button></div>}
        <section className="article-contact"><div><span className="editorial-label">Da leitura à prática</span><h2>Vamos olhar para a sua empresa?</h2><p>Converse sobre estratégia de marca, conteúdo e site.</p></div><Link to="/contato/">Falar com a Orvalia <ArrowUpRight size={18} /></Link></section>
      </div>
    </div>
  );
}
