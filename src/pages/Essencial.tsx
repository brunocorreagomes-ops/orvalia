import { motion } from "framer-motion";
import { ChevronLeft, Check, Clock, RotateCcw, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Essencial() {
  return (
    <section className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
        <ChevronLeft size={20} />
        Voltar para a página inicial
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-brand-accent-light font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Plano de Entrada</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Plano <span className="text-gradient">Essencial</span>
          </h1>
          <p className="text-brand-secondary text-lg leading-relaxed mb-12 max-w-xl">
            Ideal para profissionais liberais e pequenos negócios que precisam de uma presença digital profissional e confiável com investimento otimizado.
          </p>

          <div className="text-4xl font-black text-white mb-12">
            a partir de <span className="text-brand-accent-light">R$ 1.497</span>
          </div>

          <a 
            href="https://wa.me/5511978959567?text=Olá,%20gostaria%20de%20contratar%20o%20Plano%20Essencial"
            className="inline-flex items-center justify-center px-12 py-5 bg-brand-whatsapp text-white rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-2xl"
          >
            Contratar Agora
          </a>
        </div>

        <div className="space-y-12">
          <div className="glass p-12 rounded-[2.5rem] border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Target size={24} className="text-brand-accent-light" />
              O que contempla
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Landing Page de Alta Conversão",
                "Identidade Visual (Logo + Cores)",
                "Otimização Mobile",
                "Hospedagem por 1 ano",
                "Domínio incluso",
                "Integração com WhatsApp",
                "Suporte 15 dias pós-lançamento"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-secondary">
                  <Check size={16} className="text-brand-accent-light mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-3xl border-white/5">
              <Clock size={32} className="text-brand-accent-light mb-4" />
              <h4 className="text-white font-bold mb-2">Prazo de Entrega</h4>
              <p className="text-sm text-brand-secondary">Aproximadamente 7 a 10 dias úteis após o envio dos materiais.</p>
            </div>
            <div className="glass p-8 rounded-3xl border-white/5">
              <RotateCcw size={32} className="text-brand-accent-light mb-4" />
              <h4 className="text-white font-bold mb-2">Ajustes Inclusos</h4>
              <p className="text-sm text-brand-secondary">Até 2 rodadas de revisões completas para garantir sua satisfação total.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">Passo a Passo da Jornada</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Briefing", desc: "Entendemos seu público e seus diferenciais." },
            { step: "02", title: "Design", desc: "Criamos o protótipo visual da sua marca e LP." },
            { step: "03", title: "Desenvolvimento", desc: "Transformamos o design em código funcional." },
            { step: "04", title: "Lançamento", desc: "Publicamos seu site e configuramos o SEO básico." }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4">{item.step}</div>
              <h4 className="text-white font-bold mb-3 relative z-10">{item.title}</h4>
              <p className="text-sm text-brand-secondary relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
