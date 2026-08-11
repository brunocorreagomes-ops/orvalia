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
    excerpt: "A engenharia invisível de arquitetura de informação e dados estruturados que faz uma empresa se destacar em buscas e conversões.",
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
    title: "Quando uma marca industrial precisa de rebranding — e o que realmente deve mudar",
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
    slug: "/percepcao-de-valor-estetica-premium-indaiatuba"
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
    slug: "/geo-inteligencia-artificial-empresas-sorocaba"
  },
  {
    id: "identidade-visual-precos",
    territoryId: "branding",
    territoryName: "02 / MARCA & POSICIONAMENTO",
    title: "Quanto custa um projeto de marca e site em Indaiatuba — e o que realmente muda o valor",
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
    title: "Criação de site profissional: da usabilidade à conversão de clientes",
    excerpt: "Como transformar o site da empresa em uma jornada fluida de decisão, combinando velocidade, prova técnica e clareza.",
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
        title="Orvalia / Perspectivas — Diagnósticos, Marca & Experiência Digital"
        description="Ideias e análises estratégicas para empresas que já cresceram no mundo real — mas cuja presença digital ainda não acompanhou."
        canonical="https://orvalia.com.br/blog"
        schema={blogSchema}
      />

      <div className="min-h-screen bg-brand-bg pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="space-y-6 max-w-4xl border-b border-white/10 pb-12">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-brand-red" />
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-white font-bold">
                ORVALIA / PERSPECTIVAS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black text-white leading-[0.98] tracking-tighter uppercase">
              Ideias para empresas que já cresceram — <br />
              <span className="text-brand-secondary">mas cuja presença digital ainda não acompanhou.</span>
            </h1>

            <p className="text-base md:text-xl text-brand-secondary font-sans leading-relaxed max-w-3xl">
              Estratégia de marca, posicionamento, experiência digital e visibilidade em IA vistos pela lente do <strong className="text-white font-bold">Gap de Percepção</strong>.
            </p>
          </div>

          {/* Cornerstone Pillar Featured Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-neutral-900 border border-brand-red/50 relative overflow-hidden group hover:border-brand-red transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-brand-red text-white font-mono text-[10px] uppercase tracking-widest font-bold">
                    {pillarArticle.tag}
                  </span>
                  <span className="font-mono text-xs text-brand-secondary uppercase tracking-widest">
                    {pillarArticle.territoryName}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-tight leading-snug group-hover:text-brand-red transition-colors">
                  {pillarArticle.title}
                </h2>

                <p className="text-brand-secondary text-sm md:text-lg font-sans leading-relaxed">
                  {pillarArticle.excerpt}
                </p>

                <div className="pt-2 flex items-center gap-6 font-mono text-xs text-brand-secondary uppercase tracking-widest">
                  <span>{pillarArticle.date}</span>
                  <span>•</span>
                  <span>{pillarArticle.readTime}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                <div className="p-4 bg-white/[0.02] border border-white/5 w-full">
                  <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest font-bold block mb-1">
                    ANÁLISE CORNERSTONE
                  </span>
                  <p className="font-mono text-xs text-white">
                    Entenda como a falta de tradução afasta clientes antes da primeira conversa.
                  </p>
                </div>

                <Link 
                  to={pillarArticle.slug}
                  className="px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest inline-flex items-center gap-3 transition-colors w-full justify-center"
                >
                  <span>Ler artigo manifesto</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Territory Filters */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
            {territories.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTerritory(t.id)}
                className={`px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-all ${
                  activeTerritory === t.id 
                    ? "bg-white text-black font-bold" 
                    : "bg-white/[0.03] text-brand-secondary hover:text-white border border-white/10"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Destaques Secundários */}
          {activeTerritory === "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((art) => (
                <div 
                  key={art.id}
                  className="p-8 bg-white/[0.01] border border-white/10 space-y-6 group hover:border-white/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-brand-red uppercase tracking-widest font-bold block">
                      {art.territoryName}
                    </span>
                    <h3 className="text-xl md:text-2xl font-sans font-black text-white uppercase tracking-tight group-hover:text-brand-red transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-sm text-brand-secondary font-sans leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between font-mono text-xs text-brand-secondary">
                    <span>{art.date} • {art.readTime}</span>
                    <Link 
                      to={art.slug}
                      className="text-white font-bold uppercase tracking-widest inline-flex items-center gap-2 group-hover:text-brand-red transition-colors"
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
          <div className="space-y-6 pt-6">
            <h3 className="font-mono text-xs text-brand-secondary uppercase tracking-[0.3em] font-semibold">
              TODAS AS PUBLICAÇÕES EDITORIAIS ({filteredArticles.length})
            </h3>

            <div className="space-y-4">
              {filteredArticles.map((art, idx) => (
                <div key={art.id} className="space-y-4">
                  {/* Subtle Editorial Divider Callout every 4th item in 'all' view */}
                  {activeTerritory === "all" && idx === 3 && (
                    <div className="p-6 my-6 border-l-2 border-brand-red bg-neutral-900/80 space-y-2">
                      <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest font-bold">
                        [INSIGHT DE DIAGNÓSTICO]
                      </span>
                      <p className="text-sm md:text-base text-white font-serif italic">
                        "O Gap de Percepção não se resolve com mais posts nas redes sociais. Resolve-se com clareza de posicionamento, mensagem consistente e um canal próprio que conduza o cliente à decisão."
                      </p>
                    </div>
                  )}

                  <div 
                    className="p-6 md:p-8 bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
                  >
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest font-bold">
                          {art.territoryName}
                        </span>
                        <span className="font-mono text-[10px] text-brand-secondary uppercase">
                          {art.date}
                        </span>
                      </div>

                      <h4 className="text-lg md:text-xl font-sans font-black text-white uppercase tracking-tight group-hover:text-brand-red transition-colors">
                        {art.title}
                      </h4>

                      <p className="text-xs md:text-sm text-brand-secondary font-sans line-clamp-2">
                        {art.excerpt}
                      </p>
                    </div>

                    <Link 
                      to={art.slug}
                      className="px-6 py-3 border border-white/10 group-hover:border-white text-white font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 shrink-0 transition-all"
                    >
                      <span>Ler Artigo</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation Case Highlight Section */}
          <div className="p-8 md:p-12 border border-white/10 bg-neutral-900/60 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs text-brand-red uppercase tracking-widest font-bold block">
                EVIDÊNCIA EM AÇÃO
              </span>
              <h3 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">
                Veja como o Gap de Percepção foi fechado em cases reais
              </h3>
              <p className="text-sm text-brand-secondary font-sans">
                Análises de como Beth Olmeda, Dario Eletricidade e Ryna Hayashi reorganizaram sua presença digital para comunicar sua maturidade real.
              </p>
            </div>

            <Link 
              to="/#cases"
              className="px-8 py-4 bg-white/5 border border-white/20 hover:border-white text-white font-black text-xs uppercase tracking-widest shrink-0 transition-colors"
            >
              Ver transformações
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 md:p-12 bg-brand-red/10 border border-brand-red/30 text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Sua empresa está transmitindo o valor real que entrega?
            </h3>
            <p className="text-sm md:text-base text-brand-secondary font-sans max-w-xl mx-auto">
              Descubra os pontos onde sua presença digital está ficando abaixo da sua reputação comercial.
            </p>
            <a 
              href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vim%20pelo%20blog%20e%20gostaria%20de%20mapear%20o%20gap%20de%20percepção%20da%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest transition-colors"
            >
              <span>Mapear meu gap de percepção</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
