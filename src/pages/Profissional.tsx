import { motion } from "framer-motion";
import { ChevronLeft, Check, Clock, RotateCcw, Target, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profissional() {
  return (
    <section className="min-h-screen bg-brand-bg pt-40 pb-20 px-8 md:px-24">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent-light mb-12 transition-colors">
        <ChevronLeft size={20} />
        Voltar para a página inicial
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-brand-accent-light font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Mais Vendido</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Plano <span className="text-gradient">Profissional</span>
          </h1>
          <p className="text-brand-secondary text-lg leading-relaxed mb-12 max-w-xl">
            A solução completa para empresas que buscam liderança no mercado. Branding estratégico e tecnologia de ponta para converter visitantes em clientes fiéis.
          </p>

          <div className="text-4xl font-black text-white mb-12">
            a partir de <span className="text-brand-accent-light">R$ 3.997</span>
          </div>

          <a 
            href="https://wa.me/5511978959567?text=Olá,%20gostaria%20de%20contratar%20o%20Plano%20Profissional"
            className="inline-flex items-center justify-center px-12 py-5 bg-brand-whatsapp text-white rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-2xl"
          >
            Contratar Agora
          </a>
        </div>

        <div className="space-y-12">
          <div className="glass p-12 rounded-[2.5rem] border-brand-accent-light/20 glow-subtle">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Shield size={24} className="text-brand-accent-light" />
              O que contempla
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Website Multi-páginas",
                "Branding Estratégico Completo",
                "SEO Avançado (On-page)",
                "GEO (Otimização para IAs)",
                "Blog ou Seção de Notícias",
                "Painel Administrativo",
                "Kit Social Media (Templates)",
                "Escaneamento de Segurança"
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
              <p className="text-sm text-brand-secondary">De 15 a 21 dias úteis devido à complexidade estratégica.</p>
            </div>
            <div className="glass p-8 rounded-3xl border-white/5">
              <RotateCcw size={32} className="text-brand-accent-light mb-4" />
              <h4 className="text-white font-bold mb-2">Ajustes Inclusos</h4>
              <p className="text-sm text-brand-secondary">Até 4 rodadas de revisões para um polimento de alta fidelidade.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight">Estratégia Orvalia Studio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8">
            <div className="w-16 h-16 bg-brand-accent-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-brand-accent-light" size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Análise Competitiva</h4>
            <p className="text-brand-secondary text-sm">Escaneamos seus concorrentes para garantir que sua solução seja superior.</p>
          </div>
          <div className="p-8">
            <div className="w-16 h-16 bg-brand-accent-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="text-brand-accent-light" size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Performance Extrema</h4>
            <p className="text-brand-secondary text-sm">Código otimizado para segundos de carregamento, reduzindo rejeição.</p>
          </div>
          <div className="p-8">
            <div className="w-16 h-16 bg-brand-accent-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-brand-accent-light" size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Escalabilidade</h4>
            <p className="text-brand-secondary text-sm">Estrutura preparada para receber anúncios e escalar com seu negócio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
