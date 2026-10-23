import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [site, setSite] = useState("");
  const [prioridade, setPrioridade] = useState("Diagnóstico completo (marca + site + busca)");
  const [contexto, setContexto] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Solicitação de diagnóstico estratégico pelo site Orvalia",
      "",
      `Nome: ${nome.trim()}`,
      `E-mail para resposta: ${email.trim()}`,
      `Telefone: ${telefone.trim() || "Não informado"}`,
      `Empresa: ${empresa}`,
      `Site/Instagram: ${site.trim() || "Não informado"}`,
      `Prioridade: ${prioridade}`,
      `Contexto: ${contexto.trim() || "Gostaria de conversar sobre o momento atual da empresa."}`,
    ].join("\n");
    setDraft(message);
    setCopyStatus("");
    window.open(`mailto:orvaliastudio@gmail.com?subject=${encodeURIComponent("Diagnóstico estratégico | Orvalia Studio")}&body=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

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

            <div className="bg-brand-warm border border-brand-line p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Pedir diagnóstico estratégico</h2>
              <p className="text-sm text-brand-muted mb-8">Preencha os campos para preparar um e-mail com as informações do seu projeto. Você poderá revisar a mensagem antes de enviá-la.</p>
              <form action="mailto:orvaliastudio@gmail.com" method="post" encType="text/plain" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider mb-2">Seu nome *</label>
                  <input id="nome" name="nome" type="text" maxLength={120} autoComplete="name" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Como podemos chamar você?"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-wider mb-2">Empresa ou negócio *</label>
                  <input id="empresa" name="empresa" type="text" maxLength={160} autoComplete="organization" required value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Nome da empresa"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2">Seu e-mail *</label>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@suaempresa.com.br"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-xs font-bold uppercase tracking-wider mb-2">Telefone (opcional)</label>
                  <input id="telefone" name="telefone" type="tel" autoComplete="tel" maxLength={30} value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="DDD + número"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <div>
                  <label htmlFor="site" className="block text-xs font-bold uppercase tracking-wider mb-2">Site atual ou Instagram</label>
                  <input id="site" name="site" type="text" maxLength={300} value={site} onChange={(e) => setSite(e.target.value)} placeholder="www.suaempresa.com.br ou @perfil"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <div>
                  <label htmlFor="prioridade" className="block text-xs font-bold uppercase tracking-wider mb-2">Prioridade atual</label>
                  <select id="prioridade" name="prioridade" value={prioridade} onChange={(e) => setPrioridade(e.target.value)}
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark">
                    <option>Reposicionar marca e identidade visual</option>
                    <option>Criar ou reconstruir site profissional</option>
                    <option>Melhorar presença no Google e em ferramentas de IA</option>
                    <option>Diagnóstico completo (marca + site + busca)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contexto" className="block text-xs font-bold uppercase tracking-wider mb-2">Conte um pouco do desafio (opcional)</label>
                  <textarea id="contexto" name="contexto" rows={4} maxLength={3000} value={contexto} onChange={(e) => setContexto(e.target.value)} placeholder="O que você gostaria de melhorar hoje?"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm resize-y focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <button type="submit" className="w-full py-4 px-5 bg-brand-ink text-brand-warm font-semibold text-sm flex items-center justify-between gap-4 hover:bg-brand-graphite transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-dark">
                  <span>Preparar e-mail</span><ArrowUpRight size={18} className="text-brand-cyan" />
                </button>
                <p className="text-xs text-brand-muted leading-relaxed">O botão abre seu aplicativo de e-mail. O envio só acontece quando você confirmar nele. Seus dados serão usados para responder à solicitação. <Link to="/privacidade/" className="underline underline-offset-2">Política de privacidade</Link>.</p>
              </form>
              {draft && <div className="mt-6 border-t border-brand-line pt-6">
                <p role="status" className="text-sm text-brand-muted mb-4">A mensagem está preparada. Revise e envie no seu aplicativo de e-mail. Se ele não abriu, copie o texto abaixo e envie para orvaliastudio@gmail.com.</p>
                <label htmlFor="mensagem-preparada" className="block text-xs font-semibold mb-2">Sua mensagem</label>
                <textarea id="mensagem-preparada" readOnly value={draft} rows={8} className="w-full bg-brand-mineral border border-brand-line p-4 text-sm text-brand-ink leading-relaxed" />
                <button type="button" className="mt-3 border border-brand-line px-4 py-3 text-sm min-h-11" onClick={async () => {
                  try { await navigator.clipboard.writeText(draft); setCopyStatus("Mensagem copiada."); }
                  catch { setCopyStatus("Selecione e copie o texto da mensagem acima."); }
                }}>Copiar mensagem</button>
                <p role="status" className="text-xs text-brand-muted mt-2">{copyStatus}</p>
              </div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
