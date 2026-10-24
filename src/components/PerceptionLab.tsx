import { useState } from "react";
import { ArrowLeftRight, ArrowUpRight, Check } from "lucide-react";

const lenses = [
  { id: 'mensagem', label: 'Mensagem', title: 'O serviço aparece antes do adjetivo.', text: 'Uma descrição concreta ajuda a entender o que a empresa faz e para quem. Compare o conteúdo dos dois lados.' },
  { id: 'hierarquia', label: 'Hierarquia', title: 'Cada informação encontra seu lugar.', text: 'Título, espaço e contraste criam uma ordem de leitura. O olhar encontra primeiro o que precisa entender.' },
  { id: 'contato', label: 'Próximo passo', title: 'O contato faz parte do projeto.', text: 'A chamada explica o que acontece depois do clique. O visitante sabe por onde começar a conversa.' },
];
function ArchitectureDrawing() {
  return <svg viewBox="0 0 360 290" aria-hidden="true"><path d="M10 250L175 281L350 231M60 237V91L205 32L317 88V239M60 91L205 150L317 88M205 150V269M60 237L205 269L317 239M93 105V222M128 120V230M164 135V240M235 137V247M272 117V241M60 176L205 215L317 175" fill="none" stroke="currentColor" strokeWidth="1.1" /><path d="M60 91L205 32L317 88L205 150Z" fill="currentColor" opacity=".09" /><path d="M10 250H350M175 14V281" stroke="currentColor" opacity=".2" strokeDasharray="4 6" /><circle cx="205" cy="150" r="5" fill="#66e7e1" /></svg>;
}
export default function PerceptionLab() {
  const [reveal, setReveal] = useState(55);
  const [lens, setLens] = useState(0);
  return <div className={`perception-lab lens-${lenses[lens].id}`}>
    <div className="lab-topline"><span>O mesmo negócio. Duas formas de apresentar.</span><span><ArrowLeftRight size={15} /> Explore a diferença</span></div>
    <div className="comparison-stage" aria-hidden="true">
      <div className="comparison-page comparison-clear"><div className="mock-browser"><i /><i /><i /><span>exemplo / arquitetura</span></div><div className="mock-navigation"><strong>estúdio exemplo</strong><span>Projetos &nbsp; Estúdio &nbsp; Contato</span></div><div className="mock-clear-content"><div><span className="mock-kicker">ESPAÇOS PARA VIVER MELHOR</span><h3>Arquitetura.<br /><em>Para viver.</em></h3><p>Arquitetura residencial.<br />Do primeiro desenho aos detalhes.</p><span className="mock-cta">Conversar sobre um projeto <ArrowUpRight size={13} /></span></div><div className="mock-architecture"><ArchitectureDrawing /><span>01 / ESTUDO DE VOLUME</span></div></div><div className="mock-proof"><span><Check size={12} /> Processo explicado</span><span><Check size={12} /> Serviços definidos</span><span><Check size={12} /> Contato direto</span></div></div>
      <div className="comparison-page comparison-vague" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}><div className="mock-browser"><i /><i /><i /><span>empresa / apresentação</span></div><div className="mock-generic-header">ESTÚDIO EXEMPLO <span>INÍCIO &nbsp; SOBRE &nbsp; SERVIÇOS &nbsp; CONTATO</span></div><div className="mock-vague-content"><span>BEM-VINDO AO NOSSO SITE</span><h3>Soluções completas<br />com excelência.</h3><p>Qualidade, inovação e comprometimento<br />para realizar os seus sonhos.</p><span className="mock-generic-button">SAIBA MAIS</span><div className="mock-generic-boxes"><span>QUALIDADE</span><span>INOVAÇÃO</span><span>CONFIANÇA</span></div></div></div>
      <div className="comparison-divider" style={{ left: `${reveal}%` }}><span><ArrowLeftRight size={19} /></span></div>
      <div className="comparison-tags"><span hidden={reveal < 5}>Apresentação genérica</span><span hidden={reveal > 95}>Proposta organizada</span></div>
    </div>
    <div className="comparison-controls"><label htmlFor="perception-reveal">Arraste para comparar <span>{reveal}% do lado inicial</span></label><input id="perception-reveal" type="range" min="0" max="100" value={reveal} onChange={event => setReveal(Number(event.target.value))} aria-valuetext={`${reveal}% da apresentação genérica visível`} /><div><button type="button" onClick={() => setReveal(100)}>Ver apresentação genérica</button><button type="button" onClick={() => setReveal(0)}>Ver proposta organizada</button></div></div>
    <div className="comparison-lenses" role="group" aria-label="Explorar decisões do exemplo">{lenses.map((item, i) => <button type="button" key={item.id} aria-pressed={lens === i} onClick={() => setLens(i)}>{String(i + 1).padStart(2, '0')} / {item.label}</button>)}</div>
    <div className="comparison-explanation" aria-live="polite"><h3>{lenses[lens].title}</h3><p>{lenses[lens].text}</p></div>
    <p className="comparison-note">Estudo ilustrativo da Orvalia. Não representa um cliente nem uma medição de resultados.</p>
  </div>;
}
