import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const primaryCases = [
  {
    cliente: "BETH OLMEDA",
    categoria: "Mentoria • Marca Pessoal & Estética Avançada",
    antes: "Posicionamento digital genérico que não refletia a bagagem técnica e a exclusividade do atendimento presencial.",
    decisao: "Reconstrução da identidade visual, tom de voz editorial e desenvolvimento de landing page estratégica.",
    depois: "Reorganização da apresentação de serviços e alinhamento do ambiente digital à maturidade do atendimento presencial.",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg"
  },
  {
    cliente: "RYNA HAYASHI",
    categoria: "Psicologia • Clínica de Alto Padrão",
    antes: "Falta de estrutura digital proprietária, dependendo exclusivamente de indicações e redes sociais informais.",
    decisao: "Construção de ecossistema digital com arquitetura sensível, rápida e alinhada ao acolhimento da prática clínica.",
    depois: "Estruturação de canal proprietário de acolhimento e agendamento direto com transmissão de segurança técnica.",
    image: "https://i.ibb.co/S7733Rfs/ryna-hayashi.webp"
  },
  {
    cliente: "DARIO ELETRICIDADE",
    categoria: "Serviços • Engenharia Elétrica & Instalações Industriais",
    antes: "Comunicação visual datada e baixa visibilidade orgânica frente aos concorrentes no segmento industrial regional.",
    decisao: "Reposicionamento digital com foco em clareza técnica, prova institucional e otimização para buscas locais em Indaiatuba e RMC.",
    depois: "Apresentação objetiva da capacidade operacional B2B e facilitação do contato com contratantes corporativos.",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png"
  }
];

const secondaryCases = [
  {
    cliente: "QUINTA DE CARAÍVA",
    categoria: "Turismo • Hotelaria Exclusiva",
    resumo: "Direção de arte imersiva e narrativa fotográfica editorial conectada ao canal direto de reservas.",
    image: "https://i.ibb.co/8nLt62wX/Captura-de-tela-2026-04-22-141843.webp"
  },
  {
    cliente: "MARTA ANA CHICONATO",
    categoria: "Estratégia • Terapia Integrativa",
    resumo: "Organização da hierarquia de serviços e clareza metodológica antes do primeiro contato comercial.",
    image: "https://i.ibb.co/2366nSC3/marta-identidade.webp"
  },
  {
    cliente: "KNJ TUR",
    categoria: "Interface • Turismo Corporativo",
    resumo: "Reestruturação do design de interface B2B com destaque para segurança operacional e agilidade.",
    image: "https://i.ibb.co/S7W7szP4/Gemini-Generated-Image-oyd0rboyd0rboyd0.png"
  }
];

export default function Projects() {
  return (
    <section id="cases" className="py-24 md:py-36 bg-brand-bg relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-brand-red" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">
              EVIDÊNCIA & TRANSFORMAÇÃO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-[1.04] tracking-[-0.03em]">
            Trabalhos que mudaram <br />
            <span className="text-brand-secondary">o papel do digital.</span>
          </h2>

          <p className="text-base md:text-xl text-brand-secondary font-sans leading-relaxed max-w-2xl">
            Cases de empresas que já entregavam excelência e precisavam que sua presença digital alcançasse o mesmo nível.
          </p>
        </div>

        {/* Primary Cases (3 Featured) */}
        <div className="space-y-16 md:space-y-20">
          {primaryCases.map((item, idx) => (
            <motion.div 
              key={item.cliente}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch border-t border-white/10 pt-12 group"
            >
              {/* Image Column */}
              <div className="lg:col-span-6 relative overflow-hidden bg-neutral-900 aspect-[16/10] border border-white/10">
                <img 
                  src={item.image} 
                  alt={item.cliente} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white uppercase tracking-widest">
                  CASE 0{idx + 1}
                </div>
              </div>

              {/* Editorial Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="font-sans text-xs text-brand-red uppercase tracking-wider font-semibold mb-2">
                    {item.categoria}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-white tracking-tight mb-6">
                    {item.cliente}
                  </h3>

                  {/* Problem / Decision / Result Grid */}
                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-sans text-xs uppercase tracking-wider text-brand-secondary font-semibold block">
                        Antes — O Desafio:
                      </span>
                      <p className="text-brand-secondary leading-relaxed font-sans">
                        {item.antes}
                      </p>
                    </div>

                    <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-sans text-xs uppercase tracking-wider text-white font-semibold block">
                        Decisão — O que mudou:
                      </span>
                      <p className="text-white/90 leading-relaxed font-sans">
                        {item.decisao}
                      </p>
                    </div>

                    <div className="p-4 bg-brand-red/10 border border-brand-red/30 space-y-1">
                      <span className="font-sans text-xs uppercase tracking-wider text-brand-red font-semibold block">
                        Depois — Resultado na percepção:
                      </span>
                      <p className="text-white leading-relaxed font-sans font-medium">
                        {item.depois}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    to={`/portfolio`}
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-white font-bold group-hover:text-brand-red transition-colors"
                  >
                    <span>Ver transformações detalhadas</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Compact Cases Grid */}
        <div className="mt-16 pt-12 border-t border-white/10 space-y-6">
          <div className="font-mono text-xs text-brand-secondary uppercase tracking-[0.3em] font-semibold">
            OUTROS CASOS DE ALINHAMENTO DE PERCEPÇÃO
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryCases.map((sc) => (
              <div 
                key={sc.cliente}
                className="p-6 bg-white/[0.01] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/9] overflow-hidden bg-neutral-900 border border-white/5">
                    <img 
                      src={sc.image} 
                      alt={sc.cliente} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest block">
                    {sc.categoria}
                  </span>
                  <h4 className="text-lg font-sans font-black text-white uppercase tracking-tight">
                    {sc.cliente}
                  </h4>
                  <p className="text-xs text-brand-secondary font-sans leading-relaxed">
                    {sc.resumo}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <Link 
                    to="/portfolio"
                    className="font-mono text-[10px] uppercase tracking-widest text-white font-bold group-hover:text-brand-red inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Ver case</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
