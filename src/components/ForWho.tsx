import { motion } from "framer-motion";
import { Stethoscope, Palmtree, Landmark, Compass, Users, UserCheck } from "lucide-react";

const targetAudiences = [
  {
    icon: Stethoscope,
    title: "Clínicas e profissionais de saúde",
    desc: "Médicos, dentistas e terapeutas de referência que buscam se diferenciar pela excelência e aumentar seu valor percebido."
  },
  {
    icon: Palmtree,
    title: "Turismo, hotelaria e experiências",
    desc: "Hotéis boutique, pousadas, restaurantes e experiências locais de destaque que desejam expressar sua identidade única."
  },
  {
    icon: Landmark,
    title: "Serviços corporativos e locais",
    desc: "Escritórios de advocacia, consultorias de negócios, construtoras e empresas focadas em alta credibilidade e crescimento regional."
  },
  {
    icon: Compass,
    title: "Arquitetura, interiores e estética",
    desc: "Arquitetos, designers de interiores e clínicas de estética onde a percepção de valor visual e a diferenciação estética são indispensáveis."
  },
  {
    icon: Users,
    title: "Negócios tradicionais e familiares",
    desc: "Empresas consolidadas em fase de transição de liderança ou expansão comercial que exigem maturidade e clareza digital."
  },
  {
    icon: UserCheck,
    title: "Marcas pessoais e especialistas",
    desc: "Mentores, consultores, palestrantes e profissionais liberais decididos a traduzir prestígio físico em presença digital vendável."
  }
];

export default function ForWho() {
  return (
    <section className="py-24 md:py-40 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header section with strategic local message */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-accent-light" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Direcionamento de Valor</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
            Para empresas que <span className="text-gradient">já são excelentes</span> no que fazem, mas ainda não parecem tão fortes quanto deveriam no digital.
          </h2>
          <p className="text-brand-secondary/80 text-base md:text-lg max-w-2xl leading-relaxed">
            Seja em Indaiatuba, na região de Campinas ou em âmbito nacional, trabalhamos com negócios locais que precisam elevar percepção de valor, confiança e posicionamento estratégico.
          </p>
        </div>

        {/* Dynamic grid with staggered and direction-aware animations */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {targetAudiences.map((audience, idx) => {
            // Calculate direction based on index % 3
            // 0 -> left (-40px x), 1 -> center (40px y), 2 -> right (40px x)
            const cardVariants = {
              hidden: {
                opacity: 0,
                x: idx % 3 === 0 ? -40 : idx % 3 === 2 ? 40 : 0,
                y: idx % 3 === 1 ? 40 : 15,
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
                className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-brand-accent-light/25 transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent-light/10 flex items-center justify-center mb-8 border border-brand-accent-light/10 group-hover:bg-brand-accent-light/20 group-hover:border-brand-accent-light/30 transition-all duration-500">
                    <audience.icon className="text-brand-accent-light" size={20} />
                  </div>
                  <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-brand-secondary/70 text-sm leading-relaxed mb-6 font-light line-clamp-2">
                    {audience.desc}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-white/5 group-hover:bg-brand-accent-light/20 transition-all duration-500 mt-4" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
