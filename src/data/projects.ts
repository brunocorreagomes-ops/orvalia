export interface Project {
  client: string; category: string; description: string; image: string; width: number; height: number; featured: boolean;
  before: string; decision: string; after: string; slug: string; deliverables: string[]; goal: string; approach: string;
  imageKind: 'site' | 'identity' | 'presentation';
}

export const projects: Project[] = [
  {
    "client": "Ryna Hayashi",
    "category": "01 / PSICOLOGIA CLÍNICA",
    "before": "Apresentar o trabalho clínico e facilitar o primeiro contato.",
    "decision": "Criar um site com informações sobre os atendimentos e acesso direto ao WhatsApp.",
    "after": "Uma página para conhecer a profissional, consultar os serviços e iniciar uma conversa.",
    "image": "/cases/ryna-hayashi-mobile.jpg",
    "width": 631,
    "height": 1536,
    "featured": true,
    "slug": "ryna-hayashi",
    "deliverables": [
      "Site de apresentação",
      "Informações de atendimento",
      "Contato por WhatsApp"
    ],
    "goal": "Apresentar o trabalho clínico e facilitar o primeiro contato.",
    "approach": "Organizar a apresentação profissional, os atendimentos e os canais de contato.",
    "imageKind": "site",
    "description": "Uma página para conhecer a profissional, consultar os serviços e iniciar uma conversa."
  },
  {
    "client": "Beth Olmeda",
    "category": "02 / MARCA PESSOAL",
    "description": "Identidade visual, textos de apresentação e página de serviços.",
    "image": "/images/projects/beth-olmeda.webp",
    "width": 1024,
    "height": 1024,
    "featured": false,
    "slug": "beth-olmeda",
    "deliverables": [
      "Identidade visual",
      "Textos de apresentação",
      "Página de serviços"
    ],
    "goal": "Apresentar a profissional e seus serviços com uma identidade visual própria.",
    "approach": "Conectar a identidade visual aos textos de apresentação e à página de serviços.",
    "imageKind": "identity",
    "before": "Apresentar a profissional e seus serviços com uma identidade visual própria.",
    "decision": "Conectar a identidade visual aos textos de apresentação e à página de serviços.",
    "after": "Identidade visual, textos de apresentação e página de serviços."
  },
  {
    "client": "Dario Eletricidade",
    "category": "03 / ENGENHARIA",
    "description": "Site para apresentar os serviços de elétrica e atender buscas da região.",
    "image": "/cases/dario-eletricidade-mobile.jpg",
    "width": 842,
    "height": 1536,
    "featured": false,
    "slug": "dario-eletricidade",
    "deliverables": [
      "Apresentação de serviços",
      "Elétrica industrial",
      "Contato direto"
    ],
    "goal": "Explicar os serviços de elétrica e facilitar o contato de empresas interessadas.",
    "approach": "Organizar os serviços, as informações de atendimento e os caminhos de contato.",
    "imageKind": "site",
    "before": "Explicar os serviços de elétrica e facilitar o contato de empresas interessadas.",
    "decision": "Organizar os serviços, as informações de atendimento e os caminhos de contato.",
    "after": "Site para apresentar os serviços de elétrica e atender buscas da região."
  },
  {
    "client": "Quinta de Caraíva",
    "category": "04 / HOTELARIA",
    "description": "Apresentação da hospedagem e contato direto para reservas.",
    "image": "/cases/quinta-de-caraiva-mobile.jpg",
    "width": 899,
    "height": 1536,
    "featured": false,
    "slug": "quinta-de-caraiva",
    "deliverables": [
      "Apresentação da hospedagem",
      "Informações para hóspedes",
      "Contato para reservas"
    ],
    "goal": "Apresentar a hospedagem e facilitar a consulta de quem está planejando uma estadia.",
    "approach": "Reunir a apresentação do lugar e o caminho para conversar sobre reservas.",
    "imageKind": "site",
    "before": "Apresentar a hospedagem e facilitar a consulta de quem está planejando uma estadia.",
    "decision": "Reunir a apresentação do lugar e o caminho para conversar sobre reservas.",
    "after": "Apresentação da hospedagem e contato direto para reservas."
  },
  {
    "client": "Marta Ana Chiconato",
    "category": "05 / TERAPIA INTEGRATIVA",
    "description": "Apresentação dos atendimentos e informações para o primeiro contato.",
    "image": "/images/projects/marta-ana-chiconato.webp",
    "width": 1536,
    "height": 1024,
    "featured": false,
    "slug": "marta-ana-chiconato",
    "deliverables": [
      "Apresentação profissional",
      "Informações de atendimento",
      "Primeiro contato"
    ],
    "goal": "Apresentar a profissional e as informações dos atendimentos.",
    "approach": "Organizar o conteúdo para que a pessoa conheça o trabalho e saiba como iniciar uma conversa.",
    "imageKind": "presentation",
    "before": "Apresentar a profissional e as informações dos atendimentos.",
    "decision": "Organizar o conteúdo para que a pessoa conheça o trabalho e saiba como iniciar uma conversa.",
    "after": "Apresentação dos atendimentos e informações para o primeiro contato."
  },
  {
    "client": "KNJ Tur",
    "category": "06 / TURISMO",
    "description": "Site para apresentar assessoria de vistos, viagens e canais de atendimento.",
    "image": "/cases/knj-tur-mobile.jpg",
    "width": 837,
    "height": 1536,
    "featured": false,
    "slug": "knj-tur",
    "deliverables": [
      "Vistos e viagens",
      "Apresentação de serviços",
      "Canais de atendimento"
    ],
    "goal": "Apresentar a assessoria de vistos e viagens e os canais de atendimento.",
    "approach": "Organizar a apresentação dos serviços e facilitar o primeiro contato.",
    "imageKind": "site",
    "before": "Apresentar a assessoria de vistos e viagens e os canais de atendimento.",
    "decision": "Organizar a apresentação dos serviços e facilitar o primeiro contato.",
    "after": "Site para apresentar assessoria de vistos, viagens e canais de atendimento."
  }
];
