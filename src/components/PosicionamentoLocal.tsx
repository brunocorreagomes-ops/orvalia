import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function PosicionamentoLocal() {
  const cidades = [
    { nome: "Indaiatuba", papel: "Sede & Base Estratégica" },
    { nome: "Campinas", papel: "Polo Corporativo & RMC" },
    { nome: "Itu & Salto", papel: "Expansão Industrial & Serviços" },
    { nome: "Sorocaba & Jundiaí", papel: "Atendimento Regional" },
    { nome: "São Paulo & Brasil", papel: "Atuação Nacional" }
  ];

  return (
    <section id="presenca-regional" className="py-24 md:py-36 bg-brand-bg relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-red" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">
                  PRESENÇA REGIONAL & ALCANCE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black text-white leading-[1.05] tracking-tighter uppercase">
                INDAIATUBA É NOSSA BASE. <br />
                <span className="text-brand-secondary">NÃO NOSSO LIMITE.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-brand-secondary font-sans leading-relaxed">
              <p className="text-white font-medium text-lg md:text-xl">
                Conhecer o mercado regional importa. Mas design local não precisa ter aparência local.
              </p>

              <p>
                Criamos experiências digitais capazes de combinar proximidade comercial, compreensão do contexto e um nível de execução compatível com marcas que querem crescer além da própria vizinhança.
              </p>

              <p>
                Empresas, clínicas, escritórios e profissionais de Indaiatuba, Campinas, Itu, Salto, Sorocaba e Jundiaí encontram na Orvalia a parceria estratégica para projetar autoridade digital sem depender de agências genéricas ou soluções padronizadas.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Tenho%20uma%20empresa%20na%20região%20e%20gostaria%20de%20mapear%20nosso%20gap%20de%20percepção."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 hover:border-brand-red hover:text-brand-red text-white font-black text-xs uppercase tracking-widest transition-colors"
              >
                <span>Mapear empresa da região</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Regional Reach Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-neutral-900 border border-white/10 font-mono text-xs uppercase tracking-widest text-white flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-red" />
                ABRANGÊNCIA GEOGRÁFICA
              </span>
              <span className="text-brand-red font-bold">RMC + BRASIL</span>
            </div>

            <div className="space-y-2">
              {cidades.map((c, idx) => (
                <div 
                  key={c.nome}
                  className="p-4 bg-white/[0.02] border border-white/5 flex items-center justify-between hover:border-white/20 transition-colors"
                >
                  <span className="font-sans font-black text-white text-sm md:text-base uppercase tracking-tight">
                    {c.nome}
                  </span>
                  <span className="font-mono text-[10px] text-brand-secondary uppercase tracking-widest">
                    {c.papel}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-mono text-[10px] text-brand-secondary uppercase tracking-widest pt-2 text-center md:text-left">
              Otimização de SEO técnico e visibilidade para buscas locais e geograficamente qualificadas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
