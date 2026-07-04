import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: "geo-generative-engine-optimization-buscas-ia",
    title: "O que é GEO (Generative Engine Optimization) e Como Preparar sua Marca para as Buscas por IA",
    excerpt: "O Google mudou. Descubra por que as IAs já decidem quem domina o mercado e como posicionar sua empresa como a única recomendação possível.",
    image: "https://i.ibb.co/DfY9bnCR/04-o-que-e-geo-e-como-preparar-sua-marca.webp",
    date: "26 Mai 2026",
    slug: "/blog/geo-generative-engine-optimization-buscas-ia"
  },
  {
    id: "branding-indaiatuba",
    title: "Branding em Indaiatuba: Como construir uma marca forte com base em estratégia",
    excerpt: "Criar uma marca forte vai muito além de desenvolver um logotipo. Descubra os pilares fundamentais.",
    image: "https://i.ibb.co/dsKJRZVN/05-branding-em-indaiatuba-como-construir-uma-marca-forte.webp",
    date: "22 Abr 2026"
  },
  {
    id: "identidade-visual-precos",
    title: "Quanto custa uma identidade visual em Indaiatuba? (E por que o barato sai caro)",
    excerpt: "Entenda o valor real por trás de um projeto de identidade visual e como ele impacta seu negócio.",
    image: "https://i.ibb.co/4ZfGQ7jV/06-quanto-custa-uma-identidade-visual-em-indaiatuba.webp",
    date: "21 Abr 2026"
  },
  {
    id: "erros-marca-amadora",
    title: "Erros que fazem sua empresa parecer amadora no digital",
    excerpt: "Muitas empresas estão presentes, mas poucas se posicionam. Saiba como evitar erros comuns.",
    image: "https://i.ibb.co/BH55gRZb/07-erros-que-fazem-sua-empresa-parecer-amadora-no-digital.webp",
    date: "20 Abr 2026"
  },
  {
    id: "logo-vs-branding",
    title: "Diferença entre logo e branding: do conceito clássico à construção no digital",
    excerpt: "Logo é um elemento, branding é o sistema. Saiba por que você não pode parar no design.",
    image: "https://i.ibb.co/XH858kk/08-diferenca-entre-logo-e-branding.webp",
    date: "19 Abr 2026"
  },
  {
    id: "posicionamento-premium",
    title: "Como posicionar sua empresa como premium: estratégia clássica no digital",
    excerpt: "Posicionamento premium não é sobre preço, é sobre percepção. Aprenda como construir.",
    image: "https://i.ibb.co/vvwvVyVp/09-como-posicionar-sua-empresa-como-premium.webp",
    date: "18 Abr 2026"
  },
  {
    id: "site-profissional-conversao",
    title: "Criação de site profissional: da usabilidade à conversão moderna",
    excerpt: "Seu site é uma ferramenta de vendas. Descubra como unir UX, Branding e Conversão.",
    image: "https://i.ibb.co/jPfp3h9W/10-criacao-de-site-profissional-da-usabilidade-a-conversao.webp",
    date: "17 Abr 2026"
  },
  {
    id: "instagram-estrategico",
    title: "Instagram para empresas: da construção de marca à geração de valor",
    excerpt: "Instagram não é só sobre postar, é sobre posicionar. Aprenda a estratégia de valor.",
    image: "https://i.ibb.co/0pT5XqZW/11-instagram-para-empresas-da-construcao-a-geracao-de-valor.webp",
    date: "16 Abr 2026"
  },
  {
    id: "por-que-nao-cresce",
    title: "Por que sua empresa não cresce no digital (mesmo com redes sociais)",
    excerpt: "Presença não é o mesmo que estratégia. Identifique o que está travando seu crescimento.",
    image: "https://i.ibb.co/N2Hd5sRC/12-por-que-sua-empresa-nao-cresce-no-digital.webp",
    date: "15 Abr 2026"
  },
  {
    id: "identidade-profissionais-liberais",
    title: "Identidade visual para profissionais liberais em Indaiatuba",
    excerpt: "Como transmitir autoridade e confiança através do visual. Indispensável para médicos e advogados.",
    image: "https://i.ibb.co/Y79hhg1n/13-identidade-visual-para-profissionais-liberais-em-indaiatuba.webp",
    date: "14 Abr 2026"
  },
  {
    id: "guia-marca-forte",
    title: "Como construir uma marca forte no digital (guia completo)",
    excerpt: "O passo a passo para empresas que querem dominar o mercado local e digital.",
    image: "https://i.ibb.co/7tHDHJgT/14-como-construir-uma-marca-forte-no-digital-guia-completo.webp",
    date: "13 Abr 2026",
    slug: "/blog/guia-marca-forte"
  },
  {
    id: "branding-estrategico-indaiatuba-campinas",
    title: "Branding Estratégico: O Caminho para o Posicionamento Premium no Interior de SP",
    excerpt: "Descubra como a Orval’IA Studio transforma empresas de Indaiatuba, Campinas e região através do branding estratégico e design minimalista.",
    image: "https://i.ibb.co/nsKZ4K3f/15-branding-estrategico-o-caminho-para-o-posicionamento-premium.webp",
    date: "10 Mai 2026",
    slug: "/branding-estrategico-indaiatuba-campinas"
  },
  {
    id: "geo-inteligencia-artificial-empresas-sorocaba",
    title: "Por que sua Empresa em Sorocaba ainda não é citada pela IA? O Guia do GEO",
    excerpt: "Do SEO ao GEO: A Nova Fronteira da Visibilidade Digital para o Setor Industrial e Tecnológico de Sorocaba.",
    image: "https://i.ibb.co/HDzXkPh9/16-por-que-sua-empresa-em-sorocaba-ainda-nao-e-citada-pela-ia.webp",
    date: "14 Mai 2026",
    slug: "/geo-inteligencia-artificial-empresas-sorocaba"
  },
  {
    id: "arquitetura-sites-alta-performance-campinas",
    title: "Arquitetura de Sites de Alto Padrão: Como Estruturar o Site para Ser a Resposta das IAs",
    excerpt: "Descubra como a arquitetura de um site premium une design minimalista e engenharia de dados estruturados para ser recomendado por IAs.",
    image: "https://i.ibb.co/mrW1xwFV/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp",
    date: "03 Jul 2026",
    slug: "/blog/arquitetura-sites-alta-performance-campinas"
  },
  {
    id: "identidade-visual-profissionais-liberais-premium",
    title: "Arquitetura da Autoridade Visual: Design de Alto Padrão para Profissionais Liberais",
    excerpt: "Entenda como o design estratégico de marcas consolida a autoridade de médicos, advogados e arquitetos de elite.",
    image: "https://i.ibb.co/KpYfYybp/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp",
    date: "03 Jul 2026",
    slug: "/blog/identidade-visual-profissionais-liberais-premium"
  },
  {
    id: "rebranding-digital-b2b-sorocaba-itu-salto",
    title: "Rebranding Digital B2B: Modernizando Marcas Industriais para Alto Valor",
    excerpt: "Saiba como indústrias B2B utilizam o rebranding para renovar sua presença de mercado e garantir grandes contratos.",
    image: "https://i.ibb.co/mrr3PbMV/03-rebranding-digital-b2b-em-sorocaba-itu-e-salto.webp",
    date: "03 Jul 2026",
    slug: "/blog/rebranding-digital-b2b-sorocaba-itu-salto"
  },
  {
    id: "percepcao-de-valor-estetica-premium-indaiatuba",
    title: "Percepção de Valor: Estratégias de Branding para Clínicas de Estética Premium",
    excerpt: "Descubra como a Orval’IA Studio eleva a percepção de valor de clínicas de estética em Indaiatuba e Campinas através do branding de luxo.",
    image: "https://i.ibb.co/WvZnn51p/17-percepcao-de-valor-estrategias-para-clinicas-de-estetica-premium.webp",
    date: "14 Mai 2026",
    slug: "/percepcao-de-valor-estetica-premium-indaiatuba"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // premium cubic-bezier easeOut
    },
  },
};

import SEO from "../../components/SEO";
import BlogImage from "../../components/BlogImage";


export default function BlogIndex() {
  const sortedArticles = [...articles].sort((a, b) => {
    const monthsMap: Record<string, number> = {
      jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5,
      jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11
    };

    const parseDate = (dateStr: string) => {
      const parts = dateStr.trim().split(/\s+/);
      if (parts.length < 3) return new Date(0);
      const day = parseInt(parts[0], 10);
      const monthStr = parts[1].toLowerCase().replace(".", "");
      const year = parseInt(parts[2], 10);
      const month = monthsMap[monthStr] !== undefined ? monthsMap[monthStr] : 0;
      return new Date(year, month, day);
    };

    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  return (
    <div className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24 selection:bg-brand-accent-light selection:text-brand-bg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-24 md:flex justify-between items-end gap-12">
          <div className="max-w-4xl">
            <span className="text-brand-accent-light font-mono font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Insights e Estratégia</span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
              Blog Orval'IA
            </h1>
            <p className="text-brand-secondary/80 text-xl max-w-2xl leading-relaxed font-serif italic">
              Explorando branding, tecnologia e design para transformar negócios em referências no digital.
            </p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedArticles.map((article) => (
            <motion.article 
              key={article.id}
              variants={itemVariants}
              className="group flex flex-col bg-brand-card rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_0_50px_rgba(0,255,209,0.05)] transition-all duration-500 border border-white/5 hover:border-brand-accent-light/20"
            >
              <Link to={article.slug || `/blog/${article.id}`} className="block relative aspect-video overflow-hidden bg-white/5">
                <BlogImage src={article.image} alt={article.title} className="group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
              </Link>
              <div className="p-10 flex flex-col flex-grow">
                <span className="text-[10px] text-brand-accent-light font-mono uppercase tracking-[0.2em] mb-4 
                               border border-brand-accent-light/10 bg-brand-accent-light/5 px-3 py-1 rounded-full w-fit">
                  {article.date}
                </span>
                <Link to={article.slug || `/blog/${article.id}`} className="mb-4">
                  <h2 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-brand-accent-light transition-colors uppercase">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-brand-secondary/70 text-sm leading-relaxed mb-8 flex-grow">
                  {article.excerpt}
                </p>
                <Link 
                  to={article.slug || `/blog/${article.id}`} 
                  className="mt-auto flex items-center justify-between w-full
                             text-white text-[10px] font-black uppercase tracking-[0.2em] 
                             pt-6 border-t border-white/5 group-hover:border-brand-accent-light/20 transition-colors"
                >
                  <span>Ler Artigo</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center
                                group-hover:bg-brand-accent-light group-hover:border-brand-accent-light group-hover:text-brand-bg transition-all">
                    <ChevronRight size={14} />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
