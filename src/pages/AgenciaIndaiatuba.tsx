import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const localCases = [
  {
    title: "Beth Olmeda",
    metric: "Imagem mais elegante, clara e alinhada a um atendimento de alto valor",
    location: "Indaiatuba/SP",
    category: "Identidade visual • Estética",
    image: "/images/projects/beth-olmeda.webp",
    width: 1024,
    height: 1024
  },
  {
    title: "Dario Eletricidade",
    metric: "Mensagem mais profissional para clientes que precisam de segurança técnica",
    location: "Indaiatuba/SP",
    category: "Comunicação • Digital",
    image: "/cases/dario-eletricidade-mobile.jpg",
    width: 842,
    height: 1536
  }
];

const agencySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://orvalia.com.br/#localbusiness",
      "name": "Orvalia Studio",
      "url": "https://orvalia.com.br/agencia-indaiatuba",
      "logo": "https://orvalia.com.br/logo.png",
      "telephone": "+5511978959567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indaiatuba",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "areaServed": ["Indaiatuba", "Campinas", "RMC", "Brasil"],
      "founder": {
        "@type": "Person",
        "@id": "https://orvalia.com.br/#founder",
        "name": "Bruno Correa Gomes",
        "jobTitle": "Fundador da Orvalia Studio",
        "sameAs": [
          "https://www.linkedin.com/in/bruno-correa-gomes/"
        ],
        "image": "https://orvalia.com.br/images/people/bruno-correa-gomes.webp",
        "worksFor": {
          "@type": "Organization",
          "name": "Orvalia Studio",
          "url": "https://orvalia.com.br"
        }
      }
    },
    {
      "@type": "Service",
      "name": "Estratégia de marca e identidade visual",
      "provider": {
        "@id": "https://orvalia.com.br/#localbusiness"
      },
      "areaServed": "Indaiatuba",
      "description": "Construção de posicionamento de marca claro e identidade visual corporativa para empresas."
    }
  ]
};

export default function AgenciaIndaiatuba() {
  return (
    <>
      <SEO
        title="Marca, identidade e sites em Indaiatuba | Orvalia Studio"
        description="Estratégia de marca, identidade visual e criação de sites em Indaiatuba e região. Conheça projetos da Orvalia e converse sobre sua empresa."
        canonical="https://orvalia.com.br/branding/"
        schema={agencySchema}
      />
      <div className="min-h-screen bg-brand-mineral text-brand-ink pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-ink transition-colors mb-12">
              <ArrowLeft size={16} />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">Voltar ao Início</span>
            </Link>

            <div className="dna-grid items-end gap-12">
              <div className="col-span-4 lg:col-span-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-brand-cyan-dark" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                    Estratégia local com foco no público de Indaiatuba
                  </span>
                </div>
                <h1 className="page-title text-5xl md:text-7xl font-sans font-medium text-brand-ink leading-[0.95] tracking-tight mb-8">
                  Marca, identidade e <br /> <span className="text-[#55605D] font-serif font-normal italic">Sites em Indaiatuba</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#475553] leading-relaxed max-w-2xl mb-12">
                  Ajudamos empresas de Indaiatuba e região a apresentar melhor seu trabalho. Cuidamos da identidade visual, do site e das informações que o cliente precisa para escolher com segurança.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    to="/contato/"
                    className="px-10 py-5 bg-brand-ink text-brand-warm editorial-button font-semibold text-xs uppercase tracking-widest transition-transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    Conversar sobre meu projeto
                  </Link>
                  <a
                     href="#atendimento"
                     className="px-10 py-5 border border-brand-line text-brand-ink editorial-button font-semibold text-xs uppercase tracking-widest transition-colors hover:bg-brand-ink hover:text-brand-warm flex items-center justify-center gap-3"
                  >
                     Atendimento Regional
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact info & Regional Service details */}
          <section id="atendimento" className="py-24 border-t border-brand-line mt-12">
            <div className="dna-grid gap-12">
              <div className="col-span-4 lg:col-span-5 space-y-16">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-dark mb-6">Atendimento Regional</h3>
                  <div className="flex items-start gap-5 text-brand-ink">
                    <MapPin className="text-brand-cyan-dark shrink-0 mt-1" size={24} />
                    <p className="text-lg leading-relaxed text-[#475553]">
                      Atendimento estratégico para empresas de Indaiatuba, Campinas, Salto, Itu, Sorocaba e região, com diagnóstico inicial pelo formulário ou WhatsApp e reuniões por agendamento.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-dark mb-6">Contato Direto</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-5 text-brand-ink">
                      <Phone className="text-brand-cyan-dark" size={20} />
                      <span className="text-lg font-medium">+55 11 97895-9567</span>
                    </li>
                    <li className="flex items-center gap-5 text-brand-ink">
                      <Mail className="text-brand-cyan-dark" size={20} />
                      <span className="text-lg font-medium">orvaliastudio@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-5 text-brand-ink">
                      <Globe className="text-brand-cyan-dark" size={20} />
                      <span className="text-lg font-medium">orvalia.com.br</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-span-4 lg:col-span-7 p-6 md:p-14 surface-secondary editorial-panel border border-brand-line flex flex-col justify-center space-y-10">
                <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-dark">Dinâmica de Atendimento</h4>
                <div className="space-y-8">
                  <div>
                    <h5 className="text-brand-ink font-bold text-xl mb-3">1. Primeiro contato</h5>
                    <p className="text-[#55615d] text-base leading-relaxed">
                      Tudo começa com uma conversa direta e sem intermediários. Você nos conta sobre seus objetivos de negócio e nós realizamos um diagnóstico prévio da sua presença digital.
                    </p>
                  </div>
                  <div className="border-t border-brand-line pt-8">
                    <h5 className="text-brand-ink font-bold text-xl mb-3">2. Diagnóstico Personalizado</h5>
                    <p className="text-[#55615d] text-base leading-relaxed">
                      Apresentamos caminhos claros e os melhores pontos de partida para estruturar o seu design estratégico, seja para um lançamento rápido ou um reposicionamento completo de marca.
                    </p>
                  </div>
                  <div className="border-t border-brand-line pt-8">
                    <h5 className="text-brand-ink font-bold text-xl mb-3">3. Reuniões sob Demanda</h5>
                    <p className="text-[#55615d] text-base leading-relaxed">
                      Nossas sessões e alinhamentos de entrega são realizados de forma 100% online ou presenciais combinados estrategicamente em Indaiatuba e região, sempre com agendamento prévio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quem está por trás da Orvalia */}
          <section className="py-24 border-t border-brand-line">
            <div className="dna-grid gap-12 items-center">
              {/* Portrait Column */}
              <div className="col-span-4 lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="founder-portrait relative aspect-[3/4] bg-[#ced6d0] overflow-hidden border border-brand-line group"
                >
                  <img
                    src="/images/people/bruno-correa-gomes.webp"
                    alt="Bruno Correa Gomes - Fundador da Orvalia Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[0.8] transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  {/* Frame Accent corner */}
                  <div className="founder-caption absolute bottom-6 left-6 right-6 p-6 bg-brand-warm/95 backdrop-blur-md border border-brand-line">
                    <p className="text-brand-ink font-bold uppercase text-xs tracking-widest mb-1">Bruno Correa Gomes</p>
                    <p className="text-brand-muted font-mono text-xs uppercase tracking-widest">Liderança Estratégica & Design</p>
                  </div>
                </motion.div>
              </div>

              {/* Content Column */}
              <div className="col-span-4 lg:col-span-7 space-y-10 lg:pl-10">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-dark mb-4 block">Liderança & Visão</span>
                  <h2 className="section-title text-4xl md:text-5xl font-sans font-medium text-brand-ink leading-[1.05] tracking-tight mb-2">
                    Quem está por trás da <br className="hidden sm:inline" /><span className="text-[#55605D] italic font-normal">Orvalia Studio?</span>
                  </h2>
                </div>

                <div className="space-y-8">
                  <p className="text-brand-ink text-xl md:text-2xl leading-relaxed font-sans not-italic border-l-2 border-brand-cyan-dark pl-6">
                    "Acreditamos que negócios extraordinários de Indaiatuba e região merecem um nível de design e estratégia que projeta sua verdadeira maestria. Nosso papel é pavimentar essa autoridade digital."
                  </p>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-brand-ink tracking-tight">Bruno Correa Gomes</h3>
                    <p className="text-brand-cyan-dark font-mono text-xs font-bold uppercase tracking-widest">Fundador da Orvalia Studio</p>
                  </div>

                  <p className="text-[#475553] text-lg leading-relaxed">
                    Com mais de 18 anos de sólida trajetória de liderança em comercial e negócios no setor financeiro, Bruno traz a precisão analítica e a sofisticação do mercado corporativo para a esfera digital de Indaiatuba e região.
                  </p>

                  <p className="text-[#475553] text-lg leading-relaxed">
                    Com MBA e pós-graduações pela <strong>Fundação Getulio Vargas (FGV)</strong> e certificação <strong>CEA (ANBIMA)</strong> de especialista em investimentos, usa sua experiência comercial para planejar os projetos de marca e site.
                  </p>
                </div>

                {/* LinkedIn & WhatsApp button */}
                <div className="flex flex-wrap gap-5 pt-6">
                  <a
                    href="https://www.linkedin.com/in/bruno-correa-gomes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-brand-line bg-brand-warm text-brand-ink hover:border-brand-ink font-mono font-semibold text-xs uppercase tracking-widest transition-all flex items-center gap-3"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20sua%20trajetória%20no%20site%20da%20Orvalia%20e%20gostaria%20de%20agendar%20uma%20conversa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[#E0F7F6] text-[#006663] hover:bg-[#008A86] hover:text-white font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-3"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Local Cases */}
          <section className="py-24 border-t border-brand-line">
            <div className="dna-grid mb-16">
              <div className="col-span-4 lg:col-span-12">
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-dark mb-4">Casos de Sucesso Local</h3>
                <h2 className="section-title text-4xl font-sans font-medium text-brand-ink leading-[1.05] tracking-tight">
                  Projetos em <span className="italic font-serif font-light text-[#55605D]">Indaiatuba</span>
                </h2>
              </div>
            </div>

            <div className="dna-grid gap-12">
              {localCases.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="col-span-4 lg:col-span-6 group relative bg-brand-warm border border-brand-line"
                >
                  <div className="h-[450px] relative overflow-hidden bg-[#d1d7d3]">
                     <img
                        src={project.image}
                        width={project.width}
                        height={project.height}
                        loading="lazy"
                        decoding="async"
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full ${project.image.startsWith("/cases/") ? "object-contain p-4" : "object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.85]"}`}
                     />
                  </div>
                  <div className="p-8 md:p-12 border-t border-brand-line">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan-dark mb-3 block">{project.category}</span>
                        <h4 className="text-3xl font-medium text-brand-ink">{project.title}</h4>
                      </div>
                      <ArrowUpRight size={28} className="text-brand-muted shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div className="space-y-4 pt-6 border-t border-brand-line">
                      <p className="text-[#475553] text-lg leading-relaxed">{project.metric}</p>
                      <p className="text-brand-muted font-mono font-semibold text-xs uppercase tracking-widest">{project.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Local FAQ Section */}
          <section className="py-24 border-t border-brand-line">
            <div className="dna-grid mb-16">
              <div className="col-span-4 lg:col-span-8">
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-dark mb-4">Dúvidas Frequentes</h3>
                <h2 className="section-title text-4xl md:text-5xl font-sans font-medium text-brand-ink leading-[1.05] tracking-tight mb-8">
                  Estratégia e Design <br /> <span className="italic font-serif font-light text-[#55605D]">EM INDAIATUBA.</span>
                </h2>
                <div className="space-y-12 mt-16 border-t border-brand-line pt-12">
                  {[
                    {
                      q: "Como a estratégia de marca ajuda a atrair os clientes certos em Indaiatuba?",
                      a: "Começamos entendendo o trabalho da empresa e quem ela atende. Depois, organizamos a mensagem, a identidade visual e o site para que o cliente compreenda a oferta e saiba como entrar em contato."
                    },
                    {
                      q: "Qual a importância de trabalhar o SEO em Indaiatuba?",
                      a: "O SEO melhora as condições para que páginas relevantes sejam encontradas e compreendidas nas buscas. Revisamos estrutura, conteúdo e informações locais, sem garantir posição no Google ou recomendação por inteligência artificial."
                    },
                    {
                      q: "Qual o diferencial da Orvalia em relação a uma agência de marketing tradicional?",
                      a: "Não somos uma agência de marketing focada em postagens genéricas. Somos um estúdio focado em criar ativos digitais permanentes — marca forte, site rápido e narrativa clara — que geram conversão real."
                    },
                    {
                      q: "A agência atende outras cidades além de Indaiatuba?",
                      a: "Sim. Atendemos empresas de destaque em Campinas, Salto, Itu, Sorocaba e toda a Região Metropolitana de Campinas (RMC), além de clientes em âmbito nacional."
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="group">
                      <h4 className="text-xl font-bold text-brand-ink mb-4">{faq.q}</h4>
                      <p className="text-[#55615d] text-lg leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep Ink CTA Card (Contraste dramático) */}
              <div className="col-span-4 lg:col-span-4 mt-12 lg:mt-32">
                <div className="sticky top-32 p-10 md:p-12 bg-brand-ink text-brand-mineral flex flex-col justify-center items-start border border-brand-ink">
                  <div className="flex gap-2 mb-6">
                     <span className="block w-2.5 h-2.5 rounded-full bg-brand-cyan"></span>
                  </div>
                  <h4 className="text-2xl font-medium mb-4">Precision Editorial</h4>
                  <p className="text-brand-mist text-base leading-relaxed mb-10">
                    Identidade visual, textos e sites para apresentar os serviços de empresas de Indaiatuba e região.
                  </p>
                  <Link
                    to="/contato/"
                    className="text-brand-cyan font-mono font-bold text-xs uppercase tracking-widest border-b border-brand-cyan/40 pb-1 hover:border-brand-cyan transition-colors"
                  >
                    Iniciar projeto agora
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
