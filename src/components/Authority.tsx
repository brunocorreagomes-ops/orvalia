import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap } from "lucide-react";

export default function Authority() {
  return (
    <section className="py-24 md:py-48 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Core Methodology DNA Grid */}
        <div className="dna-grid mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-4 lg:col-span-12 mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Lógica do Estúdio</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-4 lg:col-span-7"
          >
            <h2 className="responsive-subtitle font-sans font-black text-white tracking-ultra-tight leading-[0.9] mb-12">
              CONSTRUÇÃO <br /> DE <span className="text-gradient">AUTORIDADE.</span>
            </h2>
            <p className="font-serif text-xl md:text-3xl text-brand-secondary italic leading-relaxed font-light max-w-2xl">
              "Branding não é apenas estética; é uma <span className="text-white not-italic font-medium">arquitetura de percepção</span> que sustenta sua liderança e garante seu retorno digital."
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="col-span-4 lg:col-span-5 flex flex-col justify-end pt-12 lg:pt-0"
          >
            <div className="glass-premium p-10 rounded-[3rem] relative space-y-8">
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-2xl bg-brand-accent-light/10 flex items-center justify-center shrink-0">
                    <Target className="text-brand-accent-light" size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Segmentação</h4>
                    <p className="text-brand-secondary/60 text-xs leading-relaxed font-mono">ESTRATÉGIAS DE POSICIONAMENTO PARA PÚBLICOS DE ALTO VALOR.</p>
                 </div>
              </div>
              <div className="h-[1px] w-full bg-white/5" />
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-2xl bg-brand-accent-dark/10 flex items-center justify-center shrink-0">
                    <Zap className="text-brand-accent-dark" size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Velocidade</h4>
                    <p className="text-brand-secondary/60 text-xs leading-relaxed font-mono">INFRAESTRUTURA DE CÓDIGO LEVE E PERFORMANCE OTIMIZADA.</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Essence of Strategy Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-brand-accent-light/5 blur-[100px] rounded-full opacity-30" />
          <div className="relative border border-white/10 bg-brand-bg md:p-24 p-12 rounded-[4rem] overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <ShieldCheck size={120} className="text-white" />
             </div>
             
             <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-8">
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">O que é Branding Estratégico?</h3>
                  <p className="text-brand-secondary text-lg leading-relaxed mb-10">
                    Não desenvolvemos apenas logotipos. Projetamos a jornada que transforma seu público em uma comunidade leal. Do design sonoro à performance do site, cada detalhe é uma peça de <span className="text-brand-accent-light font-bold">autoridade digital.</span>
                  </p>
                  <div className="flex items-center gap-6">
                     <span className="font-mono text-[9px] uppercase tracking-super-tight text-white/40">Desenvolvido por Orvalia Studio</span>
                     <div className="flex-1 h-[1px] bg-white/5" />
                  </div>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
