import { Link } from "react-router-dom";
import { analyticsConfigured } from "../lib/analytics";
import OrvaliaLogo from "./OrvaliaLogo";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-mineral py-16 border-t border-[#23312e]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div>
            <Link to="/">
              <OrvaliaLogo theme="dark" className="w-32 md:w-44 mb-6" />
            </Link>
            <p className="text-[#a9b8b3] text-sm max-w-sm leading-relaxed">
              Identidade visual, sites e conteúdo para apresentar sua empresa e facilitar o contato.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 md:gap-20">
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan mb-5">Estúdio</h4>
              <ul className="space-y-4 text-sm text-[#8b9f99]">
                <li><Link to="/portfolio/" className="hover:text-white transition-colors">Trabalhos</Link></li>
                <li><Link to="/sobre/" className="hover:text-white transition-colors">Liderança Estratégica</Link></li>
                <li><Link to="/branding/" className="hover:text-white transition-colors">Branding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan mb-5">Inteligência</h4>
              <ul className="space-y-4 text-sm text-[#8b9f99]">
                <li><Link to="/blog/" className="hover:text-white transition-colors">Perspectivas (Blog)</Link></li>
                <li><Link to="/sites/" className="hover:text-white transition-colors">Sites Estratégicos</Link></li>
                <li><Link to="/seo-geo/" className="hover:text-white transition-colors">GEO & IA</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-[#23312e] text-xs text-[#9fb0ab] font-mono font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} ORVALIA STUDIO</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacidade/" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos/" className="hover:text-white transition-colors">Termos</Link>
            {analyticsConfigured && <button type="button" onClick={() => window.dispatchEvent(new Event("orvalia:privacy"))} className="hover:text-white transition-colors">Preferências de privacidade</button>}
            <Link to="/cookies/" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
