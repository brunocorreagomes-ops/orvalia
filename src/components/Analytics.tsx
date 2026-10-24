import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { analyticsConfigured, readConsent, trackEvent, trackPage, updateConsent } from '../lib/analytics';

export default function Analytics() {
  const { pathname } = useLocation();
  const [consent, setConsent] = useState<'granted' | 'denied' | null>(null);
  const [open, setOpen] = useState(false);
  const lastPage = useRef('');
  useEffect(() => {
    if (!analyticsConfigured) return;
    const saved = readConsent();
    setConsent(saved);
    setOpen(saved === null);
    if (saved) updateConsent(saved);
    const show = () => setOpen(true);
    window.addEventListener('orvalia:privacy', show);
    return () => window.removeEventListener('orvalia:privacy', show);
  }, []);
  useEffect(() => {
    if (consent !== 'granted' || lastPage.current === pathname) return;
    trackPage(pathname);
    lastPage.current = pathname;
  }, [pathname, consent]);
  useEffect(() => {
    if (consent !== 'granted') return;
    const click = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target.closest('a,button') : null;
      if (!element) return;
      if (element instanceof HTMLAnchorElement) {
        const url = new URL(element.href, location.origin);
        if (url.hostname === 'wa.me') trackEvent('whatsapp_click', { source_page: pathname });
        else if (['mailto:', 'tel:'].includes(url.protocol)) trackEvent('contact_click', { source_page: pathname, link_type: url.protocol.replace(':', '') });
        else if (url.origin === location.origin) trackEvent('navigation_click', { source_page: pathname, destination_path: url.pathname });
      } else if (element.getAttribute('aria-label')?.startsWith('Ampliar apresentação')) trackEvent('portfolio_open', { source_page: pathname });
      else if (element.getAttribute('role') === 'tab') trackEvent('method_select', { source_page: pathname });
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, [consent, pathname]);
  if (!analyticsConfigured || !open) return null;
  const choose = (value: 'granted' | 'denied') => { updateConsent(value); setConsent(value); setOpen(false); if (value === 'denied') lastPage.current = ''; };
  return <section className="analytics-choice" role="region" aria-label="Preferências de medição"><div><h2>Podemos medir sua visita?</h2><p>Com sua permissão, usamos o Google Analytics para entender visitas e cliques. Não enviamos os dados preenchidos no formulário. <Link to="/cookies/">Saiba mais</Link>.</p></div><div className="analytics-actions"><button type="button" onClick={() => choose('denied')}>Não permitir</button><button type="button" onClick={() => choose('granted')}>Permitir medição</button></div></section>;
}
