import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    client: "Ryna Hayashi",
    category: "01 / PSICOLOGIA CLÍNICA",
    before: "Apresentar o trabalho clínico e facilitar o primeiro contato.",
    decision: "Criar um site com informações sobre os atendimentos e acesso direto ao WhatsApp.",
    after: "Uma página para conhecer a profissional, consultar os serviços e iniciar uma conversa.",
    image: "https://i.ibb.co/S7733Rfs/ryna-hayashi.webp",
    featured: true
  },
  {
    client: "Beth Olmeda",
    category: "02 / MARCA PESSOAL",
    description: "Identidade visual, textos de apresentação e página de serviços.",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg",
    featured: false
  },
  {
    client: "Dario Eletricidade",
    category: "03 / ENGENHARIA",
    description: "Site para apresentar os serviços de elétrica e atender buscas da região.",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png",
    featured: false
  },
  {
    client: "Quinta de Caraíva",
    category: "04 / HOTELARIA",
    description: "Apresentação da hospedagem e contato direto para reservas.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    client: "Marta Ana Chiconato",
    category: "05 / TERAPIA INTEGRATIVA",
    description: "Apresentação dos atendimentos e informações para o primeiro contato.",
    image: "https://i.ibb.co/2366nSC3/marta-identidade.webp",
    featured: false
  },
  {
    client: "KNJ Tur",
    category: "06 / INTERFACE B2B",
    description: "Organização das informações e dos contatos para clientes de turismo corporativo.",
    image: "https://i.ibb.co/zXqG9zF/knj.webp",
    featured: false
  }
];

export default function Projects() {
  const [selected, setSelected] = useState<(typeof cases)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!selected) {
      if (dialogRef.current?.open) dialogRef.current.close();
      return;
    }
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);
  const featuredCase = cases.find(c => c.featured);
  const otherCases = cases.filter(c => !c.featured);

  return (
    <section id="cases" className="py-32 bg-brand-warm text-brand-ink selection:bg-brand-cyan selection:text-brand-ink">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 border-b border-brand-line pb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-cyan-dark" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                02 / Projetos selecionados
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-sans font-medium tracking-tight leading-[1.05] max-w-3xl">
              Marca e site, <br />
              <span className="italic font-serif font-light text-[#64706D]">na prática.</span>
            </h2>
          </div>
          <p className="max-w-[330px] text-[#475553] leading-relaxed text-lg">
            Conheça alguns trabalhos de identidade visual, criação de sites e organização de conteúdo.
          </p>
        </div>

        {/* Case Principal (Editorial) */}
        {featuredCase && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] border border-brand-line bg-brand-mineral mb-16 group"
          >
            <button type="button" onClick={() => setSelected(featuredCase)} aria-label={`Ampliar apresentação de ${featuredCase.client}`} className="relative min-w-0 overflow-hidden bg-[#d1d7d3] text-left cursor-zoom-in">
              <img 
                src={featuredCase.image} 
                alt={`Site de ${featuredCase.client}, psicóloga — apresentação do projeto`}
                width={1863}
                height={836}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="block w-full h-auto object-contain lg:h-full lg:object-cover filter saturate-[0.85] transition-transform duration-1000 lg:group-hover:scale-105"
              />
              <div className="relative bg-brand-warm/95 px-4 py-3 text-[10px] font-bold tracking-widest uppercase border-t border-brand-line lg:absolute lg:bottom-6 lg:left-6 lg:py-2 lg:border lg:backdrop-blur-sm">
                Case em destaque · Toque para ampliar
              </div>
            </button>
            
            <div className="p-6 sm:p-10 md:p-16 min-w-0 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-brand-line">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-cyan-dark mb-4 block">
                {featuredCase.category}
              </span>
              <h3 className="text-4xl md:text-5xl font-medium mb-10">{featuredCase.client}</h3>
              
              <div className="space-y-8">
                <div className="border-l-2 border-brand-line pl-5 hover:border-brand-cyan-dark transition-colors">
                  <span className="block text-[9px] uppercase tracking-widest text-brand-muted font-bold mb-2">Objetivo</span>
                  <p className="text-[#475553] text-sm leading-relaxed">{featuredCase.before}</p>
                </div>
                <div className="border-l-2 border-brand-line pl-5 hover:border-brand-cyan-dark transition-colors">
                  <span className="block text-[9px] uppercase tracking-widest text-brand-cyan-dark font-bold mb-2">O projeto</span>
                  <p className="text-brand-ink font-medium text-sm leading-relaxed">{featuredCase.decision}</p>
                </div>
                <div className="border-l-2 border-brand-line pl-5 hover:border-brand-cyan-dark transition-colors">
                  <span className="block text-[9px] uppercase tracking-widest text-brand-muted font-bold mb-2">Entrega</span>
                  <p className="text-[#475553] text-sm leading-relaxed">{featuredCase.after}</p>
                </div>
              </div>

              <Link 
                to="/portfolio" 
                className="mt-12 inline-flex items-center gap-3 text-brand-cyan-dark font-mono text-[10px] font-bold uppercase tracking-widest border-b border-brand-cyan-dark/30 pb-1 self-start hover:border-brand-cyan-dark transition-all"
              >
                Ver portfólio <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Lista de Outros Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-t border-brand-line pt-6 flex flex-col"
            >
              {item.image.includes('ibb.co') && <button type="button" className="project-preview" aria-label={`Ampliar apresentação de ${item.client}`} onClick={() => setSelected(item)}><img src={item.image} alt={`Apresentação do projeto ${item.client}`} loading="lazy" decoding="async" referrerPolicy="no-referrer" width="800" height="500" /><span>Ampliar apresentação <ArrowUpRight size={14} /></span></button>}
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-cyan-dark">
                  {item.category}
                </span>
                <ArrowUpRight size={18} className="text-brand-muted group-hover:text-brand-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h4 className="text-2xl font-medium mb-3">{item.client}</h4>
              <p className="text-[#64706D] text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
      <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" data-lenis-prevent onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}>
        {selected && <div className="project-dialog-content"><div className="project-dialog-header"><div><span className="editorial-label">Projeto Orvalia</span><h2 id="project-dialog-title">{selected.client}</h2></div><button type="button" onClick={() => setSelected(null)} aria-label="Fechar apresentação">Fechar ×</button></div><img src={selected.image} alt={`Apresentação ampliada do projeto ${selected.client}`} referrerPolicy="no-referrer" /><p>{selected.description || selected.after}</p></div>}
      </dialog>
    </section>
  );
}
