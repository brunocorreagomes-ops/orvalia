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
  relatedCase?: {
    client: string;
    segment: string;
    context: string;
    solution: string;
    metric: string;
    image: string;
  };
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
    cta: "Construa sua autoridade digital hoje.",
    relatedCase: {
      client: "DARIO ELETRICIDADE",
      segment: "Serviços • Engenharia Elétrica Local",
      context: "Baixa presença orgânica no Google frente a concorrentes na cidade.",
      solution: "Reposicionamento digital para apresentar serviços industriais com mais clareza, autoridade e objetividade.",
      metric: "Serviço técnico com comunicação mais confiável",
      image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png"
    }
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
    cta: "Transforme cliques em clientes agora.",
    relatedCase: {
      client: "BETH OLMEDA",
      segment: "Mentoria • Marca Pessoal & Estética",
      context: "Posicionamento digital desatualizado e falta de clareza na oferta de serviços.",
      solution: "Redesign de marca premium, nova narrativa e Landing Page estratégica de alta conversão.",
      metric: "Estética facial com presença mais premium",
      image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg"
    }
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
    cta: "Chegue no topo das buscas orgânicas.",
    relatedCase: {
      client: "QUINTA DE CARAÍVA",
      segment: "Turismo • Hotelaria & Experiências",
      context: "Processo de reservas manual ineficiente e perda de conversões no tráfego.",
      solution: "Branding e arquitetura digital para traduzir exclusividade, natureza e sofisticação em uma experiência de marca.",
      metric: "Hospedagem exclusiva com narrativa de desejo",
      image: "https://i.ibb.co/8nLt62wX/Captura-de-tela-2026-04-22-141843.webp"
    }
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
    cta: "Eleve o padrão do seu consultório.",
    relatedCase: {
      client: "RYNA HAYASHI",
      segment: "Psicologia • Clínica de Alto Padrão",
      context: "Falta de presença estruturada e dependência de indicações físicas locais.",
      solution: "Construção de uma presença digital sensível, técnica e premium para fortalecer autoridade clínica.",
      metric: "Psicologia com posicionamento mais acolhedor e sofisticado",
      image: "https://i.ibb.co/S7733Rfs/ryna-hayashi.webp"
    }
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
    cta: "Destaque seu escritório na região.",
    relatedCase: {
      client: "MARTA ANA CHICONATO",
      segment: "Estratégia • Terapia Integrativa",
      context: "Atração de leads desqualificados e baixa conversão com o formato antigo.",
      solution: "Estratégia visual e narrativa para organizar a percepção da marca e fortalecer sua presença digital.",
      metric: "Marca pessoal com comunicação mais profissional",
      image: "https://i.ibb.co/2366nSC3/marta-identidade.webp"
    }
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
    cta: "Deixe de ser uma opção e vire uma escolha.",
    relatedCase: {
      client: "KNJ TUR",
      segment: "Turismo • Agência de Viagens",
      context: "Identidade visual genérica que não refletia a exclusividade dos pacotes oferecidos.",
      solution: "Redesign completo de marca, posicionando a empresa como boutique de experiências e viagens personalizadas.",
      metric: "Aumento na procura por pacotes premium",
      image: "https://i.ibb.co/zXqG9zF/knj.webp"
    }
  }
];
