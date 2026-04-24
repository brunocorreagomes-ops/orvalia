import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Youtube } from "lucide-react";
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
    { name: "Projetos", href: "/#projetos", id: "01" },
    { name: "Metodologia", href: "/#processo", id: "02" },
    { name: "Serviços", href: "/#servicos", id: "03" },
    { name: "Planos", href: "/#precos", id: "04" },
    { name: "Blog", href: "/blog", id: "05", isLink: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || isMenuOpen ? "py-6 bg-brand-bg/90 backdrop-blur-xl border-b border-white/[0.03]" : "py-10 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section - Minimalist DNA */}
        <Link to="/" className="group flex items-center gap-4">
          <div className="relative overflow-hidden">
             <span className="text-xl font-black tracking-super-tight text-white block group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
               ORVALIA
             </span>
             <span className="absolute top-full left-0 text-xl font-black tracking-super-tight text-brand-accent-light block group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
               ORVALIA
             </span>
          </div>
          <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
          <span className="hidden md:block font-mono text-[9px] uppercase tracking-[0.3em] text-brand-secondary/40">Estúdio • Arq</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-16">
          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <motion.div 
                key={link.name}
                className="group relative"
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-brand-accent-light/40 group-hover:text-brand-accent-light transition-colors mb-1">
                    {link.id}
                  </span>
                  {link.isLink ? (
                    <Link 
                      to={link.href}
                      className={`text-xs font-black uppercase tracking-[0.2em] transition-colors ${pathname === link.href ? 'text-brand-accent-light' : 'text-brand-secondary hover:text-white'}`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a 
            href="https://wa.me/5511978959567"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-brand-bg rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-brand-accent-light"
          >
            Iniciar Projeto
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[88px] bg-brand-bg z-50 lg:hidden p-8"
          >
            <div className="flex flex-col gap-12 mt-12">
              {navLinks.map((link) => (
                <div key={link.name} className="group">
                   <span className="font-mono text-[10px] text-brand-accent-light block mb-2">{link.id}</span>
                   {link.isLink ? (
                    <Link 
                      to={link.href}
                      className="text-4xl font-black uppercase tracking-tight text-white hover:text-brand-accent-light transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-4xl font-black uppercase tracking-tight text-white hover:text-brand-accent-light transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="mt-auto flex flex-col gap-8">
                 <div className="h-[1px] w-full bg-white/5" />
                 <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                      <Instagram className="text-brand-secondary" size={20} />
                      <Youtube className="text-brand-secondary" size={20} />
                    </div>
                    <span className="font-mono text-[10px] text-brand-secondary/40">INDAIATUBA • BR</span>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
