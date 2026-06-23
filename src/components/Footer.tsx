import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { marketingPages } from "../data/marketingPages";

export default function Footer() {
  return (
    <footer className="py-20 md:py-40 bg-brand-bg relative overflow-hidden border-t border-white/[0.03]">
      <div className="container mx-auto px-6">
        <div className="dna-grid mb-16 md:mb-24 gap-12 md:gap-8">
          <div className="col-span-4 lg:col-span-4">
            <Link to="/" className="text-2xl md:text-3xl font-black tracking-super-tight text-white inline-block mb-8 md:mb-12 uppercase">
              ORVALIA
            </Link>
            <p className="text-brand-secondary/60 max-w-sm text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] leading-relaxed mb-4 lg:mb-0">
               [ STUDIO DE DESIGN ESTRATÉGICO E ARQUITETURA DE SOFTWARES DE ALTA PERFORMANCE ]
            </p>
          </div>

          <div className="col-span-4 sm:col-span-2 lg:col-span-3">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-accent-light mb-10">Diretório</h4>
            <ul className="space-y-6">
              {[
                { name: "Projetos", href: "/#projetos" },
                { name: "Metodologia", href: "/#processo" },
                { name: "Serviços", href: "/#servicos" },
                { name: "Planos", href: "/#precos" },
                { name: "Blog", href: "/blog" },
                { name: "Agência Indaiatuba", href: "/agencia-indaiatuba", isLink: true },
                { name: "Falar no WhatsApp", href: "https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20o%20site%20da%20Orvalia%20e%20quero%20um%20diagnóstico%20da%20minha%20marca/site.%20Meu%20negócio%20é:", isExternal: true },
              ].map(item => (
                <li key={item.name}>
                  {item.isLink ? (
                    <Link to={item.href} className="text-xs font-black uppercase tracking-widest text-brand-secondary hover:text-white transition-colors flex items-center gap-2 group">
                      {item.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : item.isExternal ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest text-brand-accent-light hover:text-white transition-colors flex items-center gap-2 group">
                      {item.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <a href={item.href} className="text-xs font-black uppercase tracking-widest text-brand-secondary hover:text-white transition-colors flex items-center gap-2 group">
                      {item.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 sm:col-span-2 lg:col-span-3">
             <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-accent-light mb-8 md:mb-10">Soluções</h4>
             <ul className="space-y-6">
              {marketingPages.slice(0, 5).map(page => (
                <li key={page.slug}>
                  <Link to={`/solucoes/${page.slug}`} className="text-xs font-black uppercase tracking-widest text-brand-secondary hover:text-white transition-colors">
                    {page.title.split(' em ')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 sm:col-span-2 lg:col-span-2">
             <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-accent-light mb-8 md:mb-10">Governança</h4>
             <ul className="space-y-6">
              {[
                { name: "Segurança", href: "/privacidade" },
                { name: "Acordos", href: "/termos" },
                { name: "Arquitetura", href: "/cookies" }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="text-xs font-black uppercase tracking-widest text-brand-secondary hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

         <div className="pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
               <span className="font-mono text-[8px] text-brand-secondary/80 uppercase tracking-[0.3em]">© 2026 ORVALIA STUDIO — DESIGN & ESTRATÉGIA</span>
               <div className="hidden md:block w-[1px] h-4 bg-white/5" />
               {/* [4 — FOOTER COM NAP] LOCAL SEO */}
               <div className="flex flex-col gap-1 items-center md:items-start">
                 <span className="font-mono text-[8px] text-brand-secondary/80 uppercase tracking-widest leading-relaxed">
                   Indaiatuba, SP — Região Metropolitana de Campinas
                 </span>
                 <span className="font-mono text-[8px] text-brand-secondary/90 uppercase tracking-widest">
                   Agência de Branding em Indaiatuba | Atendemos toda a RMC: Campinas, Jundiaí, Itu e região
                 </span>
               </div>
            </div>
            {/* NAP em texto puro para spiders */}
            <div className="hidden">
              <span>Orvalia Studio</span>
              <span>Av. Presidente Kennedy, 1500, Indaiatuba - SP</span>
              <span>Telefone: +55 11 97895-9567</span>
              <span>E-mail: contato@orvalia.com.br</span>
            </div>
            <div className="flex gap-16">
               <div className="flex flex-col gap-2">
                  <span className="font-mono text-[7px] text-brand-accent-light">BASE</span>
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase">Indaiatuba</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="font-mono text-[7px] text-brand-accent-light">STATUS</span>
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-light animate-pulse" />
                    Operacional
                  </span>
               </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
