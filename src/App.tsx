/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Sparkles, 
  Layers, 
  Globe, 
  ChevronRight, 
  ArrowUpRight, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Zap,
  Palette,
  Layout,
  Menu,
  X,
  MessageCircle,
  CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Constants ---
const WHATSAPP_URL = "https://wa.me/5511942789109?text=Ol%C3%A1%2C%20vim%20pelo%20site%20orvalia.com.br%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Sobre", href: "#sobre" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"} ${isScrolled ? "py-4" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.ibb.co/Kjqj14D6/orvalia-logo-novo-fundo-transparentes.webp" 
            alt="Orval'IA Studio Logo" 
            className="h-10 w-auto" 
            referrerPolicy="no-referrer"
          />
          <span className="text-white font-bold text-xl tracking-tight">Orval'IA <span className="text-cyan-400">Studio</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-slate-950 rounded-full hover:bg-cyan-50 transition-all font-semibold"
          >
            Iniciar Projeto
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg text-center"
              >
                Iniciar Projeto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          <span>Inteligência Artificial & Design Estratégico</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1]"
        >
          Criatividade sem <br /> 
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">limites técnicos</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformamos sua visão em realidade através da IA avançada combinada com o design humano refinado. Elevamos marcas ao próximo nível digital.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center"
          >
            Ver Portfólio
          </a>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 group"
          >
            Falar no WhatsApp
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

const Services = () => {
  const items = [
    {
      title: "Branding com IA",
      desc: "Identidades visuais geradas por algoritmos proprietários que capturam a essência da sua marca com precisão cirúrgica.",
      icon: <Palette className="text-cyan-400" size={28} />,
      color: "cyan"
    },
    {
      title: "Conteúdo Dinâmico",
      desc: "Automação de campanhas e criação de ativos digitais que se adaptam em tempo real às tendências do mercado.",
      icon: <Layers className="text-blue-500" size={28} />,
      color: "blue"
    },
    {
      title: "UI/UX Inteligente",
      desc: "Interfaces que aprendem e evoluem. Focamos na experiência do usuário maximizada por dados e comportamento preditivo.",
      icon: <Layout className="text-indigo-500" size={28} />,
      color: "indigo"
    },
    {
      title: "Estratégia Digital",
      desc: "Consultoria focada em crescimento (growth) utilizando ferramentas de IA para análise de nicho e concorrência.",
      icon: <Zap className="text-cyan-400" size={28} />,
      color: "cyan"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">O que oferecemos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Soluções que redesenham <br /> a forma de criar.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -12, scale: 1.02 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),0_0_20px_-5px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col items-start gap-6 group cursor-default"
            >
              <div className="p-4 rounded-xl bg-slate-900 group-hover:bg-slate-800 transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Aurora Lab",
      category: "Branding / AI",
      img: "https://picsum.photos/seed/aurora/800/600",
      desc: "Redesign completo usando redes neurais para geração de padrões orgânicos."
    },
    {
      title: "Lumina Systems",
      category: "UI Design / Web",
      img: "https://picsum.photos/seed/lumina/800/600",
      desc: "Interface imersiva para empresa de armazenamento quântico."
    },
    {
      title: "Spectral Campaign",
      category: "Content / Marketing",
      img: "https://picsum.photos/seed/spectral/800/600",
      desc: "Campanha multimeios com 90% dos ativos gerados via Difusão Latente."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Nossos Feitos</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight italic font-serif">Projetos Recentes</h3>
          </div>
          <button className="text-white flex items-center gap-2 hover:text-cyan-400 transition-colors">
            Ver todos projetos <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5">
                <img 
                  src={project.img} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <p className="text-white text-sm font-medium">{project.desc}</p>
                </div>
              </div>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
              <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">{project.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.ibb.co/Kjqj14D6/orvalia-logo-novo-fundo-transparentes.webp" 
                alt="Orval'IA Studio Logo" 
                className="h-10 w-auto" 
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-bold text-lg">Orval'IA Studio</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Onde a inteligência artificial encontra a alma humana do design. Criando o impossível, um pixel por vez.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/orvaliastudio" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/orvaliastudio/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"><Linkedin size={18} /></a>
              <a href="https://www.youtube.com/@orvaliastudio" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"><Youtube size={18} /></a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Navegação</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfólio</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Contato</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> orvaliastudio@gmail.com</li>
              <li className="flex items-center gap-2"><Globe size={16} /> São Paulo, Brasil</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Orval'IA Studio. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ReadySection = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-950 px-6">
      <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/20 blur-[120px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px]"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight transition-all">
            Pronto para o <br /> <span className="text-cyan-400">próximo nível?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Seu projeto merece a precisão da IA com a alma do design estratégico. Vamos conversar sobre sua visão.
          </p>
          <div className="pt-6">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-slate-950 rounded-full font-black text-xl hover:bg-cyan-50 transition-all active:scale-95 inline-block"
            >
              Falar com Especialista
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-400" /> Orçamento Gratuito</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-400" /> Entrega em até 15 dias</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-400" /> Suporte Dedicado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all animate-bounce"
      style={{ animationDuration: '3s' }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default function App() {
  return (
    <div className="antialiased scroll-smooth selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ReadySection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
