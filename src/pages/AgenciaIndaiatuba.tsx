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
                Agência de Sites e <br /> <span className="text-gradient">Branding em Indaiatuba</span>
              </h1>
              <p className="font-serif text-2xl text-brand-secondary italic leading-relaxed max-w-2xl">
                Elevando o padrão digital das empresas e profissionais de Indaiatuba com design estratégico e alta performance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact info & Map */}
        <section className="py-20 border-t border-white/5">
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
      </div>
    </div>
  );
}
