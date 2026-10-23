import { useState, type FormEvent } from "react";
import SEO from "../components/SEO";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [site, setSite] = useState("");
  const [prioridade, setPrioridade] = useState("Diagnóstico completo (marca + site + busca)");
  const [contexto, setContexto] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Olá, Bruno! Vim pela página de Contato da Orvalia e gostaria de solicitar um diagnóstico estratégico.",
      "",
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `Site/Instagram: ${site.trim() || "Não informado"}`,
      `Prioridade: ${prioridade}`,
      `Contexto: ${contexto.trim() || "Gostaria de conversar sobre o momento atual da empresa."}`,
    ].join("\n");
    window.open(`https://wa.me/5511978959567?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
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
                  <div><span className="font-semibold block mb-1">E-mail</span><a href="mailto:contato@orvalia.com.br" className="text-brand-muted underline underline-offset-2">contato@orvalia.com.br</a></div>
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
              <p className="text-sm text-brand-muted mb-8">Preencha os campos para abrir uma conversa no WhatsApp com as informações organizadas.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider mb-2">Seu nome *</label>
                  <input id="nome" name="nome" type="text" autoComplete="name" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Como podemos chamar você?"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-wider mb-2">Empresa ou negócio *</label>
                  <input id="empresa" name="empresa" type="text" autoComplete="organization" required value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Nome da empresa"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <div>
                  <label htmlFor="site" className="block text-xs font-bold uppercase tracking-wider mb-2">Site atual ou Instagram</label>
                  <input id="site" name="site" type="text" value={site} onChange={(e) => setSite(e.target.value)} placeholder="www.suaempresa.com.br ou @perfil"
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
                  <textarea id="contexto" name="contexto" rows={4} value={contexto} onChange={(e) => setContexto(e.target.value)} placeholder="O que você gostaria de melhorar hoje?"
                    className="w-full px-4 py-3.5 bg-brand-mineral border border-brand-line text-brand-ink text-sm resize-y focus:outline-none focus:border-brand-cyan-dark focus:ring-1 focus:ring-brand-cyan-dark" />
                </div>
                <button type="submit" className="w-full py-4 px-5 bg-brand-ink text-brand-warm font-semibold text-sm flex items-center justify-between gap-4 hover:bg-brand-graphite transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-dark">
                  <span>Continuar pelo WhatsApp</span><ArrowUpRight size={18} className="text-brand-cyan" />
                </button>
                <p className="text-xs text-brand-muted leading-relaxed">Ao continuar, os dados preenchidos serão incluídos na mensagem que você poderá revisar antes de enviar pelo WhatsApp.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
