import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Cases", href: "/#projetos", id: "01" },
    { name: "Indaiatuba", href: "/agencia-indaiatuba", id: "02", isLink: true },
    { name: "Sites", href: "/sites-estrategicos", id: "03", isLink: true },
    { name: "Serviços", href: "/#servicos", id: "04" },
    { name: "Planos", href: "/#planos-mensais", id: "05" },
    { name: "Blog", href: "/blog", id: "06", isLink: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isMenuOpen 
          ? "py-5 bg-brand-bg border-b border-white/[0.08]" 
          : isScrolled 
            ? "py-5 bg-brand-bg/95 backdrop-blur-2xl border-b border-white/[0.05]" 
            : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        {/* Logo Section - Minimalist DNA */}
        <Link to="/" className="group flex items-center gap-4 relative" onClick={() => setIsMenuOpen(false)}>
          <div className="relative overflow-hidden">
             <span className="text-xl md:text-2xl font-black tracking-ultra-tight text-white block group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
               ORVALIA
             </span>
             <span className="absolute top-full left-0 text-xl md:text-2xl font-black tracking-ultra-tight text-brand-accent-light block group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
               ORVALIA
             </span>
          </div>
          <div className="h-4 w-[1px] bg-white/20 hidden md:block" />
          <span className="hidden md:block font-mono text-[8px] uppercase tracking-[0.4em] text-brand-accent-light">DNA ESTRATÉGICO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div 
                key={link.name}
                className="group relative"
              >
                <div className="flex flex-col items-start">
                  <span className="font-mono text-[7px] text-brand-accent-light/30 group-hover:text-brand-accent-light/60 transition-colors mb-0.5 ml-0.5">
                    {link.id}
                  </span>
                  {link.isLink ? (
                    <Link 
                      to={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative pb-1 ${pathname === link.href ? 'text-brand-accent-light' : 'text-brand-secondary/80 hover:text-white'}`}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <motion.div 
                          layoutId="nav-active"
                          className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-accent-light"
                        />
                      )}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-secondary/80 hover:text-white transition-all relative pb-1 group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent-light transition-all duration-500 group-hover:w-full" />
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
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-brand-accent-light text-brand-bg rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_10px_30px_rgba(0,255,209,0.25)] flex items-center gap-2"
          >
            Começar Agora
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <a 
            href="https://wa.me/5511978959567"
            className="px-5 py-2.5 bg-brand-accent-light text-brand-bg rounded-full text-[9px] font-black uppercase tracking-widest"
          >
            WhatsApp
          </a>
          <button 
            className="w-10 h-10 flex items-center justify-center text-white relative z-[120] bg-white/5 rounded-full border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0A0A0B] z-40 lg:hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-brand-bg z-0" />
            
            {/* Design Elements for the Menu Background */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent-light/5 blur-[100px] rounded-full pointer-events-none z-1" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-accent-light/5 blur-[80px] rounded-full pointer-events-none z-1" />
            
            <div className="flex-1 overflow-y-auto px-8 pt-28 pb-12 relative z-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div 
                    key={link.name} 
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: idx * 0.05,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                     <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-[8px] text-brand-accent-light/40 uppercase tracking-widest leading-none">{link.id}</span>
                        <div className="h-[1px] w-3 bg-brand-accent-light/20" />
                     </div>
                     {link.isLink ? (
                      <Link 
                        to={link.href}
                        className={`text-4xl xs:text-5xl font-black uppercase tracking-ultra-tight transition-all block ${pathname === link.href ? 'text-brand-accent-light' : 'text-white hover:text-brand-accent-light'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-4xl xs:text-5xl font-black uppercase tracking-ultra-tight text-white hover:text-brand-accent-light transition-all block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <a 
                    href="https://wa.me/5511978959567"
                    className="w-full py-6 bg-brand-accent-light text-brand-bg rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-lg shadow-brand-accent-light/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Diagnóstico Gratuito
                  </a>
                </motion.div>
              </div>

              <div className="mt-12 flex flex-col gap-8">
                 <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-[1px] bg-white/5" 
                 />
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-[9px] text-brand-secondary/40 uppercase tracking-[0.3em]">Redes Sociais</span>
                      <div className="flex gap-3">
                        {[
                          { icon: Instagram, href: "https://instagram.com/orvaliastudio" },
                          { icon: Youtube, href: "#" }
                        ].map((social, i) => (
                          <motion.a 
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            href={social.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-brand-accent-light hover:border-brand-accent-light group transition-all"
                          >
                            <social.icon className="text-brand-secondary group-hover:text-brand-bg" size={18} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                       <span className="font-mono text-[9px] text-brand-accent-light block mb-2 uppercase tracking-widest">Base: Indaiatuba / SP</span>
                       <span className="font-mono text-[8px] text-brand-secondary/30 block tracking-[0.2em]">© 2026 ORVALIA STUDIO DNA</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
