import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeBpHWidIKmwrucijCwndBQhce1P2x5-4mPBBxct4KuNgGySQ/viewform?usp=publish-editor&hl=pt-BR";
  const embedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeBpHWidIKmwrucijCwndBQhce1P2x5-4mPBBxct4KuNgGySQ/viewform?embedded=true&hl=pt-BR";

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

            <section aria-labelledby="contact-form-title" className="min-w-0">
              <h2 id="contact-form-title" className="sr-only">Formulário de diagnóstico estratégico</h2>
              <p className="text-sm text-brand-muted leading-relaxed mb-5">Preencha o formulário e clique em Enviar. Sua solicitação será registrada e a Orvalia responderá pelo e-mail informado.</p>
              <iframe
                src={embedUrl}
                title="Formulário de diagnóstico estratégico da Orvalia"
                width="100%"
                height="760"
                className="block w-full h-[80svh] min-h-[560px] max-h-[840px] border border-brand-line bg-[#f6f6f6]"
                data-lenis-prevent
              >Carregando formulário de contato…</iframe>
              <div className="border-t border-brand-line pt-5 mt-5 space-y-4">
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan-dark">Abrir formulário em outra aba <ArrowUpRight size={16} /></a>
                <p className="text-xs text-brand-muted leading-relaxed">As informações são usadas para responder à sua solicitação. O formulário é processado pelo Google e as respostas ficam em uma planilha privada da Orvalia. <Link to="/privacidade/" className="underline underline-offset-2">Política de privacidade</Link>.</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
