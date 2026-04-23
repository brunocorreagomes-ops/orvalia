import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, BookText, Instagram, Youtube } from "lucide-react";

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

  const navLinks = [
    { name: "Projetos", href: "/#projetos", isLink: false },
    { name: "Processo", href: "/#processo", isLink: false },
    { name: "Serviços", href: "/#servicos", isLink: false },
    { name: "Preços", href: "/#precos", isLink: false },
    { name: "Blog", href: "/blog", isLink: true },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/orvaliastudio", icon: <Instagram size={20} /> },
    { name: "YouTube", href: "https://www.youtube.com/@orvaliastudio", icon: <Youtube size={20} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 font-sans ${
        isScrolled || isMenuOpen ? "py-4 bg-brand-bg/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-[-0.08em] text-white flex items-center gap-3 font-sans group">
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            className="relative"
          >
            <img 
              src="https://i.ibb.co/ynz3p9ZR/orvalia-logo-novo-fundo-transparentes.png" 
              alt="Orvalia Studio Logo" 
              className="h-9 w-auto brightness-200 contrast-125"
            />
          </motion.div>
          <span className="group-hover:text-brand-accent-light transition-colors">ORVALIA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 pr-8 border-r border-white/10 uppercase tracking-[0.2em] text-[10px] font-black">
            {navLinks.map((link) => (
              link.isLink ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`transition-all flex items-center gap-2 group font-sans hover:text-brand-accent-light ${pathname === link.href ? 'text-brand-accent-light' : 'text-brand-secondary'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BookText size={14} />
                  </motion.div>
                  {link.name}
                </Link>
              ) : (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-all font-sans text-brand-secondary hover:text-brand-accent-light"
                >
                  {link.name}
                </motion.a>
              )
            ))}
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <motion.a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#58C2FF" }}
                whileTap={{ scale: 0.8 }}
                className="text-brand-secondary transition-colors"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
            <motion.a 
              href="https://wa.me/5511978959567?text=Olá,%20vim%20através%20do%20site%20Orvalia%20e%20gostaria%20de%20maiores%20informações"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95, filter: "brightness(0.9)" }}
              className="ml-2 px-6 py-2.5 bg-brand-whatsapp text-brand-bg rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all font-sans shadow-lg shadow-brand-whatsapp/20"
            >
              Falar no WhatsApp
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            role="navigation"
            aria-label="Menu de navegação mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-8 p-8">
              {navLinks.map((link) => (
                link.isLink ? (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className={`text-2xl font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-4 font-sans ${pathname === link.href ? 'text-brand-accent-light' : 'text-brand-text'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BookText size={24} className={pathname === link.href ? 'text-brand-accent-light' : 'text-brand-secondary'} />
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-2xl font-black uppercase tracking-[0.2em] text-brand-text hover:text-brand-accent-light transition-colors font-sans"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}

              <div className="flex items-center gap-6 py-8 border-t border-white/5">
                {socialLinks.map((social) => (
                  <motion.a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-3 text-brand-secondary font-sans text-xs font-black uppercase tracking-widest"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>

              <motion.a 
                href="https://wa.me/5511978959567?text=Olá,%20vim%20através%20do%20site%20Orvalia%20e%20gostaria%20de%20maiores%20informações"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="w-full py-5 bg-brand-whatsapp text-brand-bg rounded-2xl text-center font-black uppercase tracking-widest text-sm font-sans shadow-xl shadow-brand-whatsapp/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Falar no WhatsApp
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  );
}
