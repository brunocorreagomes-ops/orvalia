import PerceptionLab from "./PerceptionLab";
import { motion } from "framer-motion";

export default function GapPercepcao() {
  return (
    <section id="gap-percepcao" className="py-24 md:py-32 bg-brand-ink text-brand-warm overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="w-8 h-[2px] bg-brand-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan">
            01 / Entre o que você entrega e o que o cliente vê
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.55fr] gap-10 lg:gap-20 items-end mb-16 md:mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-[5.5vw] font-sans font-medium leading-[1.05] tracking-tight m-0">
            Não falta qualidade.<br />
            <span className="text-[#94a7a3] italic font-light font-serif">Falta clareza.</span>
          </h2>
          <p className="text-[#a9b8b3] text-lg md:text-xl leading-relaxed mb-2">
            A marca e o site precisam explicar o que você oferece, para quem é o serviço e como pedir uma proposta. Sem isso, um bom trabalho pode passar despercebido.
          </p>
        </div>

        <PerceptionLab />

        {/* Dores (Painpoints) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mt-16 md:mt-20">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-[#455450] pt-6"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan mb-5">Percepção</div>
            <h3 className="text-2xl font-medium mb-4 leading-snug">Seu trabalho é bom. O site mostra isso?</h3>
            <p className="text-[#a8b5b1] text-sm leading-relaxed">
              Um cliente indicado pode pesquisar sua empresa antes de conversar. Se encontrar uma apresentação genérica ou desatualizada, talvez não perceba o cuidado que existe no seu trabalho.
            </p>
          </motion.article>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-t border-[#455450] pt-6"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan mb-5">Clareza</div>
            <h3 className="text-2xl font-medium mb-4 leading-snug">Você explica sempre as mesmas coisas?</h3>
            <p className="text-[#a8b5b1] text-sm leading-relaxed">
              Quando os serviços, o público e o atendimento não estão claros, a conversa começa com dúvidas que o site já poderia resolver.
            </p>
          </motion.article>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-[#455450] pt-6"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan mb-5">Contato</div>
            <h3 className="text-2xl font-medium mb-4 leading-snug">O visitante sabe como pedir um orçamento?</h3>
            <p className="text-[#a8b5b1] text-sm leading-relaxed">
              Telefone escondido, informações incompletas ou uma página difícil de usar no celular podem interromper o contato antes mesmo de ele começar.
            </p>
          </motion.article>
        </div>

      </div>
    </section>
  );
}
