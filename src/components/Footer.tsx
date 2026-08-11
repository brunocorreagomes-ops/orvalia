import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 md:py-28 bg-brand-bg relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase block leading-none">
                ORVALIA
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-red font-bold">
                ESTRUTURA DE PERCEPÇÃO
              </span>
            </Link>

            <p className="text-sm text-brand-secondary leading-relaxed max-w-sm font-sans">
              O estúdio que fecha a distância entre o valor real de uma empresa e o valor que ela consegue transmitir no digital.
            </p>

            <div className="pt-2 font-mono text-[10px] uppercase tracking-widest text-brand-secondary">
              Indaiatuba • Campinas • Região Metropolitana
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-sans text-xs uppercase tracking-wider text-white font-semibold block">
              DIRETÓRIO
            </span>
            <ul className="space-y-2.5 font-sans text-xs">
              <li><a href="/#gap-percepcao" className="text-brand-secondary hover:text-white transition-colors">O Gap de Percepção</a></li>
              <li><a href="/#cases" className="text-brand-secondary hover:text-white transition-colors">Cases de Transformação</a></li>
              <li><a href="/#metodo" className="text-brand-secondary hover:text-white transition-colors">Método em 4 Camadas</a></li>
              <li><a href="/#formas-trabalhar" className="text-brand-secondary hover:text-white transition-colors">Momentos de Atuação</a></li>
              <li><a href="/#autoridade" className="text-brand-secondary hover:text-white transition-colors">Direção Estratégica</a></li>
              <li><Link to="/branding" className="text-brand-secondary hover:text-white transition-colors">Presença Indaiatuba</Link></li>
              <li><Link to="/blog" className="text-brand-secondary hover:text-white transition-colors">Artigos & Diagnósticos</Link></li>
            </ul>
          </div>

          {/* Col 3: Direct Action */}
          <div className="md:col-span-4 space-y-6 p-6 bg-white/[0.02] border border-white/5">
            <span className="font-sans text-xs uppercase tracking-wider text-brand-red font-semibold block">
              DIAGNÓSTICO DIRETO
            </span>

            <p className="text-xs text-brand-secondary leading-relaxed font-sans">
              Conversa direta com Bruno Correa Gomes sobre marca, mensagem, site e próximo movimento do seu negócio.
            </p>

            <a 
              href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20meu%20diagnóstico%20de%20percepção."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-brand-red hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-colors w-full justify-center"
            >
              <span>Quero meu diagnóstico</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        {/* Bottom Legal & SEO Ribbon */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-brand-secondary text-xs font-sans tracking-wide">
          <div>
            © 2026 ORVALIA STUDIO — Todos os direitos reservados.
          </div>

          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
