import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 md:py-40 bg-brand-bg relative overflow-hidden border-t border-white/[0.03]">
      <div className="container mx-auto px-6">
        <div className="dna-grid mb-24">
          <div className="col-span-4 lg:col-span-6">
            <Link to="/" className="text-3xl font-black tracking-super-tight text-white inline-block mb-12 uppercase">
              ORVALIA
            </Link>
            <p className="text-brand-secondary/60 max-w-sm text-xs font-mono uppercase tracking-[0.2em] leading-relaxed mb-12 lg:mb-0">
               [ STUDIO DE DESIGN ESTRATÉGICO E ARQUITETURA DE SOFTWARES DE ALTA PERFORMANCE ]
            </p>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-accent-light mb-10">Diretório</h4>
            <ul className="space-y-6">
              {[
                { name: "Projetos", href: "/#projetos" },
                { name: "Metodologia", href: "/#processo" },
                { name: "Serviços", href: "/#servicos" },
                { name: "Planos", href: "/#precos" },
                { name: "Blog", href: "/blog" },
                { name: "Filial Indaiatuba", href: "/agencia-indaiatuba", isLink: true },
                { name: "Sites Estratégicos", href: "/sites-estrategicos", isLink: true }
              ].map(item => (
                <li key={item.name}>
                  {item.isLink ? (
                    <Link to={item.href} className="text-xs font-black uppercase tracking-widest text-brand-secondary hover:text-white transition-colors flex items-center gap-2 group">
                      {item.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
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

          <div className="col-span-2 lg:col-span-3">
             <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] text-brand-accent-light mb-10">Governança</h4>
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
            <div className="flex items-center gap-6">
               <span className="font-mono text-[8px] text-brand-secondary/40 uppercase tracking-[0.3em]">© 2026 ORVALIA STUDIO ARCHITECTURE</span>
               <div className="w-[1px] h-4 bg-white/5" />
               <span className="font-mono text-[8px] text-brand-secondary/40">INDAIATUBA • BR</span>
            </div>
            <div className="flex gap-16">
               <div className="flex flex-col gap-2">
                  <span className="font-mono text-[7px] text-brand-accent-light">FUSO HORÁRIO</span>
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase">GMT-3</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="font-mono text-[7px] text-brand-accent-light">STATUS</span>
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent-light" />
                    Operacional
                  </span>
               </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
