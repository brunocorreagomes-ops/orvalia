import { useRef, useState, type PointerEvent } from "react";
import { ArrowLeftRight, ArrowUpRight, Check } from "lucide-react";

const lenses = [
  { id: 'mensagem', label: 'Mensagem', title: 'O serviço aparece antes do adjetivo.', text: 'Uma descrição concreta ajuda a entender o que a empresa faz e para quem. Compare o conteúdo dos dois lados.' },
  { id: 'hierarquia', label: 'Hierarquia', title: 'Cada informação encontra seu lugar.', text: 'Título, espaço e contraste criam uma ordem de leitura. O olhar encontra primeiro o que precisa entender.' },
  { id: 'contato', label: 'Próximo passo', title: 'O contato faz parte do projeto.', text: 'A chamada explica o que acontece depois do clique. O visitante sabe por onde começar a conversa.' },
];
function ArchitectureDrawing() {
  return <svg viewBox="0 0 640 460" role="img" aria-label="Estudo autoral de arquitetura residencial: casa modernista, jardim e luz natural">
    <defs>
      <linearGradient id="sceneSky" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#dbe1d7"/><stop offset="1" stopColor="#f0e7d4"/></linearGradient>
      <linearGradient id="sceneWall" x1="0" x2="1"><stop offset="0" stopColor="#d8cbbb"/><stop offset="1" stopColor="#f0e4d2"/></linearGradient>
      <linearGradient id="sceneGlass" x1="0" y1="0" x2=".8" y2="1"><stop offset="0" stopColor="#7a9890"/><stop offset="1" stopColor="#253e3d"/></linearGradient>
    </defs>
    <rect width="640" height="460" fill="url(#sceneSky)"/>
    <circle cx="514" cy="82" r="63" fill="#f7f0d9" opacity=".7"/>
    <path d="M0 328 Q150 296 305 319 T640 302V460H0Z" fill="#bdc8aa"/>
    <path d="M0 371 Q230 320 640 365V460H0Z" fill="#a6b59d"/>
    <path d="M55 337 371 267 613 345 279 436Z" fill="#718477" opacity=".25"/>
    <path d="M140 160 438 100 572 154 273 222Z" fill="#465751"/>
    <path d="M149 170 437 112 437 296 149 351Z" fill="url(#sceneWall)"/>
    <path d="M437 112 562 160 562 316 437 296Z" fill="#9d9e8c"/>
    <path d="M137 164 444 101 577 150 272 218Z" fill="#364b45"/>
    <path d="M189 218 404 177 404 317 189 354Z" fill="url(#sceneGlass)"/>
    <path d="M208 218 208 350 M268 206 268 336 M337 193 337 325 M189 278 404 236" stroke="#c9d7c9" strokeWidth="3" opacity=".8"/>
    <path d="M452 178 540 209 540 299 452 277Z" fill="#344f4c"/>
    <path d="M462 182V270 M495 195V282 M529 207V294" stroke="#c8d8cc" strokeWidth="3"/>
    <path d="M124 355 438 293 588 345 272 425Z" fill="#d5c8b2"/>
    <path d="M160 350 440 294 559 339 275 399Z" fill="#ece0ca"/>
    <path d="M403 317 429 309 429 346 403 354Z" fill="#4c6556"/>
    <path d="M0 375Q72 342 129 359M517 368Q575 324 640 345" stroke="#647c65" strokeWidth="5" fill="none"/>
    {Array.from({length:7},(_,i)=><g key={i} transform={`translate(${38+i*24} ${359-i*5})`}><path d="M0 28Q-18-5-3-20Q9-1 0 28M0 28Q9-11 24-15Q20 10 0 28" fill="#657d60"/></g>)}
    <path d="M500 348Q512 295 528 259M525 310Q550 268 570 265M526 324Q560 304 582 313" stroke="#536c59" strokeWidth="5" fill="none"/>
    <circle cx="540" cy="249" r="4.5" fill="#44d5d0"/>
    <rect x="22" y="22" width="175" height="29" fill="#f3f0e7" opacity=".92"/>
    <text x="34" y="41" fontFamily="monospace" fontSize="11" letterSpacing="2" fill="#314e45">ESTUDO / RESIDÊNCIA 01</text>
    <text x="24" y="437" fontFamily="monospace" fontSize="12" letterSpacing="2" fill="#28483d">MATÉRIA · LUZ · HABITAR</text>
  </svg>;
}
export default function PerceptionLab() {
  const [reveal, setReveal] = useState(55);
  const [lens, setLens] = useState(0);
  const activePointer = useRef<number | null>(null);
  const updateReveal = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setReveal(Math.round(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))));
  };
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    activePointer.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateReveal(event);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (activePointer.current === event.pointerId || (event.pointerType === 'mouse' && event.buttons === 0)) updateReveal(event);
  };
  const endPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (activePointer.current !== event.pointerId) return;
    activePointer.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };
  return <div className={`perception-lab lens-${lenses[lens].id}`}>
    <div className="lab-topline"><span>O mesmo negócio. Duas formas de apresentar.</span><span><ArrowLeftRight size={15} /> Passe o mouse ou arraste sobre a imagem</span></div>
    <div className="comparison-stage" role="group" aria-label="Comparação interativa de duas apresentações do mesmo negócio" aria-describedby="comparison-instructions" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={endPointer} onPointerCancel={endPointer} onLostPointerCapture={() => { activePointer.current = null; }}>
      <div className="comparison-page comparison-clear" aria-hidden="true"><div className="mock-browser"><i /><i /><i /><span>projeto / arquitetura residencial</span></div><div className="mock-navigation"><strong>estúdio exemplo<span className="mock-brand-point">.</span></strong><span>Projetos &nbsp; Estúdio &nbsp; Contato</span></div><div className="mock-clear-content"><div><span className="mock-kicker">ARQUITETURA AUTORAL · RESIDENCIAL</span><h3>Espaços para<br /><em>viver melhor.</em></h3><p>Projetos residenciais sob medida.<br />Do conceito aos detalhes da sua casa.</p><span className="mock-cta">Conhecer o estúdio <ArrowUpRight size={13} /></span></div><div className="mock-architecture">
  <ArchitectureDrawing />
  <img className="mock-architecture-photo" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=960&q=82" alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
  <span>ARQUITETURA RESIDENCIAL / ESTUDO VISUAL</span>
</div></div><div className="mock-proof"><span><Check size={12} /> Processo explicado</span><span><Check size={12} /> Serviços definidos</span><span><Check size={12} /> Contato direto</span></div></div>
      <div className="comparison-page comparison-vague" aria-hidden="true" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}><div className="mock-browser"><i /><i /><i /><span>empresa / apresentação</span></div><div className="mock-generic-header">ESTÚDIO EXEMPLO <span>INÍCIO &nbsp; SOBRE &nbsp; SERVIÇOS &nbsp; CONTATO</span></div><div className="mock-vague-content"><span>BEM-VINDO AO NOSSO SITE</span><h3>Soluções completas<br />com excelência.</h3><p>Qualidade, inovação e comprometimento<br />para realizar os seus sonhos.</p><span className="mock-generic-button">SAIBA MAIS</span><div className="mock-generic-boxes"><span>QUALIDADE</span><span>INOVAÇÃO</span><span>CONFIANÇA</span></div></div></div>
      <div className="comparison-divider" aria-hidden="true" style={{ left: `${reveal}%` }}><span><ArrowLeftRight size={19} /></span></div>
      <div className="comparison-tags"><span hidden={reveal < 5}>Apresentação genérica</span><span hidden={reveal > 95}>Proposta organizada</span></div>
    </div>
    <div className="comparison-controls"><p id="comparison-instructions" className="comparison-instructions">Mova o mouse sobre a imagem ou arraste com o dedo. Você também pode usar a barra e as setas do teclado.</p><label htmlFor="perception-reveal">Compare as duas apresentações <span>{reveal}% do lado inicial</span></label><input id="perception-reveal" type="range" min="0" max="100" value={reveal} onChange={event => setReveal(Number(event.target.value))} aria-valuetext={`${reveal}% da apresentação genérica visível`} /><div><button type="button" onClick={() => setReveal(100)}>Ver apresentação genérica</button><button type="button" onClick={() => setReveal(0)}>Ver proposta organizada</button></div></div>
    <div className="comparison-lenses" role="group" aria-label="Explorar decisões do exemplo">{lenses.map((item, i) => <button type="button" key={item.id} aria-pressed={lens === i} onClick={() => { setLens(i); setReveal(35); }}>{String(i + 1).padStart(2, '0')} / {item.label}</button>)}</div>
    <div className="comparison-explanation" aria-live="polite"><h3>{lenses[lens].title}</h3><p>{lenses[lens].text}</p></div>
    <p className="comparison-note">Estudo ilustrativo da Orvalia, com fotografia de referência via Unsplash. Não representa um cliente real nem resultados medidos.</p>
  </div>;
}
