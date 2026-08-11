import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "O Gap", href: "/#gap-percepcao", id: "01" },
    { name: "Cases", href: "/#cases", id: "02" },
    { name: "Método", href: "/#metodo", id: "03" },
    { name: "Atuação", href: "/#formas-trabalhar", id: "04" },
    { name: "Liderança", href: "/#autoridade", id: "05" },
    { name: "Indaiatuba", href: "/branding", id: "06", isLink: true },
    { name: "Blog", href: "/blog", id: "07", isLink: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isMenuOpen 
          ? "py-4 bg-brand-bg border-b border-white/10" 
          : isScrolled 
            ? "py-4 bg-brand-bg/95 backdrop-blur-md border-b border-white/10 shadow-xl" 
            : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-3 relative" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase block leading-none">
              ORVALIA
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-brand-red font-bold">
              ESTRUTURA DE PERCEPÇÃO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-start">
                {link.isLink ? (
                  <Link 
                    to={link.href}
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${pathname === link.href ? 'text-brand-red' : 'text-brand-secondary hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-widest text-brand-secondary hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <a 
            href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20mapear%20o%20gap%20de%20percepção%20da%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-brand-red hover:bg-red-600 text-white font-black text-[10px] uppercase tracking-[0.2em] transition-colors"
          >
            Mapear meu gap
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a 
            href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20mapear%20o%20gap%20de%20percepção%20da%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-brand-red text-white text-[9px] font-black uppercase tracking-widest"
          >
            Mapear gap
          </a>
          <button 
            className="w-9 h-9 flex items-center justify-center text-white bg-white/5 border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-brand-bg z-40 lg:hidden flex flex-col pt-24 px-8 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/10 pb-4">
                  {link.isLink ? (
                    <Link 
                      to={link.href}
                      className="text-2xl font-black uppercase tracking-tight text-white hover:text-brand-red"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-2xl font-black uppercase tracking-tight text-white hover:text-brand-red"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <a 
                  href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Quero%20mapear%20o%20gap%20de%20percepção%20da%20minha%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-brand-red text-white font-black text-xs uppercase tracking-widest flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mapear meu gap de percepção
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex justify-between items-center text-brand-secondary font-mono text-[10px] uppercase">
              <span>Indaiatuba / SP</span>
              <span>© 2026 ORVALIA STUDIO</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
