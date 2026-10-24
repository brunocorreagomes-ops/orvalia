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
    width: number;
    height: number;
  };
}

export const marketingPages: MarketingPage[] = [
  {
    "slug": "criacao-de-sites-indaiatuba",
    "title": "Criação de Sites em Indaiatuba",
    "headline": "Um site que apresenta sua empresa e facilita a conversa.",
    "problem": {
      "title": "O cliente precisa entender o serviço antes de entrar em contato.",
      "description": "Sites institucionais em Indaiatuba com páginas de serviços, navegação no celular e informações de atendimento. O escopo é definido a partir do negócio e do conteúdo disponível."
    },
    "solution": {
      "title": "Estrutura para apresentar e atender",
      "features": [
        {
          "name": "Páginas de serviços",
          "desc": "Organização da oferta, das dúvidas frequentes e dos contatos de cada área."
        },
        {
          "name": "Leitura no celular",
          "desc": "Layout e controles conferidos em telas pequenas, com atenção ao tamanho dos textos e às imagens."
        },
        {
          "name": "Publicação e revisão",
          "desc": "Conferência de links, metadados e formulário antes da entrega, conforme a plataforma escolhida."
        }
      ]
    },
    "cta": "Vamos planejar o site da sua empresa.",
    "relatedCase": {
      "client": "KNJ Tur",
      "segment": "Turismo • Agência de viagens",
      "context": "Apresentar assessoria de vistos, viagens e canais de atendimento.",
      "solution": "Organização dos serviços e dos caminhos de contato na página.",
      "metric": "Site de apresentação da agência e de seus serviços.",
      "image": "/cases/knj-tur-mobile.jpg",
      "width": 837,
      "height": 1536
    }
  },
  {
    "slug": "landing-pages-indaiatuba",
    "title": "Páginas para campanhas em Indaiatuba",
    "headline": "Uma página com foco na oferta e no próximo passo.",
    "problem": {
      "title": "A campanha e a página precisam contar a mesma história.",
      "description": "Páginas para apresentar uma oferta específica em campanhas de Indaiatuba e região. Estrutura, texto e contato são planejados para a intenção do visitante."
    },
    "solution": {
      "title": "Uma oferta por página",
      "features": [
        {
          "name": "Mensagem da campanha",
          "desc": "Alinhamento entre o anúncio, a promessa apresentada e o conteúdo que a empresa consegue comprovar."
        },
        {
          "name": "Caminho para o contato",
          "desc": "Explicação do serviço e formulário ou canal de atendimento adequado à oferta."
        },
        {
          "name": "Medição combinada",
          "desc": "Eventos e ferramentas de medição podem integrar a proposta, com os acessos e requisitos necessários."
        }
      ]
    },
    "cta": "Conte qual oferta você quer apresentar.",
    "relatedCase": {
      "client": "Beth Olmeda",
      "segment": "Estética • Marca pessoal",
      "context": "Apresentar os serviços e a identidade profissional.",
      "solution": "Identidade visual, textos de apresentação e página de serviços.",
      "metric": "Uma apresentação organizada para conhecer o trabalho e iniciar o contato.",
      "image": "/images/projects/beth-olmeda.webp",
      "width": 1024,
      "height": 1024
    }
  },
  {
    "slug": "seo-indaiatuba",
    "title": "SEO em Indaiatuba",
    "headline": "Seu cliente procura. O site precisa explicar a resposta.",
    "problem": {
      "title": "Serviços pouco explicados dificultam a descoberta.",
      "description": "Revisão de SEO local em Indaiatuba: acesso às páginas, conteúdo de serviços, contatos e região atendida. Diagnóstico e prioridades sem garantia de posições nas buscas."
    },
    "solution": {
      "title": "SEO local e conteúdo útil",
      "features": [
        {
          "name": "Informações locais",
          "desc": "Conferência de nome, canais de atendimento e regiões cobertas pelos serviços."
        },
        {
          "name": "Páginas específicas",
          "desc": "Textos que respondem às dúvidas sobre a oferta e conectam conteúdos relacionados."
        },
        {
          "name": "Revisão técnica",
          "desc": "Indexação, URLs canônicas, sitemap e links internos, conforme o diagnóstico e a plataforma."
        }
      ]
    },
    "cta": "Vamos identificar as prioridades do seu site.",
    "relatedCase": {
      "client": "Dario Eletricidade",
      "segment": "Serviços • Elétrica industrial",
      "context": "Apresentar os serviços e a experiência da empresa.",
      "solution": "Organização do conteúdo e dos contatos para o atendimento regional.",
      "metric": "Site para conhecer os serviços de elétrica industrial.",
      "image": "/cases/dario-eletricidade-mobile.jpg",
      "width": 842,
      "height": 1536
    }
  },
  {
    "slug": "sites-para-medicos-indaiatuba",
    "title": "Sites para Médicos em Indaiatuba",
    "headline": "Informação clara para quem procura atendimento.",
    "problem": {
      "title": "O paciente precisa saber quem atende e como agendar.",
      "description": "Sites para profissionais e clínicas médicas em Indaiatuba: apresentação da equipe, informações de atendimento e canais de agendamento. Conteúdo fornecido e revisado pelo profissional responsável."
    },
    "solution": {
      "title": "Organização do atendimento online",
      "features": [
        {
          "name": "Apresentação profissional",
          "desc": "Áreas de atuação e identificação fornecidas pela equipe, com revisão do responsável antes de publicar."
        },
        {
          "name": "Orientações de atendimento",
          "desc": "Localização, horários e informações práticas sobre consultas, conforme os serviços oferecidos."
        },
        {
          "name": "Canais de agendamento",
          "desc": "Links para os canais já utilizados pela clínica. Integrações adicionais dependem da plataforma e do escopo."
        }
      ]
    },
    "cta": "Vamos organizar as informações do seu atendimento."
  },
  {
    "slug": "sites-para-advogados-indaiatuba",
    "title": "Sites para Advogados em Indaiatuba",
    "headline": "Um escritório apresentado com clareza e sobriedade.",
    "problem": {
      "title": "A informação precisa orientar o primeiro contato.",
      "description": "Sites institucionais para escritórios de advocacia em Indaiatuba, com áreas de atuação, equipe e conteúdo informativo revisado pelo escritório antes da publicação."
    },
    "solution": {
      "title": "Presença institucional para advocacia",
      "features": [
        {
          "name": "Áreas de atuação",
          "desc": "Apresentação objetiva dos assuntos atendidos, sem promessas de resultado de processos."
        },
        {
          "name": "Conteúdo informativo",
          "desc": "Organização de textos e dúvidas frequentes com revisão do profissional responsável."
        },
        {
          "name": "Contato e privacidade",
          "desc": "Canais de atendimento e coleta inicial limitada às informações necessárias para responder ao contato."
        }
      ]
    },
    "cta": "Converse sobre a apresentação do seu escritório."
  },
  {
    "slug": "branding-em-indaiatuba",
    "title": "Marca e identidade em Indaiatuba",
    "headline": "A marca precisa acompanhar o momento da empresa.",
    "problem": {
      "title": "A apresentação nem sempre mostra o que o negócio oferece.",
      "description": "Estratégia de marca e identidade visual em Indaiatuba. Revisão do posicionamento, da linguagem e das aplicações para apresentar a empresa de forma consistente."
    },
    "solution": {
      "title": "Da decisão à identidade",
      "features": [
        {
          "name": "Posicionamento",
          "desc": "Conversa sobre público, oferta e diferenças que a empresa consegue demonstrar."
        },
        {
          "name": "Identidade visual",
          "desc": "Sistema de marca e aplicações previstos no escopo, com critérios de uso."
        },
        {
          "name": "Linguagem e apresentação",
          "desc": "Direção para explicar os serviços de forma consistente no site e nos materiais combinados."
        }
      ]
    },
    "cta": "Vamos conversar sobre o momento da sua marca.",
    "relatedCase": {
      "client": "KNJ Tur",
      "segment": "Turismo • Agência de viagens",
      "context": "Organizar a apresentação de vistos e planejamento de viagens.",
      "solution": "Página com serviços, informações de atendimento e chamadas para contato.",
      "metric": "Apresentação digital da agência.",
      "image": "/cases/knj-tur-mobile.jpg",
      "width": 837,
      "height": 1536
    }
  }
];
