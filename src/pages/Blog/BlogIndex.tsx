import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const articles = [
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
    date: "13 Abr 2026"
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-16">
          <span className="text-brand-accent-light font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Insights e Estratégia</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 underline decoration-brand-accent-light decoration-4">
            Blog Orvalia Studio
          </h1>
          <p className="text-brand-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
            Explorando branding, tecnologia e design para transformar negócios em referências no digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col glass-premium rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-accent-light/30 transition-all duration-500"
            >
              <Link to={`/blog/${article.id}`} className="block relative aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-bg/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ChevronRight size={48} className="text-brand-accent-light" />
                </div>
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] text-brand-accent-light font-black uppercase tracking-widest mb-4">{article.date}</span>
                <Link to={`/blog/${article.id}`}>
                  <h2 className="text-xl font-bold text-white mb-4 group-hover:text-brand-accent-light transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-brand-secondary text-sm line-clamp-3 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/blog/${article.id}`} 
                  className="mt-auto flex items-center gap-2 text-brand-accent-light text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Leia mais <ChevronRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
