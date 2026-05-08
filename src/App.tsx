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
        "description": "Agência líder em branding estratégico e criação de sites em Indaiatuba e região. Transformamos empresas locais em marcas de elite com design de alto padrão e SEO avançado.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catálogo de Serviços Orvalia",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Criação de Sites em Indaiatuba",
                "description": "Websites de alta performance otimizados para busca orgânica e GEO (Generative Engine Optimization)."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Branding Estratégico & Identidade Visual",
                "description": "Construção de DNA de marca para empresas que buscam posicionamento premium."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gestão de Social Media & Reels",
                "description": "Planos mensais de comunicação para dominar o tráfego orgânico e autoridade digital."
              }
            }
          ]
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Beth Olmeda"
            },
            "reviewBody": "A Orvalia transformou minha clínica. O crescimento de 280% no tráfego foi real e mensurável."
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://orvalia.com.br/#website",
        "url": "https://orvalia.com.br/",
        "name": "Orvalia Studio — Agência de Branding Indaiatuba",
        "publisher": { "@id": "https://orvalia.com.br/#localbusiness" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como escolher uma agência de branding em Indaiatuba?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Procure uma agência que entenda o mercado de Indaiatuba e RMC, utilize IA para otimização e tenha foco em resultados mensuráveis e design premium."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto custa um site profissional em Indaiatuba?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Os valores variam conforme a complexidade. Temos planos que se adaptam desde landing pages de alta conversão até ecossistemas digitais robustos."
            }
          },
          {
            "@type": "Question",
            "name": "O que é GEO (Generative Engine Optimization)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "É a otimização para motores de busca baseados em IA, como ChatGPT, Gemini e Perplexity, garantindo que sua marca seja citada por essas ferramentas."
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
