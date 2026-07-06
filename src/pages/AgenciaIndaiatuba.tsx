import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const localCases = [
  {
    title: "Beth Olmeda",
    metric: "Imagem mais elegante, clara e alinhada a um atendimento de alto valor",
    location: "Indaiatuba/SP",
    category: "Branding • Estética",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg"
  },
  {
    title: "Dario Eletricidade",
    metric: "Mensagem mais profissional para clientes que precisam de segurança técnica",
    location: "Indaiatuba/SP",
    category: "Marketing • Digital",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png"
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
          "https://www.linkedin.com/in/brunocorreagomes"
        ],
        "image": "https://i.ibb.co/xqmr9M3F/bruno-correa-gomes.jpg",
        "worksFor": {
          "@type": "Organization",
          "name": "Orvalia Studio",
          "url": "https://orvalia.com.br"
        }
      }
    },
    {
      "@type": "Service",
      "name": "Branding e Identidade Visual",
      "provider": {
        "@id": "https://orvalia.com.br/#localbusiness"
      },
      "areaServed": "Indaiatuba",
      "description": "Construção de posicionamento de marca premium e identidade visual corporativa para empresas."
    }
  ]
};

export default function AgenciaIndaiatuba() {
  return (
    <>
      <SEO 
        title="Agência de Branding e Sites em Indaiatuba | Orvalia Studio"
        description="A Orvalia Studio cria marcas e sites de luxo em Indaiatuba e na RMC. Identidade visual exclusiva, SEO local e posicionamento premium para negócios de elite."
        canonical="https://orvalia.com.br/agencia-indaiatuba"
        schema={agencySchema}
      />
      <div className="min-h-screen bg-brand-bg pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light transition-colors mb-8">
            <ArrowLeft size={20} />
            <span className="font-mono text-xs uppercase tracking-widest">Voltar ao Início</span>
          </Link>
          
          <div className="dna-grid items-end gap-12">
            <div className="col-span-4 lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-brand-accent-light" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Estratégia local com foco no público de Indaiatuba</span>
              </div>
              <h1 className="responsive-title font-sans font-black text-white leading-[0.85] tracking-ultra-tight uppercase mb-8">
                Agência de Branding e <br /> <span className="text-gradient">Sites em Indaiatuba</span>
              </h1>
              <p className="font-serif text-2xl text-brand-secondary italic leading-relaxed max-w-2xl mb-10">
                A Orvalia Studio transforma marcas de Indaiatuba e da RMC em referências no mercado. Identidade visual, sites de alta performance e social media com padrão de elite.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20o%20site%20da%20Orvalia%20e%20quero%20um%20diagnóstico%20da%20minha%20marca/site.%20Meu%20negócio%20é:"
                  className="px-10 py-6 bg-brand-accent-light text-brand-bg rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent-light/20 flex items-center justify-center gap-3"
                >
                Diagnóstico Gratuito
              </a>
                <a 
                   href="#atendimento"
                   className="px-10 py-6 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-widest transition-all hover:bg-white/5 flex items-center justify-center gap-3"
                >
                   Atendimento Regional
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact info & Regional Service details */}
        <section id="atendimento" className="py-20 border-t border-white/5">
          <div className="dna-grid gap-12">
            <div className="col-span-4 lg:col-span-5 space-y-12">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-6">Atendimento Regional</h3>
                <div className="flex items-start gap-4 text-white">
                  <MapPin className="text-brand-accent-light shrink-0" size={24} />
                  <p className="text-xl leading-relaxed opacity-80">
                    Atendimento estratégico para empresas de Indaiatuba, Campinas, Salto, Itu, Sorocaba e região, com diagnóstico inicial pelo WhatsApp e reuniões por agendamento.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-6">Contato Direto</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-white">
                    <Phone className="text-brand-accent-light" size={20} />
                    <span className="text-xl opacity-80">+55 11 97895-9567</span>
                  </li>
                  <li className="flex items-center gap-4 text-white">
                    <Mail className="text-brand-accent-light" size={20} />
                    <span className="text-xl opacity-80">orvaliastudio@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-4 text-white">
                    <Globe className="text-brand-accent-light" size={20} />
                    <span className="text-xl opacity-80">orvalia.com.br</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-7 p-10 md:p-12 glass-premium rounded-[3rem] border border-white/5 flex flex-col justify-center space-y-8">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Dinâmica de Atendimento</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-bold text-lg mb-1">1. Primeiro Passo via WhatsApp</h5>
                  <p className="text-brand-secondary text-sm leading-relaxed">
                    Tudo começa com uma conversa direta e sem intermediários. Você nos conta sobre seus objetivos de negócio e nós realizamos um diagnóstico prévio da sua presença digital.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <h5 className="text-white font-bold text-lg mb-1">2. Diagnóstico Personalizado</h5>
                  <p className="text-brand-secondary text-sm leading-relaxed">
                    Apresentamos caminhos claros e os melhores pontos de partida para estruturar o seu design estratégico, seja para um lançamento rápido ou um reposicionamento completo de marca.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-6">
                  <h5 className="text-white font-bold text-lg mb-1">3. Reuniões sob Demanda</h5>
                  <p className="text-brand-secondary text-sm leading-relaxed">
                    Nossas sessões e alinhamentos de entrega são realizados de forma 100% online ou presenciais combinados estrategicamente em Indaiatuba e região — sempre com agendamento prévio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem está por trás da Orvalia */}
        <section className="py-24 border-t border-white/5 relative overflow-hidden">
          {/* Decorative subtle background dewdrop */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.03] pointer-events-none">
            <svg width="600" height="600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent-light">
              <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" fill="currentColor" />
            </svg>
          </div>

          <div className="dna-grid gap-12 items-center">
            {/* Portrait Column */}
            <div className="col-span-4 lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
              >
                {/* Image */}
                <img 
                  src="https://i.ibb.co/xqmr9M3F/bruno-correa-gomes.jpg" 
                  alt="Bruno Correa Gomes - Fundador da Orvalia Studio" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle color treatment gradient overlay matching brand colors (teal/water) */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-accent-light/10 pointer-events-none" />
                <div className="absolute inset-0 bg-brand-accent-light/5 mix-blend-color pointer-events-none" />
                
                {/* Frame Accent corner */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-brand-bg/80 backdrop-blur-md border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-black uppercase text-[10px] tracking-widest mb-1">Bruno Correa Gomes</p>
                  <p className="text-brand-accent-light font-mono text-[8px] uppercase tracking-wider">Liderança Estratégica & Design de Elite</p>
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="col-span-4 lg:col-span-7 space-y-8 lg:pl-6">
              <div>
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-4 block">Liderança & Visão</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-[1.1] tracking-tighter uppercase mb-2">
                  Quem está por trás da <br className="hidden sm:inline" /><span className="text-gradient">Orvalia Studio?</span>
                </h2>
                <div className="h-[1px] w-20 bg-brand-accent-light mt-6" />
              </div>

              <div className="space-y-6">
                <p className="text-brand-secondary text-lg leading-relaxed font-serif italic">
                  "Acreditamos que negócios extraordinários de Indaiatuba e região merecem um nível de design e estratégia que projeta sua verdadeira maestria. Nosso papel é pavimentar essa autoridade digital."
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Bruno Correa Gomes</h3>
                  <p className="text-brand-accent-light font-mono text-xs uppercase tracking-widest font-semibold">Fundador da Orvalia Studio</p>
                </div>

                <p className="text-brand-secondary text-base leading-relaxed">
                  Com mais de 18 anos de sólida trajetória de liderança em marketing de alta performance no setor financeiro, Bruno traz a precisão analítica e a sofisticação do mercado premium para a esfera digital de Indaiatuba e região.
                </p>

                <p className="text-brand-secondary text-base leading-relaxed">
                  Com MBA e pós-graduações pela renomada <strong>Fundação Getulio Vargas (FGV)</strong> e detentor da certificação <strong>CEA</strong> de especialista em investimentos, unifica a visão analítica de negócios ao refinamento estético, estruturando ecossistemas digitais de elite que impulsionam resultados exponenciais para marcas exigentes.
                </p>
              </div>

              {/* LinkedIn & WhatsApp button */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/brunocorreagomes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 border border-white/10 hover:border-brand-accent-light text-white hover:text-brand-accent-light rounded-full font-mono text-[10px] uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  LinkedIn Profissional
                </a>

                <a 
                  href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20sua%20trajetória%20no%20site%20da%20Orvalia%20e%20gostaria%20de%20agendar%20uma%20conversa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-brand-accent-light/10 hover:bg-brand-accent-light hover:text-brand-bg border border-brand-accent-light/20 text-brand-accent-light rounded-full font-mono text-[10px] uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Conectar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Cases */}
        <section className="py-20 border-t border-white/5">
          <div className="dna-grid mb-16">
            <div className="col-span-4 lg:col-span-12">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-4">Casos de Sucesso Local</h3>
              <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase">
                Projetos em <span className="italic font-serif font-light text-brand-secondary">Indaiatuba</span>
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
                className="col-span-4 lg:col-span-6 group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/5"
              >
                <div className="h-[400px] relative overflow-hidden">
                   <img 
                      src={project.image} 
                      alt={project.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover  transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="p-6 md:p-10">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div>
                      <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-brand-accent-light mb-1 md:mb-2 block">{project.category}</span>
                      <h4 className="text-2xl md:text-3xl font-black text-white">{project.title}</h4>
                    </div>
                    <ArrowUpRight size={24} className="text-brand-accent-light shrink-0 md:w-8 md:h-8" />
                  </div>
                  <div className="space-y-1 md:space-y-2 pt-4 md:pt-6 border-t border-white/5">
                    <p className="text-white text-lg md:text-xl font-medium">{project.metric}</p>
                    <p className="text-brand-secondary/60 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Local FAQ Section */}
        <section className="py-20 border-t border-white/5">
          <div className="dna-grid mb-16">
            <div className="col-span-4 lg:col-span-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-4">Dúvidas Frequentes</h3>
              <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase mb-8">
                SEO & Branding <br /> <span className="italic font-serif font-light text-brand-secondary">EM INDAIATUBA.</span>
              </h2>
              <div className="space-y-12 mt-16 text-left">
                {[
                  {
                    q: "Como funciona o branding em Indaiatuba para atrair clientes premium?",
                    a: "O branding em Indaiatuba foca em criar um posicionamento estratégico que se destaca da concorrência local. Ajustamos a narrativa de marca, a identidade visual e a comunicação para atrair um público regional exigente e de alto padrão."
                  },
                  {
                    q: "Qual a importância de trabalhar o SEO em Indaiatuba?",
                    a: "A nossa estratégia de SEO em Indaiatuba garante que sua empresa apareça no topo das buscas orgânicas quando potenciais clientes procurarem por seus serviços. Otimizamos sua presença para buscas locais e para respostas em inteligências artificiais de última geração (GEO)."
                  },
                  {
                    q: "Qual o diferencial da Orvalia em relação a uma agência de marketing em Indaiatuba tradicional?",
                    a: "Não somos apenas uma agência de marketing em Indaiatuba focada em postagens genéricas. Somos uma boutique de branding e desenvolvimento de sites premium, focada em criar ativos digitais permanentes e estratégicos que geram conversão real."
                  },
                  {
                    q: "Como um site de alta performance melhora a conversão?",
                    a: "Sites rápidos e persuasivos evitam a perda de visitantes. Em mercados dinâmicos como Indaiatuba, Itu, Salto e Campinas, a velocidade extrema aliada a uma proposta de valor clara transforma cliques em contatos reais."
                  },
                  {
                    q: "A agência atende outras cidades além de Indaiatuba?",
                    a: "Sim. Atendemos empresas de destaque em Campinas, Salto, Itu, Sorocaba e toda a Região Metropolitana de Campinas (RMC), garantindo proximidade e alinhamento estratégico contínuo."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-brand-accent-light transition-colors">{faq.q}</h4>
                    <p className="text-brand-secondary text-lg leading-relaxed italic">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-4 lg:col-span-4 flex flex-col justify-center items-center lg:items-end p-8 glass-premium rounded-[3rem] border border-white/5 h-fit mt-12 lg:mt-32">
              <div className="flex gap-2 mb-4">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm" />)}
              </div>
              <p className="text-white font-black text-xl mb-2">Atendimento de Excelência</p>
              <p className="text-brand-secondary text-[10px] font-mono uppercase tracking-[0.2em] text-center lg:text-right">Orvalia Studio. Padrão Global para Marcas de Indaiatuba e Região</p>
              <a 
                href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20a%20seção%20sobre%20Indaiatuba%20e%20gostaria%20de%20solicitar%20um%20diagnóstico%20da%20presença%20digital%20da%20minha%20empresa."
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 text-brand-accent-light font-mono text-[10px] uppercase tracking-widest border-b border-brand-accent-light/30 pb-1 hover:border-brand-accent-light transition-all"
              >
                Solicitar Diagnóstico Gratuito
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
