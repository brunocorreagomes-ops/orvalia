import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrvaliaLogo from "./OrvaliaLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-mineral/90 backdrop-blur-md border-b border-brand-line" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-[90px] flex items-center justify-between">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          {/* Corrigido: O fundo do topo é Mineral, logo o tema do logótipo deve ser sempre 'light' (texto escuro) */}
          <OrvaliaLogo className="w-40 md:w-44" theme="light" />
        </Link>

        {/* Desktop Navigation */}
        {/* Corrigido: O texto da navegação e links deve ser sempre escuro/brand-muted */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#gap-percepcao" className="text-xs font-semibold text-brand-muted hover:text-brand-ink transition-colors">O Gap</a>
          <a href="/#cases" className="text-xs font-semibold text-brand-muted hover:text-brand-ink transition-colors">Trabalhos</a>
          <a href="/#metodo" className="text-xs font-semibold text-brand-muted hover:text-brand-ink transition-colors">Método</a>
          <a href="/#autoridade" className="text-xs font-semibold text-brand-muted hover:text-brand-ink transition-colors">Liderança</a>
          <Link to="/blog" className="text-xs font-semibold text-brand-muted hover:text-brand-ink transition-colors">Inteligência</Link>
          
          <a 
            href="https://wa.me/5511978959567" 
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 pb-1 border-b border-brand-ink text-brand-ink text-xs font-bold flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            Mapear meu gap <span>↗</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-11 h-11 border border-brand-line text-brand-ink flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 right-0 h-[calc(100dvh-90px)] bg-brand-mineral border-t border-brand-line p-8 flex flex-col gap-6 overflow-y-auto">
          <a href="/#gap-percepcao" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-brand-ink border-b border-brand-line pb-4">O Gap</a>
          <a href="/#cases" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-brand-ink border-b border-brand-line pb-4">Trabalhos</a>
          <a href="/#metodo" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-brand-ink border-b border-brand-line pb-4">Método</a>
          <a href="/#autoridade" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-brand-ink border-b border-brand-line pb-4">Liderança</a>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-brand-ink border-b border-brand-line pb-4">Inteligência</Link>
          <a href="https://wa.me/5511978959567" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-brand-cyan-dark mt-4">Mapear meu gap ↗</a>
        </div>
      )}
    </header>
  );
}
