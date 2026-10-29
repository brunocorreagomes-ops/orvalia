import { useEffect, useRef, useState, type FormEvent } from "react";
import "../contact.css";
import { siteConfig } from "../lib/site-config";
import { trackEvent } from "../lib/analytics";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowUpRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const sending = useRef(false);
  const started = useRef(false);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const integrated = import.meta.env.VITE_CONTACT_API_ENABLED === 'true' || siteConfig.contactApiEnabled;
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL || siteConfig.contactApiUrl;
  useEffect(() => { if (status === 'success') successHeading.current?.focus(); }, [status]);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;
    if (!integrated) { setStatus('error'); return; }
    sending.current = true;
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) || '');
    const chosenPriority = value('entry.695967425');
    const socialInquiry = chosenPriority === 'Presença digital e redes sociais';
    // Keep the accepted Google Form option; record the specific service in the context.
    const priority = socialInquiry ? 'Diagnóstico completo' : chosenPriority;
    const context = socialInquiry ? `Interesse: análise da presença digital e conteúdo para redes sociais.\n${value('entry.591864992')}` : value('entry.591864992');
    const payload = { name: value('entry.522600955'), email: value('emailAddress'), company: value('entry.607905347'), phone: value('entry.1723222290'), site: value('entry.375472757'), context, priority, website_check: value('website_check') };
    setStatus('sending');
    trackEvent('contact_form_submit', { source_page: '/contato/' });
    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'omit', body: JSON.stringify(payload), signal: AbortSignal.timeout(25000) });
      const result = await response.json();
      if (!response.ok || result.ok !== true || typeof result.requestId !== 'string') throw new Error('Receipt not confirmed');
      setStatus('success');
      trackEvent('generate_lead', { source_page: '/contato/' });
    } catch {
      setStatus('error');
      trackEvent('contact_form_error', { source_page: '/contato/' });
    } finally { sending.current = false; }
  };

  return (
    <>
      <SEO
        title="Converse sobre seu projeto | Orvalia Studio"
        description="Converse com Bruno Correa Gomes sobre marca, site e presença nas buscas. Envie o formulário e receba o retorno por e-mail. Indaiatuba, Campinas e região."
        canonical="https://orvalia.com.br/contato/"
      />
      <section className="min-h-screen pt-28 md:pt-36 pb-20 bg-brand-mineral text-brand-ink">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] font-bold text-brand-cyan-dark mb-5">Converse com Bruno</p>
              <h1 className="page-title text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.03] mb-7">
                Vamos conversar sobre seu projeto.
              </h1>
              <p className="text-lg text-brand-muted leading-relaxed max-w-xl mb-9">
                A conversa inicial é conduzida diretamente por <strong>Bruno Correa Gomes</strong>. Vamos entender o momento do negócio e identificar oportunidades de evolução na marca, no site e na presença digital.
              </p>

              <a href="#contact-form-title" className="lg:hidden inline-flex items-center gap-3 mb-9 text-sm font-semibold underline underline-offset-4">Contar sobre meu projeto <ArrowUpRight size={16} aria-hidden="true" /></a>

              <div className="p-6 md:p-7 bg-brand-warm border border-brand-line mb-9">
                <h2 className="text-sm font-bold uppercase tracking-wider mb-4">Como funciona</h2>
                <ol className="list-decimal list-inside space-y-3 text-sm text-brand-muted leading-relaxed">
                  <li><strong className="text-brand-ink">Você envia o contexto:</strong> informe sua prioridade e seus dados de contato.</li>
                  <li><strong className="text-brand-ink">Leitura preliminar:</strong> analisamos a presença digital e os objetivos informados.</li>
                  <li><strong className="text-brand-ink">Próximo passo:</strong> Bruno responde pelo e-mail informado para combinar uma conversa, sem compromisso.</li>
                </ol>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 border-t border-brand-line pt-7 text-sm">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-brand-cyan-dark shrink-0 mt-0.5" />
                  <div><span className="font-semibold block mb-1">WhatsApp & telefone</span><a href="tel:+5519992364061" className="text-brand-muted hover:text-brand-ink">+55 (19) 99236-4061</a></div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-brand-cyan-dark shrink-0 mt-0.5" />
                  <div><span className="font-semibold block mb-1">E-mail</span><a href="mailto:orvaliastudio@gmail.com" className="text-brand-muted underline underline-offset-2">orvaliastudio@gmail.com</a></div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-cyan-dark shrink-0 mt-0.5" />
                  <div><span className="font-semibold block mb-1">Atuação</span><span className="text-brand-muted">Indaiatuba, Campinas e região. Atendimento remoto e presencial mediante agendamento.</span></div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-brand-cyan-dark shrink-0 mt-0.5" />
                  <div><span className="font-semibold block mb-1">Atendimento</span><span className="text-brand-muted">Segunda a sexta, em horário comercial.</span></div>
                </div>
              </div>
            </div>

            <section aria-labelledby="contact-form-title" className="inquiry-panel min-w-0">
              <div className="inquiry-heading">
                <span className="inquiry-eyebrow">Uma boa conversa começa aqui</span>
                <h2 id="contact-form-title" tabIndex={-1}>O que você quer transformar?</h2>
                <p>Conte o essencial. O próximo passo a gente constrói junto.</p>
              </div>
              {status === 'success' ? <div className="inquiry-confirmation" role="status"><Check size={36} aria-hidden="true" /><h3 ref={successHeading} tabIndex={-1}>Seu projeto chegou até nós.</h3><p>Solicitação recebida pela Orvalia. Vamos analisar o contexto e responder pelo e-mail informado.</p><p>Prefere conversar agora? <a href="mailto:orvaliastudio@gmail.com">Escreva para orvaliastudio@gmail.com</a>.</p><button type="button" onClick={() => { setStatus('idle'); started.current = false; }}>Enviar outro projeto</button></div> : <form onSubmit={onSubmit} onFocusCapture={() => { if (!started.current) { started.current = true; trackEvent('contact_form_start', { source_page: '/contato/' }); } }}>
                <div className="inquiry-honeypot" aria-hidden="true"><label>Deixe este campo vazio<input name="website_check" tabIndex={-1} autoComplete="off" /></label></div>
                <fieldset className="inquiry-section">
                  <legend><span>01</span> Seu momento</legend>
                  <p id="priority-help" className="inquiry-hint">Escolha a prioridade do seu negócio.</p>
                  <div className="inquiry-options" aria-describedby="priority-help">
                    {[
                      ["Marca e identidade visual", "Marca e identidade", "Apresentar o valor da sua empresa"],
                      ["Criar ou melhorar o site", "Site estratégico", "Transformar visitas em conversas"],
                      ["Google, SEO e buscas com IA", "Google e buscas com IA", "Ser encontrado por quem procura"],
                      ["Presença digital e redes sociais", "Redes sociais e conteúdo", "Análise, posts para feed e vídeos para stories"],
                      ["Diagnóstico completo", "Quero uma orientação", "Entender por onde começar"],
                    ].map(([value, title, hint]) => (
                      <label key={value} className="inquiry-option">
                        <input type="radio" name="entry.695967425" value={value} required />
                        <span className="inquiry-option-copy"><strong>{title}</strong><span>{hint}</span></span>
                        <Check size={16} aria-hidden="true" />
                      </label>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="inquiry-section">
                  <legend><span>02</span> Como podemos falar com você?</legend>
                  <p className="inquiry-hint mb-4">Nome, e-mail e empresa são obrigatórios.</p>
                  <div className="inquiry-fields">
                    <label htmlFor="inquiry-name">Seu nome<input id="inquiry-name" name="entry.522600955" autoComplete="name" placeholder="Como você gosta de ser chamado?" required maxLength={200} /></label>
                    <label htmlFor="inquiry-email">E-mail<input id="inquiry-email" name="emailAddress" type="email" autoComplete="email" inputMode="email" placeholder="voce@empresa.com.br" required maxLength={254} /></label>
                    <label htmlFor="inquiry-company">Empresa ou negócio<input id="inquiry-company" name="entry.607905347" autoComplete="organization" placeholder="O nome da sua empresa ou projeto" required maxLength={200} /></label>
                  </div>
                </fieldset>
                <details className="inquiry-details">
                  <summary>Quer contar um pouco mais? <span>Opcional</span></summary>
                  <div className="inquiry-fields">
                    <label htmlFor="inquiry-phone">Telefone <span>(opcional)</span><input id="inquiry-phone" name="entry.1723222290" type="tel" autoComplete="tel" inputMode="tel" placeholder="DDD + número" maxLength={40} /></label>
                    <label htmlFor="inquiry-site">Site ou Instagram <span>(opcional)</span><input id="inquiry-site" name="entry.375472757" placeholder="Seu site ou @perfil" maxLength={500} /></label>
                    <label htmlFor="inquiry-context">Sobre o projeto <span>(opcional)</span><textarea id="inquiry-context" name="entry.591864992" rows={4} placeholder="O que você gostaria de melhorar?" maxLength={4800} /></label>
                  </div>
                </details>
                <div className="inquiry-send">
                  <p>Ao enviar, você permite que a Orvalia use essas informações para responder ao seu contato. <Link to="/privacidade/">Política de privacidade</Link>.</p>
                  <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando seu projeto…' : 'Enviar meu projeto'} <ArrowUpRight size={20} aria-hidden="true" /></button>
                  <span className="inquiry-hint">Você recebe a confirmação nesta página. Sem compromisso.</span>
                  {status === 'error' && <div className="inquiry-status inquiry-status-error" role="alert">Não foi possível confirmar o recebimento. Seus dados continuam preenchidos. Antes de tentar novamente, confira se já recebeu algum retorno. Você também pode <a href="mailto:orvaliastudio@gmail.com">falar por e-mail</a>.</div>}
                </div>
              </form>}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
