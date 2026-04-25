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

  const navLinks = [
    { name: "Projetos", href: "/#projetos", id: "01" },
    { name: "Metodologia", href: "/#processo", id: "02" },
    { name: "Serviços", href: "/#servicos", id: "03" },
    { name: "Planos", href: "/#precos", id: "04" },
    { name: "Blog", href: "/blog", id: "05", isLink: true },
    { name: "Indaiatuba", href: "/agencia-indaiatuba", id: "06", isLink: true },
    { name: "Performance", href: "/sites-estrategicos", id: "07", isLink: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || isMenuOpen ? "py-6 bg-brand-bg/90 backdrop-blur-xl border-b border-white/[0.03]" : "py-10 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        {/* Logo Section - Minimalist DNA */}
        <Link to="/" className="group flex items-center gap-4 relative">
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
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.div 
                key={link.name}
                className="group relative"
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col items-center">
                  <span className="font-mono text-[7px] text-brand-accent-light/40 group-hover:text-brand-accent-light transition-colors mb-1">
                    {link.id}
                  </span>
                  {link.isLink ? (
                    <Link 
                      to={link.href}
                      className={`text-xs font-black uppercase tracking-[0.2em] transition-all relative ${pathname === link.href ? 'text-brand-accent-light' : 'text-brand-secondary hover:text-white'}`}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <motion.div 
                          layoutId="nav-active"
                          className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand-accent-light rounded-full"
                        />
                      )}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary hover:text-white transition-all relative"
                    >
                      {link.name}
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-accent-light rounded-full group-hover:w-full transition-all duration-300" />
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
            className="px-8 py-3 bg-white text-brand-bg rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-brand-accent-light hover:shadow-[0_0_20px_rgba(0,255,209,0.3)]"
          >
            Iniciar Projeto
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 flex items-center justify-center text-white relative z-[120]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 bg-[#0A0A0B]/98 backdrop-blur-3xl z-40 lg:hidden flex flex-col"
          >
            {/* Noise Overlay */}
            <div className="absolute inset-0 z-[-1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="flex-1 overflow-y-auto px-8 pt-32 pb-12">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div 
                    key={link.name} 
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.1 + idx * 0.05,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                     <div className="flex items-center gap-4 mb-2">
                        <span className="font-mono text-[9px] text-brand-accent-light/40 uppercase tracking-widest">{link.id}</span>
                        <div className="h-[1px] w-4 bg-brand-accent-light/20" />
                     </div>
                     {link.isLink ? (
                      <Link 
                        to={link.href}
                        className={`text-5xl font-black uppercase tracking-ultra-tight transition-all block ${pathname === link.href ? 'text-brand-accent-light' : 'text-white hover:text-brand-accent-light'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-5xl font-black uppercase tracking-ultra-tight text-white hover:text-brand-accent-light transition-all block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 flex flex-col gap-10">
                 <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-[1px] bg-gradient-to-r from-brand-accent-light/20 via-white/10 to-transparent" 
                 />
                 <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-6">
                      <span className="font-mono text-[10px] text-brand-secondary/40 uppercase tracking-[0.3em]">Conexões Digital</span>
                      <div className="flex gap-4">
                        {[
                          { icon: Instagram, href: "#" },
                          { icon: Youtube, href: "#" }
                        ].map((social, i) => (
                          <motion.a 
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            href={social.href} 
                            className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-brand-accent-light hover:border-brand-accent-light group transition-all"
                          >
                            <social.icon className="text-brand-secondary group-hover:text-brand-bg" size={20} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="font-mono text-[10px] text-brand-accent-light block mb-2">AGENDAR REUNIÃO</span>
                       <span className="font-mono text-[9px] text-brand-secondary/40 block">INDAIATUBA • BRASIL</span>
                       <span className="font-mono text-[8px] text-brand-secondary/20 block tracking-widest mt-1">© 2026 ORVALIA STUDIO</span>
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
