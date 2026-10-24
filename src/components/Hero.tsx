import { Link } from "react-router-dom";
import DewPointScene from "./DewPointScene";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section data-contact-hero className="hero-opening relative bg-brand-mineral text-brand-ink isolate overflow-hidden">
      <div className="hero-shell px-6 md:px-10 lg:px-16">
        
        <div className="hero-layout w-full max-w-[1550px] mx-auto">
          
          {/* Coluna Esquerda: Narrativa Editorial */}
          <div className="hero-copy relative z-10">
            <div className="flex items-center gap-3 text-xs tracking-[0.19em] font-bold text-brand-muted mb-8 md:mb-16">
              <span className="block w-2.5 h-2.5 rounded-full bg-[#008a86] border-2 border-[#4fcfc9]"></span>
              ORVALIA / MARCA, SITE E ESTRATÉGIA
            </div>
            
            <h1 className="text-sm md:text-base font-semibold leading-relaxed tracking-tight max-w-[720px] text-brand-muted mb-5">
              Identidade visual e criação de sites em Indaiatuba e Campinas
            </h1>
            <h2 className="text-[clamp(2.25rem,10vw,3.75rem)] lg:text-[5.5vw] font-medium leading-[0.96] tracking-tight max-w-[880px] text-brand-ink m-0">
              Seu negócio vale <br className="hidden md:block"/>
              <span className="text-[#55605d]">mais do que parece.</span>
            </h2>
            
            <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-[610px] mt-8">
              Quem recebe uma indicação também pesquisa antes de entrar em contato. Organizamos sua marca, seu site e seus serviços para que essa pessoa entenda seu trabalho e saiba como falar com você.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 mt-10">
              <Link
                to="/contato/"
                className="inline-flex items-center justify-between gap-3 px-5 sm:px-6 py-4 bg-brand-ink text-brand-warm border border-brand-ink text-sm font-semibold w-full sm:w-auto min-w-0 hover:bg-[#2c4141] hover:-translate-y-0.5 transition-all"
              >
                Conversar sobre meu projeto <ArrowUpRight size={16} className="text-brand-cyan" />
              </Link>
              <a 
                href="#cases" 
                className="inline-flex items-center gap-3 text-brand-ink text-sm font-semibold border-b border-[#7d8683] pb-1 hover:border-brand-ink transition-all"
              >
                Conhecer os projetos ↘
              </a>
            </div>

            <p className="hero-contact-note">Você preenche um formulário curto. Bruno analisa e responde pelo e-mail informado. Sem compromisso.</p>

            <div className="flex flex-wrap justify-between items-center gap-4 max-w-[640px] border-t border-[#bec4bf] pt-4 mt-16 md:mt-24 text-xs text-brand-muted tracking-widest uppercase">
              <span>Indaiatuba · Campinas · Brasil</span>
              <span>Tornar seu valor visível.</span>
            </div>
          </div>
          <DewPointScene />
        </div>
      </div>
    </section>
  );
}
