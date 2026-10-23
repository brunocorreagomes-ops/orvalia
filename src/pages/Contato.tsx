import { useState } from "react";
import "../contact.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowUpRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeBpHWidIKmwrucijCwndBQhce1P2x5-4mPBBxct4KuNgGySQ/viewform?usp=publish-editor&hl=pt-BR";
  const [submitted, setSubmitted] = useState(false);
  const submitUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeBpHWidIKmwrucijCwndBQhce1P2x5-4mPBBxct4KuNgGySQ/formResponse?hl=pt-BR&embedded=true";

  return (
    <>
      <SEO
        title="Contato e Diagnóstico Estratégico | Orvalia Studio"
        description="Solicite um diagnóstico estratégico de marca, site e presença nas buscas com Bruno Correa Gomes. Atendimento em Indaiatuba, Campinas e região."
        canonical="https://orvalia.com.br/contato/"
      />
      <section className="min-h-screen pt-28 md:pt-36 pb-20 bg-brand-mineral text-brand-ink">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] font-bold text-brand-cyan-dark mb-5">Contato & diagnóstico direto</p>
              <h1 className="page-title text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.03] mb-7">
                Vamos analisar o próximo movimento da sua marca.
              </h1>
              <p className="text-lg text-brand-muted leading-relaxed max-w-xl mb-9">
                A conversa inicial é conduzida diretamente por <strong>Bruno Correa Gomes</strong>. Vamos entender o momento do negócio e identificar oportunidades de evolução na marca, no site e na presença digital.
              </p>

              <a href="#contact-form-title" className="lg:hidden inline-flex items-center gap-3 mb-9 text-sm font-semibold underline underline-offset-4">Contar sobre meu projeto <ArrowUpRight size={16} aria-hidden="true" /></a>

              <div className="p-6 md:p-7 bg-brand-warm border border-brand-line mb-9">
                <h2 className="text-sm font-bold uppercase tracking-wider mb-4">Como funciona</h2>
                <ol className="list-decimal list-inside space-y-3 text-sm text-brand-muted leading-relaxed">
                  <li><strong className="text-brand-ink">Você envia o contexto:</strong> leva menos de um minuto.</li>
                  <li><strong className="text-brand-ink">Leitura preliminar:</strong> analisamos a presença digital e os objetivos informados.</li>
                  <li><strong className="text-brand-ink">Próximo passo:</strong> conversamos sobre prioridades e caminhos possíveis, sem compromisso.</li>
                </ol>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 border-t border-brand-line pt-7 text-sm">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-brand-cyan-dark shrink-0 mt-0.5" />
                  <div><span className="font-semibold block mb-1">WhatsApp & telefone</span><a href="tel:+5511978959567" className="text-brand-muted hover:text-brand-ink">+55 (11) 97895-9567</a></div>
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
              <form action={submitUrl} method="post" target="_blank" rel="noopener noreferrer" onSubmit={() => setSubmitted(true)}>
                <fieldset className="inquiry-section">
                  <legend><span>01</span> Seu momento</legend>
                  <p id="priority-help" className="inquiry-hint">Escolha a prioridade do seu negócio.</p>
                  <div className="inquiry-options" aria-describedby="priority-help">
                    {[
                      ["Marca e identidade visual", "Marca & identidade", "Apresentar o valor da sua empresa"],
                      ["Criar ou melhorar o site", "Site estratégico", "Transformar visitas em conversas"],
                      ["Google, SEO e buscas com IA", "SEO & buscas com IA", "Ser encontrado por quem procura"],
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
                    <label htmlFor="inquiry-context">Sobre o projeto <span>(opcional)</span><textarea id="inquiry-context" name="entry.591864992" rows={4} placeholder="O que você gostaria de melhorar?" maxLength={5000} /></label>
                  </div>
                </details>
                <div className="inquiry-send">
                  <p>Ao enviar, você permite que a Orvalia use essas informações para responder ao seu contato. <Link to="/privacidade/">Política de privacidade</Link>.</p>
                  <button type="submit">Enviar meu projeto <ArrowUpRight size={20} aria-hidden="true" /></button>
                  <span className="inquiry-hint">A confirmação do envio abre em outra aba. Sem compromisso.</span>
                  {submitted && <div className="inquiry-status" role="status">Confira a confirmação na aba aberta pelo Google. Seus dados continuam aqui caso precise tentar novamente. <a href={formUrl} target="_blank" rel="noopener noreferrer">Abrir formulário alternativo <ArrowUpRight size={14} aria-hidden="true" /></a></div>}
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
