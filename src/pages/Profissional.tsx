import { motion } from "framer-motion";
import { ChevronLeft, Check, Clock, RotateCcw, Target, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profissional() {
  return (
    <section className="min-h-screen bg-brand-warm text-brand-ink pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-ink mb-10 md:mb-12 transition-colors border-b border-transparent hover:border-brand-ink pb-1">
        <ChevronLeft size={16} />
        <span className="font-mono text-xs uppercase tracking-widest font-bold">Voltar para a página inicial</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <span className="text-brand-cyan-dark font-mono font-bold text-xs uppercase tracking-[0.3em] block mb-6">
            Mais Escolhido
          </span>
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-sans font-medium tracking-tight mb-8 leading-[1.05] uppercase">
            Plano <span className="italic font-serif font-light text-[#55605D] normal-case">Profissional</span>
          </h1>
          <p className="text-[#475553] text-lg leading-relaxed mb-10 md:mb-12 max-w-xl">
            Identidade visual e site para apresentar os serviços, os trabalhos e os contatos da empresa.
          </p>

          <div className="text-3xl md:text-4xl font-medium text-brand-ink mb-10 md:mb-12 tracking-tight">
            a partir de <span className="text-brand-cyan-dark font-bold">R$ 3.997</span>
          </div>

          <a 
            href="https://wa.me/5511978959567?text=Olá!%20Gostaria%20de%20contratar%20o%20Plano%20Profissional%20pela%20Orvalia%20Studio."
            className="inline-flex items-center justify-center px-10 md:px-12 py-5 bg-brand-ink text-brand-mineral rounded-full font-bold text-xs hover:-translate-y-1 transition-transform uppercase tracking-widest"
          >
            Contratar Agora
          </a>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="p-10 md:p-12 bg-brand-mineral border border-brand-line rounded-[2rem]">
            <h3 className="text-xl md:text-2xl font-medium text-brand-ink mb-8 flex items-center gap-4 tracking-tight">
              <Shield size={24} className="text-brand-cyan-dark" strokeWidth={1.5} />
              O que contempla
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {[
                "Website Multi-páginas",
                "Branding Estratégico Completo",
                "SEO Avançado (On-page)",
                "GEO (Otimização para IAs)",
                "Blog ou Seção Editorial",
                "Painel Administrativo",
                "Kit Social Media (Templates)",
                "Escaneamento de Segurança"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#475553] leading-relaxed">
                  <Check size={16} className="text-brand-cyan-dark mt-1 flex-shrink-0" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-brand-mineral border border-brand-line rounded-[2rem]">
              <Clock size={28} className="text-brand-cyan-dark mb-5" strokeWidth={1.5} />
              <h4 className="text-brand-ink font-bold mb-2">Prazo de Entrega</h4>
              <p className="text-sm text-[#55615d] leading-relaxed">De 15 a 21 dias úteis, respeitando a complexidade estratégica do projeto.</p>
            </div>
            <div className="p-8 bg-brand-mineral border border-brand-line rounded-[2rem]">
              <RotateCcw size={28} className="text-brand-cyan-dark mb-5" strokeWidth={1.5} />
              <h4 className="text-brand-ink font-bold mb-2">Ajustes Inclusos</h4>
              <p className="text-sm text-[#55615d] leading-relaxed">Até 4 rodadas de revisões para garantir um polimento de alta fidelidade.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-24 border-t border-brand-line">
        <h2 className="text-3xl font-medium text-brand-ink mb-16 text-center tracking-tight">O Diferencial Orvalia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 border border-brand-line bg-brand-mineral rounded-[2rem]">
            <div className="mb-6 flex justify-center">
              <Target className="text-brand-cyan-dark" size={36} strokeWidth={1} />
            </div>
            <h4 className="text-xl font-bold text-brand-ink mb-4">Análise Competitiva</h4>
            <p className="text-[#55615d] text-sm leading-relaxed">Mapeamos o seu mercado regional para garantir que o seu posicionamento é inconfundível.</p>
          </div>
          <div className="p-8 border border-brand-line bg-brand-mineral rounded-[2rem]">
            <div className="mb-6 flex justify-center">
              <Zap className="text-brand-cyan-dark" size={36} strokeWidth={1} />
            </div>
            <h4 className="text-xl font-bold text-brand-ink mb-4">Performance Extrema</h4>
            <p className="text-[#55615d] text-sm leading-relaxed">Código purificado para tempos de carregamento mínimos, retendo a atenção do utilizador.</p>
          </div>
          <div className="p-8 border border-brand-line bg-brand-mineral rounded-[2rem]">
            <div className="mb-6 flex justify-center">
              <Check className="text-brand-cyan-dark" size={36} strokeWidth={1} />
            </div>
            <h4 className="text-xl font-bold text-brand-ink mb-4">Escalabilidade</h4>
            <p className="text-[#55615d] text-sm leading-relaxed">Estrutura que permite adicionar páginas de serviços e campanhas conforme a empresa precisar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
