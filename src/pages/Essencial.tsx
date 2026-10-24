import { motion } from "framer-motion";
import { ChevronLeft, Check, Clock, RotateCcw, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Essencial() {
  return (
    <section className="min-h-screen bg-brand-mineral text-brand-ink pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-ink mb-10 md:mb-12 transition-colors border-b border-transparent hover:border-brand-ink pb-1">
        <ChevronLeft size={16} />
        <span className="font-mono text-xs uppercase tracking-widest font-bold">Voltar para a página inicial</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <span className="text-brand-cyan-dark font-mono font-bold text-xs uppercase tracking-[0.3em] block mb-6">
            Plano de Entrada
          </span>
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-sans font-medium tracking-tight mb-8 leading-[1.05] uppercase">
            Plano <span className="italic font-serif font-light text-[#55605D] normal-case">Essencial</span>
          </h1>
          <p className="text-[#475553] text-lg leading-relaxed mb-10 md:mb-12 max-w-xl">
            Ideal para profissionais liberais e pequenos negócios que precisam de uma presença digital profissional, limpa e confiável, com investimento otimizado.
          </p>

          <div className="text-3xl md:text-4xl font-medium text-brand-ink mb-10 md:mb-12 tracking-tight">
            a partir de <span className="text-brand-cyan-dark font-bold">R$ 1.497</span>
          </div>

          <a 
            href="https://wa.me/5511978959567?text=Olá!%20Gostaria%20de%20contratar%20o%20Plano%20Essencial%20pela%20Orvalia%20Studio."
            className="inline-flex items-center justify-center px-10 md:px-12 py-5 bg-brand-ink text-brand-mineral rounded-full font-bold text-xs hover:-translate-y-1 transition-transform uppercase tracking-widest"
          >
            Contratar Agora
          </a>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="p-10 md:p-12 bg-brand-warm border border-brand-line rounded-[2rem]">
            <h3 className="text-xl md:text-2xl font-medium text-brand-ink mb-8 flex items-center gap-4 tracking-tight">
              <Target size={24} className="text-brand-cyan-dark" />
              O que contempla
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {[
                "Landing Page de Alta Conversão",
                "Identidade Visual (Logo + Cores)",
                "Otimização Mobile-First",
                "Hospedagem por 1 ano",
                "Domínio incluso no primeiro ano",
                "Integração com WhatsApp",
                "Suporte 15 dias pós-lançamento"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#475553] leading-relaxed">
                  <Check size={16} className="text-brand-cyan-dark mt-1 flex-shrink-0" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-brand-warm border border-brand-line rounded-[2rem]">
              <Clock size={28} className="text-brand-cyan-dark mb-5" strokeWidth={1.5} />
              <h4 className="text-brand-ink font-bold mb-2">Prazo de Entrega</h4>
              <p className="text-sm text-[#55615d] leading-relaxed">Aproximadamente 7 a 10 dias úteis após o alinhamento estratégico.</p>
            </div>
            <div className="p-8 bg-brand-warm border border-brand-line rounded-[2rem]">
              <RotateCcw size={28} className="text-brand-cyan-dark mb-5" strokeWidth={1.5} />
              <h4 className="text-brand-ink font-bold mb-2">Ajustes Inclusos</h4>
              <p className="text-sm text-[#55615d] leading-relaxed">Até 2 rodadas de revisões editoriais para garantir precisão e satisfação.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-24 border-t border-brand-line">
        <h2 className="text-3xl font-medium text-brand-ink mb-16 text-center tracking-tight">Passo a Passo da Jornada</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Diagnóstico", desc: "Compreendemos o seu público e o valor latente do seu negócio." },
            { step: "02", title: "Design", desc: "Definimos cores, tipografia e textos de apresentação da marca." },
            { step: "03", title: "Desenvolvimento", desc: "Transformamos o design numa interface rápida e funcional." },
            { step: "04", title: "Lançamento", desc: "Publicamos o seu site e realizamos as configurações de SEO base." }
          ].map((item, i) => (
            <div key={i} className="border-l border-brand-line pl-6">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#4c5955] mb-4">Passo / {item.step}</div>
              <h4 className="text-brand-ink font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-[#55615d] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
