import { Helmet } from "react-helmet-async";
import Projects from "../components/Projects";

export default function Portfolio() {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>Portfólio de Casos Reais | Orvalia Studio</title>
        <meta name="description" content="Conheça os projetos de branding, sites e posicionamento digital criados pela Orvalia Studio em Indaiatuba." />
        <link rel="canonical" href="https://orvalia.com.br/portfolio/" />
      </Helmet>
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
          Nosso <span className="text-brand-accent-light">Portfólio</span>
        </h1>
        <p className="text-brand-secondary text-lg max-w-2xl">
          Projetos de posicionamento estratégico e presença digital premium para marcas que buscam se destacar.
        </p>
      </div>
      <Projects />
    </div>
  );
}
