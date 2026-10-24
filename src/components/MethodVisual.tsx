const labels = ['Conhecer quem escolhe você', 'Organizar o que precisa ser dito', 'Facilitar cada próximo passo', 'Conectar a busca ao contato'];

export default function MethodVisual({ step }: { step: number }) {
  return <div className="method-visual" aria-hidden="true">
    <div className="method-visual-top"><span>Na prática</span><span>0{step + 1} / 04</span></div>
    <svg viewBox="0 0 500 320" fill="none" focusable="false">
      {step === 0 && <>
        <circle cx="250" cy="154" r="115" stroke="#71958b" strokeOpacity=".35"/>
        <circle cx="250" cy="154" r="76" stroke="#71958b" strokeOpacity=".6"/>
        <circle cx="250" cy="154" r="35" fill="#66e7e1"/>
        <text x="250" y="159" textAnchor="middle" fill="#102a23" fontSize="13">Empresa</text>
        <path d="m144 111 72 27m65 27 78 27m-104-74 15-60" stroke="#9bbeb1" strokeWidth="1.5"/>
        <circle cx="143" cy="111" r="8" fill="#a9c9ba"/><circle cx="364" cy="192" r="8" fill="#a9c9ba"/><circle cx="270" cy="52" r="8" fill="#a9c9ba"/>
        <text x="72" y="91" fill="#d1e2d7" fontSize="13">Clientes</text><text x="347" y="226" fill="#d1e2d7" fontSize="13">Alternativas</text><text x="292" y="48" fill="#d1e2d7" fontSize="13">Diferenciais</text>
        <text x="250" y="298" textAnchor="middle" fill="#9db9ab" fontSize="12">O contexto vem antes da proposta.</text>
      </>}
      {step === 1 && <>
        <rect x="75" y="40" width="350" height="233" rx="2" stroke="#71958b"/>
        <path d="M75 76h350" stroke="#71958b"/><circle cx="95" cy="58" r="3" fill="#66e7e1"/>
        <text x="107" y="113" fill="#9db9ab" fontSize="11" letterSpacing="2">O QUE SUA EMPRESA FAZ</text>
        <text x="107" y="153" fill="#edf4ea" fontSize="26">Uma mensagem clara.</text>
        <path d="M107 179h265m-265 17h210" stroke="#729789" strokeWidth="4"/>
        <rect x="107" y="223" width="146" height="28" fill="#66e7e1"/><text x="180" y="242" fill="#102a23" textAnchor="middle" fontSize="11">Vamos conversar</text>
        <text x="250" y="306" textAnchor="middle" fill="#9db9ab" fontSize="12">Oferta, público e próximo passo.</text>
      </>}
      {step === 2 && <>
        <rect x="61" y="35" width="275" height="219" rx="3" fill="#19382e" stroke="#7c9e8f"/>
        <path d="M61 67h275" stroke="#7c9e8f"/><circle cx="80" cy="51" r="3" fill="#66e7e1"/>
        <rect x="83" y="88" width="105" height="7" fill="#edf4ea"/><rect x="83" y="107" width="150" height="7" fill="#edf4ea"/>
        <path d="M83 138h140m-140 13h112" stroke="#87aa99" strokeWidth="3"/>
        <rect x="83" y="182" width="125" height="33" fill="#66e7e1"/><text x="145" y="203" fill="#102a23" textAnchor="middle" fontSize="11">Entrar em contato</text>
        <rect x="304" y="92" width="119" height="191" rx="13" fill="#10241e" stroke="#c4dacb" strokeWidth="1.5"/>
        <path d="M347 105h34" stroke="#729789" strokeWidth="3" strokeLinecap="round"/><rect x="319" y="130" width="89" height="53" fill="#315748"/>
        <path d="M319 199h75m-75 12h64" stroke="#b7d0bf" strokeWidth="3"/>
        <rect x="319" y="235" width="89" height="27" fill="#66e7e1"/>
        <path d="m213 220 0-35 25 23-13 1-5 14z" fill="#f1f5ed" stroke="#10241e" strokeWidth="2"/>
        <text x="186" y="304" textAnchor="middle" fill="#9db9ab" fontSize="12">Claro no computador e no celular.</text>
      </>}
      {step === 3 && <>
        <path d="M135 70c135 0 20 86 115 86M135 156h115M135 242c135 0 20-86 115-86M250 156h77" stroke="#86b8a1" strokeWidth="1.5"/>
        {[['Busca',70],['Conteúdo',156],['Indicação',242]].map(([label,y])=><g key={label}><rect x="39" y={Number(y)-23} width="112" height="46" rx="23" fill="#234a3a" stroke="#729e87"/><text x="95" y={Number(y)+5} textAnchor="middle" fill="#dcebdd" fontSize="13">{label}</text></g>)}
        <circle cx="250" cy="156" r="6" fill="#66e7e1"/>
        <rect x="323" y="124" width="142" height="64" rx="3" fill="#66e7e1"/><text x="394" y="151" textAnchor="middle" fill="#102a23" fontSize="14">Uma conversa</text><text x="394" y="171" textAnchor="middle" fill="#102a23" fontSize="12">sobre seu negócio</text>
        <text x="250" y="304" textAnchor="middle" fill="#9db9ab" fontSize="12">Ser encontrado. Ser entendido. Receber contatos.</text>
      </>}
    </svg>
    <p>{labels[step]}</p>
  </div>;
}
