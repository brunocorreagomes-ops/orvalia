import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
const audiences = [
  { title:'Saúde e atendimento', text:'Consultórios, psicologia e estética que precisam apresentar seus atendimentos com clareza.', link:'/solucoes/sites-para-medicos-indaiatuba/' },
  { title:'Serviços técnicos e empresas', text:'Engenharia, manutenção e prestadores que querem explicar seus serviços e facilitar pedidos de orçamento.', link:'/sites/' },
  { title:'Turismo e hospedagem', text:'Negócios que precisam mostrar sua oferta e tornar simples o contato para viagens e reservas.', link:'/portfolio/knj-tur/' },
  { title:'Profissionais e negócios locais', text:'Empresas que cresceram e querem uma marca e um site que acompanhem esse momento.', link:'/branding/' },
];
export default function Audience() {
  return <section className="audience-band" aria-labelledby="audience-title"><div className="container mx-auto px-6">
    <div className="audience-heading"><h2 id="audience-title">Para quem o trabalho faz sentido</h2><p>Empresas de Indaiatuba, Campinas e região que dependem de confiança para receber novos contatos.</p></div>
    <div className="audience-grid">{audiences.map(item=><Link key={item.title} to={item.link}><h3>{item.title}<ArrowUpRight size={15} aria-hidden="true"/></h3><p>{item.text}</p></Link>)}</div>
  </div></section>;
}
