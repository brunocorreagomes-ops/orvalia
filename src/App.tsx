import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { MessageCircle, ChevronUp } from "lucide-react";

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-32 right-8 z-[200] bg-brand-bg border border-white/10 text-white p-4 rounded-full shadow-2xl hover:bg-white hover:text-brand-bg transition-all flex items-center justify-center glow-subtle active:scale-95"
    >
      <ChevronUp size={24} />
    </button>
  );
}
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

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="relative bg-brand-bg text-brand-text">
        {/* Global Features */}
        <SmoothScroll />
        
        <BackToTop />
        
        {/* Floating WhatsApp Action */}
        <a
          href="https://wa.me/5511978959567?text=Olá,%20vim%20através%20do%20site%20Orvalia%20e%20gostaria%20de%20maiores%20informações"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entre em contato pelo WhatsApp"
          className="fixed bottom-8 right-8 z-[200] bg-brand-whatsapp text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center glow-subtle group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-whatsapp"
        >
          <MessageCircle size={32} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
            Conversar Agora
          </span>
        </a>

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
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}
