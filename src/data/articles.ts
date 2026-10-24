export type ArticleCategory = 'branding' | 'sites' | 'busca' | 'gap';
export interface Article {
  id: string; file: string; slug: string; category: ArticleCategory;
  title: string; description: string; answer: string;
  published: string | null; modified: string; image: string | null; readTime: number;
  sections: { id: string; title: string; paragraphs: string[] }[];
  checklist: string[]; faq: { question: string; answer: string }[];
  relatedProjects?: string[];
  related: string[]; sources: { label: string; url: string }[];
}
export const categories: Record<ArticleCategory, string> = {
  gap: 'Gap de percepção', branding: 'Marca e posicionamento', sites: 'Sites e experiência', busca: 'Busca e inteligência artificial'
};
export const articles: Article[] = [
  {
    "id": "branding-indaiatuba",
    "file": "Article1",
    "slug": "/blog/branding-indaiatuba/",
    "category": "branding",
    "title": "Branding em Indaiatuba: como construir uma marca forte",
    "description": "Saiba como definir posicionamento, mensagem e identidade visual para uma empresa em Indaiatuba e organizar um projeto de branding.",
    "answer": "Branding é o trabalho de definir e manter como uma empresa se apresenta e é reconhecida. Começa pelo público, pela oferta e pelas diferenças que o negócio consegue demonstrar; a identidade visual traduz essas decisões.",
    "published": "2026-04-22",
    "modified": "2026-10-24",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "O que precisa estar claro antes do logotipo",
        "paragraphs": [
          "Comece pelas decisões comerciais: quem contrata sua empresa, em qual situação e o que essa pessoa compara antes de escolher. Uma marca para serviços recorrentes entre empresas precisa explicar coisas diferentes de uma loja que depende da visita presencial.",
          "Para um negócio em Indaiatuba, a região atendida faz parte desse contexto. Dizer onde a empresa atua é útil; repetir o nome da cidade em todos os parágrafos não substitui explicar o serviço."
        ]
      },
      {
        "id": "secao-2",
        "title": "Como encontrar uma diferença que seja real",
        "paragraphs": [
          "Entreviste quem atende e quem vende. Registre perguntas recebidas, motivos de perda de propostas e características dos projetos que a empresa executa bem. A diferença pode estar no processo, na especialização ou na forma de atendimento.",
          "Troque adjetivos como “excelência” por evidências: etapas do trabalho, limites do escopo, exemplos autorizados e informações sobre a equipe. A comunicação fica mais específica quando nasce da operação."
        ]
      },
      {
        "id": "secao-3",
        "title": "Transforme o posicionamento em um sistema de marca",
        "paragraphs": [
          "Defina uma apresentação curta da empresa, os serviços principais e o tom de voz. Depois organize logotipo, cores, tipografia, imagens e modelos de aplicação. O conjunto precisa funcionar no celular, na proposta comercial e nos materiais de uso diário.",
          "Um manual só tem utilidade quando ajuda a equipe a tomar decisões. Inclua versões do logotipo, exemplos legíveis e orientações que as pessoas responsáveis pelos materiais consigam aplicar."
        ]
      },
      {
        "id": "secao-4",
        "title": "Como avaliar a implantação",
        "paragraphs": [
          "Escolha os primeiros pontos de contato: site, apresentação comercial e perfis mantidos pela empresa. Corrija informações divergentes e substitua os materiais em uma sequência viável.",
          "Acompanhe dúvidas recorrentes e a qualidade dos pedidos recebidos. Uma nova identidade pode melhorar a apresentação, mas a evolução comercial também depende de preço, atendimento, oferta e demanda."
        ]
      },
      {
        "id": "exemplo-1",
        "title": "O contexto local entra nas informações, não só no título",
        "paragraphs": [
          "Uma empresa em Indaiatuba pode atender apenas determinados bairros, toda a região de Campinas ou clientes a distância. Essa diferença precisa aparecer na apresentação dos serviços e no atendimento. Repetir o nome da cidade em cada frase não resolve a dúvida sobre deslocamento, disponibilidade ou formato de trabalho. O planejamento da marca deve partir de como o negócio realmente opera.",
          "Converse com quem atende os pedidos e anote perguntas recorrentes. O cliente quer saber se há visita técnica, se o serviço é para empresas ou pessoas, como recebe a proposta e quem vai acompanhá-lo. Essas respostas ajudam a definir a mensagem. São informações que a própria empresa consegue conferir, manter e explicar, sem depender de adjetivos como excelência, inovação ou exclusividade."
        ]
      },
      {
        "id": "exemplo-2",
        "title": "Um exemplo de diferença que o cliente consegue perceber",
        "paragraphs": [
          "Imagine, como situação ilustrativa, duas empresas de manutenção. Ambas dizem oferecer qualidade. Uma delas explica quais equipamentos atende, em quais cidades faz visitas e que informações precisa para avaliar o serviço. Sua marca fica mais compreensível porque apresenta uma operação concreta. Isso não prova que ela é melhor; torna mais simples decidir se o serviço é adequado à necessidade de quem procura.",
          "Na identidade visual, essa clareza precisa continuar em propostas, uniformes, placas e páginas. Uma assinatura que funciona em uma imagem grande pode ficar ilegível no celular ou na impressão pequena. Defina aplicações prioritárias e revise exemplos nessas condições antes de aprovar. A preferência estética importa, mas precisa conviver com o uso cotidiano da empresa."
        ]
      },
      {
        "id": "exemplo-3",
        "title": "Um primeiro roteiro para organizar o projeto",
        "paragraphs": [
          "Reúna a apresentação atual, três dúvidas frequentes de clientes e os materiais usados no atendimento. Escreva quais serviços são prioritários e quais pedidos a empresa não atende. Se o negócio mudou, registre o que ficou desatualizado na comunicação. Esse conjunto oferece uma base mais útil para conversar com um estúdio do que uma lista de logotipos de concorrentes.",
          "Depois da implantação, observe se a equipe consegue explicar a oferta com os novos materiais e se as dúvidas iniciais ficaram mais específicas. Pedidos de proposta e contratos dependem também de procura, preço e atendimento. Uma mudança visual isolada não permite atribuir resultados comerciais à marca. Combine o que será observado e mantenha os materiais alinhados à operação."
        ]
      }
    ],
    "checklist": [
      "Definir público e situação de contratação.",
      "Descrever uma diferença com evidências.",
      "Testar a identidade no celular e na proposta.",
      "Organizar a atualização dos canais."
    ],
    "faq": [
      {
        "question": "Branding é a mesma coisa que identidade visual?",
        "answer": "Não. A identidade visual é uma parte do branding. O trabalho também envolve posicionamento, mensagem e consistência dos pontos de contato."
      },
      {
        "question": "Uma empresa pequena precisa de branding?",
        "answer": "Precisa de decisões claras sobre público e oferta. O tamanho do projeto pode acompanhar o estágio e os recursos do negócio."
      }
    ],
    "related": [
      "logo-vs-branding",
      "guia-marca-forte",
      "branding-estrategico-indaiatuba-campinas"
    ],
    "sources": [],
    "readTime": 4,
    "relatedProjects": [
      "beth-olmeda",
      "dario-eletricidade"
    ]
  },
  {
    "id": "identidade-visual-precos",
    "file": "Article2",
    "slug": "/blog/identidade-visual-precos/",
    "category": "branding",
    "title": "Quanto custa uma identidade visual em Indaiatuba?",
    "description": "Entenda o que muda o preço de uma identidade visual: pesquisa, aplicações, arquivos, direitos de uso e implantação da marca.",
    "answer": "O preço de uma identidade visual depende do escopo, da complexidade e das entregas contratadas. Para comparar propostas, confira pesquisa, versões do logotipo, aplicações, arquivos finais, revisões e condições de uso.",
    "published": "2026-04-21",
    "modified": "2026-10-24",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Compare entregas antes de comparar valores",
        "paragraphs": [
          "Duas propostas chamadas “identidade visual” podem incluir trabalhos muito diferentes. Uma pode entregar apenas um símbolo; outra pode incluir diagnóstico, linguagem visual, aplicações e orientações de uso. Compare a lista de entregas e a responsabilidade de cada parte.",
          "Pergunte quais decisões serão tomadas com você, quais materiais precisa fornecer e como acontece a aprovação. Sem essa definição, um orçamento aparentemente menor pode exigir contratações adicionais."
        ]
      },
      {
        "id": "secao-2",
        "title": "O que costuma mudar a complexidade",
        "paragraphs": [
          "A quantidade de públicos, produtos e pontos de contato influencia o projeto. Uma empresa com várias linhas de serviço pode precisar de uma arquitetura de marca mais detalhada. Uma operação com sinalização, uniformes e embalagens terá aplicações diferentes de um profissional que atende por agenda.",
          "Também entram no planejamento a pesquisa, o número de caminhos criativos e a preparação dos arquivos. Prazo curto precisa ser discutido, sem presumir que urgência e qualidade sejam equivalentes."
        ]
      },
      {
        "id": "secao-3",
        "title": "O que pedir na proposta",
        "paragraphs": [
          "Solicite formatos vetoriais e versões adequadas a fundos claros e escuros, quando fizerem parte do escopo. Confira aplicações incluídas, quantidade de rodadas de ajuste, cronograma e condições de licenciamento de fontes e imagens.",
          "Separe criação de implantação. Imprimir materiais, trocar uma fachada ou desenvolver o site pode exigir orçamento próprio. A proposta deve deixar explícito o que será entregue e o que depende de terceiros."
        ]
      },
      {
        "id": "secao-4",
        "title": "Como decidir com o orçamento disponível",
        "paragraphs": [
          "Priorize os materiais que a empresa usa para vender e atender. Pode ser melhor implantar primeiro uma identidade consistente no site e nas propostas do que produzir várias peças sem uso definido.",
          "Este artigo não apresenta uma tabela de preços da Orvalia. O valor de um projeto exige conhecer a necessidade e definir o escopo. Peça um orçamento que permita entender e comparar o trabalho."
        ]
      },
      {
        "id": "exemplo-1",
        "title": "Um orçamento começa pelo uso da marca",
        "paragraphs": [
          "Antes de pedir um valor, liste onde a identidade será usada nos próximos meses. Uma profissional que precisa organizar assinatura de e-mail, perfil e apresentação de serviços tem demandas diferentes de uma empresa com veículos, uniformes e várias equipes. O número de aplicações muda o trabalho de preparação, revisão e entrega. Não é preciso contratar tudo de uma vez: separe o que será usado agora do que pode esperar.",
          "Como exemplo de materiais apresentados no portfólio da Orvalia, o projeto de Beth Olmeda reúne identidade visual, textos de apresentação e página de serviços. Essas frentes podem se conectar, mas não são sinônimos. Ao comparar propostas, confira se o preço cobre apenas a identidade ou também textos e implementação da página. O exemplo demonstra um escopo, não uma tabela de valores válida para qualquer empresa."
        ]
      },
      {
        "id": "exemplo-2",
        "title": "Compare duas propostas com o mesmo roteiro",
        "paragraphs": [
          "Peça que cada fornecedor descreva as peças incluídas, os formatos dos arquivos, as etapas de aprovação e como serão tratadas alterações de direção depois de uma etapa aprovada. Também pergunte quem fornecerá textos, fotografias e informações comerciais. Uma proposta curta pode parecer mais barata por deixar essas responsabilidades fora do documento. A comparação só fica útil quando as entregas e os limites estão claros.",
          "Separe criação de custos externos. Impressão, registro de marca, compra de fotografias, licenças de fontes, domínio e hospedagem podem exigir contratações próprias. A inclusão de cada item depende da proposta; não presuma que todos acompanham o logotipo. O importante é saber o que você recebe, o que pode usar e quais despesas continuam depois da entrega."
        ]
      },
      {
        "id": "exemplo-3",
        "title": "Como conversar sobre investimento sem uma tabela pronta",
        "paragraphs": [
          "Conte o momento do negócio, as aplicações prioritárias e a data em que precisa começar a usar os materiais. Se houver um limite de orçamento, compartilhá-lo ajuda a discutir etapas possíveis. Isso não transforma qualquer valor em um projeto viável; permite identificar o que cabe no primeiro ciclo e o que ficaria para uma fase posterior.",
          "A Orvalia não publica neste guia uma faixa de preços ou um pacote padronizado. O investimento é apresentado em proposta a partir do escopo. Para iniciar a conversa, não é necessário saber nomes técnicos: explique o que hoje está difícil de apresentar e onde a marca precisa funcionar melhor. Avalie as entregas e as condições antes de decidir pela contratação."
        ]
      }
    ],
    "checklist": [
      "Comparar escopos equivalentes.",
      "Conferir arquivos e condições de uso.",
      "Separar criação, produção e implantação.",
      "Registrar revisões, etapas e prazo."
    ],
    "faq": [
      {
        "question": "Um logotipo inclui todo o projeto de marca?",
        "answer": "Apenas se a proposta disser isso. Estratégia, aplicações, textos e site precisam estar descritos entre as entregas."
      },
      {
        "question": "O site entra no orçamento da identidade visual?",
        "answer": "Pode entrar, mas são frentes diferentes. Confira se desenvolvimento, conteúdo, domínio e manutenção estão incluídos."
      }
    ],
    "related": [
      "logo-vs-branding",
      "identidade-profissionais-liberais",
      "guia-marca-forte"
    ],
    "sources": [],
    "readTime": 4,
    "relatedProjects": [
      "beth-olmeda"
    ]
  },
  {
    "id": "erros-marca-amadora",
    "file": "Article3",
    "slug": "/blog/erros-marca-amadora/",
    "category": "gap",
    "title": "Erros que fazem uma empresa parecer amadora no digital",
    "description": "Identifique erros de apresentação, conteúdo e navegação que prejudicam a confiança e veja como priorizar a correção.",
    "answer": "Informações contraditórias, textos vagos, imagens sem contexto e contato difícil de encontrar tornam a apresentação de uma empresa menos confiável. A revisão deve começar pelo que impede o visitante de entender o serviço e seguir para o atendimento.",
    "published": "2026-04-20",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Informações que não combinam entre si",
        "paragraphs": [
          "Um telefone antigo no rodapé, outro nome no Instagram e uma descrição diferente no site criam dúvidas evitáveis. Faça um inventário dos canais que a empresa realmente mantém e defina uma versão de referência dos dados.",
          "Confira nome, região atendida, horários e serviços disponíveis. Não anuncie uma unidade física apenas porque atende clientes de uma cidade; explique a modalidade de atendimento."
        ]
      },
      {
        "id": "secao-2",
        "title": "Textos que poderiam servir para qualquer concorrente",
        "paragraphs": [
          "Uma página que repete “soluções completas” sem descrever o serviço transfere a explicação para a reunião comercial. Apresente o que é feito, para quem e quais informações o cliente precisa enviar.",
          "Quando houver portfólio, explique o pedido e a entrega. Fotos bonitas podem acompanhar o texto, mas não substituem o contexto necessário para entender a participação da empresa."
        ]
      },
      {
        "id": "secao-3",
        "title": "Hierarquia visual e navegação confusas",
        "paragraphs": [
          "Títulos de tamanho parecido, muitos botões concorrentes e blocos longos tornam a página cansativa. Defina uma ação principal e deixe as informações de apoio próximas dela.",
          "No celular, confira o menu aberto, o tamanho dos textos e os caminhos até o contato. Uma aparência sofisticada perde utilidade quando um botão cobre a informação ou uma imagem exige rolagem lateral."
        ]
      },
      {
        "id": "secao-4",
        "title": "Por onde começar a correção",
        "paragraphs": [
          "Liste os problemas pelo efeito na consulta e no atendimento. Corrigir um formulário quebrado tem prioridade sobre substituir um detalhe decorativo. Depois revise as páginas mais usadas e os materiais comerciais.",
          "Faça a conferência com uma pessoa que não participou do projeto. Peça que encontre um serviço e explique como contrataria. A dificuldade observada ajuda a transformar opinião em tarefa concreta."
        ]
      }
    ],
    "checklist": [
      "Revisar telefone, serviços e região atendida.",
      "Trocar frases vagas por informações específicas.",
      "Testar menu, formulários e contato.",
      "Corrigir barreiras antes dos detalhes decorativos."
    ],
    "faq": [
      {
        "question": "É preciso refazer o site inteiro?",
        "answer": "Nem sempre. Erros de conteúdo e navegação podem ser corrigidos por etapas. Um diagnóstico ajuda a separar ajustes de uma reconstrução."
      },
      {
        "question": "Ter um visual minimalista resolve a confiança?",
        "answer": "O visual ajuda na organização, mas confiança também depende de informações corretas, exemplos reais e atendimento coerente."
      }
    ],
    "related": [
      "gap-de-percepcao-digital-empresas-excelentes-comuns",
      "site-profissional-conversao",
      "por-que-nao-cresce"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "logo-vs-branding",
    "file": "Article4",
    "slug": "/blog/logo-vs-branding/",
    "category": "branding",
    "title": "Logo e branding: qual é a diferença?",
    "description": "Entenda a diferença entre logotipo, identidade visual e branding e saiba qual escopo faz sentido para o momento da sua empresa.",
    "answer": "O logotipo identifica visualmente a marca. A identidade visual organiza os elementos gráficos. Branding reúne as decisões sobre posicionamento, mensagem e experiência que orientam como a empresa é apresentada e reconhecida.",
    "published": "2026-04-19",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "O papel do logotipo",
        "paragraphs": [
          "O logotipo é uma assinatura visual que precisa funcionar nos usos previstos para o negócio. Legibilidade, versões e arquivos adequados importam tanto quanto a apresentação em uma imagem de portfólio.",
          "Um símbolo não explica sozinho a qualidade do atendimento ou a especialização da empresa. Ele passa a ser associado a essas características ao longo dos contatos com a marca."
        ]
      },
      {
        "id": "secao-2",
        "title": "O que pertence à identidade visual",
        "paragraphs": [
          "Cores, tipografia, composição, fotografia e aplicações formam um sistema. A identidade deve ajudar a manter consistência entre site, proposta e outros materiais, sem exigir que todas as peças sejam iguais.",
          "Ao contratar, peça exemplos nos formatos que realmente usa. Um teste em avatar e cabeçalho de celular pode revelar limitações que não aparecem em uma apresentação grande."
        ]
      },
      {
        "id": "secao-3",
        "title": "O que o branding acrescenta",
        "paragraphs": [
          "Branding conecta as escolhas visuais ao negócio. Define público, contexto competitivo, proposta de valor e linguagem. Também considera como a promessa da comunicação se relaciona com o que a operação entrega.",
          "Por exemplo, uma empresa que promete acompanhamento próximo precisa explicar o processo e organizar o atendimento. O desenho do logotipo não substitui essa decisão operacional."
        ]
      },
      {
        "id": "secao-4",
        "title": "Qual projeto faz sentido agora",
        "paragraphs": [
          "Se o posicionamento está claro e o problema é uma assinatura pouco legível, o escopo pode se concentrar na identidade. Se a empresa mudou de público ou não consegue explicar sua oferta, convém revisar a estratégia antes.",
          "Evite trocar a marca por preferência pessoal sem identificar o problema. Defina o que precisa melhorar e use essa finalidade para avaliar a proposta e as aplicações."
        ]
      }
    ],
    "checklist": [
      "Nomear o problema antes de pedir um novo logo.",
      "Distinguir estratégia, identidade e implantação.",
      "Testar aplicações de uso real.",
      "Relacionar a promessa à operação."
    ],
    "faq": [
      {
        "question": "Branding inclui criar um nome?",
        "answer": "Pode incluir naming, mas essa entrega deve ser contratada explicitamente. Nem todo projeto de branding altera o nome."
      },
      {
        "question": "Um bom logotipo garante uma marca forte?",
        "answer": "Não. Ele é uma parte do conjunto, que também depende de oferta, comunicação, atendimento e consistência ao longo do tempo."
      }
    ],
    "related": [
      "branding-indaiatuba",
      "identidade-visual-precos",
      "guia-marca-forte"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "posicionamento-premium",
    "file": "Article5",
    "slug": "/blog/posicionamento-premium/",
    "category": "branding",
    "title": "Posicionamento premium: como comunicar valor com clareza",
    "description": "Veja como alinhar oferta, atendimento, identidade e site para comunicar um posicionamento premium sem depender de aparência de luxo.",
    "answer": "Um posicionamento premium precisa se apoiar em uma oferta relevante, uma entrega consistente e diferenças demonstráveis. Identidade e site ajudam a comunicar esse conjunto; não tornam um serviço superior por si só.",
    "published": "2026-04-18",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Defina para quem o valor faz sentido",
        "paragraphs": [
          "Premium não é uma característica universal. Um cliente pode valorizar prazo, outro especialização e outro acompanhamento. Identifique qual necessidade a empresa atende melhor e em que situação isso importa.",
          "Uma oferta para um público específico pode exigir escolhas: o que será incluído, quais pedidos não fazem sentido e como será explicado o processo. Sem esses limites, a comunicação tende a prometer tudo."
        ]
      },
      {
        "id": "secao-2",
        "title": "Demonstre em vez de acumular adjetivos",
        "paragraphs": [
          "Apresente etapas, critérios, exemplos autorizados e qualificação pertinente da equipe. Uma proposta bem detalhada ajuda o cliente a entender o trabalho que está comparando.",
          "Evite tratar preço alto como prova de qualidade. O interessado precisa relacionar o investimento ao escopo e aos benefícios que a empresa consegue sustentar."
        ]
      },
      {
        "id": "secao-3",
        "title": "Alinhe a apresentação ao atendimento",
        "paragraphs": [
          "O site deve facilitar consulta e contato. Tipografia legível, imagens apropriadas e conteúdo organizado ajudam mais do que efeitos que atrasam a informação.",
          "Revise também a resposta ao primeiro pedido, a apresentação de proposta e o acompanhamento. Uma comunicação cuidadosa precisa continuar depois do clique."
        ]
      },
      {
        "id": "secao-4",
        "title": "Avalie o efeito comercial com contexto",
        "paragraphs": [
          "Observe os motivos de escolha, dúvidas sobre o escopo e objeções recebidas nas conversas. Registre mudanças no mesmo período em que altera a comunicação.",
          "Não atribua toda variação de vendas ao design. Mudanças em preço, canal, sazonalidade e disponibilidade influenciam o resultado e precisam entrar na análise."
        ]
      }
    ],
    "checklist": [
      "Definir uma necessidade prioritária do público.",
      "Mostrar escopo e evidências reais.",
      "Conferir a jornada do site ao atendimento.",
      "Acompanhar objeções e motivos de escolha."
    ],
    "faq": [
      {
        "question": "Preciso usar preto e dourado?",
        "answer": "Não. Uma paleta não define posicionamento. As escolhas visuais devem funcionar para o público, a marca e seus usos."
      },
      {
        "question": "Posicionamento permite cobrar mais automaticamente?",
        "answer": "Não. Preço depende do mercado e da proposta de valor. A comunicação ajuda a explicar a oferta, mas não garante aceitação."
      }
    ],
    "related": [
      "identidade-visual-profissionais-liberais-premium",
      "gap-de-percepcao-digital-empresas-excelentes-comuns",
      "branding-indaiatuba"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "site-profissional-conversao",
    "file": "Article6",
    "slug": "/blog/site-profissional-conversao/",
    "category": "sites",
    "title": "Site profissional: como facilitar a decisão do cliente",
    "description": "Aprenda a organizar serviços, evidências e contato em um site profissional e acompanhar os pedidos gerados pelo canal.",
    "answer": "Um site voltado à conversão ajuda o visitante a entender o serviço, avaliar se ele atende à sua necessidade e dar o próximo passo. Clareza de conteúdo, navegação acessível e contato funcional são a base desse trabalho.",
    "published": "2026-04-17",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Organize o caminho da consulta ao contato",
        "paragraphs": [
          "Na primeira seção, diga o que a empresa faz e para quem. Depois apresente os serviços, como o trabalho funciona, exemplos pertinentes e respostas às dúvidas de contratação.",
          "A ordem varia conforme a necessidade. Quem já recebeu indicação pode querer apenas confirmar atendimento e telefone. Quem ainda compara fornecedores pode precisar de mais contexto antes de entrar em contato."
        ]
      },
      {
        "id": "secao-2",
        "title": "Apresente informações que apoiem a escolha",
        "paragraphs": [
          "Um portfólio precisa explicar o pedido, a entrega e a participação da empresa. Uma página de serviço deve delimitar o escopo e orientar o próximo passo. Não use depoimentos ou resultados que não possam ser confirmados.",
          "Prefira nomes descritivos de links e botões: “Consultar os serviços” ou “Solicitar uma proposta” dizem mais sobre o destino do que chamadas vagas."
        ]
      },
      {
        "id": "secao-3",
        "title": "Remova barreiras no celular",
        "paragraphs": [
          "Teste menu, campos de formulário e links de contato em uma tela pequena. Os textos devem caber sem zoom e o botão flutuante não pode bloquear o conteúdo.",
          "Envie um pedido de teste e confirme o recebimento. Um formulário que mostra sucesso sem entregar a mensagem cria uma falha comercial que não aparece na avaliação visual da página."
        ]
      },
      {
        "id": "secao-4",
        "title": "Defina o que será acompanhado",
        "paragraphs": [
          "Diferencie visitas, cliques em WhatsApp, formulários enviados e oportunidades qualificadas. Um clique mostra intenção de abrir uma conversa; não confirma que houve atendimento ou venda.",
          "Compare períodos com volume e contexto semelhantes. Use dúvidas reais e pontos de abandono para decidir o próximo ajuste, sem atribuir precisão a uma amostra pequena."
        ]
      }
    ],
    "checklist": [
      "Explicar serviço e público no início.",
      "Incluir escopo, processo e exemplos reais.",
      "Testar envio e recebimento de contato.",
      "Separar cliques de oportunidades e vendas."
    ],
    "faq": [
      {
        "question": "Mais visitas significam mais clientes?",
        "answer": "Não necessariamente. O resultado depende da origem do público, da oferta e do atendimento, além da experiência no site."
      },
      {
        "question": "O WhatsApp substitui o formulário?",
        "answer": "Pode ser o principal contato, mas a escolha depende da operação. O importante é manter o caminho claro e confirmar que a equipe consegue atender."
      }
    ],
    "related": [
      "quanto-custa-site-indaiatuba",
      "arquitetura-sites-alta-performance-campinas",
      "erros-marca-amadora",
      "geo-generative-engine-optimization-buscas-ia"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "instagram-estrategico",
    "file": "Article7",
    "slug": "/blog/instagram-estrategico/",
    "category": "branding",
    "title": "Instagram para empresas: conteúdo, marca e atendimento",
    "description": "Organize o Instagram da empresa com objetivos claros, conteúdo útil, apresentação dos serviços e um caminho simples até o atendimento.",
    "answer": "O Instagram pode apoiar a descoberta e o relacionamento com a empresa. Para ser útil ao negócio, o conteúdo precisa ter função, apresentar a oferta com clareza e levar a um atendimento que consiga continuar a conversa.",
    "published": "2026-04-16",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Escolha o papel do canal",
        "paragraphs": [
          "Defina o que espera do perfil: apresentar o trabalho, responder dúvidas, manter relacionamento ou receber pedidos. Um único perfil pode cumprir várias funções, mas cada publicação precisa de uma intenção compreensível.",
          "Não escolha a frequência apenas pelo calendário. Considere a capacidade de produzir material correto e acompanhar as conversas que ele gera."
        ]
      },
      {
        "id": "secao-2",
        "title": "Use perguntas reais como pauta",
        "paragraphs": [
          "Reúna dúvidas que aparecem antes de uma compra. Explique o processo, mostre aplicações e apresente exemplos autorizados. Isso dá contexto ao serviço sem depender de frases genéricas de motivação.",
          "Equilibre apresentação comercial com informação útil. Um perfil que só repete promoção pode deixar de explicar por que a oferta atende a uma necessidade."
        ]
      },
      {
        "id": "secao-3",
        "title": "Revise perfil, destaques e destino dos links",
        "paragraphs": [
          "A bio deve ajudar a entender o serviço e a região atendida. Destaques precisam estar atualizados e os links devem levar à página ou ao atendimento anunciado.",
          "Use uma linguagem visual reconhecível sem comprometer a leitura. Textos pequenos dentro de uma arte podem parecer organizados no computador e ficar ilegíveis no celular."
        ]
      },
      {
        "id": "secao-4",
        "title": "Acompanhe ações relacionadas ao objetivo",
        "paragraphs": [
          "Alcance e curtidas ajudam a observar distribuição, mas não substituem pedidos e conversas qualificadas. Registre a origem dos contatos quando possível e revise as perguntas que continuam sem resposta.",
          "Mantenha informações importantes também no site. Assim, quem quer consultar serviços não precisa percorrer uma sequência de publicações para encontrar dados básicos."
        ]
      }
    ],
    "checklist": [
      "Definir uma função para cada pauta.",
      "Revisar bio, links e destaques.",
      "Testar a leitura das artes no celular.",
      "Acompanhar contatos além de curtidas."
    ],
    "faq": [
      {
        "question": "É necessário publicar todos os dias?",
        "answer": "A frequência deve caber na operação e sustentar conteúdo útil. Publicar mais, sem objetivo e atendimento, não garante resultado."
      },
      {
        "question": "O Instagram pode ser o único canal da empresa?",
        "answer": "Pode ser um ponto de contato importante, mas manter um site facilita organizar informações permanentes e reduz a dependência de um único canal."
      }
    ],
    "related": [
      "por-que-nao-cresce",
      "guia-marca-forte",
      "site-profissional-conversao"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "por-que-nao-cresce",
    "file": "Article8",
    "slug": "/blog/por-que-nao-cresce/",
    "category": "gap",
    "title": "Por que sua empresa não cresce no digital?",
    "description": "Entenda por que publicar mais não resolve sozinho a falta de pedidos e como revisar oferta, canais, site e atendimento.",
    "answer": "Publicar com frequência não garante crescimento. É preciso verificar se a oferta está clara, se o público alcançado é pertinente e se existe um caminho funcional entre descoberta, consulta e atendimento.",
    "published": "2026-04-15",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Separe os problemas do caminho comercial",
        "paragraphs": [
          "Pouca gente encontra a empresa? As pessoas chegam, mas não entendem o serviço? Os pedidos ficam sem retorno? São problemas diferentes e pedem soluções diferentes.",
          "Mapeie descoberta, consulta, contato e proposta. Anote onde a operação perde continuidade antes de investir em mais divulgação."
        ]
      },
      {
        "id": "secao-2",
        "title": "Confira se o público entende a oferta",
        "paragraphs": [
          "Peça a alguém fora da empresa que leia a página inicial e explique o que é vendido, para quem e como solicitar. Observe dúvidas concretas, sem conduzir a resposta.",
          "Quando a oferta mistura muitos serviços sem hierarquia, o visitante pode não encontrar o que procura. Priorize as necessidades que a empresa tem capacidade de atender bem."
        ]
      },
      {
        "id": "secao-3",
        "title": "Conecte os canais à informação correta",
        "paragraphs": [
          "Uma publicação sobre um serviço deve levar a uma explicação coerente desse serviço. Confira se o link abre, se a página funciona no celular e se o contato está disponível.",
          "O site pode reunir informações permanentes enquanto as redes ajudam na distribuição. Essa relação deve facilitar a consulta, sem obrigar a pessoa a trocar de canal repetidamente."
        ]
      },
      {
        "id": "secao-4",
        "title": "Avalie com um registro simples",
        "paragraphs": [
          "Monte uma planilha com origem, tipo de pedido, retorno e andamento da proposta. Mesmo um registro manual ajuda a diferenciar falta de demanda de falhas de atendimento.",
          "Escolha uma hipótese por vez, corrija e acompanhe. Um resultado comercial depende de várias condições; mudar identidade, preço e anúncios ao mesmo tempo dificulta entender o que funcionou."
        ]
      }
    ],
    "checklist": [
      "Mapear descoberta, contato e proposta.",
      "Conferir se a oferta é compreensível.",
      "Testar links entre canais.",
      "Registrar origem e andamento dos pedidos."
    ],
    "faq": [
      {
        "question": "Preciso investir mais em anúncios?",
        "answer": "Primeiro confira a oferta, a página de destino e o atendimento. Divulgação adicional pode aumentar o volume de uma jornada que ainda está quebrada."
      },
      {
        "question": "Como saber se o problema é o site?",
        "answer": "Observe tarefas reais: encontrar o serviço, entender o processo e entrar em contato. Cruze as dificuldades com dados de acesso e dúvidas recebidas."
      }
    ],
    "related": [
      "site-profissional-conversao",
      "instagram-estrategico",
      "gap-de-percepcao-digital-empresas-excelentes-comuns"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "identidade-profissionais-liberais",
    "file": "Article9",
    "slug": "/blog/identidade-profissionais-liberais/",
    "category": "branding",
    "title": "Identidade visual para profissionais liberais em Indaiatuba",
    "description": "Veja o que incluir na identidade visual de um profissional liberal e como aplicar a marca no site, nas propostas e no atendimento.",
    "answer": "A identidade visual de um profissional liberal precisa facilitar reconhecimento e leitura nos materiais de trabalho. Ela deve acompanhar a especialidade, o público e as condições reais de atendimento, sem sugerir qualificações que não existem.",
    "published": "2026-04-14",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Defina o que a apresentação precisa comunicar",
        "paragraphs": [
          "Liste serviços, públicos e formatos de atendimento. A marca de um arquiteto com projetos corporativos pode ter aplicações diferentes da de uma profissional que organiza agendamentos individuais.",
          "Nome, especialidade e cidade devem aparecer quando ajudam a identificar o trabalho. O desenho da assinatura não precisa carregar toda a descrição da atividade."
        ]
      },
      {
        "id": "secao-2",
        "title": "Planeje as aplicações de uso diário",
        "paragraphs": [
          "Considere site, assinatura de e-mail, proposta, apresentação e documentos usados no atendimento. Teste tamanhos pequenos e versões com bom contraste.",
          "Confira se as fontes podem ser usadas nos programas da rotina e se os arquivos finais permitem produzir novos materiais com consistência. Um sistema difícil de manter perde utilidade."
        ]
      },
      {
        "id": "secao-3",
        "title": "Escolha imagens e informações com cuidado",
        "paragraphs": [
          "Fotos autorais podem ajudar a apresentar o profissional e o espaço, quando pertinentes e autorizadas. Imagens de banco devem ser identificadas como ilustrativas quando puderem ser confundidas com trabalhos ou instalações reais.",
          "Profissões regulamentadas precisam conferir suas regras de comunicação com o conselho competente. O projeto visual deve ser validado junto com os dados profissionais e o conteúdo."
        ]
      },
      {
        "id": "secao-4",
        "title": "Faça a implantação por prioridade",
        "paragraphs": [
          "Comece pelos materiais que chegam ao cliente antes da primeira conversa. Revise contatos, descrições e versões antigas ainda publicadas.",
          "A Orvalia atende a partir de Indaiatuba e pode organizar identidade, conteúdo e site no mesmo planejamento. As entregas devem ser definidas conforme as necessidades de cada profissional."
        ]
      }
    ],
    "checklist": [
      "Listar os materiais efetivamente usados.",
      "Testar contraste e tamanhos pequenos.",
      "Conferir licenças e arquivos de entrega.",
      "Validar informações profissionais."
    ],
    "faq": [
      {
        "question": "Preciso de um símbolo além do meu nome?",
        "answer": "Nem sempre. Uma assinatura tipográfica pode funcionar bem. A escolha depende do nome, dos usos e do posicionamento."
      },
      {
        "question": "Identidade visual inclui conteúdo para o site?",
        "answer": "Isso depende do escopo. Textos, fotografia e desenvolvimento precisam estar descritos na proposta."
      }
    ],
    "related": [
      "identidade-visual-precos",
      "identidade-visual-profissionais-liberais-premium",
      "branding-indaiatuba"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "guia-marca-forte",
    "file": "Article10",
    "slug": "/blog/guia-marca-forte/",
    "category": "branding",
    "title": "Como manter a marca consistente no dia a dia da empresa",
    "description": "Veja como organizar aplicações, responsabilidades e revisões para manter a marca consistente nas propostas, no atendimento e nos canais digitais.",
    "answer": "Uma marca forte no digital resulta da coerência entre oferta, mensagem, aparência e atendimento. O planejamento começa pelo negócio e continua na implantação dos canais e na revisão das dúvidas que chegam dos clientes.",
    "published": "2026-04-13",
    "modified": "2026-10-24",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "1. Registre o ponto de partida",
        "paragraphs": [
          "Reúna os materiais existentes: site, propostas, perfis e apresentações. Identifique o que está correto, o que ficou desatualizado e o que já não representa os serviços atuais.",
          "Converse com quem atende e vende. Perguntas repetidas e propostas perdidas ajudam a localizar problemas de comunicação. Separe essas evidências de preferências pessoais sobre cor ou estilo."
        ]
      },
      {
        "id": "secao-2",
        "title": "2. Defina público e posicionamento",
        "paragraphs": [
          "Descreva a situação em que o cliente procura a empresa, o que precisa resolver e quais alternativas considera. Escolha uma diferença que possa ser sustentada por processo, experiência ou especialização.",
          "Escreva uma apresentação curta e teste se ela é compreendida por alguém de fora. Se precisar de uma explicação longa para dar sentido à frase, revise a mensagem."
        ]
      },
      {
        "id": "secao-3",
        "title": "3. Organize a identidade e os materiais",
        "paragraphs": [
          "Defina o sistema visual e sua aplicação em formatos reais. Priorize legibilidade, coerência e facilidade de manutenção. O objetivo é permitir que a equipe produza materiais reconhecíveis sem improvisar a marca a cada peça.",
          "Registre regras suficientes para os usos da operação: versões, cores, fontes e exemplos. Arquivos finais e licenças também fazem parte da implantação."
        ]
      },
      {
        "id": "secao-4",
        "title": "4. Estruture o site e a descoberta",
        "paragraphs": [
          "Crie páginas que expliquem os serviços e respondam dúvidas específicas. Use projetos autorizados e dados de atendimento corretos. Conecte artigos e serviços por links descritivos.",
          "Mantenha o conteúdo principal disponível em texto e teste a navegação no celular. Uma página visualmente elaborada precisa continuar compreensível quando a pessoa procura uma informação rápida."
        ]
      },
      {
        "id": "secao-5",
        "title": "5. Conecte conteúdo e atendimento",
        "paragraphs": [
          "Escolha pautas a partir das perguntas que chegam ao negócio. Explique processos, critérios e usos dos serviços. Distribua esse material nos canais que a equipe consegue manter.",
          "Organize o retorno aos pedidos recebidos. Uma boa apresentação seguida de demora ou respostas contraditórias cria uma experiência diferente da prometida."
        ]
      },
      {
        "id": "secao-6",
        "title": "6. Revise com critérios observáveis",
        "paragraphs": [
          "Acompanhe pedidos, dúvidas, origem dos contatos e motivos de escolha. Use indicadores simples antes de construir uma análise complexa que ninguém consegue atualizar.",
          "A marca exige manutenção. Mudanças de equipe, serviço ou região devem aparecer nos canais. Uma revisão periódica evita que o site se torne um retrato de uma fase que já passou."
        ]
      }
    ],
    "checklist": [
      "Inventariar canais e materiais.",
      "Definir público e diferença demonstrável.",
      "Implantar identidade nos pontos prioritários.",
      "Conectar site, conteúdo e atendimento.",
      "Revisar dúvidas e dados periodicamente."
    ],
    "faq": [
      {
        "question": "Por onde começar com pouco tempo?",
        "answer": "Comece pela descrição da oferta, pelos contatos corretos e pelos materiais usados para enviar propostas. Depois avance para as demais aplicações."
      },
      {
        "question": "Quando o trabalho termina?",
        "answer": "O projeto pode ter entregas e prazo definidos, mas a comunicação precisa acompanhar mudanças reais da empresa."
      }
    ],
    "related": [
      "branding-indaiatuba",
      "logo-vs-branding",
      "site-profissional-conversao"
    ],
    "sources": [],
    "readTime": 3
  },
  {
    "id": "branding-estrategico-indaiatuba-campinas",
    "file": "Article11",
    "slug": "/blog/branding-estrategico-indaiatuba-campinas/",
    "category": "branding",
    "title": "Como funciona um projeto de branding: etapas e decisões",
    "description": "Entenda as etapas de um projeto de marca: preparação, mensagem, identidade e implantação. Veja o que combinar antes de contratar em Indaiatuba e região.",
    "answer": "Um projeto de branding estratégico organiza decisões sobre mercado, mensagem e experiência antes de criar os materiais. O escopo deve partir do momento da empresa e terminar com entregas que a operação consiga usar.",
    "published": null,
    "modified": "2026-10-24",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Quando revisar a estratégia de marca",
        "paragraphs": [
          "Expansão de serviços, mudança de público e dificuldade de explicar a oferta são motivos para avaliar a marca. Uma identidade antiga pode continuar adequada; a idade do desenho, sozinha, não determina a necessidade de troca.",
          "Para empresas de Indaiatuba e Campinas, a atuação regional pode coexistir com atendimento nacional. O posicionamento deve refletir essa realidade, sem anunciar endereços ou estruturas que a empresa não mantém."
        ]
      },
      {
        "id": "secao-2",
        "title": "Como fazer um diagnóstico útil",
        "paragraphs": [
          "Analise materiais, canais, processo comercial e dúvidas dos clientes. Compare concorrentes que participam de decisões reais de contratação. A referência visual pode ser ampla, mas a comparação comercial precisa fazer sentido para o negócio.",
          "O diagnóstico deve gerar prioridades claras. Um documento extenso perde valor se não explica quais decisões precisam ser tomadas e o que será mudado."
        ]
      },
      {
        "id": "secao-3",
        "title": "O que transformar em entregas",
        "paragraphs": [
          "Registre posicionamento, apresentação da empresa, organização dos serviços e orientações de linguagem. A partir disso, desenvolva identidade, site e materiais comerciais previstos na proposta.",
          "Defina responsáveis por conteúdo, validação e implantação. Essa divisão evita que decisões estratégicas fiquem soltas entre a apresentação criativa e a publicação."
        ]
      },
      {
        "id": "secao-4",
        "title": "Como a Orvalia organiza a conversa",
        "paragraphs": [
          "O planejamento da Orvalia considera mercado, mensagem, experiência e aquisição. Essas frentes ajudam a discutir quem procura a empresa, como a oferta é explicada e quais caminhos levam ao atendimento.",
          "O escopo é combinado a partir das necessidades e dos materiais disponíveis. Não existe uma mudança visual que garanta crescimento; o trabalho precisa ser acompanhado pela execução comercial e pelo atendimento."
        ]
      }
    ],
    "checklist": [
      "Identificar o motivo da revisão.",
      "Reunir materiais e dúvidas reais.",
      "Definir entregas e responsáveis.",
      "Planejar a implantação nos canais."
    ],
    "faq": [
      {
        "question": "Branding estratégico sempre muda o logotipo?",
        "answer": "Não. O diagnóstico pode apontar ajustes de mensagem, organização da oferta e aplicações sem substituir a assinatura existente."
      },
      {
        "question": "É possível organizar marca e site juntos?",
        "answer": "Sim, desde que estratégia, conteúdo, identidade e desenvolvimento tenham entregas e responsabilidades definidas."
      }
    ],
    "related": [
      "branding-indaiatuba",
      "rebranding-digital-b2b-sorocaba-itu-salto",
      "guia-marca-forte"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "arquitetura-sites-alta-performance-campinas",
    "file": "ArticleArquiteturaSitesAltaPerformance",
    "slug": "/blog/arquitetura-sites-alta-performance-campinas/",
    "category": "sites",
    "title": "Como organizar um site empresarial: serviços, conteúdo e contato",
    "description": "Aprenda a estruturar páginas, títulos e links de um site empresarial para facilitar a navegação no celular e a consulta aos serviços.",
    "answer": "A estrutura de um site empresarial deve permitir três tarefas: entender os serviços, encontrar informações para avaliar a contratação e entrar em contato. Páginas, títulos e links precisam seguir essa lógica.",
    "published": "2026-07-03",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Comece pelas dúvidas que orientam a contratação",
        "paragraphs": [
          "Antes de desenhar as telas, liste o que o visitante precisa saber: o serviço atende ao caso dele? Qual é o processo? Onde a empresa atua? Como pedir uma proposta? Use essas perguntas para definir as páginas.",
          "Uma empresa com serviços diferentes pode precisar de páginas próprias para cada um. Quando o conteúdo é praticamente o mesmo, não há benefício para o leitor em criar páginas repetidas trocando apenas o nome de uma cidade."
        ]
      },
      {
        "id": "secao-2",
        "title": "Dê uma função para cada página",
        "paragraphs": [
          "A página inicial apresenta a empresa e orienta os próximos caminhos. A página de serviço aprofunda escopo, processo e dúvidas. O portfólio mostra trabalhos com contexto. O contato explica como iniciar o atendimento.",
          "Use nomes de links que antecipem o destino. Organize o menu conforme as necessidades de consulta, sem transformar toda a estrutura interna da empresa em navegação pública."
        ]
      },
      {
        "id": "secao-3",
        "title": "Crie títulos e seções que possam ser percorridos",
        "paragraphs": [
          "Um título principal identifica o assunto da página; subtítulos organizam as partes do conteúdo. Essa hierarquia ajuda a pessoa a localizar informações e é parte da estrutura acessível descrita pelo W3C.",
          "Escreva os serviços em texto, mesmo quando houver imagens ou vídeos. Uma animação pode complementar a apresentação, mas o conteúdo precisa continuar acessível a quem prefere ler ou utiliza tecnologias assistivas."
        ]
      },
      {
        "id": "secao-4",
        "title": "Confira imagens, formulários e menu no celular",
        "paragraphs": [
          "Teste uma tela pequena sem ampliar o zoom. Abra o menu, encontre um serviço e percorra os campos do formulário. Verifique se uma imagem horizontal está cortando a informação necessária.",
          "Em portfólios, pode ser melhor mostrar a imagem inteira e colocar a legenda abaixo. A escolha de recorte precisa considerar o conteúdo, não apenas a aparência do bloco."
        ]
      },
      {
        "id": "secao-5",
        "title": "Faça a revisão técnica e editorial juntas",
        "paragraphs": [
          "Conferir títulos, descrições, endereços principais e links é parte da publicação. Esses elementos devem descrever o conteúdo que a pessoa encontra ao abrir a página.",
          "Depois de publicar, teste os contatos e acompanhe dúvidas recorrentes. A estrutura do site pode ser ajustada conforme surgem novas informações sobre o uso real."
        ]
      }
    ],
    "checklist": [
      "Listar as dúvidas de contratação.",
      "Definir uma função para cada página.",
      "Manter títulos em ordem lógica.",
      "Testar menu e formulário no celular."
    ],
    "faq": [
      {
        "question": "É preciso criar uma página para cada cidade?",
        "answer": "Somente quando há informação própria e útil sobre aquele atendimento. Repetir o mesmo texto com cidades diferentes não melhora a consulta."
      },
      {
        "question": "Uma página única pode funcionar?",
        "answer": "Pode, para uma oferta simples. Quando serviços e dúvidas se tornam distintos, páginas específicas podem organizar melhor o conteúdo."
      }
    ],
    "related": [
      "site-profissional-conversao",
      "geo-generative-engine-optimization-buscas-ia",
      "erros-marca-amadora"
    ],
    "sources": [
      {
        "label": "W3C WAI: estrutura de páginas e títulos",
        "url": "https://www.w3.org/WAI/tutorials/page-structure/"
      }
    ],
    "readTime": 2
  },
  {
    "id": "identidade-visual-profissionais-liberais-premium",
    "file": "ArticleIdentidadeVisualPremium",
    "slug": "/blog/identidade-visual-profissionais-liberais-premium/",
    "category": "branding",
    "title": "Site para profissionais liberais: como apresentar sua experiência",
    "description": "Saiba como apresentar serviços, trajetória, processo e informações de atendimento no site de um profissional liberal.",
    "answer": "O site de um profissional liberal deve tornar a experiência compreensível antes do contato. Para isso, precisa reunir serviços, trajetória pertinente, processo de atendimento e informações que ajudem o interessado a avaliar se encontrou o profissional adequado.",
    "published": "2026-07-03",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Apresente a experiência que tem relação com o serviço",
        "paragraphs": [
          "Uma biografia extensa pode esconder o que o visitante procura. Selecione formação, experiência e projetos pertinentes ao atendimento oferecido. Explique a relação entre essa trajetória e o trabalho atual.",
          "Não anuncie qualificações, títulos ou especialidades sem confirmação. Profissionais de áreas regulamentadas devem conferir a apresentação com as regras do respectivo conselho."
        ]
      },
      {
        "id": "secao-2",
        "title": "Descreva os serviços em linguagem de consulta",
        "paragraphs": [
          "Explique o tipo de demanda atendida, como funciona o primeiro contato e quais informações são necessárias. Evite termos técnicos sem contexto quando o público não trabalha na área.",
          "Serviços diferentes podem ter páginas próprias. A divisão é útil quando permite responder perguntas específicas, e não quando apenas repete a mesma apresentação em vários endereços."
        ]
      },
      {
        "id": "secao-3",
        "title": "Mostre o processo sem prometer um resultado",
        "paragraphs": [
          "Descrever etapas, documentos necessários e formas de acompanhamento ajuda o interessado a se preparar. Exemplos devem ser autorizados e usados com o cuidado exigido pela profissão.",
          "A apresentação precisa distinguir demonstração de trabalho de promessa de resultado. Identidade visual e organização apoiam a consulta, mas não comprovam competência técnica por si sós."
        ]
      },
      {
        "id": "secao-4",
        "title": "Cuide da experiência antes e depois do clique",
        "paragraphs": [
          "Teste leitura, contato e imagens no celular. O tom e o cuidado do site devem continuar na resposta ao pedido, na proposta e nas orientações enviadas ao cliente.",
          "Revise periodicamente agenda, região atendida e modalidades de atendimento. Dados corretos são mais úteis que frases de autoridade que o leitor não consegue verificar."
        ]
      }
    ],
    "checklist": [
      "Selecionar experiência pertinente.",
      "Explicar serviços sem jargão desnecessário.",
      "Conferir autorizações e regras profissionais.",
      "Manter atendimento e contatos atualizados."
    ],
    "faq": [
      {
        "question": "Um currículo completo precisa aparecer na página inicial?",
        "answer": "Não. A apresentação pode destacar o que é relevante e levar a uma página de trajetória para quem deseja aprofundar."
      },
      {
        "question": "Um site sofisticado comprova a qualidade do profissional?",
        "answer": "Não. O site organiza a apresentação. Qualificações, condições de atendimento e evidências pertinentes precisam ser verdadeiras e verificáveis."
      }
    ],
    "related": [
      "identidade-profissionais-liberais",
      "posicionamento-premium",
      "arquitetura-sites-alta-performance-campinas"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "rebranding-digital-b2b-sorocaba-itu-salto",
    "file": "ArticleRebrandingB2B",
    "slug": "/blog/rebranding-digital-b2b-sorocaba-itu-salto/",
    "category": "branding",
    "title": "Rebranding B2B: quando uma marca industrial precisa mudar",
    "description": "Entenda quando revisar uma marca B2B e como alinhar identidade, conteúdo técnico e site para empresas de Sorocaba, Itu e Salto.",
    "answer": "O rebranding B2B faz sentido quando a apresentação da empresa já não corresponde à oferta, aos mercados ou à operação atual. A decisão deve preservar o que é reconhecido e corrigir o que dificulta entender e avaliar o negócio.",
    "published": "2026-07-03",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Identifique o problema antes de trocar a marca",
        "paragraphs": [
          "Mudanças de linha de produtos, expansão regional e entrada em novos segmentos podem exigir uma revisão. A dificuldade também pode estar no conteúdo: o site apresenta serviços que já saíram do portfólio e omite capacidades atuais.",
          "Converse com vendas, atendimento e liderança. Registre quais informações os compradores solicitam e quais partes da apresentação precisam de explicação adicional."
        ]
      },
      {
        "id": "secao-2",
        "title": "Preserve reconhecimento e informações importantes",
        "paragraphs": [
          "Antes de mudar nome ou assinatura, avalie os usos existentes em documentos, materiais e relações com clientes. Uma transição precisa considerar atualização, custos de implantação e comunicação aos públicos envolvidos.",
          "A revisão pode manter o nome e aperfeiçoar identidade, linguagem e arquitetura de serviços. Nem todo problema exige uma substituição completa da marca."
        ]
      },
      {
        "id": "secao-3",
        "title": "Organize conteúdo para a avaliação de fornecedores",
        "paragraphs": [
          "Explique aplicações, especificações pertinentes, processo e limitações da entrega. Certificações devem corresponder à realidade da empresa, com condições e validade conferidas. Use casos autorizados e separe fotos reais de imagens ilustrativas.",
          "Empresas de Sorocaba, Itu e Salto podem apresentar sua base e a região atendida sem criar a impressão de unidades inexistentes. A informação precisa ajudar quem compara fornecedores."
        ]
      },
      {
        "id": "secao-4",
        "title": "Planeje implantação e acompanhamento",
        "paragraphs": [
          "Liste site, propostas, documentos, sinalização e outros pontos que usam a marca. Defina responsáveis, dependências e sequência de substituição.",
          "Acompanhe se as dúvidas comerciais ficaram mais claras e se a equipe passou a usar os materiais. Mudança de marca não garante contratos; ela precisa facilitar uma apresentação coerente da capacidade real."
        ]
      }
    ],
    "checklist": [
      "Documentar o motivo da mudança.",
      "Conferir o que deve ser preservado.",
      "Atualizar serviços e evidências técnicas.",
      "Planejar responsáveis e sequência de implantação."
    ],
    "faq": [
      {
        "question": "Rebranding B2B significa mudar o nome?",
        "answer": "Pode incluir essa decisão, mas não é obrigatório. Muitos projetos concentram-se em posicionamento, identidade e apresentação dos serviços."
      },
      {
        "question": "Como medir o resultado?",
        "answer": "Observe uso dos materiais, dúvidas dos compradores e qualidade dos pedidos. Vendas também dependem de preço, capacidade, demanda e negociação."
      }
    ],
    "related": [
      "branding-estrategico-indaiatuba-campinas",
      "arquitetura-sites-alta-performance-campinas",
      "gap-de-percepcao-digital-empresas-excelentes-comuns"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "geo-generative-engine-optimization-buscas-ia",
    "file": "ArticleNewGEO",
    "slug": "/blog/geo-generative-engine-optimization-buscas-ia/",
    "category": "busca",
    "title": "O que é GEO e como preparar seu site para buscas com IA",
    "description": "Entenda GEO, sua relação com SEO e quais ajustes de conteúdo, navegação e informação ajudam a tornar seu site mais compreensível.",
    "answer": "GEO significa Generative Engine Optimization e é usado para discutir visibilidade em respostas de IA. O trabalho prático começa com conteúdo útil, informação correta e acesso técnico ao site. Não existe garantia de citação ou recomendação.",
    "published": "2026-05-26",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Como GEO se relaciona com SEO",
        "paragraphs": [
          "As buscas com IA podem apresentar respostas e links para outras páginas. Isso não elimina a necessidade de um site rastreável e de conteúdo que responda às dúvidas do público.",
          "O Google informa que seus recursos de IA seguem os fundamentos de SEO e não exigem uma marcação especial. Essa orientação se refere à Pesquisa Google; não deve ser apresentada como uma regra universal para todas as ferramentas de IA."
        ]
      },
      {
        "id": "secao-2",
        "title": "O que revisar no conteúdo da empresa",
        "paragraphs": [
          "Descreva serviços, aplicações, processo e condições de atendimento. Dê contexto aos exemplos e use informações que a empresa consegue confirmar. Um parágrafo direto que responde à dúvida é mais útil que uma sequência de palavras-chave.",
          "Mantenha os dados de contato e a região atendida atualizados nos canais administrados pela empresa. Consistência facilita a consulta, mas não assegura que um sistema específico usará a página como fonte."
        ]
      },
      {
        "id": "secao-3",
        "title": "O que revisar na estrutura técnica",
        "paragraphs": [
          "Confira se as páginas principais estão disponíveis sem login e podem ser encontradas por links internos. Títulos e descrições devem corresponder ao conteúdo. Dados estruturados precisam representar o que está visível na página.",
          "Bloqueios de rastreamento e indexação têm funções diferentes. Uma revisão deve considerar os mecanismos que a empresa deseja permitir, em vez de mudar configurações sem entender seu efeito."
        ]
      },
      {
        "id": "secao-4",
        "title": "Como acompanhar sem prometer recomendações",
        "paragraphs": [
          "Registre páginas indexadas, consultas e contatos quando as ferramentas disponíveis permitirem. Resultados gerados por IA podem variar conforme a pergunta, o contexto e o produto usado. Uma consulta isolada não mede toda a presença da empresa.",
          "A proposta de trabalho deve nomear entregas verificáveis: correção de páginas, revisão de conteúdo, organização de links e acompanhamento. Evite contratos ou textos que apresentem citação por IA como resultado certo."
        ]
      }
    ],
    "checklist": [
      "Explicar a oferta com exemplos confirmáveis.",
      "Conferir contatos e região atendida.",
      "Manter links e páginas acessíveis.",
      "Alinhar marcação ao conteúdo visível.",
      "Distinguir melhoria técnica de garantia de recomendação."
    ],
    "faq": [
      {
        "question": "GEO substitui SEO?",
        "answer": "Não. No trabalho com sites, há uma base comum de conteúdo, rastreamento e organização. Cada ferramenta de busca tem funcionamento e critérios próprios."
      },
      {
        "question": "Preciso de um arquivo especial para aparecer na IA do Google?",
        "answer": "O Google não exige um arquivo ou schema especial para esses recursos. Cumprir boas práticas também não garante indexação ou exibição."
      }
    ],
    "related": [
      "geo-inteligencia-artificial-empresas-sorocaba",
      "arquitetura-sites-alta-performance-campinas",
      "site-profissional-conversao"
    ],
    "sources": [
      {
        "label": "Google Search Central: recursos de IA e seu site",
        "url": "https://developers.google.com/search/docs/appearance/ai-features"
      }
    ],
    "readTime": 2
  },
  {
    "id": "geo-inteligencia-artificial-empresas-sorocaba",
    "file": "ArticleGEO",
    "slug": "/blog/geo-inteligencia-artificial-empresas-sorocaba/",
    "category": "busca",
    "title": "Busca local e IA: como apresentar sua empresa em Sorocaba",
    "description": "Saiba como organizar serviços, localização e informações verificáveis para a descoberta de uma empresa regional em buscas e ferramentas de IA.",
    "answer": "Para apresentar uma empresa regional, informe com precisão o que ela faz, onde está e quais regiões atende. Conteúdo específico e dados consistentes apoiam a descoberta, mas a ausência de uma citação por IA não comprova um problema no negócio.",
    "published": "2026-05-14",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Diferencie endereço de região atendida",
        "paragraphs": [
          "Ter clientes em Sorocaba não significa manter uma unidade na cidade. Descreva corretamente a base da empresa e as modalidades de atendimento, incluindo trabalho remoto ou deslocamento quando existirem.",
          "Essa distinção ajuda o interessado a entender disponibilidade e evita criar expectativas sobre uma estrutura física que não está disponível."
        ]
      },
      {
        "id": "secao-2",
        "title": "Publique informações que tenham utilidade local",
        "paragraphs": [
          "Explique se há restrições de deslocamento, como funciona o primeiro atendimento e quais tipos de pedido são aceitos. Quando houver um projeto autorizado na região, apresente o contexto do trabalho.",
          "Criar várias páginas iguais com cidades diferentes não acrescenta informação. Uma página regional precisa responder a uma necessidade própria, com dados que possam ser mantidos atualizados."
        ]
      },
      {
        "id": "secao-3",
        "title": "Revise a consistência dos canais",
        "paragraphs": [
          "Confira nome comercial, telefone, serviços e links no site e nos perfis administrados pela empresa. Corrija dados antigos e verifique se os destinos de contato funcionam.",
          "Os perfis comerciais e o site têm funções complementares. Mantenha os serviços importantes consultáveis em texto, sem depender exclusivamente de uma publicação antiga em rede social."
        ]
      },
      {
        "id": "secao-4",
        "title": "Interprete as respostas de IA com cuidado",
        "paragraphs": [
          "Uma ferramenta pode citar fontes diferentes conforme a pergunta. Ser mencionado uma vez não garante presença contínua; deixar de aparecer numa consulta também não demonstra invisibilidade em todos os mecanismos.",
          "Avalie o site por critérios verificáveis e acompanhe dados de busca e atendimento disponíveis. A orientação do Google para seus recursos de IA mantém os fundamentos de SEO e não prevê garantia de exibição."
        ]
      }
    ],
    "checklist": [
      "Distinguir base física de área de atendimento.",
      "Manter dados de contato consistentes.",
      "Usar exemplos locais apenas quando reais.",
      "Evitar páginas regionais repetidas."
    ],
    "faq": [
      {
        "question": "Preciso ter endereço em Sorocaba para atender a cidade?",
        "answer": "Isso depende do serviço e da operação. O site deve informar com precisão onde a empresa está e como atende a região."
      },
      {
        "question": "Dá para garantir uma indicação pelo ChatGPT?",
        "answer": "Não. Uma revisão pode melhorar conteúdo e acesso técnico, mas não controla as fontes escolhidas em cada resposta."
      }
    ],
    "related": [
      "geo-generative-engine-optimization-buscas-ia",
      "rebranding-digital-b2b-sorocaba-itu-salto",
      "arquitetura-sites-alta-performance-campinas"
    ],
    "sources": [
      {
        "label": "Google Search Central: recursos de IA e seu site",
        "url": "https://developers.google.com/search/docs/appearance/ai-features"
      }
    ],
    "readTime": 2
  },
  {
    "id": "branding-para-clinicas-campinas-indaiatuba",
    "file": "ArticleClinicas",
    "slug": "/blog/branding-para-clinicas-campinas-indaiatuba/",
    "category": "branding",
    "title": "Branding para clínicas em Campinas: clareza e confiança",
    "description": "Veja como organizar marca, serviços e experiência digital de uma clínica em Campinas ou Indaiatuba com informação clara e responsável.",
    "answer": "O branding de uma clínica deve facilitar a identificação do serviço e manter coerência entre comunicação e atendimento. A apresentação precisa informar com clareza e respeitar as regras aplicáveis aos profissionais e procedimentos divulgados.",
    "published": null,
    "modified": "2026-10-24",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    "sections": [
      {
        "id": "secao-1",
        "title": "Comece pela informação de atendimento",
        "paragraphs": [
          "Liste especialidades e serviços efetivamente disponíveis, modalidades de consulta, localização e formas de contato. Explique o que a pessoa precisa fazer para solicitar informações ou agendamento.",
          "Para uma clínica em Campinas ou Indaiatuba, orientações de acesso podem ser mais úteis que uma descrição genérica de sofisticação. Publique apenas condições que a equipe consiga manter atualizadas."
        ]
      },
      {
        "id": "secao-2",
        "title": "Alinhe identidade visual e legibilidade",
        "paragraphs": [
          "Uma identidade coerente ajuda a reconhecer a clínica em diferentes materiais. Teste contraste, tamanho das letras e leitura no celular, incluindo documentos e orientações enviadas aos pacientes.",
          "Escolhas de cor não comprovam segurança ou qualidade assistencial. O projeto deve apoiar uma comunicação compreensível, sem usar aparência como substituto de informação profissional."
        ]
      },
      {
        "id": "secao-3",
        "title": "Valide o conteúdo com os responsáveis",
        "paragraphs": [
          "A clínica deve revisar dados profissionais, descrição dos serviços e materiais de divulgação antes da publicação. Diferentes profissões podem ter conselhos e regras próprios.",
          "Para publicidade médica, consulte o manual do CFM e as orientações pertinentes ao caso. Não presuma que uma imagem, um depoimento ou uma chamada seja adequado apenas porque aparece em outro perfil."
        ]
      },
      {
        "id": "secao-4",
        "title": "Conecte o site à rotina da recepção",
        "paragraphs": [
          "Confira se o canal anunciado é acompanhado pela equipe e se a resposta informa o próximo passo. Organize o conteúdo com as dúvidas recebidas, sem expor dados pessoais de pacientes.",
          "A marca deve acompanhar a experiência possível na operação. Não prometa desfechos clínicos, preferência dos pacientes ou resultados financeiros como consequência de uma mudança visual."
        ]
      },
      {
        "id": "exemplo-1",
        "title": "Organize a informação para quem está procurando atendimento",
        "paragraphs": [
          "Quem procura uma clínica pode chegar por indicação e ainda assim ter dúvidas sobre especialidades, profissionais, localização e agendamento. A página inicial não precisa explicar todos os procedimentos em profundidade. Ela precisa mostrar quais atendimentos existem e indicar onde encontrar informações mais específicas. Os nomes usados nos menus devem fazer sentido para o público, sem exigir familiaridade com a organização interna da clínica.",
          "Antes de escrever, separe informações do estabelecimento e informações de cada profissional. Horários gerais não significam disponibilidade de todas as especialidades. Uma mesma unidade pode ter modalidades de atendimento diferentes. Confira esses dados com os responsáveis e indique um canal para confirmar agenda. Essa organização reduz ambiguidades sem prometer que o site substitua o atendimento ou a avaliação profissional."
        ]
      },
      {
        "id": "exemplo-2",
        "title": "Use exemplos sem transformar comunicação em promessa",
        "paragraphs": [
          "O portfólio da Orvalia apresenta o site de Ryna Hayashi, na área de psicologia. O material mostra apresentação profissional, informações de atendimento e acesso ao contato. É um exemplo de organização de conteúdo, não uma comprovação de resultado clínico, quantidade de pacientes ou experiência em todas as especialidades de saúde. A apresentação de qualquer projeto precisa respeitar essa diferença.",
          "Fotografias e depoimentos podem envolver pessoas identificáveis. Não os trate como peças de decoração disponíveis automaticamente para publicação. A equipe responsável pelo atendimento deve verificar autorizações e as regras que se aplicam à sua atividade antes de aprovar materiais. O projeto de comunicação pode prever esse ponto de validação, sem presumir que as mesmas condições valem para todas as profissões."
        ]
      },
      {
        "id": "exemplo-3",
        "title": "Revise o caminho do interesse ao agendamento",
        "paragraphs": [
          "Abra o site no celular e procure uma especialidade, o endereço e o canal de agendamento. Leia o texto que aparece depois do clique: ele deve explicar se haverá resposta da recepção, preenchimento de formulário ou abertura de um aplicativo. Não anuncie agendamento confirmado quando a ação apenas envia uma solicitação. O nome do botão deve corresponder ao que o sistema realmente faz.",
          "Planeje também a manutenção. Mudanças de equipe, horários e contatos precisam ter um responsável e um processo simples de atualização. Uma identidade consistente perde utilidade se as informações estiverem antigas. Na proposta, esclareça quem fará essas revisões, quais materiais serão entregues e o que depende da equipe da clínica após a publicação."
        ]
      }
    ],
    "checklist": [
      "Conferir serviços e dados profissionais.",
      "Facilitar localização e contato.",
      "Testar leitura no celular.",
      "Validar conteúdo com os responsáveis."
    ],
    "faq": [
      {
        "question": "Uma identidade nova aumenta o número de pacientes?",
        "answer": "Não há garantia. A identidade organiza a apresentação, enquanto demanda, serviços, acesso e atendimento também influenciam os contatos."
      },
      {
        "question": "As mesmas regras valem para toda clínica?",
        "answer": "Não necessariamente. Os profissionais envolvidos e os serviços divulgados determinam quais regras precisam ser conferidas com os órgãos competentes."
      }
    ],
    "related": [
      "percepcao-de-valor-estetica-premium-indaiatuba",
      "identidade-visual-profissionais-liberais-premium",
      "site-profissional-conversao"
    ],
    "sources": [
      {
        "label": "CFM: Manual de Publicidade Médica",
        "url": "https://publicidademedica.cfm.org.br/"
      }
    ],
    "readTime": 4,
    "relatedProjects": [
      "ryna-hayashi"
    ]
  },
  {
    "id": "posicionamento-digital-advogados-indaiatuba",
    "file": "ArticleAdvogados",
    "slug": "/blog/posicionamento-digital-advogados-indaiatuba/",
    "category": "branding",
    "title": "Site para advogados em Indaiatuba: conteúdo e apresentação",
    "description": "Saiba como planejar a apresentação de um escritório de advocacia: áreas de atuação, trajetória, conteúdo informativo e contato.",
    "answer": "Um site de advocacia deve apresentar o escritório e suas áreas de atuação com informação clara e responsável. Identidade, conteúdo e chamadas de contato precisam ser validados conforme as regras profissionais aplicáveis.",
    "published": "2026-05-14",
    "modified": "2026-10-24",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
    "sections": [
      {
        "id": "secao-1",
        "title": "Organize as informações institucionais",
        "paragraphs": [
          "Apresente quem integra o escritório, a trajetória pertinente e as áreas de atuação efetivas. Dados profissionais devem ser conferidos antes da publicação.",
          "Informe a base em Indaiatuba e a região atendida quando isso corresponde à operação. Evite anunciar estrutura, especialização ou disponibilidade que não possam ser confirmadas."
        ]
      },
      {
        "id": "secao-2",
        "title": "Explique áreas de atuação sem transformar textos em promessas",
        "paragraphs": [
          "Cada página deve ajudar o visitante a entender o tema e o tipo de atendimento. Conteúdos informativos não devem sugerir que uma situação individual terá solução predeterminada.",
          "Defina um fluxo de revisão por advogado responsável. Atualizações normativas e decisões podem exigir revisão dos textos; uma data recente só é útil quando houve conferência real do conteúdo."
        ]
      },
      {
        "id": "secao-3",
        "title": "Valide a comunicação com as regras da profissão",
        "paragraphs": [
          "A OAB mantém orientações e normas sobre publicidade e informação na advocacia. Consulte a versão aplicável e as orientações da seccional ao avaliar textos, imagens e chamadas.",
          "Este artigo trata da organização de um site e não certifica a conformidade de uma campanha. O trabalho de design precisa prever a validação profissional do material publicado."
        ]
      },
      {
        "id": "secao-4",
        "title": "Facilite consulta e contato no celular",
        "paragraphs": [
          "Use menus descritivos, páginas legíveis e informações de contato fáceis de encontrar. Um formulário inicial pode solicitar apenas os dados necessários para a equipe orientar o próximo passo.",
          "Organize o recebimento de mensagens e o cuidado com informações enviadas pelos interessados. Não publique relatos de clientes ou documentos para demonstrar trabalho sem a análise adequada."
        ]
      },
      {
        "id": "exemplo-1",
        "title": "Dê contexto às áreas de atuação",
        "paragraphs": [
          "Uma lista de áreas jurídicas pode não ser suficiente para uma pessoa reconhecer se está no lugar adequado. O site pode apresentar, em linguagem compreensível, quais temas o escritório atende e como funciona o contato inicial. Evite publicar casos ou circunstâncias de clientes como exemplos sem a avaliação apropriada dos responsáveis. Situações ilustrativas devem ser identificadas como tal e não servir de promessa de solução.",
          "Como exercício editorial, pense em alguém que busca orientação sobre um contrato. A página pode explicar quais informações gerais são necessárias para solicitar atendimento, quem fará o retorno e se existe opção remota. Não precisa avaliar o contrato publicamente nem antecipar uma conclusão. O objetivo comercial do conteúdo é esclarecer a adequação do serviço e o caminho para conversar com o profissional."
        ]
      },
      {
        "id": "exemplo-2",
        "title": "Confiança também depende da qualidade da informação",
        "paragraphs": [
          "Confira os nomes dos profissionais, qualificações divulgadas, contatos e cidade de atuação. Inclua somente informações que o escritório consiga confirmar e manter. A identidade visual deve apoiar essa leitura, com tamanho de texto confortável e hierarquia entre os assuntos. Uma página escura ou uma tipografia sofisticada não demonstra, por si, qualidade de atendimento.",
          "As regras profissionais de publicidade precisam entrar no processo de aprovação. Este guia trata de organização de marca e site; não substitui a análise das normas aplicáveis pelo escritório. Antes de publicar depoimentos, resultados ou comparações, faça essa avaliação. O projeto deve deixar claro quem aprova o conteúdo e como serão corrigidas informações que se tornem desatualizadas."
        ]
      },
      {
        "id": "exemplo-3",
        "title": "Defina um primeiro contato compatível com a operação",
        "paragraphs": [
          "Um formulário inicial pode pedir nome, canal de retorno e uma indicação geral do assunto, conforme a necessidade do escritório. Evite incentivar o visitante a enviar documentos ou detalhes sensíveis antes de entender como será o atendimento. O formulário não deve dar a impressão de que uma contratação ou análise jurídica já começou apenas porque houve o envio de uma mensagem.",
          "Para avaliar o site, teste uma jornada completa: encontrar uma área de atuação, ler a apresentação, localizar os profissionais e iniciar o contato. Registre se há links quebrados, conteúdo repetido ou dúvidas sem resposta. Essa revisão mostra prioridades concretas. Criar novas páginas sem corrigir o caminho básico pode aumentar a quantidade de conteúdo e manter o mesmo problema de compreensão."
        ]
      }
    ],
    "checklist": [
      "Conferir identificação e áreas de atuação.",
      "Criar um fluxo de revisão dos textos.",
      "Validar chamadas e imagens com o responsável.",
      "Testar contato e leitura no celular."
    ],
    "faq": [
      {
        "question": "O site pode prometer resultado de uma demanda?",
        "answer": "A comunicação não deve apresentar um resultado individual como certo. Os materiais devem passar pela revisão do profissional responsável e pelas regras aplicáveis."
      },
      {
        "question": "A Orvalia substitui a revisão jurídica do conteúdo?",
        "answer": "Não. A Orvalia pode organizar identidade, conteúdo e desenvolvimento; a validação das informações e da comunicação profissional cabe aos responsáveis pelo escritório."
      }
    ],
    "related": [
      "identidade-profissionais-liberais",
      "identidade-visual-profissionais-liberais-premium",
      "arquitetura-sites-alta-performance-campinas"
    ],
    "sources": [
      {
        "label": "CFOAB: publicidade e informação na advocacia",
        "url": "https://eticaedisciplina.oab.org.br/provimento"
      }
    ],
    "readTime": 4,
    "relatedProjects": []
  },
  {
    "id": "design-estrategico-arquitetura-itu-jundiai",
    "file": "ArticleArquitetura",
    "slug": "/blog/design-estrategico-arquitetura-itu-jundiai/",
    "category": "sites",
    "title": "Site para arquitetos: como organizar um portfólio em Itu e Jundiaí",
    "description": "Veja como apresentar projetos, autoria, serviços e processo no site de um escritório de arquitetura que atende Itu, Jundiaí e região.",
    "answer": "Um portfólio de arquitetura precisa explicar o projeto além das imagens: contexto, participação do escritório, serviços envolvidos e créditos. A navegação deve ajudar o visitante a encontrar trabalhos pertinentes e iniciar uma conversa.",
    "published": "2026-05-14",
    "modified": "2026-10-23",
    "image": "https://images.unsplash.com/photo-1600607687931-cebf80211ff1?auto=format&fit=crop&q=80&w=1200",
    "sections": [
      {
        "id": "secao-1",
        "title": "Selecione projetos com uma função na apresentação",
        "paragraphs": [
          "Escolha trabalhos que mostrem o tipo de serviço que o escritório quer apresentar. Nem todas as imagens precisam entrar na página inicial; organize uma seleção com caminhos para aprofundar.",
          "Informe local e tipo de projeto quando houver autorização. Distingua obra executada, estudo e imagem de visualização para evitar que o leitor interprete um render como fotografia de uma entrega."
        ]
      },
      {
        "id": "secao-2",
        "title": "Explique participação e créditos",
        "paragraphs": [
          "Um projeto pode envolver várias equipes. Descreva a participação do escritório e os serviços efetivamente realizados. Inclua os créditos pertinentes e confirme autorização de uso das imagens.",
          "O contexto ajuda a pessoa a entender o trabalho. A apresentação não precisa expor dados pessoais, endereços detalhados ou informações privadas dos clientes."
        ]
      },
      {
        "id": "secao-3",
        "title": "Apresente serviços e região atendida",
        "paragraphs": [
          "Explique como o escritório participa do projeto e o que acontece no primeiro contato. Para atendimento em Itu ou Jundiaí, informe as condições reais de atuação e deslocamento quando forem relevantes.",
          "Evite repetir uma página inteira apenas para mudar a cidade. Trabalhos, processos e orientações próprias da região oferecem informação mais útil."
        ]
      },
      {
        "id": "secao-4",
        "title": "Trate imagens para a experiência no celular",
        "paragraphs": [
          "Confira recortes, tamanho dos arquivos e ordem de leitura. Plantas e imagens com detalhes podem precisar de visualização ampliada ou legenda. Fotos horizontais nem sempre funcionam em um corte vertical.",
          "O contato deve continuar fácil depois da consulta ao projeto. Teste a jornada desde a galeria até o pedido de informações, incluindo navegação por teclado."
        ]
      }
    ],
    "checklist": [
      "Distinguir estudo, render e obra executada.",
      "Explicar participação e créditos.",
      "Conferir autorizações das imagens.",
      "Testar detalhes e contato no celular."
    ],
    "faq": [
      {
        "question": "O portfólio precisa mostrar todos os trabalhos?",
        "answer": "Não. Uma seleção coerente pode apresentar melhor os serviços. Os critérios devem considerar o público e os tipos de projeto atendidos."
      },
      {
        "question": "Posso publicar imagens de um projeto de outra equipe?",
        "answer": "É necessário conferir autoria, créditos e autorização de uso. A apresentação deve deixar clara a participação do escritório."
      }
    ],
    "related": [
      "arquitetura-sites-alta-performance-campinas",
      "identidade-profissionais-liberais",
      "site-profissional-conversao"
    ],
    "sources": [],
    "readTime": 2
  },
  {
    "id": "percepcao-de-valor-estetica-premium-indaiatuba",
    "file": "ArticleEstetica",
    "slug": "/blog/percepcao-de-valor-estetica-premium-indaiatuba/",
    "category": "branding",
    "title": "Clínicas de estética: como comunicar valor antes do atendimento",
    "description": "Entenda como informações claras, identidade visual e experiência de contato ajudam a apresentar uma clínica de estética em Indaiatuba.",
    "answer": "A percepção de valor de uma clínica depende de como a pessoa entende o serviço, as condições de atendimento e os cuidados apresentados. Identidade e site ajudam nessa comunicação, sem substituir qualificação profissional ou garantir resultados.",
    "published": "2026-05-14",
    "modified": "2026-10-24",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Explique o serviço antes de vender uma aparência",
        "paragraphs": [
          "Apresente os serviços efetivamente oferecidos e como funciona o primeiro contato. Termos amplos como “protocolo exclusivo” precisam de contexto para não esconder a informação que o interessado procura.",
          "A comunicação deve ser compatível com as atribuições dos profissionais envolvidos. Diferentes atividades podem exigir validações específicas antes da divulgação."
        ]
      },
      {
        "id": "secao-2",
        "title": "Use o visual para facilitar a consulta",
        "paragraphs": [
          "Organize nomes, descrições e informações de atendimento. Uma paleta discreta ou uma fotografia elegante pode compor a identidade, mas a leitura no celular precisa continuar sendo prioridade.",
          "Não trate um estilo de luxo como prova de qualidade. Mostre instalações e equipe apenas quando correspondem à operação, distinguindo imagens ilustrativas de imagens reais."
        ]
      },
      {
        "id": "secao-3",
        "title": "Confira imagens, afirmações e responsabilidade profissional",
        "paragraphs": [
          "Materiais sobre procedimentos devem ser revisados por quem responde tecnicamente pelo serviço e conforme as regras aplicáveis. Não transfira automaticamente para uma área o que é permitido em outra.",
          "Quando houver atividade médica, consulte o manual do CFM. Imagens e relatos precisam de análise adequada; autorização de uso não deve ser tratada como validação de qualquer chamada comercial."
        ]
      },
      {
        "id": "secao-4",
        "title": "Alinhe comunicação e atendimento",
        "paragraphs": [
          "O contato inicial deve explicar o próximo passo e evitar respostas que contradigam o site. Revise horários, endereço e disponibilidade de serviços.",
          "Observe as dúvidas recorrentes e atualize as páginas para facilitar a consulta. A comunicação pode tornar o trabalho mais compreensível, mas não elimina objeções de preço nem garante preferência dos clientes."
        ]
      },
      {
        "id": "exemplo-1",
        "title": "Apresente o atendimento antes de acumular adjetivos",
        "paragraphs": [
          "Quem consulta uma página de estética precisa distinguir os serviços, entender como pedir informações e saber quem realiza o atendimento. Expressões como premium ou exclusivo não respondem a essas perguntas. Organize uma apresentação com descrição objetiva, responsáveis e orientações de contato. Quando o serviço depende de avaliação individual, essa condição deve aparecer de maneira clara no conteúdo aprovado pela equipe.",
          "O material de Beth Olmeda, apresentado no portfólio da Orvalia, conecta identidade visual, textos de apresentação e página de serviços. O exemplo permite observar a coerência entre essas frentes. Ele não sustenta uma promessa de agenda cheia, aumento de faturamento ou resultado de procedimento. A prova do trabalho de comunicação está no que foi entregue e pode ser mostrado."
        ]
      },
      {
        "id": "exemplo-2",
        "title": "Imagens precisam esclarecer e respeitar o contexto",
        "paragraphs": [
          "Uma fotografia pode ajudar a conhecer o espaço ou a profissional, mas não deve deixar o visitante sem entender qual serviço está sendo apresentado. Inclua texto de apoio e mantenha boa leitura no celular. Se a imagem for ilustrativa, não a apresente como registro de um resultado ou como fotografia de um cliente real. A escolha visual deve preservar essa distinção.",
          "Materiais com pessoas, depoimentos ou comparações de resultados exigem avaliação dos responsáveis e das regras da atividade. O desenho da página não resolve sozinho essas condições. Preveja uma aprovação específica antes de publicar. Quando não houver autorização ou informação suficiente, prefira explicar o processo de atendimento em vez de preencher a página com provas que não podem ser confirmadas."
        ]
      },
      {
        "id": "exemplo-3",
        "title": "Avalie clareza ao longo de toda a jornada",
        "paragraphs": [
          "Compare as informações do perfil social, do site e das mensagens de atendimento. Se um canal usa nomes diferentes para o mesmo serviço ou anuncia condições antigas, a identidade visual não corrige a confusão. Defina uma versão de referência para serviços, contatos e orientações. Depois, estabeleça quem atualiza cada canal quando houver uma mudança.",
          "Um teste simples é pedir a alguém que não conhece o negócio para localizar um serviço e explicar o próximo passo usando apenas o site. Anote o que essa pessoa encontrou e onde parou. Isso é uma observação de uso, não uma medição de conversão. Para acompanhar contatos e vendas, combine dados de navegação com informações do atendimento, evitando atribuir todo resultado à nova aparência."
        ]
      }
    ],
    "checklist": [
      "Descrever serviços e primeiro contato.",
      "Separar imagem real de ilustração.",
      "Validar divulgação com os responsáveis.",
      "Manter dados e orientações atualizados."
    ],
    "faq": [
      {
        "question": "Uma marca com aparência de luxo garante preferência?",
        "answer": "Não. O visual é uma parte da experiência. Qualificação, condições de atendimento, acesso e expectativas também participam da escolha."
      },
      {
        "question": "As regras médicas se aplicam a toda atividade estética?",
        "answer": "Não necessariamente. É preciso identificar a atividade e os profissionais responsáveis para conferir as normas pertinentes."
      }
    ],
    "related": [
      "branding-para-clinicas-campinas-indaiatuba",
      "identidade-visual-profissionais-liberais-premium",
      "posicionamento-premium"
    ],
    "sources": [
      {
        "label": "CFM: Manual de Publicidade Médica",
        "url": "https://publicidademedica.cfm.org.br/"
      }
    ],
    "readTime": 4,
    "relatedProjects": [
      "beth-olmeda"
    ]
  },
  {
    "id": "gap-de-percepcao-digital-empresas-excelentes-comuns",
    "file": "ArticleGapPercepcao",
    "slug": "/blog/gap-de-percepcao-digital-empresas-excelentes-comuns/",
    "category": "gap",
    "title": "Gap de percepção digital: por que empresas excelentes parecem comuns",
    "description": "Entenda o gap entre a capacidade real da empresa e sua apresentação digital e veja como revisar mensagem, identidade, site e contato.",
    "answer": "Na abordagem editorial da Orvalia, gap de percepção é a distância entre o que a empresa consegue entregar e o que sua comunicação permite compreender. O diagnóstico procura diferenças concretas entre operação, mensagem e experiência digital.",
    "published": "2026-08-10",
    "modified": "2026-10-23",
    "image": null,
    "sections": [
      {
        "id": "secao-1",
        "title": "Como essa distância aparece na prática",
        "paragraphs": [
          "Imagine uma empresa que ampliou sua equipe e passou a atender projetos mais complexos, mas mantém no site a lista antiga de serviços. O visitante não vê a evolução porque ela não foi traduzida para a apresentação.",
          "Outro sinal é a equipe precisar explicar sempre as mesmas informações antes de enviar uma proposta. Isso pode indicar uma oportunidade de melhorar o conteúdo, embora não seja prova de que o site seja a única causa das dificuldades comerciais."
        ]
      },
      {
        "id": "secao-2",
        "title": "Três sinais para investigar",
        "paragraphs": [
          "Confira se a oferta está compreensível, se os materiais apresentam exemplos pertinentes e se o contato funciona. Falta de clareza, ausência de contexto e barreiras de navegação merecem revisão.",
          "Peça a alguém de fora para localizar um serviço e explicar o próximo passo. Registre o que ela encontrou e onde hesitou. Uma tarefa observável ajuda a discutir o problema sem depender apenas de gosto pessoal."
        ]
      },
      {
        "id": "secao-3",
        "title": "As quatro frentes de revisão da Orvalia",
        "paragraphs": [
          "Mercado: entender público, alternativas e situação de contratação. Mensagem: explicar oferta, escopo e diferenças demonstráveis. Experiência: organizar identidade e navegação para a consulta. Aquisição: conectar a descoberta do serviço ao atendimento.",
          "Essas frentes são uma forma de organizar o diagnóstico da Orvalia, não uma certificação ou uma fórmula de resultado. Cada negócio pode precisar de prioridades e entregas diferentes."
        ]
      },
      {
        "id": "secao-4",
        "title": "Como priorizar o que precisa mudar",
        "paragraphs": [
          "Comece por informações erradas e caminhos quebrados. Depois revise páginas de serviços, exemplos e materiais comerciais. Uma reconstrução visual completa só faz sentido quando responde a problemas identificados.",
          "Defina responsáveis e critérios de conferência: a oferta ficou clara? Os contatos funcionam? A equipe consegue usar os novos materiais? Isso torna o trabalho mais verificável do que avaliar apenas se o site ficou mais bonito."
        ]
      },
      {
        "id": "secao-5",
        "title": "O que acompanhar depois da implantação",
        "paragraphs": [
          "Registre dúvidas, origem dos pedidos e uso dos materiais pela equipe. Compare esses sinais com o momento anterior, considerando mudanças em preço, demanda e atendimento.",
          "Comunicar melhor não significa que toda objeção desaparecerá. O objetivo é permitir uma avaliação mais informada da empresa e reduzir ruídos que a própria comunicação consegue corrigir."
        ]
      }
    ],
    "checklist": [
      "Comparar serviços atuais com os publicados.",
      "Observar dúvidas comerciais recorrentes.",
      "Testar consulta e contato com alguém de fora.",
      "Definir prioridades e responsáveis."
    ],
    "faq": [
      {
        "question": "Gap de percepção é uma medida exata?",
        "answer": "Neste contexto, é uma abordagem de diagnóstico da Orvalia. A análise usa sinais concretos de conteúdo, navegação e comunicação, sem atribuir um percentual fictício."
      },
      {
        "question": "Trocar o layout resolve o problema?",
        "answer": "Pode ajudar quando há barreiras visuais ou de navegação, mas mensagem, oferta e atendimento também precisam ser avaliados."
      }
    ],
    "related": [
      "erros-marca-amadora",
      "branding-estrategico-indaiatuba-campinas",
      "site-profissional-conversao"
    ],
    "sources": [],
    "readTime": 3
  },
  {
    "id": "quanto-custa-site-indaiatuba",
    "file": "ArticleSiteCost",
    "slug": "/blog/quanto-custa-site-indaiatuba/",
    "category": "sites",
    "title": "Quanto custa um site em Indaiatuba? Como comparar propostas",
    "description": "Entenda o que muda o investimento em um site: páginas, conteúdo, integrações e manutenção. Um roteiro para comparar propostas em Indaiatuba e região.",
    "answer": "O custo de um site depende do que será produzido e mantido: estrutura, páginas, textos, imagens, formulários e integrações. A Orvalia define o investimento em proposta, sem uma tabela pública. Compare escopos equivalentes e custos recorrentes antes de contratar.",
    "published": "2026-10-24",
    "modified": "2026-10-24",
    "image": null,
    "sections": [
      {
        "id": "escopo",
        "title": "Comece pelo que o site precisa resolver",
        "paragraphs": [
          "Antes de perguntar o preço, descreva o papel do site. Uma profissional pode precisar apresentar atendimentos e receber contatos. Uma empresa de serviços técnicos talvez precise explicar várias áreas de atuação, localidades atendidas e como solicitar uma visita. Os dois projetos podem ser chamados de site institucional, mas exigem decisões e quantidades de conteúdo diferentes.",
          "Liste as páginas prioritárias e as perguntas que cada uma precisa responder. Não use apenas o número de telas como medida: uma página com uma integração ou um conteúdo complexo pode exigir mais trabalho que várias páginas simples. Informe também se o negócio já tem identidade visual, textos aprovados e fotografias autorizadas. A produção desses materiais precisa ser considerada na proposta."
        ]
      },
      {
        "id": "conteudo",
        "title": "Texto, imagem e implementação são trabalhos diferentes",
        "paragraphs": [
          "Confira se o orçamento inclui escrever os textos, organizar informações fornecidas ou apenas inserir conteúdo pronto. A mesma dúvida vale para imagens, tratamento de fotografias e identidade visual. Quando essas responsabilidades ficam indefinidas, o projeto pode parar à espera de materiais ou exigir contratações que não estavam previstas.",
          "Peça uma descrição das etapas de revisão e aprovação. Quem confere os serviços? Quem aprova contatos, preços e condições eventualmente publicados? Quantas rodadas de ajustes estão incluídas? Uma proposta útil registra essas combinações e explica como será tratada uma mudança de escopo. O objetivo é reduzir surpresas durante a execução, não transformar a contratação em uma lista de termos técnicos."
        ]
      },
      {
        "id": "integracoes",
        "title": "O que acontece depois do clique também entra no escopo",
        "paragraphs": [
          "Um botão que abre o WhatsApp é diferente de um formulário que recebe dados, valida o envio e exibe uma confirmação. Agenda, pagamento e integração com sistemas existentes acrescentam outras responsabilidades. Descreva a ação esperada pelo visitante e peça que o fornecedor explique o caminho completo, incluindo o que ocorre se o serviço externo estiver indisponível.",
          "Na Orvalia, o formulário de contato confirma o recebimento na própria página quando o serviço retorna sucesso. Isso é um exemplo do tipo de comportamento que deve ser combinado em um projeto, não uma funcionalidade automaticamente incluída em qualquer proposta. Também vale esclarecer quem acompanhará as solicitações recebidas depois que o site entrar no ar."
        ]
      },
      {
        "id": "recorrentes",
        "title": "Separe implantação de despesas recorrentes",
        "paragraphs": [
          "Domínio, hospedagem, contas de e-mail, serviços externos e manutenção podem ter cobranças próprias. Pergunte quem administra cada conta, em nome de quem será registrada e como funcionam renovações. A proposta deve distinguir o que está incluído na criação e o que dependerá de pagamento ou acompanhamento posterior.",
          "Manutenção também precisa de definição: corrigir uma falha não é o mesmo que criar novas páginas ou atualizar conteúdo todos os meses. Combine os itens cobertos, a forma de solicitar mudanças e o que acontece após a entrega. Não compare um projeto com acompanhamento contínuo a uma entrega pontual sem reconhecer essa diferença."
        ]
      },
      {
        "id": "exemplos",
        "title": "Compare com exemplos de necessidades, não com promessas",
        "paragraphs": [
          "No portfólio da Orvalia, Dario Eletricidade apresenta serviços de elétrica e caminhos de contato. Quinta de Caraíva organiza a apresentação da hospedagem e o contato para reservas. Esses projetos mostram necessidades diferentes de informação. Eles ajudam a conversar sobre o que seu site precisa conter, mas não estabelecem um preço padrão para empresas desses setores.",
          "Veja os materiais e anote o que faz sentido para sua operação. Uma empresa de Indaiatuba que atende Campinas e região precisa explicar sua área de atendimento com precisão. Não é necessário criar uma página repetida para cada cidade. Também não faz sentido contratar uma integração que a equipe não conseguirá usar ou acompanhar."
        ]
      },
      {
        "id": "proposta",
        "title": "Como iniciar uma conversa sobre investimento",
        "paragraphs": [
          "Envie o nome da empresa, os serviços prioritários, o endereço do site atual se houver e o que hoje está difícil de apresentar. Se existir uma data importante ou um limite de orçamento, informe para discutir possibilidades de escopo. Você não precisa escolher uma tecnologia antes de explicar o problema.",
          "A Orvalia responde pelo e-mail informado para combinar o próximo passo e apresenta as condições em proposta. Este artigo não informa faixa de preços porque não há uma tabela pública aprovada para os diferentes escopos. Antes de contratar, confirme entregas, responsabilidades, prazos, condições de pagamento e custos recorrentes. O envio do formulário não gera contratação automática."
        ]
      }
    ],
    "checklist": [
      "Listar páginas e dúvidas prioritárias.",
      "Separar textos e imagens de implementação.",
      "Confirmar como os contatos serão recebidos.",
      "Perguntar sobre domínio, hospedagem e manutenção.",
      "Comparar propostas com entregas equivalentes."
    ],
    "faq": [
      {
        "question": "A Orvalia tem um preço fixo para criar um site?",
        "answer": "Não há uma tabela pública. A proposta considera as páginas, o conteúdo, as integrações e as responsabilidades do projeto."
      },
      {
        "question": "Hospedagem e domínio estão sempre incluídos?",
        "answer": "Não presuma essa inclusão. A proposta precisa indicar quais contas e despesas estão cobertas e quais serão contratadas ou renovadas separadamente."
      }
    ],
    "related": [
      "site-profissional-conversao",
      "identidade-visual-precos",
      "arquitetura-sites-alta-performance-campinas"
    ],
    "relatedProjects": [
      "dario-eletricidade",
      "quinta-de-caraiva"
    ],
    "sources": [],
    "readTime": 4
  }
];
