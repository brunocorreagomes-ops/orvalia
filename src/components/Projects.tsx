import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    cliente: "BETH OLMEDA",
    categoria: "Mentoria • Marca Pessoal & Estética Avançada",
    antes: "Posicionamento digital genérico que não refletia a bagagem técnica e a exclusividade do atendimento presencial.",
    decisao: "Reconstrução da identidade visual, tom de voz editorial e desenvolvimento de landing page estratégica orientada à percepção de autoridade.",
    depois: "Elevação da percepção de valor dos procedimentos e consolidação de uma presença de marca inconfundível em Indaiatuba.",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg",
    slug: "beth-olmeda"
  },
  {
    cliente: "RYNA HAYASHI",
    categoria: "Psicologia • Clínica de Alto Padrão",
    antes: "Falta de estrutura digital proprietária, dependendo exclusivamente de indicações e redes sociais informais.",
    decisao: "Construção de ecossistema digital com arquitetura sensível, rápida e alinhada ao acolhimento e sofisticação da prática clínica.",
    depois: "Fortalecimento da reputação da clínica com um canal direto que transmite segurança técnica antes da primeira consulta.",
    image: "https://i.ibb.co/S7733Rfs/ryna-hayashi.webp",
    slug: "ryna-hayashi"
  },
  {
    cliente: "DARIO ELETRICIDADE",
    categoria: "Serviços • Engenharia Elétrica & Instalações Industriais",
    antes: "Comunicação visual datada e baixa visibilidade orgânica frente aos concorrentes no segmento industrial regional.",
    decisao: "Reposicionamento digital com foco em clareza técnica, prova institucional e otimização para buscas locais em Indaiatuba e RMC.",
    depois: "Apresentação objetiva e robusta da capacidade operacional, facilitando o diálogo com contratantes de grande porte.",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png",
    slug: "dario-eletricidade"
  },
  {
    cliente: "QUINTA DE CARAÍVA",
    categoria: "Turismo • Hotelaria & Experiências Exclusivas",
    antes: "Processo de apresentação desconectado da atmosfera real da pousada, gerando dúvidas no visitante durante a navegação.",
    decisao: "Direção de arte imersiva, narrativa fotográfica editorial e experiência de navegação rápida com direcionamento direto para reservas.",
    depois: "Apresentação da hospedagem como destino de desejo, alinhando a experiência da tela ao nível do serviço prestado.",
    image: "https://i.ibb.co/8nLt62wX/Captura-de-tela-2026-04-22-141843.webp",
    slug: "quinta-de-caraiva"
  },
  {
    cliente: "MARTA ANA CHICONATO",
    categoria: "Estratégia • Terapia Integrativa & Marca Pessoal",
    antes: "Atração de públicos sem alinhamento comercial e comunicação fragmentada em diferentes canais.",
    decisao: "Organização da hierarquia da oferta, redesign da marca e estruturação de site focado em esclarecer o método antes do contato.",
    depois: "Filtro natural do perfil de cliente e transmissão de serenidade e profissionalismo em toda a presença digital.",
    image: "https://i.ibb.co/2366nSC3/marta-identidade.webp",
    slug: "marta-chiconato"
  },
  {
    cliente: "KNJ TUR",
    categoria: "Interface • Turismo Corporativo & Viagens",
    antes: "Site institucional desatualizado que não acompanhava a evolução e solidez operacional do grupo.",
    decisao: "Reestruturação do design de interface, arquitetura da informação limpa e destaque para os pilares de segurança e atendimento B2B.",
    depois: "Presença digital alinhada ao porte do grupo corporativo, reforçando credibilidade junto a parceiros e clientes.",
    image: "https://i.ibb.co/S7W7szP4/Gemini-Generated-Image-oyd0rboyd0rboyd0.png",
    slug: "knj-tur"
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

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-[1.02] tracking-tighter uppercase">
            TRABALHOS QUE MUDARAM <br />
            <span className="text-brand-secondary">O PAPEL DO DIGITAL.</span>
          </h2>

          <p className="text-base md:text-xl text-brand-secondary font-sans leading-relaxed max-w-2xl">
            Cases de empresas que já entregavam excelência e precisavam que sua presença digital alcançasse o mesmo nível.
          </p>
        </div>

        {/* Cases Editorial Grid */}
        <div className="space-y-16 md:space-y-24">
          {cases.map((item, idx) => (
            <motion.div 
              key={item.cliente}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
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
                  <div className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold mb-2">
                    {item.categoria}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-sans font-black text-white uppercase tracking-tight mb-6">
                    {item.cliente}
                  </h3>

                  {/* Problem / Decision / Result Grid */}
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-secondary font-bold block">
                        [ANTES] O Desafio de Percepção:
                      </span>
                      <p className="text-brand-secondary leading-relaxed font-sans">
                        {item.antes}
                      </p>
                    </div>

                    <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white font-bold block">
                        [DECISÃO] O que foi alterado:
                      </span>
                      <p className="text-white/90 leading-relaxed font-sans">
                        {item.decisao}
                      </p>
                    </div>

                    <div className="p-4 bg-brand-red/10 border border-brand-red/30 space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-red font-bold block">
                        [DEPOIS] Transformação de Percepção:
                      </span>
                      <p className="text-white leading-relaxed font-sans font-medium">
                        {item.depois}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link 
                    to={`/portfolio`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white font-bold group-hover:text-brand-red transition-colors"
                  >
                    <span>Ver transformações detalhadas</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
