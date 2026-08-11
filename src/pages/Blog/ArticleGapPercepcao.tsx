import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight, MessageCircle } from "lucide-react";
import SEO from "../../components/SEO";
import ShareButton from "../../components/ShareButton";

export default function ArticleGapPercepcao() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Gap de percepção digital: por que empresas excelentes parecem comuns na internet",
    "description": "A distância entre a competência real de uma empresa e o valor que o seu cliente consegue perceber no primeiro clique.",
    "author": {
      "@type": "Person",
      "name": "Bruno Correa Gomes",
      "jobTitle": "Diretor Estratégico",
      "worksFor": {
        "@type": "Organization",
        "name": "Orvalia Studio"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Orvalia Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://orvalia.com.br/logo.png"
      }
    },
    "datePublished": "2026-08-10",
    "dateModified": "2026-08-10",
    "mainEntityOfPage": "https://orvalia.com.br/blog/gap-de-percepcao-digital-empresas-excelentes-comuns"
  };

  return (
    <>
      <SEO 
        title="Gap de percepção digital: por que empresas excelentes parecem comuns na internet — Orvalia Studio"
        description="Entenda por que negócios maduros e competentes parecem genéricos no digital e como fechar essa distância com estratégia de marca, mensagem e site."
        canonical="https://orvalia.com.br/blog/gap-de-percepcao-digital-empresas-excelentes-comuns"
        schema={articleSchema}
      />

      <article className="min-h-screen bg-brand-bg pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-24 text-brand-text">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumb & Share */}
          <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/10">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-brand-secondary hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
            >
              <ChevronLeft size={16} />
              Voltar ao Orvalia / Perspectivas
            </Link>
            <ShareButton />
          </div>

          {/* Header */}
          <header className="space-y-6 mb-16">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-red" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">
                TERRITÓRIO 01 // GAP DE PERCEPÇÃO
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black text-white leading-[1.05] tracking-tighter uppercase">
              Gap de percepção digital: por que empresas excelentes parecem comuns na internet
            </h1>

            <p className="text-lg md:text-2xl text-brand-secondary font-sans leading-relaxed border-l-2 border-brand-red pl-6 py-1 italic font-serif">
              A distância entre a competência real do seu negócio no mundo físico e o valor que o seu cliente consegue perceber no primeiro clique.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-brand-secondary font-mono text-xs uppercase tracking-widest pt-4 border-t border-white/10">
              <span className="text-white font-bold">Por Bruno Correa Gomes</span>
              <span>•</span>
              <span>10 Ago 2026</span>
              <span>•</span>
              <span>8 min de leitura</span>
            </div>
          </header>

          {/* Diagnostic Visual Box */}
          <div className="my-12 p-8 bg-neutral-900 border border-white/10 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
              [SÍNTESE DO DIAGNÓSTICO]
            </div>
            <p className="text-white font-sans text-sm md:text-base leading-relaxed">
              O Gap de Percepção não é uma falha de produto, atendimento ou serviço. É uma falha de tradução. Ocorre quando a empresa acumula anos de reputação e entregas consistentes, mas continua se apresentando com a mesma linguagem, estrutura e usabilidade de quando estava começando.
            </p>
          </div>

          {/* Article Body */}
          <div className="space-y-12 text-brand-secondary text-base md:text-lg leading-relaxed font-sans font-normal">
            
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">
                1. O sintoma invisível dos negócios maduros
              </h2>
              <p>
                Imagine um escritório de advocacia com 15 anos de atuação, casos de alta complexidade vencidos e clientes satisfeitos. Ou uma clínica médica com equipe altamente qualificada e tecnologia de ponta.
              </p>
              <p>
                Quando um cliente potencial pede uma indicação, ou pesquisa a empresa no Google antes de agendar uma reunião, o que ele encontra?
              </p>
              <p>
                Na maioria das vezes, encontra um site feito há cinco anos, textos genéricos repletos de chavões (“excelência”, “inovação”, “soluções personalizadas”) e um visual idêntico ao de concorrentes recém-chegados ao mercado.
              </p>
              <p className="text-white font-medium">
                É aí que o Gap de Percepção se instala.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">
                2. Os 3 sinais mais comuns de que sua empresa tem um Gap de Percepção
              </h2>
              
              <div className="space-y-6 pt-2">
                <div className="p-6 bg-white/[0.02] border border-white/5 space-y-2">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">
                    Sinal 01: O cliente compara seu preço com o da concorrência amadora
                  </h3>
                  <p className="text-sm text-brand-secondary">
                    Se você precisa dar explicações exaustivas na reunião comercial para justificar por que o seu valor é mais alto que o do concorrente, a sua comunicação digital não fez o trabalho prévio de filtrar e educar o cliente.
                  </p>
                </div>

                <div className="p-6 bg-white/[0.02] border border-white/5 space-y-2">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">
                    Sinal 02: O site é um folheto institucional, não um filtro comercial
                  </h3>
                  <p className="text-sm text-brand-secondary">
                    Seu site apenas "informa" que a empresa existe, mas não conduz o visitante por uma linha lógica de argumentação, prova de autoridade e tomada de decisão.
                  </p>
                </div>

                <div className="p-6 bg-white/[0.02] border border-white/5 space-y-2">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">
                    Sinal 03: A liderança sente vergonha de passar o link do próprio site
                  </h3>
                  <p className="text-sm text-brand-secondary">
                    Quando os sócios ou diretores preferem passar o WhatsApp pessoal em vez do site oficial porque sabem que a página não representa o tamanho real da operação.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">
                3. Como fechar o Gap: O Framework de 4 Camadas da Orvalia
              </h2>
              <p>
                Fechar essa distância não se resolve comprando um template de site mais bonito ou mudando a paleta de cores. Exige um alinhamento estruturado em quatro camadas:
              </p>

              <ul className="space-y-4 pt-2">
                <li className="p-4 border-l-2 border-brand-red bg-white/[0.01]">
                  <strong className="text-white block font-sans font-bold uppercase text-sm mb-1">01 / MERCADO:</strong>
                  Compreender exatamente contra quem o seu cliente compara você e qual padrão estético saturado da sua categoria precisa ser rompido.
                </li>
                <li className="p-4 border-l-2 border-brand-red bg-white/[0.01]">
                  <strong className="text-white block font-sans font-bold uppercase text-sm mb-1">02 / MENSAGEM:</strong>
                  Articular em poucas palavras a razão inquestionável pela qual a sua empresa é a escolha mais segura para o cliente.
                </li>
                <li className="p-4 border-l-2 border-brand-red bg-white/[0.01]">
                  <strong className="text-white block font-sans font-bold uppercase text-sm mb-1">03 / EXPERIÊNCIA:</strong>
                  Desenvolver uma interface rápida, elegante e com hierarquia tipográfica rigorosa, na qual cada detalhe visual projeta maturidade.
                </li>
                <li className="p-4 border-l-2 border-brand-red bg-white/[0.01]">
                  <strong className="text-white block font-sans font-bold uppercase text-sm mb-1">04 / AQUISIÇÃO:</strong>
                  Otimizar a estrutura técnica para buscas locais e motores de IA (GEO/SEO), encurtando o caminho entre a intenção do cliente e a conversa direta.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">
                Conclusão: O valor real precisa de uma tradução à altura
              </h2>
              <p>
                Se a sua empresa já venceu as etapas mais difíceis no mundo real — conquistou clientes, consolidou processos e construiu reputação —, a sua presença digital não pode ser o elo fraco da operação.
              </p>
              <p>
                Fechar o Gap de Percepção é o investimento mais rentável para marcas que querem parar de disputar atenção com amadores e passar a ser percebidas exatamente pelo valor que entregam.
              </p>
            </section>

          </div>

          {/* Contextual CTA Box */}
          <div className="mt-16 p-8 md:p-12 border border-brand-red bg-brand-red/10 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold block">
              DIAGNÓSTICO ESTRATÉGICO
            </span>
            <h3 className="text-2xl md:text-3xl font-sans font-black text-white uppercase tracking-tight">
              Sua empresa tem um Gap de Percepção?
            </h3>
            <p className="text-sm md:text-base text-brand-secondary font-sans leading-relaxed">
              Agende uma conversa direta com Bruno Correa Gomes para analisar a clareza, a mensagem e o alinhamento da sua presença digital atual.
            </p>
            <a 
              href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Li%20o%20artigo%20sobre%20o%20Gap%20de%20Percepção%20e%20gostaria%20de%20mapear%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest transition-colors"
            >
              <MessageCircle size={18} />
              <span>Mapear meu gap de percepção</span>
            </a>
          </div>

        </div>
      </article>
    </>
  );
}
