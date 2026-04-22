import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-20 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <Link to="/" className="text-xl font-bold tracking-tighter text-brand-text flex items-center gap-3 mb-8">
            <img 
              src="https://i.ibb.co/ynz3p9ZR/orvalia-logo-novo-fundo-transparentes.png" 
              alt="Orvalia Studio Logo" 
              className="h-8 w-auto"
            />
            Orvalia Studio
          </Link>
          <p className="text-brand-secondary max-w-sm text-sm leading-relaxed">
            Impulsionando o crescimento de pequenas e médias empresas através do design estratégico e tecnologia de ponta.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Menu</h4>
          <ul className="space-y-4 text-brand-secondary text-sm">
            <li><a href="/#projetos" className="hover:text-brand-accent-light transition-colors">Portfólio</a></li>
            <li><a href="/#processo" className="hover:text-brand-accent-light transition-colors">Processo</a></li>
            <li><a href="/#servicos" className="hover:text-brand-accent-light transition-colors">Serviços</a></li>
            <li><a href="/#precos" className="hover:text-brand-accent-light transition-colors">Planos</a></li>
            <li><Link to="/blog" className="hover:text-brand-accent-light transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4 text-brand-secondary text-sm">
            <li><Link to="/termos" className="hover:text-brand-accent-light transition-colors">Termos</Link></li>
            <li><Link to="/privacidade" className="hover:text-brand-accent-light transition-colors">Privacidade</Link></li>
            <li><Link to="/cookies" className="hover:text-brand-accent-light transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-brand-secondary text-xs">© 2026 Orvalia Studio. Todos os direitos reservados.</p>
        <div className="flex gap-6 text-brand-secondary text-xs font-mono uppercase tracking-widest">
            Design for Future
        </div>
      </div>
    </footer>
  );
}
