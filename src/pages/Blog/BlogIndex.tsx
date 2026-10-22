import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, BookOpen, Search } from "lucide-react";
import SEO from "../../components/SEO";

const territories = [
  { id: "all", name: "TODOS OS INSIGHTS" },
  { id: "gap", name: "01 / GAP DE PERCEPÇÃO" },
  { id: "branding", name: "02 / MARCA & POSICIONAMENTO" },
  { id: "sites", name: "03 / SITES & DECISÃO" },
  { id: "busca", name: "04 / BUSCA & IA" }
];

const articles = [
  {
    id: "gap-de-percepcao-digital-empresas-excelentes-comuns",
    territoryId: "gap",
    territoryName: "01 / GAP DE PERCEPÇÃO",
    title: "Gap de percepção digital: por que empresas excelentes parecem comuns na internet",
    excerpt: "A distância entre a competência real da sua empresa no mundo físico e o valor que o seu cliente consegue perceber no primeiro clique. Como identificar e fechar esse gap.",
    date: "10 Ago 2026",
    readTime: "8 min",
    slug: "/blog/gap-de-percepcao-digital-empresas-excelentes-comuns",
    isPillar: true,
    tag: "ARTIGO MANIFESTO"
  },
  {
    id: "arquitetura-sites-alta-performance-campinas",
    territoryId: "sites",
    territoryName: "03 / SITES & DECISÃO",
    title: "Como estruturar um site para ser entendido por pessoas, Google e IA",
    excerpt: "Como organizar serviços, títulos, links e informações de contato para facilitar a navegação e a leitura do site.",
    date: "03 Jul 2026",
    readTime: "6 min",
    slug: "/blog/arquitetura-sites-alta-performance-campinas",
    isFeatured: true
  },
  {
    id: "identidade-visual-profissionais-liberais-premium",
    territoryId: "branding",
    territoryName: "02 / MARCA & POSICIONAMENTO",
    title: "Por que bons profissionais parecem comuns quando sua presença digital não acompanha a reputação",
    excerpt: "Como médicos, advogados e arquitetos experientes alinham sua expressão visual ao nível de sofisticação do atendimento presencial.",
    date: "03 Jul 2026",
    readTime: "5 min",
    slug: "/blog/identidade-visual-profissionais-liberais-premium",
    isFeatured: true
  },
  {
    id: "rebranding-digital-b2b-sorocaba-itu-salto",
    territoryId: "branding",
    territoryName: "02 / MARCA & POSICIONAMENTO",
    title: "Quando uma marca industrial precisa de rebranding: o que realmente deve mudar",
    excerpt: "Como indústrias e empresas B2B utilizam o reposicionamento para modernizar a presença e fechar grandes contratos corporativos.",
    date: "03 Jul 2026",
    readTime: "6 min",
    slug: "/blog/rebranding-digital-b2b-sorocaba-itu-salto"
  },
  {
    id: "percepcao-de-valor-estetica-premium-indaiatuba",
    territoryId: "branding",
    territoryName: "02 / MARCA & POSICIONAMENTO",
    title: "O que faz uma clínica parecer mais confiável antes da primeira consulta",
    excerpt: "Estratégias de clareza visual, tom de voz e experiência de navegação para clínicas de estética e saúde em Indaiatuba e região.",
    date: "14 Mai 2026",
    readTime: "5 min",
    slug: "/blog/percepcao-de-valor-estetica-premium-indaiatuba"
  },
  {
    id: "geo-generative-engine-optimization-buscas-ia",
    territoryId: "busca",
    territoryName: "04 / BUSCA & IA",
    title: "Sua empresa é fácil de entender para Google e inteligência artificial?",
    excerpt: "Como motores generativos analisam a autoridade da sua marca e o que é necessário fazer para ser citado nas respostas técnicas de IA.",
    date: "26 Mai 2026",
    readTime: "7 min",
    slug: "/blog/geo-generative-engine-optimization-buscas-ia"
  },
  {
    id: "geo-inteligencia-artificial-empresas-sorocaba",
    territoryId: "busca",
    territoryName: "04 / BUSCA & IA",
    title: "Por que sua empresa regional ainda não é citada por IAs em buscas locais",
    excerpt: "Do SEO tradicional para a reputação de entidade: como empresas do interior de SP constroem presença em respostas generativas.",
    date: "14 Mai 2026",
    readTime: "6 min",
    slug: "/blog/geo-inteligencia-artificial-empresas-sorocaba"
  },
  {
    id: "identidade-visual-precos",
    territoryId: "branding",
    territoryName: "02 / MARCA & POSICIONAMENTO",
    title: "Quanto custa um projeto de marca e site em Indaiatuba: o que realmente muda o valor",
    excerpt: "A diferença entre comprar apenas um logotipo decorativo e investir em um sistema de comunicação capaz de acelerar a decisão comercial.",
    date: "21 Abr 2026",
    readTime: "5 min",
    slug: "/blog/identidade-visual-precos"
  },
  {
    id: "branding-indaiatuba",
    territoryId: "branding",
    territoryName: "02 / MARCA & POSICIONAMENTO",
    title: "Quando a empresa já cresceu, mas sua marca digital continua parecendo pequena",
    excerpt: "Os pilares fundamentais para negócios consolidados do interior paulista que precisam alinhar sua presença digital à reputação real.",
    date: "22 Abr 2026",
    readTime: "6 min",
    slug: "/blog/branding-indaiatuba"
  },
  {
    id: "erros-marca-amadora",
    territoryId: "gap",
    territoryName: "01 / GAP DE PERCEPÇÃO",
    title: "Erros que fazem sua empresa parecer amadora no digital e afastam o cliente",
    excerpt: "Falta de hierarquia visual, excesso de chavões e usabilidade confusa: identifique os ruídos que prejudicam sua marca.",
    date: "20 Abr 2026",
    readTime: "4 min",
    slug: "/blog/erros-marca-amadora"
  },
  {
    id: "posicionamento-premium",
    territoryId: "branding",
    territoryName: "02 / MARCA & POSICIONAMENTO",
    title: "Como alinhar sua presença digital à maturidade real do seu negócio",
    excerpt: "Como transmitir o nível do atendimento no ambiente digital sem depender de discursos apelativos.",
    date: "18 Abr 2026",
    readTime: "5 min",
    slug: "/blog/posicionamento-premium"
  },
  {
    id: "site-profissional-conversao",
    territoryId: "sites",
    territoryName: "03 / SITES & DECISÃO",
    title: "O que transforma navegação em decisão dentro de um site",
    excerpt: "Como apresentar os serviços, responder às dúvidas e deixar os contatos fáceis de encontrar.",
    date: "17 Abr 2026",
    readTime: "5 min",
    slug: "/blog/site-profissional-conversao"
  },
  {
    id: "por-que-nao-cresce",
    territoryId: "gap",
    territoryName: "01 / GAP DE PERCEPÇÃO",
    title: "Por que sua empresa não cresce no digital (mesmo postando com frequência)",
    excerpt: "Por que volume de postagens nas redes sociais não substitui uma estratégia clara de marca, site e canal próprio de atração.",
    date: "15 Abr 2026",
    readTime: "5 min",
    slug: "/blog/por-que-nao-cresce"
  }
];

export default function BlogIndex() {
  const [activeTerritory, setActiveTerritory] = useState("all");

  const filteredArticles = activeTerritory === "all" 
    ? articles 
    : articles.filter(a => a.territoryId === activeTerritory);

  const pillarArticle = articles.find(a => a.isPillar)!;
  const featuredArticles = articles.filter(a => a.isFeatured);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Orvalia / Perspectivas",
    "description": "Artigos sobre Gap de Percepção, estratégia de marca, criação de sites e busca por inteligência artificial.",
    "publisher": {
      "@type": "Organization",
      "name": "Orvalia Studio",
      "url": "https://orvalia.com.br"
    }
  };

  return (
    <>
      <SEO 
        title="Orvalia / Perspectivas | Diagnósticos, Marca & Experiência Digital"
        description="Ideias e análises estratégicas para empresas que já cresceram no mundo real, mas cuja presença digital ainda não acompanhou."
        canonical="https://orvalia.com.br/blog"
        schema={blogSchema}
      />

      <div className="min-h-screen bg-brand-mineral text-brand-ink pt-32 pb-20 selection:bg-brand-cyan selection:text-brand-ink">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-cyan-dark" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                Orvalia / Perspectivas
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight leading-[1.05] max-w-4xl mb-6">
              Ideias para empresas que já cresceram, <span className="italic font-serif font-light text-[#64706D]">mas cuja presença digital ainda não acompanhou.</span>
            </h1>
            <p className="text-[#475553] text-lg leading-relaxed max-w-2xl">
              Estratégia de marca, posicionamento, experiência digital e visibilidade em IA vistos pela lente do <strong>Gap de Percepção</strong>.
            </p>
          </div>

          {/* Cornerstone Pillar Featured Block (Deep Ink para contraste dramático) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 md:p-16 bg-brand-ink text-brand-mineral rounded-[2rem] border border-brand-ink relative overflow-hidden group mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-brand-cyan uppercase tracking-widest font-bold block">
                    {pillarArticle.tag} // {pillarArticle.territoryName}
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-sans font-medium text-white tracking-tight leading-[1.05] group-hover:text-[#b1bdb8] transition-colors">
                  {pillarArticle.title}
                </h2>

                <p className="text-[#a9b8b3] text-lg font-sans leading-relaxed">
                  {pillarArticle.excerpt}
                </p>

                <div className="pt-2 flex items-center gap-6 font-mono text-xs text-[#8b9f99] uppercase tracking-widest font-bold">
                  <span>{pillarArticle.date}</span>
                  <span>•</span>
                  <span>{pillarArticle.readTime}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start border-t lg:border-t-0 lg:border-l border-[#23312e] pt-8 lg:pt-0 lg:pl-10 h-full">
                <span className="font-mono text-[10px] text-brand-cyan uppercase tracking-widest font-bold block mb-4">
                  Análise Cornerstone
                </span>
                <p className="text-sm text-[#b1bdb8] leading-relaxed mb-8">
                  Entenda como a falta de tradução afasta clientes antes da primeira conversa.
                </p>
                <Link 
                  to={pillarArticle.slug}
                  className="inline-flex items-center gap-3 text-brand-cyan font-mono text-[10px] font-bold uppercase tracking-widest border-b border-brand-cyan/30 pb-1 self-start hover:border-brand-cyan transition-all"
                >
                  Ler Artigo Manifesto <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Territory Filters */}
          <div className="flex flex-wrap items-center gap-3 pt-6 mb-12 border-b border-brand-line pb-8">
            {territories.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTerritory(t.id)}
                className={`px-5 py-3 font-mono text-[10px] uppercase tracking-widest font-bold transition-all rounded-full border ${
                  activeTerritory === t.id 
                    ? "bg-brand-ink text-brand-mineral border-brand-ink" 
                    : "bg-transparent text-brand-ink border-brand-line hover:border-brand-ink"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Destaques Secundários (Apenas na view 'all') */}
          {activeTerritory === "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {featuredArticles.map((art) => (
                <div 
                  key={art.id}
                  className="p-10 bg-brand-warm border border-brand-line rounded-[2rem] space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] text-brand-cyan-dark uppercase tracking-widest font-bold block">
                      {art.territoryName}
                    </span>
                    <h3 className="text-2xl font-sans font-medium text-brand-ink tracking-tight">
                      {art.title}
                    </h3>
                    <p className="text-sm text-[#55615d] font-sans leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-brand-line flex items-center justify-between font-mono text-[9px] font-bold text-[#687971] uppercase tracking-widest">
                    <span>{art.date} • {art.readTime}</span>
                    <Link 
                      to={art.slug}
                      className="text-brand-cyan-dark inline-flex items-center gap-2 hover:text-brand-ink transition-colors"
                    >
                      <span>Ler</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Editorial List Feed */}
          <div className="space-y-8 pt-8">
            <h3 className="font-mono text-[10px] text-brand-cyan-dark uppercase tracking-[0.2em] font-bold mb-8">
              Todas as Publicações Editoriais ({filteredArticles.length})
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((art, idx) => (
                <Link 
                  key={art.id} 
                  to={art.slug}
                  className="group flex flex-col bg-brand-mineral border-t border-brand-line pt-8 pb-4 transition-transform duration-300"
                >
                  <div className="mb-6">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-cyan-dark block mb-4">
                      {art.territoryName}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight mb-4 text-brand-ink group-hover:text-[#64706D] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-[#55615d] text-sm leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#687971]">
                      {art.date}
                    </span>
                    <ArrowUpRight size={16} className="text-brand-muted group-hover:text-brand-ink transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Inserções Editoriais (Apenas na view 'all') */}
            {activeTerritory === "all" && (
              <div className="pt-16 pb-8">
                <div className="p-10 md:p-16 border-l-2 border-brand-cyan-dark bg-brand-warm flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                  <div className="max-w-2xl">
                    <span className="font-sans text-[10px] text-brand-cyan-dark uppercase tracking-wider font-bold block mb-4">
                      [Insight de Diagnóstico]
                    </span>
                    <p className="text-xl md:text-2xl text-brand-ink font-serif italic font-medium leading-relaxed m-0">
                      "O Gap de Percepção não se resolve com mais posts nas redes sociais. Resolve-se com clareza de posicionamento, mensagem consistente e um canal próprio que conduza o cliente à decisão."
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20entender%20o%20diagnóstico%20de%20percepção%20da%20minha%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-ink text-brand-mineral rounded-full font-bold uppercase tracking-widest text-xs hover:-translate-y-1 transition-transform shrink-0"
                  >
                    Diagnóstico Gratuito <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            )}
            
          </div>

          {/* Bloco de Diagnóstico Final (Deep Ink) */}
          <div className="mt-32 p-12 md:p-20 bg-brand-ink text-brand-mineral text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.05]">
                A sua empresa está a transmitir <br className="hidden md:block"/>
                <span className="italic font-serif font-light text-brand-cyan">o valor real que entrega?</span>
              </h3>
              <p className="text-xl text-[#b1bdb8] leading-relaxed mb-12 italic font-serif max-w-2xl mx-auto">
                Descubra os pontos exatos onde a sua presença digital está a ficar abaixo da sua verdadeira reputação comercial.
              </p>
              <a 
                href="https://wa.me/5511978959567?text=Olá!%20Li%20o%20blog%20da%20Orvalia%20e%20gostaria%20de%20mapear%20meu%20gap%20de%20percepção."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-brand-cyan text-brand-ink px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:-translate-y-1 transition-transform"
              >
                Mapear o meu Gap <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
