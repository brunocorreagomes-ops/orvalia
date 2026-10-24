import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import SEO from './SEO';
import { projects, type Project } from '../data/projects';

export default function ProjectDetail({ project }: { project: Project }) {
  const canonical = `https://orvalia.com.br/portfolio/${project.slug}/`;
  const schema = { '@context':'https://schema.org', '@graph':[
    { '@type':'CreativeWork', '@id':`${canonical}#projeto`, name:`Projeto ${project.client}`, description:project.description, url:canonical, image:`https://orvalia.com.br${project.image}`, creator:{ '@id':'https://orvalia.com.br/#organization' }, inLanguage:'pt-BR' },
    { '@type':'BreadcrumbList', itemListElement:[{ '@type':'ListItem', position:1, name:'Início', item:'https://orvalia.com.br/' },{ '@type':'ListItem', position:2, name:'Projetos', item:'https://orvalia.com.br/portfolio/' },{ '@type':'ListItem', position:3, name:project.client, item:canonical }] },
  ] };
  return <article className="project-page">
    <SEO title={`${project.client}: projeto de ${project.imageKind === 'identity' ? 'identidade visual' : project.imageKind === 'site' ? 'site' : 'apresentação'} | Orvalia`} description={project.description} canonical={canonical} schema={schema}/>
    <div className="container mx-auto px-6">
      <nav aria-label="Caminho do projeto" className="project-breadcrumb"><Link to="/">Início</Link><span aria-hidden="true">/</span><Link to="/portfolio/">Projetos</Link><span aria-hidden="true">/</span><span>{project.client}</span></nav>
      <header className="project-page-header"><p className="editorial-label">{project.category}</p><h1>{project.client}</h1><p>{project.description}</p><ul className="project-deliverables">{project.deliverables.map(item=><li key={item}>{item}</li>)}</ul></header>
      <div className="project-page-body">
        <figure className={project.imageKind === 'site' ? 'project-page-image project-page-image-site' : 'project-page-image'}><img src={project.image} width={project.width} height={project.height} alt={`Apresentação do projeto ${project.client}`} decoding="async" loading="eager"/><figcaption>{project.imageKind === 'identity' ? 'Identidade visual apresentada no portfólio da Orvalia.' : project.imageKind === 'site' ? 'Apresentação do site no formato de celular.' : 'Apresentação visual do trabalho.'}</figcaption></figure>
        <div className="project-page-context"><section><h2>O que o projeto precisava resolver</h2><p>{project.goal}</p></section><section><h2>Como o trabalho foi organizado</h2><p>{project.approach}</p></section><section><h2>Entregas apresentadas</h2><ul>{project.deliverables.map(item=><li key={item}>{item}</li>)}</ul></section><Link className="project-contact-button" to="/contato/">Conversar sobre meu projeto <ArrowUpRight size={18} aria-hidden="true"/></Link><p className="project-contact-hint">Conte o seu momento no formulário. Bruno responde pelo e-mail informado.</p></div>
      </div>
      <section className="project-related"><h2>Outros projetos para conhecer</h2><div>{projects.filter(item=>item.slug !== project.slug).slice(0,2).map(item=><Link to={`/portfolio/${item.slug}/`} key={item.slug}><span>{item.client}</span><ArrowUpRight size={17} aria-hidden="true"/></Link>)}</div></section>
      <Link to="/portfolio/" className="project-back"><ArrowLeft size={16} aria-hidden="true"/> Todos os projetos</Link>
    </div>
  </article>;
}
