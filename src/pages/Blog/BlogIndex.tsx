import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: "geo-generative-engine-optimization-buscas-ia",
    title: "O que é GEO (Generative Engine Optimization) e Como Preparar sua Marca para as Buscas por IA",
    excerpt: "O Google mudou. Descubra por que as IAs já decidem quem domina o mercado e como posicionar sua empresa como a única recomendação possível.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    date: "26 Mai 2026",
    slug: "/blog/geo-generative-engine-optimization-buscas-ia"
  },
  {
    id: "branding-indaiatuba",
    title: "Branding em Indaiatuba: Como construir uma marca forte com base em estratégia",
    excerpt: "Criar uma marca forte vai muito além de desenvolver um logotipo. Descubra os pilares fundamentais.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    date: "22 Abr 2026"
  },
  {
    id: "identidade-visual-precos",
    title: "Quanto custa uma identidade visual em Indaiatuba? (E por que o barato sai caro)",
    excerpt: "Entenda o valor real por trás de um projeto de identidade visual e como ele impacta seu negócio.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    date: "21 Abr 2026"
  },
  {
    id: "erros-marca-amadora",
    title: "Erros que fazem sua empresa parecer amadora no digital",
    excerpt: "Muitas empresas estão presentes, mas poucas se posicionam. Saiba como evitar erros comuns.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    date: "20 Abr 2026"
  },
  {
    id: "logo-vs-branding",
    title: "Diferença entre logo e branding: do conceito clássico à construção no digital",
    excerpt: "Logo é um elemento, branding é o sistema. Saiba por que você não pode parar no design.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    date: "19 Abr 2026"
  },
  {
    id: "posicionamento-premium",
    title: "Como posicionar sua empresa como premium: estratégia clássica no digital",
    excerpt: "Posicionamento premium não é sobre preço, é sobre percepção. Aprenda como construir.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    date: "18 Abr 2026"
  },
  {
    id: "site-profissional-conversao",
    title: "Criação de site profissional: da usabilidade à conversão moderna",
    excerpt: "Seu site é uma ferramenta de vendas. Descubra como unir UX, Branding e Conversão.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    date: "17 Abr 2026"
  },
  {
    id: "instagram-estrategico",
    title: "Instagram para empresas: da construção de marca à geração de valor",
    excerpt: "Instagram não é só sobre postar, é sobre posicionar. Aprenda a estratégia de valor.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    date: "16 Abr 2026"
  },
  {
    id: "por-que-nao-cresce",
    title: "Por que sua empresa não cresce no digital (mesmo com redes sociais)",
    excerpt: "Presença não é o mesmo que estratégia. Identifique o que está travando seu crescimento.",
    image: "https://images.unsplash.com/photo-1454165833965-ad296263b8b7?auto=format&fit=crop&q=80&w=800",
    date: "15 Abr 2026"
  },
  {
    id: "identidade-profissionais-liberais",
    title: "Identidade visual para profissionais liberais em Indaiatuba",
    excerpt: "Como transmitir autoridade e confiança através do visual. Indispensável para médicos e advogados.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    date: "14 Abr 2026"
  },
  {
    id: "guia-marca-forte",
    title: "Como construir uma marca forte no digital (guia completo)",
    excerpt: "O passo a passo para empresas que querem dominar o mercado local e digital.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    date: "13 Abr 2026",
    slug: "/blog/guia-marca-forte"
  },
  {
    id: "branding-estrategico-indaiatuba-campinas",
    title: "Branding Estratégico: O Caminho para o Posicionamento Premium no Interior de SP",
    excerpt: "Descubra como a Orval’IA Studio transforma empresas de Indaiatuba, Campinas e região através do branding estratégico e design minimalista.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    date: "10 Mai 2026",
    slug: "/branding-estrategico-indaiatuba-campinas"
  },
  {
    id: "geo-inteligencia-artificial-empresas-sorocaba",
    title: "Por que sua Empresa em Sorocaba ainda não é citada pela IA? O Guia do GEO",
    excerpt: "Do SEO ao GEO: A Nova Fronteira da Visibilidade Digital para o Setor Industrial e Tecnológico de Sorocaba.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    date: "14 Mai 2026",
    slug: "/geo-inteligencia-artificial-empresas-sorocaba"
  },
  {
    id: "percepcao-de-valor-estetica-premium-indaiatuba",
    title: "Percepção de Valor: Estratégias de Branding para Clínicas de Estética Premium",
    excerpt: "Descubra como a Orval’IA Studio eleva a percepção de valor de clínicas de estética em Indaiatuba e Campinas através do branding de luxo.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
    date: "14 Mai 2026",
    slug: "/percepcao-de-valor-estetica-premium-indaiatuba"
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-40 pb-20 px-8 md:px-24 selection:bg-black selection:text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-24 md:flex justify-between items-end gap-12">
          <div className="max-w-4xl">
            <span className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Insights e Estratégia</span>
            <h1 className="text-5xl md:text-8xl font-black text-black tracking-tighter mb-8 leading-[0.9]">
              Blog Orval'IA
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed font-serif italic">
              Explorando branding, tecnologia e design para transformar negócios em referências no digital.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <Link to={article.slug || `/blog/${article.id}`} className="block relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
              </Link>
              <div className="p-10 flex flex-col flex-grow">
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-[0.2em] mb-4 
                               border border-gray-100 px-3 py-1 rounded-full w-fit">
                  {article.date}
                </span>
                <Link to={article.slug || `/blog/${article.id}`} className="mb-4">
                  <h2 className="text-xl md:text-2xl font-black text-black leading-tight group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {article.excerpt}
                </p>
                <Link 
                  to={article.slug || `/blog/${article.id}`} 
                  className="mt-auto flex items-center justify-between w-full
                             text-black text-[10px] font-black uppercase tracking-[0.2em] 
                             pt-6 border-t border-gray-100 group-hover:border-black/10 transition-colors"
                >
                  <span>Ler Artigo</span>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center
                                group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">
                    <ChevronRight size={14} />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
