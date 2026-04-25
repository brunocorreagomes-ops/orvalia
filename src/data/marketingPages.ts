export interface MarketingPage {
  slug: string;
  title: string;
  headline: string;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    features: { name: string; desc: string }[];
  };
  cta: string;
}

export const marketingPages: MarketingPage[] = [
  {
    slug: "criacao-de-sites-indaiatuba",
    title: "Criação de Sites em Indaiatuba",
    headline: "Seu site deve ser um vendedor 24 horas, não um custo fixo.",
    problem: {
      title: "Sites lentos e amadores afastam clientes.",
      description: "A maioria das empresas em Indaiatuba perde vendas porque seus sites não transmitem confiança ou não abrem corretamente no celular."
    },
    solution: {
      title: "Websites de Alta Performance",
      features: [
        { name: "Velocidade Extrema", desc: "Carregamento instantâneo para não perder nenhum visitante." },
        { name: "Foco em Conversão", desc: "Design planejado para guiar o usuário até o WhatsApp." },
        { name: "Mobile First", desc: "Experiência perfeita em smartphones e tablets." }
      ]
    },
    cta: "Construa sua autoridade digital hoje."
  },
  {
    slug: "landing-pages-indaiatuba",
    title: "Landing Pages em Indaiatuba",
    headline: "Páginas de alta conversão para dominar o tráfego pago.",
    problem: {
      title: "Investir em anúncios e levar para um site genérico é queimar dinheiro.",
      description: "Muitas empresas na RMC investem alto em Google Ads, mas a página de destino não convence o público a clicar no botão de contato."
    },
    solution: {
      title: "Landing Pages de Elite",
      features: [
        { name: "Copy Persuasiva", desc: "Textos escritos com técnicas de neuromarketing para vender." },
        { name: "Oferta Irresistível", desc: "Estruturamos sua comunicação para maximizar o ROI." },
        { name: "Tracking Avançado", desc: "Saiba exatamente de onde vêm seus melhores leads." }
      ]
    },
    cta: "Transforme cliques em clientes agora."
  },
  {
    slug: "seo-indaiatuba",
    title: "SEO em Indaiatuba",
    headline: "Apareça no topo do Google quando seu cliente mais precisa.",
    problem: {
      title: "Ser invisível no Google é deixar dinheiro na mesa.",
      description: "Se sua empresa não aparece na primeira página para buscas locais em Indaiatuba, seu concorrente está ficando com todos os seus clientes."
    },
    solution: {
      title: "Dominância Orgânica",
      features: [
        { name: "SEO Local", desc: "Otimização focada em buscas por bairro e cidade (Indaiatuba)." },
        { name: "Conteúdo Relevante", desc: "Blogs e páginas que respondem às dúvidas dos seus clientes." },
        { name: "Autoridade Técnica", desc: "Ajustes estruturais que o Google adora e premia com posições." }
      ]
    },
    cta: "Chegue no topo das buscas orgânicas."
  },
  {
    slug: "sites-para-medicos-indaiatuba",
    title: "Sites para Médicos em Indaiatuba",
    headline: "Autoridade e confiança para profissionais de saúde premium.",
    problem: {
      title: "Sua imagem profissional merece um posicionamento de elite.",
      description: "Pacientes qualificados buscam clínicas em Indaiatuba que demonstram seriedade, tecnologia e acolhimento através do digital."
    },
    solution: {
      title: "Presença Digital Médica",
      features: [
        { name: "Design Sobriedade", desc: "Estética clean que transmite confiança e profissionalismo." },
        { name: "Agendamento Facilitado", desc: "Integração direta com sistemas de consulta ou WhatsApp." },
        { name: "SEO de Especialidade", desc: "Ranqueie para procedimentos específicos e exames." }
      ]
    },
    cta: "Eleve o padrão do seu consultório."
  },
  {
    slug: "sites-para-advogados-indaiatuba",
    title: "Sites para Advogados em Indaiatuba",
    headline: "Presença jurídica sólida e estratégica para captar melhores causas.",
    problem: {
      title: "Um cartão de visita digital fraco compromete sua credibilidade.",
      description: "O direito exige autoridade. Clientes em busca de defesa jurídica em Indaiatuba precisam sentir segurança ao acessar seu portal."
    },
    solution: {
      title: "Advocacia Digital 4.0",
      features: [
        { name: "Branding Jurídico", desc: "Identidade visual que impõe respeito e sobriedade." },
        { name: "Marketing de Conteúdo", desc: "Artigos informativos que estabelecem você como especialista." },
        { name: "Segurança de Dados", desc: "Sistemas protegidos e em conformidade com a LGPD." }
      ]
    },
    cta: "Destaque seu escritório na região."
  },
  {
    slug: "branding-em-indaiatuba",
    title: "Branding em Indaiatuba",
    headline: "Transformamos o seu negócio em uma marca inesquecível.",
    problem: {
      title: "Empresas sem alma são esquecidas pelo preço.",
      description: "Se você compete apenas por preço em Indaiatuba, é porque sua marca ainda não gerou conexão emocional com o público."
    },
    solution: {
      title: "Construção de Marcas Fortes",
      features: [
        { name: "Identidade Visual Única", desc: "Design exclusivo que separa você do amadorismo." },
        { name: "Voz e Tom", desc: "Comunicação que ressoa com os valores do seu cliente ideal." },
        { name: "Posicionamento Premium", desc: "Estratégias para tornar seu produto um objeto de desejo." }
      ]
    },
    cta: "Deixe de ser uma opção e vire uma escolha."
  }
];
