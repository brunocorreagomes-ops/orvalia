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
  CheckCircle2,
  MapPin,
  UtensilsCrossed,
  Sparkle,
  Wrench,
  Store,
  GraduationCap,
  Building2,
  Search,
  Users,
  CalendarDays,
  Star,
  Plus
} from "lucide-react";
import React, { useState, useEffect } from "react";

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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-10 overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDelay: '2s' }}
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>Agência de Marketing Digital em Indaiatuba e Região</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1] text-balance"
        >
          Sua empresa merece ser<br /> 
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">encontrada na internet</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Agência de comunicação e publicidade em Indaiatuba/SP. Criamos sites, identidade visual e conteúdo com IA para empresas que ainda não têm presença digital — sem precisar de um time de marketing próprio.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 group"
          >
            Quero minha empresa no digital
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center"
          >
            Ver projetos
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xs text-slate-500 font-medium"
        >
          Sem contrato longo. Sem burocracia. Resultado rápido.
        </motion.p>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

const LocalPresence = () => {
  const regions = ["Indaiatuba", "Itu", "Salto", "Campinas", "Sorocaba", "Jundiaí"];
  const segments = [
    { icon: <UtensilsCrossed size={20} />, label: "Restaurantes e Alimentação" },
    { icon: <Sparkle size={20} />, label: "Clínicas e Estética" },
    { icon: <Wrench size={20} />, label: "Prestadores de Serviço" },
    { icon: <Store size={20} />, label: "Comércio Local" },
    { icon: <GraduationCap size={20} />, label: "Educação e Cursos" },
    { icon: <Building2 size={20} />, label: "Imóveis e Corretores" },
  ];

  return (
    <section className="py-24 bg-slate-950 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <MapPin size={24} />
              </div>
              <div>
                <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Somos Daqui</span>
                <h2 className="text-4xl font-bold text-white tracking-tight">Orgulhosamente de Indaiatuba, SP</h2>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-lg text-balance">
              A Orvalia nasceu no interior de São Paulo para resolver um problema real: <strong className="text-white">empresas locais que ficam invisíveis na internet</strong> enquanto perdem clientes para concorrentes de fora.
            </p>
            
            <p className="text-slate-400 leading-relaxed mb-8">
              Conhecemos o mercado de Indaiatuba e região. Sabemos o que funciona aqui — e entregamos resultado para negócios reais, do bairro e da cidade.
            </p>

            <div className="space-y-4">
              <p className="text-sm font-bold text-white uppercase tracking-wider">Cidades que atendemos:</p>
              <div className="flex flex-wrap gap-2">
                {regions.map(city => (
                  <span key={city} className={`px-4 py-2 rounded-full text-sm font-semibold border ${city === "Indaiatuba" ? "bg-cyan-500/10 border-cyan-400/30 text-cyan-400" : "bg-white/5 border-white/10 text-slate-400"}`}>
                    {city === "Indaiatuba" && "📍 "}{city}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/5 border-white/10 text-slate-400">+ todo o Brasil</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[480px] aspect-video sm:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59432.61!2d-47.2196!3d-23.0904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf3a4bd0a9b7e7%3A0x67b8c44ac64e7f09!2sIndaiatuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1699000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(1) opacity(0.5)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orvalia Studio - Indaiatuba SP"
            />
            <div className="absolute inset-0 pointer-events-none border-[12px] border-slate-950/20 rounded-3xl"></div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-white/5"
        >
          <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-12">Segmentos que mais atendemos na região</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {segments.map((seg, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-3 text-center transition-colors hover:bg-white/[0.08]">
                <div className="text-cyan-400">{seg.icon}</div>
                <span className="text-xs font-semibold text-slate-300 leading-tight">{seg.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const situations = [
    {
      icon: <Store className="text-cyan-400" size={24} />,
      title: "\"Minha empresa vive de indicação, mas quero crescer\"",
      text: "Depende demais do boca a boca e ainda não está visível no Google."
    },
    {
      icon: <Zap className="text-blue-500" size={24} />,
      title: "\"Tenho Instagram, mas sem estratégia nenhuma\"",
      text: "Posta quando lembra, sem consistência e sem saber se gera resultado."
    },
    {
      icon: <Users className="text-indigo-500" size={24} />,
      title: "\"Não tenho equipe de marketing — só eu e o negócio\"",
      text: "Cuida de tudo e não sobra tempo para lidar com agências complexas."
    }
  ];

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
        {/* Situations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {situations.map((sit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 space-y-4"
            >
              <div className="p-3 w-fit rounded-xl bg-slate-900">{sit.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{sit.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{sit.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 text-center">Nossas Soluções</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">Tudo que sua empresa precisa <br /> para existir no digital.</h3>
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
      title: "Restaurante Seu Jorge",
      category: "Site + SEO",
      desc: "Triplicou pedidos via delivery direto pelo site orgânico.",
      img: "https://picsum.photos/seed/restaurant/800/600",
      location: "Indaiatuba/SP"
    },
    {
      title: "Clínica Revita Estética",
      category: "Branding + Conteúdo",
      desc: "Identidade visual luxuosa com estratégia de postagens por IA.",
      img: "https://picsum.photos/seed/revita/800/600",
      location: "Campinas/SP"
    },
    {
      title: "Hidráulica do Paulo",
      category: "Local SEO",
      desc: "Posição #1 no Google Maps para toda a região de Jundiaí.",
      img: "https://picsum.photos/seed/plumbing/800/600",
      location: "Jundiaí/SP"
    },
    {
      title: "Quinta Caraíva",
      category: "Landing Page",
      desc: "Otimização para buscas conversacionais no ChatGPT e Gemini.",
      img: "https://picsum.photos/seed/pousada/800/600",
      location: "Caraíva/BA"
    },
    {
      title: "Marta Ana Chiconato",
      category: "Growth Estratégico",
      desc: "Posicionamento digital para autoridade em terapias integrativas.",
      img: "https://picsum.photos/seed/terapia/800/600",
      location: "São Paulo/SP"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Resultados Reais</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Projetos entregues</h3>
          </div>
          <button className="text-slate-400 flex items-center gap-2 hover:text-cyan-400 transition-colors mx-auto md:mx-0">
            Ver portfólio completo <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-white/5 bg-slate-900">
                <img 
                  src={project.img} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-8 flex flex-col justify-end">
                   <p className="text-white text-sm font-medium mb-1">{project.desc}</p>
                   <p className="text-cyan-400/80 text-[10px] font-bold uppercase tracking-widest">{project.location}</p>
                </div>
              </div>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 px-2">{project.category}</p>
              <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400 px-2">{project.title}</h4>
            </motion.div>
          ))}
          
          <div className="p-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/20 flex flex-col justify-between">
            <div className="space-y-4">
              <Sparkle className="text-cyan-400" size={32} />
              <h4 className="text-2xl font-bold text-white italic font-serif">Seu negócio pode ser o próximo.</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Tem empresa, tem história, falta só a presença digital. A gente resolve isso.</p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="block w-full py-4 bg-white text-slate-950 rounded-full font-bold text-center mt-8 hover:bg-cyan-50 transition-colors">
              Começar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const list = [
    {
      name: "Paulo Henrique",
      company: "Hidráulica do Paulo · Jundiaí/SP",
      text: "Antes eu não aparecia em nenhuma busca. Hoje quando alguém pesquisa 'hidráulica em Jundiaí' meu negócio está lá. Triplicou os contatos pelo WhatsApp.",
      initials: "PH"
    },
    {
      name: "Camila Araújo",
      company: "Revita Estética · Campinas/SP",
      text: "Sempre achei que agência era só para empresa grande. A Orvalia me mostrou que dá para ter uma marca bonita e profissional mesmo sendo pequena. Recomendo demais.",
      initials: "CA"
    },
    {
      name: "Marta Ana",
      company: "Terapeuta Integrativa · São Paulo/SP",
      text: "Eles entenderam meu trabalho sem eu precisar explicar mil vezes. O resultado ficou exatamente o que eu queria — elegante, sério e acessível ao mesmo tempo.",
      initials: "MA"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Depoimentos</span>
          <h2 className="text-4xl font-bold text-white tracking-tight">O que dizem nossos clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/5 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-300 italic leading-relaxed font-medium">"{item.text}"</p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold font-headline">
                  {item.initials}
                </div>
                <div>
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-slate-500 text-xs">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    { q: "Quanto custa um projeto?", a: "Depende do que você precisa. Um site simples começa a partir de R$ 1.200. Identidade visual a partir de R$ 800. Sempre enviamos uma proposta clara antes de qualquer compromisso — sem surpresas." },
    { q: "Quanto tempo leva para ficar pronto?", a: "A maioria dos projetos fica pronta em 7 a 15 dias úteis. Sempre combinamos um prazo no início e você pode acompanhar o andamento ao longo do processo." },
    { q: "Minha empresa precisa ser grande para contratar?", a: "Não. A Orvalia foi criada justamente para empresas pequenas e médias que ainda não têm um time de marketing. MEI, microempresas e autônomos são muito bem-vindos." },
    { q: "Posso pagar parcelado?", a: "Sim. Trabalhamos com pagamento em 2x: 50% para começar e 50% na entrega. Aceitamos PIX e cartão de crédito." }
  ];

  return (
    <section className="py-24 bg-slate-900/30 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Dúvidas Frequentes</span>
          <h2 className="text-4xl font-bold text-white tracking-tight">Perguntas que todo mundo faz</h2>
        </div>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-bold">{item.q}</span>
                <Plus className={`text-cyan-400 transition-transform ${openIndex === i ? 'rotate-45' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-slate-400 text-sm leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => {
  return (
    <div className="relative group">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all duration-300 flex items-center justify-center border border-white/5 hover:border-white/20"
        aria-label={label}
      >
        {icon}
      </a>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-slate-950 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl z-20">
        {label}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.ibb.co/Kjqj14D6/orvalia-logo-novo-fundo-transparentes.webp" 
                alt="Orval'IA Studio Logo" 
                className="h-10 w-auto" 
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-bold text-lg">Orval'IA Studio</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Agência de marketing digital em Indaiatuba/SP. Colocamos sua empresa no digital com inteligência e estratégia.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://www.instagram.com/orvaliastudio" label="Instagram" icon={<Instagram size={18} />} />
              <SocialLink href="https://www.linkedin.com/company/orvaliastudio/" label="LinkedIn" icon={<Linkedin size={18} />} />
              <SocialLink href="https://www.youtube.com/@orvaliastudio" label="YouTube" icon={<Youtube size={18} />} />
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Serviços</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Criação de Sites</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Identidade Visual</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Conteúdo com IA</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">SEO Local</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Navegação</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfólio</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Contato</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} className="text-cyan-400" /> orvaliastudio@gmail.com</li>
              <li className="flex items-center gap-2 text-balance"><MapPin size={16} className="text-cyan-400" /> Indaiatuba, Itu, Salto, Campinas e região</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Orval'IA Studio · Agência em Indaiatuba/SP · CNPJ 00.000.000/0001-00</p>
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
      <LocalPresence />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ReadySection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
