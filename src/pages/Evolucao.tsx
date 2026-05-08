import { motion } from "framer-motion";
import { ChevronLeft, Check, Clock, RotateCcw, Target, Globe, BarChart3, Infinity } from "lucide-react";
import { Link } from "react-router-dom";

export default function Evolucao() {
  return (
    <section className="min-h-screen bg-brand-bg pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-10 md:mb-12 transition-colors">
        <ChevronLeft size={20} />
        <span className="font-mono text-[10px] uppercase tracking-widest">Voltar para a página inicial</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <span className="text-brand-accent-light font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Elite Digital</span>
          <h1 className="text-4xl xs:text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight uppercase">
            Plano <span className="text-gradient">Evolução</span>
          </h1>
          <p className="text-brand-secondary text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl italic">
            Uma parceria estratégica contínua. Não é apenas um projeto, é a gestão completa do seu ecossistema digital para quem não aceita nada menos que a excelência.
          </p>

          <div className="text-3xl md:text-4xl font-black text-white mb-10 md:mb-12 uppercase tracking-tighter">
            Sob <span className="text-brand-accent-light">Consulta</span>
          </div>

          <a 
            href="https://wa.me/5511978959567?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta%20personalizada%20para%20o%20Plano%20Evolução%20pela%20Orvalia%20Studio."
            className="inline-flex items-center justify-center px-10 md:px-12 py-5 bg-brand-whatsapp text-white rounded-full font-black text-sm md:text-lg hover:brightness-110 transition-all shadow-2xl uppercase tracking-widest"
          >
            Solicitar Proposta
          </a>
        </div>

        <div className="space-y-10 md:space-y-12">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/5">
            <h3 className="text-xl md:text-2xl font-black text-white mb-6 md:mb-8 flex items-center gap-3 uppercase tracking-tight">
              <Globe size={24} className="text-brand-accent-light" />
              O Ecossistema
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
              <h4 className="text-white font-bold mb-2">Prazos</h4>
              <p className="text-sm text-brand-secondary">Cronograma personalizado de acordo com o roadmap de crescimento.</p>
            </div>
            <div className="glass p-8 rounded-3xl border-white/5">
              <Infinity size={32} className="text-brand-accent-light mb-4" />
              <h4 className="text-white font-bold mb-2">Ajustes Cobertos</h4>
              <p className="text-sm text-brand-secondary">Ajustes ilimitados e suporte evolutivo constante incluídos no fee mensal.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">Gestão Orientada a Dados</h2>
        <div className="glass p-12 rounded-[3rem] border-white/5 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-white mb-4">Como funciona a parceria?</h4>
            <p className="text-brand-secondary leading-relaxed">
              Diferente de projetos isolados, no plano <span className="text-white font-bold">Evolução</span>, nós nos tornamos o seu braço direito digital. Atuamos desde a análise de dados brutos até a execução de campanhas e atualizações de interface semanais para maximizar o seu faturamento.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full border-4 border-brand-accent-light/20 flex items-center justify-center relative">
              <BarChart3 size={64} className="text-brand-accent-light" />
              <div className="absolute inset-0 bg-brand-accent-light/5 blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
