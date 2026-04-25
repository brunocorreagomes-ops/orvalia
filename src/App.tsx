import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { MessageCircle, ChevronUp } from "lucide-react";
import Home from "./pages/Home";
import Essencial from "./pages/Essencial";
import Profissional from "./pages/Profissional";
import Evolucao from "./pages/Evolucao";
import Article1 from "./pages/Blog/Article1";
import Article2 from "./pages/Blog/Article2";
import Article3 from "./pages/Blog/Article3";
import Article4 from "./pages/Blog/Article4";
import Article5 from "./pages/Blog/Article5";
import Article6 from "./pages/Blog/Article6";
import Article7 from "./pages/Blog/Article7";
import Article8 from "./pages/Blog/Article8";
import Article9 from "./pages/Blog/Article9";
import Article10 from "./pages/Blog/Article10";
import BlogIndex from "./pages/Blog/BlogIndex";
import Termos from "./pages/Legal/Termos";
import Privacidade from "./pages/Legal/Privacidade";
import Cookies from "./pages/Legal/Cookies";
import AgenciaIndaiatuba from "./pages/AgenciaIndaiatuba";
import SitesEstrategicos from "./pages/SitesEstrategicos";
import MarketingLandingPage from "./pages/MarketingLandingPage";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg text-white p-6 pt-32">
      <div className="text-center">
        <h1 className="text-9xl font-black text-brand-accent-light opacity-20 mb-8">404</h1>
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Página não encontrada</h2>
        <p className="text-brand-secondary mb-8">O destino que você procura não existe ou foi movido.</p>
        <Link to="/" className="px-10 py-4 bg-brand-accent-light text-brand-bg rounded-full font-black uppercase tracking-widest text-xs">
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}

function JSONLD() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://orvalia.com.br/#localbusiness",
        "name": "Orvalia - Branding & Websites",
        "image": "https://ais-dev-vvyha72miapruwovmaedpl-71352453893.us-east1.run.app/logo.png",
        "url": "https://ais-dev-vvyha72miapruwovmaedpl-71352453893.us-east1.run.app/",
        "telephone": "+55 11 97895-9567",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Pres. Kennedy",
          "addressLocality": "Indaiatuba",
          "postalCode": "13334-170",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.0898,
          "longitude": -47.2185
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Indaiatuba" },
          { "@type": "City", "name": "Campinas" },
          { "@type": "City", "name": "Salto" },
          { "@type": "City", "name": "Itu" },
          { "@type": "State", "name": "RMC" }
        ],
        "description": "Agência especializada em branding estratégico, criação de sites de alta performance e design para empresas em Indaiatuba, Campinas e região.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços Digitais",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Criação de Sites em Indaiatuba",
                "description": "Desenvolvimento de websites de alta performance, rápidos e focados em conversão."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Branding e Identidade Visual",
                "description": "Construção de marcas fortes e posicionamento de elite para empresas."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO - Otimização para Buscas",
                "description": "Estratégias para colocar seu negócio no topo do Google em Indaiatuba e região."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Pages de Alta Conversão",
                "description": "Páginas de vendas otimizadas para tráfego pago e captação de leads."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://orvalia.com.br/#website",
        "url": "https://ais-dev-vvyha72miapruwovmaedpl-71352453893.us-east1.run.app/",
        "name": "Orvalia Studio",
        "publisher": { "@id": "https://orvalia.com.br/#localbusiness" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qual o valor de um projeto de branding em Indaiatuba?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Os projetos de branding na Orvalia são personalizados conforme a necessidade da empresa, focando em posicionamento premium e conversão. Entre em contato para um diagnóstico gratuito."
            }
          },
          {
            "@type": "Question",
            "name": "A Orvalia cria sites profissionais em Campinas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, atendemos toda a RMC Campinas e Indaiatuba com criação de sites otimizados para SEO e alta conversão."
            }
          }
        ]
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-32 right-8 z-[200] bg-white text-brand-bg p-4 rounded-full shadow-2xl transition-all flex items-center justify-center shadow-white/10 active:scale-95"
    >
      <ChevronUp size={22} />
    </motion.button>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, hash]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <JSONLD />
      <ScrollToTop />
      <main className="relative bg-brand-bg text-brand-text">
        {/* Global Features */}
        <SmoothScroll />
        
        <BackToTop />
        
        {/* Floating WhatsApp Action */}
        <motion.a
          href="https://wa.me/5511978959567?text=Olá,%20vim%20através%20do%20site%20Orvalia%20e%20gostaria%20de%20maiores%20informações"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entre em contato pelo WhatsApp"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[200] bg-brand-whatsapp text-brand-bg p-5 rounded-full shadow-2xl transition-all flex items-center justify-center shadow-brand-whatsapp/20 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-whatsapp"
        >
          <MessageCircle size={32} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black uppercase tracking-widest text-xs whitespace-nowrap">
            Conversar Agora
          </span>
        </motion.a>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plano-essencial" element={<Essencial />} />
          <Route path="/plano-profissional" element={<Profissional />} />
          <Route path="/plano-evolucao" element={<Evolucao />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/branding-indaiatuba" element={<Article1 />} />
          <Route path="/blog/identidade-visual-precos" element={<Article2 />} />
          <Route path="/blog/erros-marca-amadora" element={<Article3 />} />
          <Route path="/blog/logo-vs-branding" element={<Article4 />} />
          <Route path="/blog/posicionamento-premium" element={<Article5 />} />
          <Route path="/blog/site-profissional-conversao" element={<Article6 />} />
          <Route path="/blog/instagram-estrategico" element={<Article7 />} />
          <Route path="/blog/por-que-nao-cresce" element={<Article8 />} />
          <Route path="/blog/identidade-profissionais-liberais" element={<Article9 />} />
          <Route path="/blog/guia-marca-forte" element={<Article10 />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/agencia-indaiatuba" element={<AgenciaIndaiatuba />} />
          <Route path="/sites-estrategicos" element={<SitesEstrategicos />} />
          <Route path="/solucoes/:slug" element={<MarketingLandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}
