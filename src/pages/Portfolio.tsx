import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import { projects } from "../data/projects";
import SEO from "../components/SEO";
import Projects from "../components/Projects";

export default function Portfolio() {
  const { cliente } = useParams();
  const project = projects.find(item => item.slug === cliente);
  if (project) return <ProjectDetail project={project} />;
  return (
    <div className="pt-32 pb-20 bg-brand-mineral min-h-screen">
      <SEO title="Portfólio de Casos Reais | Orvalia Studio" description="Conheça os projetos de branding, sites e posicionamento digital criados pela Orvalia Studio em Indaiatuba." canonical="https://orvalia.com.br/portfolio/" />
      
      <div className="container mx-auto px-6 mb-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[2px] bg-brand-cyan-dark" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
            Projetos da Orvalia
          </span>
        </div>
        <h1 className="page-title text-5xl md:text-7xl font-sans font-medium text-brand-ink tracking-tight mb-6 leading-[1.05]">
          Nosso <span className="italic font-serif font-light text-[#55605D]">Portfólio.</span>
        </h1>
        <p className="text-[#475553] text-lg max-w-2xl leading-relaxed">
          Uma seleção de trabalhos de identidade visual, sites e apresentação de serviços.
        </p>
      </div>

      {/* O componente Projects já possui a estética Mineral Editorial internamente */}
      <Projects showPortfolioLink={false} />
    </div>
  );
}
