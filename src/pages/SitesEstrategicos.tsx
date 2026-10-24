import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Search, Target, Zap, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { num: "Foco", label: "Presença digital mais clara, profissional e preparada para conversão." },
  { num: "Atração", label: "Estrutura pensada para atrair contatos mais alinhados ao seu negócio." }
];

const problems = [
  "Você busca o seu serviço e a sua empresa não aparece.",
  "O seu site não gera mensagens no WhatsApp.",
  "Os clientes confiam mais no Instagram do que no seu site.",
  "Você investe em tráfego, mas não converte."
];

const solutions = [
  {
    icon: Search,
    title: "SEO desde a base",
    desc: "Estrutura preparada para rastreamento e indexação: títulos, navegação e conteúdo acessíveis. A indexação e as posições dependem dos buscadores."
  },
  {
    icon: Target,
    title: "Textos claros",
    desc: "Textos que explicam os serviços, respondem às dúvidas e mostram como entrar em contato."
  },
  {
    icon: Zap,
    title: "Navegação simples",
    desc: "Cada elemento, espaço e contraste existe com a função de gerar uma ação."
  }
];

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Análise do negócio e concorrência real." },
  { num: "02", title: "Estratégia", desc: "Definição de posicionamento e estrutura." },
  { num: "03", title: "Produção", desc: "Design, desenvolvimento e textos." },
  { num: "04", title: "Lançamento", desc: "Publicação, conferência técnica e suporte combinado." }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Criação de sites e páginas para campanhas",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Orvalia Studio"
  },
  "areaServed": "Indaiatuba",
  "description": "Sites e páginas para apresentar seu negócio e facilitar o contato."
};

export default function SitesEstrategicos() {
  return (
    <div className="min-h-screen bg-brand-mineral text-brand-ink pt-28 md:pt-36">
      <SEO 
        title="Criação de sites em Indaiatuba e Campinas | Orvalia Studio"
        description="Sites para empresas e profissionais de Indaiatuba e Campinas. Serviços claros, contato integrado e estrutura preparada para buscas. Converse sobre seu projeto."
        canonical="https://orvalia.com.br/sites/"
        schema={serviceSchema}
      />

      {/* Hero Section */}
      <section className="relative pb-20 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="dna-grid gap-12 items-center">
            <div className="col-span-4 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[2px] bg-brand-cyan-dark" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">
                    Indaiatuba · RMC Campinas
                  </span>
                </div>
                
                <h1 className="page-title text-5xl md:text-7xl lg:text-[6vw] font-sans font-medium leading-[0.95] tracking-tight mb-8">
                  Criação de sites em <br />
                  <span className="italic font-serif font-light text-[#55605D]">Indaiatuba e Campinas.</span>
                </h1>
                <p className="text-xl text-[#475553] leading-relaxed max-w-2xl mb-12">
                  Criamos sites em Indaiatuba com informações sobre os serviços, navegação para celular e caminhos diretos para entrar em contato.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    to="/contato/"
                    className="px-10 py-5 bg-brand-ink text-brand-warm editorial-button font-semibold uppercase tracking-widest text-xs hover:-translate-y-1 transition-transform text-center flex items-center justify-center gap-3"
                  >
                    Conversar sobre meu projeto
                  </Link>
                  <Link 
                    to="/portfolio/" 
                    className="px-10 py-5 bg-transparent text-brand-ink border border-brand-line editorial-button font-semibold uppercase tracking-widest text-xs hover:bg-brand-ink hover:text-brand-warm transition-colors text-center"
                  >
                    Ver projetos
                  </Link>
                </div>
                <p className="mt-10 font-mono text-xs text-[#55605D] font-bold uppercase tracking-widest">
                  Projetos Autorais · Foco em Percepção de Valor · Atendimento na Região
                </p>
              </motion.div>
            </div>

            <div className="col-span-4 lg:col-span-4 space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-8 md:p-10 editorial-panel bg-brand-warm border border-brand-line relative overflow-hidden group text-left"
                >
                  <div className="text-xl font-medium text-brand-ink tracking-tight mb-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan-dark" />
                    {stat.num}
                  </div>
                  <div className="text-sm text-[#55615d] leading-relaxed">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="surface-secondary py-24 border-y border-brand-line">
        <div className="container mx-auto px-6">
          <div className="dna-grid gap-12">
            <div className="col-span-4 lg:col-span-6">
              <h2 className="section-title text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight mb-8">
                Ser encontrado é o começo. <br /> <span className="italic font-serif font-light text-[#55605D]">Fazer sentido vem depois.</span>
              </h2>
              <p className="text-lg text-[#475553] leading-relaxed mb-12">
                Um site precisa explicar seus serviços, transmitir confiança e facilitar o próximo passo. É essa conexão que orienta cada página do projeto.
              </p>
            </div>
            <div className="col-span-4 lg:col-span-6">
              <ul className="space-y-6">
                {problems.map((prob, i) => (
                  <motion.li 
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 items-start p-6 rounded-2xl bg-brand-mineral border border-brand-line"
                  >
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-cyan-dark shrink-0" />
                    <span className="text-lg text-brand-ink font-medium">{prob}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quebra de Crença (Deep Ink Contrast) */}
      <section className="py-32 bg-brand-ink text-brand-mineral text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center gap-2 mb-8">
              <span className="block w-2.5 h-2.5 rounded-full bg-brand-cyan"></span>
            </div>
            <h2 className="section-title text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.05]">
              Um site organiza <br /> <span className="italic font-serif font-light text-brand-cyan">a conversa com seu cliente.</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#b1bdb8] font-sans not-italic max-w-2xl mx-auto leading-relaxed border-l-2 border-brand-cyan pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              Seu cliente precisa entender o que você oferece, encontrar informações confiáveis e saber como falar com sua empresa. Conteúdo e design trabalham juntos para facilitar esse caminho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-24 bg-brand-mineral border-b border-brand-line">
        <div className="container mx-auto px-6">
          <div className="dna-grid mb-20">
            <div className="col-span-4 lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-brand-cyan-dark" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan-dark">Como resolvemos isso</span>
              </div>
              <h2 className="section-title text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight">
                Sites que trabalham <br /> <span className="italic font-serif font-light text-[#55605D]">para a sua empresa.</span>
              </h2>
            </div>
          </div>

          <div className="dna-grid gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="col-span-4 lg:col-span-4 p-10 editorial-panel bg-brand-warm border border-brand-line"
              >
                <div className="mb-8">
                  <sol.icon className="text-brand-cyan-dark" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium text-brand-ink mb-4 tracking-tight">{sol.title}</h3>
                <p className="text-[#55615d] leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregas */}
      <section className="py-24 bg-brand-warm border-b border-brand-line">
        <div className="container mx-auto px-6">
          <div className="dna-grid gap-12 items-center">
            <div className="col-span-4 lg:col-span-5">
              <h2 className="section-title text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight mb-8">
                O que você <br /> <span className="italic font-serif font-light text-[#55605D]">recebe.</span>
              </h2>
              <div className="border-l-2 border-brand-cyan-dark pl-6">
                <p className="text-xl text-brand-ink font-sans not-italic leading-relaxed">
                  O projeto reúne apresentação dos serviços, organização do conteúdo e caminhos de contato. A proposta detalha as páginas, integrações e responsabilidades de cada parte.
                </p>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-7">
              <div className="space-y-4">
                {[
                  "Site profissional otimizado para SEO",
                  "Design editorial alinhado ao posicionamento",
                  "Integração direta com WhatsApp e recebimento de contatos",
                  "Revisão do carregamento e do tamanho das imagens",
                  "Possibilidade de adicionar serviços e novas páginas"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-brand-mineral border border-brand-line hover:border-brand-ink transition-colors"
                  >
                    <CheckCircle2 className="text-brand-cyan-dark shrink-0" size={24} strokeWidth={1.5} />
                    <span className="text-lg text-brand-ink font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 bg-brand-mineral border-b border-brand-line">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-8 h-[2px] bg-brand-cyan-dark mb-6" />
            <h2 className="section-title text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight">
              Como <span className="italic font-serif font-light text-[#55605D]">funciona.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-brand-line pt-8"
              >
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#4c5955] mb-6">
                  Passo / {step.num}
                </div>
                <h3 className="text-2xl font-medium text-brand-ink mb-4">{step.title}</h3>
                <p className="text-[#55615d] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-mineral border-b border-brand-line">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-3xl md:text-4xl mb-6">Antes de pedir uma proposta.</h2>
          <p className="text-lg text-[#475553] max-w-2xl mb-8">Veja como comparar escopos e conheça exemplos reais. O investimento depende das páginas, do conteúdo e das integrações necessárias.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link className="project-detail-link" to="/blog/quanto-custa-site-indaiatuba/">O que define o custo de um site <ArrowUpRight size={17} /></Link>
            <Link className="project-detail-link" to="/portfolio/dario-eletricidade/">Serviços técnicos: Dario Eletricidade <ArrowUpRight size={17} /></Link>
            <Link className="project-detail-link" to="/portfolio/quinta-de-caraiva/">Hospedagem: Quinta de Caraíva <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-brand-warm text-center">
        <div className="container mx-auto px-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-cyan-dark" />
            </div>
            <h2 className="section-title text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight mb-8">
              Vamos organizar <br />
              <span className="italic font-serif font-light text-[#55605D]">o site da sua empresa?</span>
            </h2>
            <p className="text-lg text-[#475553] leading-relaxed mb-12 max-w-2xl mx-auto">
              Conte o momento da empresa no formulário. Bruno analisa e responde pelo e-mail informado para combinar o próximo passo. Você avalia a proposta antes de decidir.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contato/"
                className="px-10 py-5 bg-brand-ink text-brand-mineral editorial-button font-semibold uppercase tracking-widest text-xs hover:-translate-y-1 transition-transform flex items-center justify-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                Conversar sobre meu projeto
              </Link>
              <a 
                href="mailto:orvaliastudio@gmail.com" 
                className="px-10 py-5 border border-brand-line text-brand-ink editorial-button font-semibold uppercase tracking-widest text-xs hover:bg-brand-ink hover:text-brand-warm transition-colors"
              >
                Enviar e-mail
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
