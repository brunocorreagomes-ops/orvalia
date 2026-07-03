import { Helmet } from "react-helmet-async";
import CTA from "../components/CTA";

export default function Contato() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Contato | Orvalia Studio</title>
        <meta name="description" content="Fale com a Orvalia Studio. Agende uma consultoria gratuita para elevar o posicionamento da sua marca." />
        <link rel="canonical" href="https://orvalia.com.br/contato/" />
      </Helmet>
      <CTA />
    </div>
  );
}
