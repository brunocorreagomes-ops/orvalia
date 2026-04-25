import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como o branding estratégico pode ajudar minha empresa em Indaiatuba?",
    answer: "O branding estratégico vai além de um logo bonito. Ele constrói uma percepção de valor superior na mente do seu cliente, permitindo que você cobre mais caro, atraia melhores talentos e se destaque em um mercado altamente competitivo como o de Indaiatuba e região."
  },
  {
    question: "Qual o prazo médio para a criação de um site de alta performance?",
    answer: "Nossos projetos levam geralmente entre 4 a 8 semanas, dependendo da complexidade. Cada etapa é milimetricamente planejada: desde a arquitetura de informação e copy estratégica até o design exclusivo e desenvolvimento otimizado para SEO."
  },
  {
    question: "A Orvalia atende apenas empresas locais?",
    answer: "Embora tenhamos nossa base em Indaiatuba e foco na RMC Campinas, atendemos clientes em todo o Brasil e no exterior. O processo digital permite uma colaboração fluida independente da localização geográfica."
  },
  {
    question: "O que está incluído no plano de Design Estratégico?",
    answer: "Nossos planos costumam incluir diagnóstico de marca, manual de identidade visual, design de interface (UI/UX), copy direcionada para conversão e otimização técnica (SEO). Cada solução é personalizada para os objetivos específicos do seu negócio."
  },
  {
    question: "Como funciona o suporte pós-lançamento?",
    answer: "Não apenas entregamos o projeto e sumimos. Oferecemos acompanhamento pós-lançamento para garantir que tudo esteja rodando conforme o esperado e suporte técnico contínuo para atualizações e otimizações de performance."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left hover:text-brand-accent-light transition-colors group"
      >
        <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-brand-accent-light transition-colors">
          {question}
        </span>
        <div className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? 'bg-brand-accent-light border-brand-accent-light rotate-0' : 'rotate-90'}`}>
          {isOpen ? <Minus size={20} className="text-brand-bg" /> : <Plus size={20} className="text-white" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-brand-secondary text-lg leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-48 bg-brand-bg relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-brand-accent-light/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="dna-grid mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-4 lg:col-span-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Respostas Lógicas</span>
            </div>
            <h2 className="responsive-subtitle font-sans font-black text-white leading-none tracking-tighter uppercase">
              PERGUNTAS <br /> <span className="italic font-serif font-light text-brand-secondary">FREQUENTES.</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-white/10"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
