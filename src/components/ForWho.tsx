import { motion } from "framer-motion";
import { Stethoscope, Palmtree, Landmark, Compass, Users, UserCheck } from "lucide-react";

const targetAudiences = [
  {
    icon: Stethoscope,
    title: "Clínicas e profissionais premium",
    desc: "Médicos, dentistas e terapeutas de elite que buscam se diferenciar pela excelência e atrair pacientes de alto padrão."
  },
  {
    icon: Palmtree,
    title: "Turismo, hotelaria e experiências",
    desc: "Hotéis boutique, pousadas de charme, restaurantes e destinos singulares que entregam momentos inesquecíveis."
  },
  {
    icon: Landmark,
    title: "Serviços locais de alto valor",
    desc: "Boutiques jurídicas, consultorias de negócios, construtoras e escritórios especializados de extrema credibilidade."
  },
  {
    icon: Compass,
    title: "Arquitetura, interiores e estética",
    desc: "Estúdios de design, arquitetos renomados e clínicas de estética médica onde o visual sofisticado e o requinte são indispensáveis."
  },
  {
    icon: Users,
    title: "Negócios familiares em fase de transição",
    desc: "Empresas tradicionais e consolidadas que passam por transição geracional e exigem profissionalização de imagem digital."
  },
  {
    icon: UserCheck,
    title: "Marcas pessoais e especialistas",
    desc: "Mentores de negócios, palestrantes, conselheiros e diretores que desejam transformar prestígio físico em autoridade digital."
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

        {/* Dynamic grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudiences.map((audience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-brand-accent-light/25 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-accent-light/10 flex items-center justify-center mb-8 border border-brand-accent-light/10 group-hover:bg-brand-accent-light/20 group-hover:border-brand-accent-light/30 transition-all duration-500">
                  <audience.icon className="text-brand-accent-light" size={20} />
                </div>
                <h3 className="text-white font-black text-lg md:text-xl uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                  {audience.title}
                </h3>
                <p className="text-brand-secondary/70 text-sm leading-relaxed mb-6 font-light">
                  {audience.desc}
                </p>
              </div>
              <div className="w-full h-[1px] bg-white/5 group-hover:bg-brand-accent-light/20 transition-all duration-500 mt-4" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
