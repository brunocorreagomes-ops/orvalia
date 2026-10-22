import { Helmet } from "react-helmet-async";
import BrunoSection from "../components/BrunoSection";

export default function Sobre() {
  return (
    <div className="pt-32 pb-20 bg-brand-warm min-h-screen">
      <Helmet>
        <title>Sobre Nós | Orvalia Studio</title>
        <meta name="description" content="Conheça a Orvalia Studio, consultoria de posicionamento digital, branding e criação de sites em Indaiatuba e região." />
        <link rel="canonical" href="https://orvalia.com.br/sobre/" />
      </Helmet>
      
      <div className="container mx-auto px-6 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[2px] bg-brand-cyan-dark" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
            O Estúdio
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-sans font-medium text-brand-ink tracking-tight mb-6 leading-[1.05]">
          Sobre <span className="italic font-serif font-light text-[#64706D]">Nós.</span>
        </h1>
      </div>

      <BrunoSection />
    </div>
  );
}
