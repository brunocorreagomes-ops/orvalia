import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import OrvaliaLogo from "./OrvaliaLogo";

const navLinks = [
  { label: "Branding", href: "/branding", route: true },
  { label: "Sites estratégicos", href: "/sites", route: true },
  { label: "SEO & IA (GEO)", href: "/seo-geo", route: true },
  { label: "Trabalhos", href: "/portfolio", route: true },
  { label: "Método", href: "/#metodo", route: false },
  { label: "Artigos", href: "/blog", route: true },
  { label: "Contato", href: "/contato", route: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  const whatsappUrl = `https://wa.me/5511978959567?text=${encodeURIComponent(
    `Olá, Bruno! Vim pela página ${pathname} da Orvalia e gostaria de pedir um diagnóstico estratégico para minha empresa.`
  )}`;

  const linkClass = (active: boolean) =>
    `text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-dark ${
      active ? "text-brand-ink underline decoration-brand-cyan-dark underline-offset-8" : "text-brand-muted hover:text-brand-ink"
    }`;

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] border-b transition-all duration-300 ${
      isScrolled || mobileMenuOpen
        ? "bg-brand-mineral/95 backdrop-blur-md border-brand-line shadow-sm"
        : "bg-brand-mineral/90 border-transparent backdrop-blur-sm"
    }`}>
      <nav aria-label="Navegação principal" className="container mx-auto px-6 h-[76px] md:h-[88px] flex items-center justify-between">
        <Link
          to="/"
          aria-label="Orvalia Studio — página inicial"
          onClick={() => setMobileMenuOpen(false)}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-dark"
        >
          <OrvaliaLogo className="w-36 md:w-44" theme="light" />
        </Link>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => link.route ? (
            <Link key={link.label} to={link.href} className={linkClass(pathname === link.href)}>
              {link.label}
            </Link>
          ) : (
            <a key={link.label} href={link.href} className={linkClass(false)}>{link.label}</a>
          ))}
        </div>

        <div className="hidden xl:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="whatsapp_click"
            data-analytics-location="navbar"
            className="inline-flex items-center gap-3 bg-brand-ink text-brand-warm px-5 py-3 text-xs font-bold hover:bg-brand-graphite transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-dark"
          >
            Pedir diagnóstico estratégico <ArrowUpRight size={15} className="text-brand-cyan" />
          </a>
        </div>

        <button
          type="button"
          className="xl:hidden w-11 h-11 border border-brand-line text-brand-ink flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-dark"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="xl:hidden fixed inset-x-0 top-[76px] bottom-0 md:top-[88px] bg-brand-mineral border-t border-brand-line px-6 py-7 flex flex-col overflow-y-auto">
          <div className="flex-1">
            {navLinks.map((link) => link.route ? (
              <Link key={link.label} to={link.href} onClick={() => setMobileMenuOpen(false)}
                className="py-4 border-b border-brand-line text-xl font-medium text-brand-ink flex items-center justify-between">
                {link.label}<ArrowUpRight size={17} className="text-brand-muted" />
              </Link>
            ) : (
              <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
                className="py-4 border-b border-brand-line text-xl font-medium text-brand-ink flex items-center justify-between">
                {link.label}<ArrowUpRight size={17} className="text-brand-muted" />
              </a>
            ))}
          </div>
          <div className="pt-6">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              data-analytics-event="whatsapp_click" data-analytics-location="navbar_mobile"
              className="w-full py-4 px-5 bg-brand-ink text-brand-warm font-semibold text-sm flex items-center justify-between">
              Pedir diagnóstico estratégico <ArrowUpRight size={18} className="text-brand-cyan" />
            </a>
            <p className="text-xs text-brand-muted text-center mt-3">Atendimento direto com Bruno Correa Gomes</p>
          </div>
        </div>
      )}
    </header>
  );
}
