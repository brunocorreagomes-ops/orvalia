import MethodVisual from "./MethodVisual";
import { useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { title:'Mercado', subtitle:'Entender antes de propor.', desc:'Quem são os clientes, quais empresas eles comparam e o que pesa na contratação.', question:'Por que alguém escolheria sua empresa?', outputs:['Público e situação de contratação','Alternativas que o cliente considera','Diferenças que a empresa consegue demonstrar'], link:'/blog/branding-estrategico-indaiatuba-campinas/' },
  { title:'Mensagem', subtitle:'Dar forma ao que importa.', desc:'O que a empresa oferece, para quem e quais informações o cliente precisa para decidir.', question:'Seu serviço é compreendido no primeiro contato?', outputs:['Apresentação da empresa','Organização dos serviços','Linguagem e dúvidas de contratação'], link:'/blog/branding-indaiatuba/' },
  { title:'Experiência', subtitle:'Transformar clareza em presença.', desc:'Como organizar textos, imagens e navegação para facilitar a consulta aos serviços.', question:'O caminho é tão bom quanto a entrega?', outputs:['Identidade e aplicações prioritárias','Estrutura das páginas e navegação','Leitura e contato no celular'], link:'/blog/arquitetura-sites-alta-performance-campinas/' },
  { title:'Aquisição', subtitle:'Conectar descoberta e conversa.', desc:'Como o cliente encontra o site e quais caminhos levam ao contato.', question:'Quem encontra sua empresa sabe como avançar?', outputs:['Conteúdo e ligações entre páginas','Informações de atendimento consistentes','Caminhos de contato e acompanhamento'], link:'/blog/site-profissional-conversao/' },
];
export default function Metodo() {
  const [active, setActive] = useState(0);
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % steps.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + steps.length - 1) % steps.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = steps.length - 1;
    else return;
    event.preventDefault(); setActive(next);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };
  return <section id="metodo" className="method-explorer">
    <div className="container mx-auto px-6">
      <div className="method-header"><div><span className="editorial-label">03 / Método estratégico</span><h2>Antes do desenho,<br /><em>a decisão.</em></h2></div><p>Quatro camadas que se conectam. Escolha uma para explorar as perguntas e decisões do projeto.</p></div>
      <div className="method-tabs" role="tablist" aria-label="Camadas do método Orvalia">{steps.map((item, i) => <button type="button" role="tab" key={item.title} id={`method-tab-${i}`} aria-selected={active === i} aria-controls={`method-panel-${i}`} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={event => onKeyDown(event, i)}><span>{String(i + 1).padStart(2, '0')}</span>{item.title}<span aria-hidden="true">↗</span></button>)}</div>
      {steps.map((item, i) => <div key={item.title} id={`method-panel-${i}`} role="tabpanel" aria-labelledby={`method-tab-${i}`} hidden={active !== i} tabIndex={0} className="method-panel">
        <MethodVisual step={i} />
        <div className="method-detail"><span className="editorial-label">{String(i+1).padStart(2,'0')} / {item.title}</span><h3>{item.question}</h3><p>{item.desc}</p><h4 className="method-output-label">O que fica definido nesta etapa</h4><ul>{item.outputs.map(output=><li key={output}>{output}</li>)}</ul><Link to={item.link}>Entender esta etapa <ArrowUpRight size={16} /></Link><button type="button" className="method-next" onClick={() => { const next = (i + 1) % steps.length; setActive(next); document.getElementById(`method-tab-${next}`)?.focus({ preventScroll: true }); }}>{i === steps.length - 1 ? "Voltar à primeira etapa" : `Próxima: ${steps[i + 1].title}`} <ArrowUpRight size={16} aria-hidden="true" /></button></div>
      </div>)}
      <p className="method-footnote">O escopo de cada projeto é definido na conversa inicial. Explore as quatro camadas acima.</p>
    </div>
  </section>;
}
