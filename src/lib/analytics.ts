import { siteConfig } from './site-config.ts';
const configuredId = import.meta.env?.VITE_GA4_MEASUREMENT_ID || siteConfig.ga4MeasurementId;
export const validMeasurementId = (value: string) => /^G-[A-Z0-9]{4,}$/.test(value);
export const measurementId = validMeasurementId(configuredId) ? configuredId : '';
export const analyticsConfigured = Boolean(measurementId);
const preferenceKey = 'orvalia-analytics-consent';
const allowedEvents = new Set(['whatsapp_click', 'contact_click', 'navigation_click', 'portfolio_open', 'method_select', 'contact_form_start', 'contact_form_submit', 'contact_form_error', 'generate_lead']);
const allowedParams = new Set(['source_page', 'destination_path', 'link_type']);
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; }
}
export function readConsent(): 'granted' | 'denied' | null {
  try { const value = localStorage.getItem(preferenceKey); return value === 'granted' || value === 'denied' ? value : null; } catch { return null; }
}
export function safeAnalyticsParams(params: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(params).filter(([key, value]) => allowedParams.has(key) && value.length < 200 && !/[?@#]/.test(value)));
}
export function updateConsent(value: 'granted' | 'denied') {
  try { localStorage.setItem(preferenceKey, value); } catch { /* The choice still applies to this visit. */ }
  if (!analyticsConfigured) return;
  const disabledWindow = window as unknown as Record<string, unknown>;
  disabledWindow[`ga-disable-${measurementId}`] = value !== 'granted';
  if (value === 'denied') {
    window.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    for (const part of document.cookie.split(';')) {
      const name = part.trim().split('=')[0];
      if (!/^_ga(?:_|$)/.test(name)) continue;
      for (const domain of ['', `; domain=${location.hostname}`, '; domain=.orvalia.com.br']) document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax`;
    }
    return;
  }
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer!.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  }
  window.gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
}
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (!analyticsConfigured || readConsent() !== 'granted' || !allowedEvents.has(name)) return;
  window.gtag?.('event', name, safeAnalyticsParams(params));
}
export function trackPage(pathname: string) {
  if (!analyticsConfigured || readConsent() !== 'granted') return;
  let referrer = '';
  try { const url = new URL(document.referrer); referrer = url.origin; } catch { /* No referrer. */ }
  window.gtag?.('event', 'page_view', { page_location: location.origin + pathname, page_referrer: referrer, page_title: document.title });
}
