import { motion } from "framer-motion";
import { IconBrand, IconWeb, IconLocal, IconComm } from './CustomIcons';

const services = [
  {
    title: "1. Branding Estratégico",
    desc: "Posicionamento, identidade, narrativa, tom de voz e direção visual para sua marca ser percebida com mais valor.",
    icon: <IconBrand className="text-brand-accent-light" size={28} />
  },
  {
    title: "2. Sites e Landing Pages Premium",
    desc: "Páginas institucionais e comerciais com design sofisticado, copy estratégica, SEO local e foco total em conversão.",
    icon: <IconWeb className="text-brand-accent-light" size={28} />
  },
  {
    title: "3. Presença Local Inteligente",
    desc: "Estrutura digital para sua empresa aparecer melhor, comunicar com mais clareza e gerar mais confiança na região de Indaiatuba.",
    icon: <IconLocal className="text-brand-accent-light" size={28} />
  },
  {
    title: "4. Comunicação Mensal",
    desc: "Conteúdo, campanhas, criativos e direção de comunicação para manter sua marca ativa, consistente e desejável.",
    icon: <IconComm className="text-brand-accent-light" size={28} />
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-40 bg-brand-bg relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-brand-accent-light font-bold text-[10px] uppercase tracking-[0.3em] block mb-4">Especialidades</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-8 leading-[1.1]">
              Como podemos <br /> <span className="text-gradient">elevar sua marca.</span>
            </h2>
            <p className="text-brand-secondary/80 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Não entregamos apenas arquivos ou linhas de código. Desenvolvemos os ativos de marca e as páginas estratégicas de alta performance que colocam seu negócio no topo do mercado regional.
            </p>
            <div className="h-[1px] w-full bg-white/5 my-8" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-brand-secondary/40">
              [ Orvalia Studio • Soluções Digitais ]
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.map((service, idx) => {
              const cardVariants = {
                hidden: {
                  opacity: 0,
                  x: idx % 2 === 0 ? -30 : 30,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                    mass: 0.8
                  }
                }
              };

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-brand-accent-light/30 transition-all duration-500 relative overflow-hidden group"
                >
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent-light/10 flex items-center justify-center mb-6 border border-brand-accent-light/10 group-hover:scale-110 group-hover:bg-brand-accent-light/20 transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-tight mb-4">{service.title}</h3>
                    <p className="text-brand-secondary/70 text-sm leading-relaxed font-light line-clamp-2">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
