import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
  { title:'Marca e identidade', desc:'Para quem está começando ou precisa alinhar a apresentação da empresa ao que ela faz hoje.', outputs:['Posicionamento, mensagem e identidade visual','Logotipo e aplicações definidos na proposta'], href:'/branding/' },
  { title:'Criação de sites', desc:'Para quem precisa apresentar os serviços e facilitar a consulta e o contato pelo celular.', outputs:['Páginas, textos e navegação organizados','Formulário ou WhatsApp conforme o projeto'], href:'/sites/' },
  { title:'Google e buscas com IA', desc:'Para quem já tem um site e precisa revisar como seus serviços podem ser encontrados e compreendidos.', outputs:['Revisão técnica e informações locais','Conteúdo e estrutura, sem promessa de posição'], href:'/seo-geo/' },
];
function SituationArt({ index }: { index: number }) {
  return <svg viewBox="0 0 360 150" fill="none" aria-hidden="true" focusable="false">
    {index === 0 && <><circle cx="137" cy="75" r="46" stroke="currentColor" opacity=".3"/><circle cx="183" cy="75" r="46" stroke="currentColor" opacity=".55"/><path d="M229 29a46 46 0 1 0 0 92" stroke="currentColor" strokeWidth="2"/><circle cx="229" cy="75" r="7" fill="#008a86"/><path d="M66 75h28m181 0h22" stroke="currentColor" opacity=".3"/></>}
    {index === 1 && <><path d="M73 40h55m-55 33h28m-28 33h55M156 25h129v100H156z" stroke="currentColor" opacity=".35"/><path d="M177 49h68m-68 18h87m-87 18h53" stroke="currentColor" strokeWidth="3"/><rect x="177" y="100" width="53" height="8" fill="#008a86"/><path d="m115 75 22 0m-7-7 7 7-7 7" stroke="#008a86" strokeWidth="2"/></>}
    {index === 2 && <><path d="M62 120h236M78 103h56V78h58V50h65V25" stroke="currentColor" opacity=".4"/><path d="m78 103 56-25 58-28 65-25" stroke="#008a86" strokeWidth="2"/><circle cx="78" cy="103" r="4" fill="currentColor"/><circle cx="134" cy="78" r="4" fill="currentColor"/><circle cx="192" cy="50" r="4" fill="currentColor"/><circle cx="257" cy="25" r="7" fill="#008a86"/></>}
  </svg>;
}
export default function FormasTrabalhar() {
  return <section id="formas-trabalhar" className="situations-section">
    <div className="container mx-auto px-6">
      <div className="situations-heading"><div><p className="editorial-label">02 / O que fazemos</p><h2>Marca, site e buscas.<br/><span>O que sua empresa precisa agora?</span></h2></div><p>Três frentes de trabalho, com escopo definido de acordo com o negócio. Conheça as entregas de cada uma.</p></div>
      <div className="situations-grid">{offers.map((offer,i)=><article className="situation-card" key={offer.title}>
        <div className="situation-top"><span>0{i+1}</span><span>{['Logotipo e identidade visual','Criação de sites e páginas','Google e buscas com IA'][i]}</span></div>
        <SituationArt index={i}/>
        <h3>{offer.title}</h3><p className="situation-description">{offer.desc}</p>

        <ul>{offer.outputs.map(output=><li key={output}>{output}</li>)}</ul>
        <Link to={offer.href}>Conhecer o serviço<ArrowUpRight size={17} aria-hidden="true"/></Link>
      </article>)}</div>
      <p className="situations-note">Ainda não sabe por onde começar? Conte sua prioridade no formulário. Bruno responde pelo e-mail informado.</p>
      <Link className="project-detail-link" to="/contato/">Conversar sobre meu projeto <ArrowUpRight size={17} aria-hidden="true" /></Link>
    </div>
  </section>;
}
