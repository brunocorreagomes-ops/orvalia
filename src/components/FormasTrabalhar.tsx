import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
  { title:'Reposicionar', desc:'Seu negócio mudou, mas a marca ainda conta a história antiga.', start:'Entender o novo momento e organizar a mensagem.', outputs:['Posicionamento e identidade visual','Uma apresentação que acompanhe sua empresa'], action:'Conversar sobre minha marca' },
  { title:'Reconstruir', desc:'Sua empresa atende bem. O site precisa mostrar isso com a mesma clareza.', start:'Rever a estrutura, o conteúdo e o caminho até o contato.', outputs:['Site mais claro e fácil de usar','Informações organizadas para quem quer contratar'], action:'Conversar sobre meu site' },
  { title:'Evoluir', desc:'Você já tem uma base. Agora quer que ela ajude mais o negócio.', start:'Identificar o que funciona e o que merece melhorar.', outputs:['Ajustes na presença no Google e nas buscas com IA','Melhorias no site e nos caminhos de contato'], action:'Planejar os próximos passos' },
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
      <div className="situations-heading"><div><p className="editorial-label">04 / Como podemos ajudar</p><h2>A solução começa<br/><span>pelo seu momento.</span></h2></div><p>Não precisa chegar com tudo decidido. Veja o que mais se parece com a situação da sua empresa.</p></div>
      <div className="situations-grid">{offers.map((offer,i)=><article className="situation-card" key={offer.title}>
        <div className="situation-top"><span>0{i+1}</span><span>{['Marca e mensagem','Site e experiência','Presença e continuidade'][i]}</span></div>
        <SituationArt index={i}/>
        <h3>{offer.title}</h3><p className="situation-description">{offer.desc}</p>
        <div className="situation-start"><h4>Por onde começamos</h4><p>{offer.start}</p></div>
        <ul>{offer.outputs.map(output=><li key={output}>{output}</li>)}</ul>
        <Link to="/contato/">{offer.action}<ArrowUpRight size={17} aria-hidden="true"/></Link>
      </article>)}</div>
      <p className="situations-note">O primeiro passo é uma conversa com Bruno para entender o negócio e definir o que faz sentido agora.</p>
    </div>
  </section>;
}
