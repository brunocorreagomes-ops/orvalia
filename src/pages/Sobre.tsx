import { Helmet } from "react-helmet-async";
import Authority from "../components/Authority";

export default function Sobre() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Sobre Nós | Orvalia Studio</title>
        <meta name="description" content="Conheça a Orvalia Studio, agência de posicionamento digital, branding e criação de sites em Indaiatuba e região." />
        <link rel="canonical" href="https://orvalia.com.br/sobre/" />
      </Helmet>
      <Authority />
    </div>
  );
}
