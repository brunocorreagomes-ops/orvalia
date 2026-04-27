import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const localCases = [
  {
    title: "Beth Olmeda",
    metric: "280% de crescimento no tráfego em 60 dias",
    location: "Indaiatuba/SP",
    category: "Branding • Estética",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg"
  },
  {
    title: "Dario Eletricidade",
    metric: "Aumento de 150% em leads qualificados",
    location: "Indaiatuba/SP",
    category: "Marketing • Digital",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png"
  }
];

export default function AgenciaIndaiatuba() {
  return (
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
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Presença Local</span>
              </div>
              <h1 className="responsive-title font-sans font-black text-white leading-[0.85] tracking-ultra-tight uppercase mb-8">
                Agência de Branding e <br /> <span className="text-gradient">Sites em Indaiatuba</span>
              </h1>
              <p className="font-serif text-2xl text-brand-secondary italic leading-relaxed max-w-2xl mb-10">
                A Orvalia Studio transforma marcas de Indaiatuba e da RMC em referências no mercado. Identidade visual, sites de alta performance e social media com padrão de elite.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://wa.me/5511978959567"
                  className="px-10 py-6 bg-brand-accent-light text-brand-bg rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent-light/20 flex items-center justify-center gap-3"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowUpRight size={18} />
                </a>
                <a 
                   href="#mapa"
                   className="px-10 py-6 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-widest transition-all hover:bg-white/5 flex items-center justify-center gap-3"
                >
                   Diagnóstico Presencial
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact info & Map */}
        <section id="mapa" className="py-20 border-t border-white/5">
          <div className="dna-grid gap-12">
            <div className="col-span-4 lg:col-span-5 space-y-12">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-6">Localização</h3>
                <div className="flex items-start gap-4 text-white">
                  <MapPin className="text-brand-accent-light shrink-0" size={24} />
                  <p className="text-xl leading-relaxed opacity-80">
                    Av. Pres. Kennedy, Indaiatuba - SP,<br />
                    CEP: 13334-170, Brasil
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
                    <span className="text-xl opacity-80">www.orvalia.com.br</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-7 h-[400px] rounded-[3rem] overflow-hidden border border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58703.1119330865!2d-47.25191060934661!3d-23.135766299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf50a31a980753%3A0xe6f4ef64a0e1c251!2sIndaiatuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1714032000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Local Cases */}
        <section className="py-20 border-t border-white/5">
          <div className="dna-grid mb-16">
            <div className="col-span-4 lg:col-span-12">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light mb-4">Casos de Sucesso Local</h3>
              <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase">
                Resultados em <span className="italic font-serif font-light text-brand-secondary">Indaiatuba</span>
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
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent-light mb-2 block">{project.category}</span>
                      <h4 className="text-3xl font-black text-white">{project.title}</h4>
                    </div>
                    <ArrowUpRight size={32} className="text-brand-accent-light" />
                  </div>
                  <div className="space-y-2 pt-6 border-t border-white/5">
                    <p className="text-white text-xl font-medium">{project.metric}</p>
                    <p className="text-brand-secondary/60 font-mono text-[10px] uppercase tracking-widest">{project.location}</p>
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
                    q: "Por que escolher uma agência de branding local em Indaiatuba?",
                    a: "Ter uma agência local facilita o alinhamento estratégico, reuniões presenciais periódicas e um entendimento profundo do comportamento do consumidor na Região Metropolitana de Campinas (RMC)."
                  },
                  {
                    q: "Como minha empresa pode aparecer no Google em Indaiatuba?",
                    a: "Utilizamos técnicas avançadas de SEO Local e GEO (Generative Engine Optimization). Otimizamos seu Google Meu Negócio e criamos sites com arquitetura semântica que o Google e as IAs adoram."
                  },
                  {
                    q: "Qual o benefício de um site de alta performance para meu negócio?",
                    a: "Sites rápidos e otimizados convertem até 4x mais. Em mercados competitivos como Indaiatuba e Campinas, a velocidade e a clareza da oferta são os principais diferenciais entre um lead e um clique perdido."
                  },
                  {
                    q: "Quanto tempo leva para ver resultados com branding e SEO?",
                    a: "O branding tem impacto imediato na percepção de valor. Já o SEO é um trabalho de médio prazo, mas com as nossas técnicas de GEO e otimização local, muitas empresas começam a notar aumento relevante de tráfego e leads qualificados entre os primeiros 60 a 90 dias."
                  },
                  {
                    q: "A Orvalia Studio atende outros municípios além de Indaiatuba?",
                    a: "Sim, somos uma agência com DNA regional forte. Atendemos com excelência empresas em Campinas, Salto, Itu, Americana e toda a Região Metropolitana de Campinas (RMC), além de projetos selecionados em todo o Brasil."
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
              <p className="text-white font-black text-xl mb-2">5.0 no Google</p>
              <p className="text-brand-secondary text-[10px] font-mono uppercase tracking-[0.2em] text-center lg:text-right">Orvalia Studio — Atendimento de Excelência em Indaiatuba</p>
              <a 
                href="https://g.page/r/YOUR_GMB_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 text-brand-accent-light font-mono text-[10px] uppercase tracking-widest border-b border-brand-accent-light/30 pb-1"
              >
                Ver Avaliações Reais
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
