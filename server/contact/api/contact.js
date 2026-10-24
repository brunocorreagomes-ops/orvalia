import { randomUUID } from 'node:crypto';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeBpHWidIKmwrucijCwndBQhce1P2x5-4mPBBxct4KuNgGySQ/formResponse?hl=pt-BR&embedded=true';
const ORIGINS = new Set(['https://orvalia.com.br', 'https://www.orvalia.com.br']);
const priorities = new Set(['Marca e identidade visual', 'Criar ou melhorar o site', 'Google, SEO e buscas com IA', 'Diagnóstico completo']);
const fields = { name: ['entry.522600955', 200], company: ['entry.607905347', 200], phone: ['entry.1723222290', 40], site: ['entry.375472757', 500], context: ['entry.591864992', 5000], email: ['emailAddress', 254], priority: ['entry.695967425', 100] };

export function confirmed(html) {
  const visible = html.replace(/<!--[\s\S]*?-->/g, ' ').replace(/<(script|style|template|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ');
  const text = visible.replace(/<[^>]*>/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&nbsp;/g, ' ').normalize('NFC').replace(/\s+/g, ' ');
  return text.includes('Solicitação recebida pela Orvalia.');
}

export function validate(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body) || body.website_check) return null;
  const result = {};
  for (const [key, [, max]] of Object.entries(fields)) {
    const value = body[key] ?? '';
    if (typeof value !== 'string' || value.length > max) return null;
    result[key] = value.trim();
  }
  if (!result.name || !result.company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email) || !priorities.has(result.priority)) return null;
  return result;
}

export async function handle(request, send = fetch) {
  const origin = request.headers.get('origin');
  const headers = { 'Cache-Control': 'no-store', 'Vary': 'Origin', 'X-Content-Type-Options': 'nosniff' };
  const reply = (data, status = 200) => Response.json(data, { status, headers });
  if (!ORIGINS.has(origin)) return reply({ ok: false, code: 'origin_not_allowed' }, 403);
  headers['Access-Control-Allow-Origin'] = origin;
  headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
  headers['Access-Control-Allow-Headers'] = 'Content-Type';
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (request.method !== 'POST') return reply({ ok: false, code: 'method_not_allowed' }, 405);
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply({ ok: false, code: 'json_required' }, 415);
  const content = await request.text();
  if (new TextEncoder().encode(content).length > 16000) return reply({ ok: false, code: 'payload_too_large' }, 413);
  let parsed;
  try { parsed = JSON.parse(content); } catch { return reply({ ok: false, code: 'invalid_json' }, 400); }
  const values = validate(parsed);
  if (!values) return reply({ ok: false, code: 'invalid_fields' }, 422);
  const payload = new URLSearchParams(Object.entries(fields).map(([key, [entry]]) => [entry, values[key]]));
  const requestId = randomUUID();
  try {
    const upstream = await send(FORM_URL, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: payload.toString(), signal: AbortSignal.timeout(20000), redirect: 'follow' });
    const html = await upstream.text();
    if (!upstream.ok || !confirmed(html)) {
      console.error('contact_confirmation_unavailable', { requestId, status: upstream.status });
      return reply({ ok: false, code: 'receipt_unconfirmed', requestId }, 502);
    }
    return reply({ ok: true, requestId }, 200);
  } catch (error) {
    console.error('contact_provider_unavailable', { requestId, kind: error?.name || 'Error' });
    return reply({ ok: false, code: 'receipt_unconfirmed', requestId }, 504);
  }
}

export default { fetch: handle };
