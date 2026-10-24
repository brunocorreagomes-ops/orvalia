import { motion } from "framer-motion";
import { ChevronLeft, Check, Clock, RotateCcw, Globe, BarChart3, Infinity } from "lucide-react";
import { Link } from "react-router-dom";

export default function Evolucao() {
  return (
    <section className="min-h-screen bg-brand-ink text-brand-mineral pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <Link to="/" className="inline-flex items-center gap-2 text-[#8b9f99] hover:text-white mb-10 md:mb-12 transition-colors border-b border-transparent hover:border-white pb-1">
        <ChevronLeft size={16} />
        <span className="font-mono text-xs uppercase tracking-widest font-bold">Voltar para a página inicial</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <span className="text-brand-cyan font-mono font-bold text-xs uppercase tracking-[0.3em] block mb-6">
            Elite Digital
          </span>
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-sans font-medium tracking-tight mb-8 leading-[1.05] uppercase">
            Plano <span className="italic font-serif font-light text-[#94a7a3] normal-case">Evolução</span>
          </h1>
          <p className="text-[#a9b8b3] text-lg leading-relaxed mb-10 md:mb-12 max-w-xl">
            Acompanhamento contínuo para revisar o conteúdo, atualizar o site e organizar as próximas melhorias.
          </p>

          <div className="text-3xl md:text-4xl font-medium text-white mb-10 md:mb-12 tracking-tight">
            Sob <span className="text-brand-cyan font-bold">Consulta</span>
          </div>

          <Link to="/contato/"
            className="inline-flex items-center justify-center px-10 md:px-12 py-5 bg-brand-cyan text-brand-ink rounded-full font-bold text-xs hover:-translate-y-1 transition-transform uppercase tracking-widest"
          >
            Solicitar proposta
          </Link>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="p-10 md:p-12 border border-[#23312e] bg-transparent rounded-[2rem]">
            <h3 className="text-xl md:text-2xl font-medium text-white mb-8 flex items-center gap-4 tracking-tight">
              <Globe size={24} className="text-brand-cyan" strokeWidth={1.5} />
              O acompanhamento
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {[
                "Consultoria Mensal de Estratégia",
                "SEO & GEO Elite (Otimização IA)",
                "Gestão de Tráfego Pago",
                "Desenvolvimento Sob Demanda",
                "Dashboards de BI (Métricas)",
                "Otimização de Conversão (CRO)",
                "Gestão de Branding Contínua",
                "Suporte 24/7 de Alta Prioridade"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#b1bdb8] leading-relaxed">
                  <Check size={16} className="text-brand-cyan mt-1 flex-shrink-0" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 border border-[#23312e] bg-transparent rounded-[2rem]">
              <Clock size={28} className="text-brand-cyan mb-5" strokeWidth={1.5} />
              <h4 className="text-white font-bold mb-2">Prazos e Ciclos</h4>
              <p className="text-sm text-[#8b9f99] leading-relaxed">Cronograma personalizado de acordo com o roadmap trimestral de crescimento.</p>
            </div>
            <div className="p-8 border border-[#23312e] bg-transparent rounded-[2rem]">
              <Infinity size={28} className="text-brand-cyan mb-5" strokeWidth={1.5} />
              <h4 className="text-white font-bold mb-2">Ajustes Contínuos</h4>
              <p className="text-sm text-[#8b9f99] leading-relaxed">Testes A/B e suporte evolutivo constante integrados no contrato (fee mensal).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-24 border-t border-[#23312e]">
        <h2 className="text-3xl font-medium text-white mb-16 text-center tracking-tight">Gestão Orientada a Dados</h2>
        <div className="p-12 md:p-16 border border-[#23312e] rounded-[2rem] flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h4 className="text-2xl font-medium text-white mb-6">Como funciona a parceria?</h4>
            <p className="text-[#a9b8b3] leading-relaxed text-lg">
              Diferente de projetos isolados, no plano <span className="text-brand-cyan font-bold italic">Evolução</span>, assumimos a posição de braço direito digital da sua empresa. Atuamos desde a análise de dados comportamentais no Google Analytics até ao redesenho de páginas críticas para maximizar o seu faturamento.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full border border-[#23312e] flex items-center justify-center relative bg-[#0a1113]">
              <BarChart3 size={48} className="text-brand-cyan" strokeWidth={1} />
              {/* Subtle Point of Dew effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-cyan shadow-[0_0_40px_rgba(102,231,225,0.4)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
