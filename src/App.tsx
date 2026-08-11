import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { MessageCircle, ChevronUp } from "lucide-react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

import Essencial from "./pages/Essencial";
import Profissional from "./pages/Profissional";
import Evolucao from "./pages/Evolucao";
import BlogIndex from "./pages/Blog/BlogIndex";
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
import Article11 from "./pages/Blog/Article11";
import ArticleClinicas from "./pages/Blog/ArticleClinicas";
import ArticleAdvogados from "./pages/Blog/ArticleAdvogados";
import ArticleArquitetura from "./pages/Blog/ArticleArquitetura";
import ArticleArquiteturaSitesAltaPerformance from "./pages/Blog/ArticleArquiteturaSitesAltaPerformance";
import ArticleIdentidadeVisualPremium from "./pages/Blog/ArticleIdentidadeVisualPremium";
import ArticleRebrandingB2B from "./pages/Blog/ArticleRebrandingB2B";
import ArticleGEO from "./pages/Blog/ArticleGEO";
import ArticleNewGEO from "./pages/Blog/ArticleNewGEO";
import ArticleEstetica from "./pages/Blog/ArticleEstetica";
import ArticleGapPercepcao from "./pages/Blog/ArticleGapPercepcao";
import PresencaDigital from "./pages/PresencaDigital";
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
        <a href="/" className="px-10 py-4 bg-brand-accent-light text-brand-bg rounded-full font-black uppercase tracking-widest text-xs">
          Voltar ao Início
        </a>
      </div>
    </div>
  );
}

function ElifeRedirect() {
  useEffect(() => {
    window.location.href = "/clientes/elife/index.html";
  }, []);
  return null;
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
    <>
      <ScrollToTop />
      <main className="relative bg-brand-bg text-brand-text">
        <SmoothScroll />
        <BackToTop />
        <motion.a
          href="https://wa.me/5511978959567?text=Olá,%20Bruno."
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
          <Route path="/branding" element={<AgenciaIndaiatuba />} />
          <Route path="/sites" element={<SitesEstrategicos />} />
          <Route path="/seo-geo" element={<PresencaDigital />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:cliente" element={<Portfolio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />

          {/* Legacy routes kept to avoid breaking old links */}
          <Route path="/agencia-indaiatuba" element={<AgenciaIndaiatuba />} />
          <Route path="/sites-estrategicos" element={<SitesEstrategicos />} />
          <Route path="/presenca-digital" element={<PresencaDigital />} />
          <Route path="/plano-essencial" element={<Essencial />} />
          <Route path="/plano-profissional" element={<Profissional />} />
          <Route path="/plano-evolucao" element={<Evolucao />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/gap-de-percepcao-digital-empresas-excelentes-comuns" element={<ArticleGapPercepcao />} />
          <Route path="/blog/branding-indaiatuba" element={<Article1 />} />
          <Route path="/blog/identidade-visual-precos" element={<Article2 />} />
          <Route path="/blog/erros-marca-amadora" element={<Article3 />} />
          <Route path="/blog/logo-vs-branding" element={<Article4 />} />
          <Route path="/blog/posicionamento-premium" element={<Article5 />} />
          <Route path="/blog/site-profissional-conversao" element={<Article6 />} />
          <Route path="/blog/instagram-estrategico" element={<Article7 />} />
          <Route path="/blog/por-que-nao-cresce" element={<Article8 />} />
          <Route path="/blog/identidade-profissionais-liberais" element={<Article9 />} />
          <Route path="/blog/arquitetura-sites-alta-performance-campinas" element={<ArticleArquiteturaSitesAltaPerformance />} />
          <Route path="/blog/identidade-visual-profissionais-liberais-premium" element={<ArticleIdentidadeVisualPremium />} />
          <Route path="/blog/rebranding-digital-b2b-sorocaba-itu-salto" element={<ArticleRebrandingB2B />} />
          <Route path="/blog/guia-marca-forte" element={<Article10 />} />
          <Route path="/blog/branding-estrategico-indaiatuba-campinas" element={<Article11 />} />
          <Route path="/branding-estrategico-indaiatuba-campinas" element={<Article11 />} />
          <Route path="/branding-para-clinicas-campinas-indaiatuba" element={<ArticleClinicas />} />
          <Route path="/posicionamento-digital-advogados-indaiatuba" element={<ArticleAdvogados />} />
          <Route path="/design-estrategico-arquitetura-itu-jundiai" element={<ArticleArquitetura />} />
          <Route path="/geo-inteligencia-artificial-empresas-sorocaba" element={<ArticleGEO />} />
          <Route path="/blog/geo-generative-engine-optimization-buscas-ia" element={<ArticleNewGEO />} />
          <Route path="/percepcao-de-valor-estetica-premium-indaiatuba" element={<ArticleEstetica />} />
          <Route path="/presenca-digital-estrategica-ia-indaiatuba-campinas" element={<PresencaDigital />} />
          
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/solucoes/:slug" element={<MarketingLandingPage />} />
          <Route path="/clientes/elife" element={<ElifeRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}
