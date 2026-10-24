import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import OrvaliaLogo from "./OrvaliaLogo";

const navLinks = [
  { label: "Marca e identidade", href: "/branding", route: true },
  { label: "Sites estratégicos", href: "/sites", route: true },
  { label: "Google e buscas com IA", href: "/seo-geo", route: true },
  { label: "Redes sociais", href: "/redes-sociais", route: true },
  { label: "Trabalhos", href: "/portfolio", route: true },
  { label: "Método", href: "/#metodo", route: false },
  { label: "Artigos", href: "/blog", route: true },
  { label: "Contato", href: "/contato", route: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
      if (event.key !== "Tab") return;
      const links = Array.from(drawerRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []);
      const first = toggleRef.current;
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      toggleRef.current?.focus({ preventScroll: true });
    };
  }, [mobileMenuOpen]);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  const linkClass = (active: boolean) =>
    `text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-dark ${
      active ? "text-brand-ink underline decoration-brand-cyan-dark underline-offset-8" : "text-brand-muted hover:text-brand-ink"
    }`;

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] border-b transition-all duration-300 ${
      isScrolled || mobileMenuOpen
        ? "bg-brand-mineral border-brand-line shadow-sm"
        : "bg-brand-mineral border-transparent"
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

        <div className="hidden xl:flex items-center gap-4">
          {navLinks.map((link) => link.route ? (
            <Link key={link.label} to={link.href} className={linkClass(pathname.replace(/\/$/, "") === link.href)}>
              {link.label}
            </Link>
          ) : (
            <a key={link.label} href={link.href} className={linkClass(false)}>{link.label}</a>
          ))}
        </div>

        <div className="hidden xl:block">
          <Link
            to="/contato/"
            data-analytics-event="contact_form_open"
            data-analytics-location="navbar"
            className="inline-flex items-center gap-3 bg-brand-ink text-brand-warm px-5 py-3 text-xs font-bold hover:bg-brand-graphite transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-dark"
          >
            Conversar sobre meu projeto <ArrowUpRight size={15} className="text-brand-cyan" />
          </Link>
        </div>

        <button
          ref={toggleRef}
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
        <div ref={drawerRef} id="mobile-navigation-drawer" data-lenis-prevent
          role="navigation" aria-label="Menu de navegação"
          className="mobile-navigation-drawer xl:hidden fixed inset-x-0 top-[76px] md:top-[88px] bg-brand-mineral border-t border-brand-line px-6 py-5 flex flex-col overflow-y-auto overscroll-contain">
          <div className="flex-1 shrink-0">
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
          <div className="pt-6 shrink-0">
            <Link to="/contato/"
              data-analytics-event="contact_form_open" data-analytics-location="navbar_mobile"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 px-5 bg-brand-ink text-brand-warm font-semibold text-sm flex items-center justify-between">
              Conversar sobre meu projeto <ArrowUpRight size={18} className="text-brand-cyan" />
            </Link>
            <p className="text-xs text-brand-muted text-center mt-3">Atendimento direto com Bruno Correa Gomes</p>
          </div>
        </div>
      )}
    </header>
  );
}
