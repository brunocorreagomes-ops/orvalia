export interface SlideData {
  id: number;
  chapter: string;
  title: string;
  subtitle: string;
  speakerNotes: string[];
  content: any;
}

export const slides: SlideData[] = [
  {
    id: 1,
    chapter: "CAPA / INTRODUÇÃO",
    title: "A Estratégia de Comunicação Orgânica de Alto Impacto",
    subtitle: "Posicionamento de alto padrão, construção de autoridade intelectual e conversão consultiva de alto valor para o mercado premium.",
    speakerNotes: [
      "Seja muito bem-vinda à apresentação da sua estratégia de comunicação, Débora.",
      "Hoje vamos apresentar um planejamento desenhado sob medida para você, focado inteiramente no poder do orgânico de alto nível, livre do ruído do tráfego de massa.",
      "O objetivo aqui é transformar a sua expertise real em um ímã de conexões qualificadas, de maneira elegante, discreta e altamente assertiva.",
      "Sinta-se à vontade para navegar pelos slides usando as setas ou o painel de navegação inferior."
    ],
    content: {
      client: "Débora Bolangno",
      agency: "Orvalia",
      context: "Planejamento Estratégico de Posicionamento Intelectual",
      date: "Julho & Agosto 2026",
      quote: "Onde o silêncio do ruído digital dá lugar à clareza do diálogo de valor."
    }
  },
  {
    id: 2,
    chapter: "01. CONTEXTO ESTRATÉGICO",
    title: "A Mudança no Tabuleiro do Posicionamento",
    subtitle: "Por que os métodos tradicionais de distribuição em massa perderam a eficácia e a confiança junto ao cliente de alta renda.",
    speakerNotes: [
      "Para falar com o cliente premium (alto ticket / decisor C-level), precisamos entender uma grande mudança recente no mercado digital.",
      "O excesso de anúncios barulhentos e promessas mágicas gerou um fenômeno conhecido como 'fadiga do patrocínio'. Os decisores ignoram anúncios óbvios.",
      "Em vez de alcance inflado, esse cliente busca substância. O conteúdo orgânico é o único capaz de sustentar essa profundidade e servir de validação relacional.",
      "Destaque que o orgânico funciona como um ativo de longo prazo: ele continua gerando autoridade cumulativa mesmo que as campanhas parem."
    ],
    content: {
      pillars: [
        {
          title: "A Fadiga do Patrocinado",
          description: "Clientes de alto padrão ignoram anúncios genéricos, promessas repetitivas e fórmulas de lançamentos. A confiança real não se compra com leilões de tráfego pago; constrói-se com substância diária.",
          highlight: "Saturação do mercado de massa"
        },
        {
          title: "A Moeda da Confiança",
          description: "Em negócios consultivos e contratações complexas, a decisão de compra é essencialmente humana e relacional. O seu conteúdo deve funcionar como um validador silencioso antes mesmo da primeira reunião.",
          highlight: "A compra como ato relacional"
        },
        {
          title: "Ativos Digitais de Longo Prazo",
          description: "O tráfego pago encerra seus efeitos no exato instante em que o orçamento é zerado. Já o ecossistema orgânico qualificado se acumula ao longo do tempo, gerando autoridade duradoura e sustentável.",
          highlight: "Valor cumulativo no tempo"
        }
      ]
    }
  },
  {
    id: 3,
    chapter: "02. TESE CENTRAL",
    title: "De Conteúdo à Conversa Qualificada",
    subtitle: "A premissa fundamental de Orvalia: comunicação refinada não busca alcance volumétrico, mas sim iniciar diálogos com as pessoas certas.",
    speakerNotes: [
      "Esta é a nossa tese central de trabalho para este projeto.",
      "Nós não estamos no negócio de acumular milhares de seguidores casuais ou likes vazios. Nós estamos no negócio de gerar conversas de alto nível.",
      "Para nós, um post de sucesso não é aquele que viraliza, mas sim aquele que faz um lead qualificado nos enviar uma mensagem privada com uma pergunta profunda.",
      "Compare as duas colunas: a abordagem tradicional foca no algoritmo de massa, enquanto a nossa abordagem premium foca no tomador de decisão."
    ],
    content: {
      leftPanel: {
        title: "O Modelo de Massa (O que evitaremos)",
        items: [
          { label: "Métrica Primária", value: "Alcance total, curtidas e visualizações vazias" },
          { label: "Linguagem", value: "Gatilhos mentais agressivos, polêmicas e dancinhas" },
          { label: "Foco Técnico", value: "Alimentar o algoritmo e postar em quantidade extrema" },
          { label: "Relação com o Lead", value: "Venda automática, páginas de vendas frias e distantes" }
        ]
      },
      rightPanel: {
        title: "O Modelo Premium Orvalia (O que criaremos)",
        items: [
          { label: "Métrica Primária", value: "Conversas de alta intenção abertas na DM / WhatsApp" },
          { label: "Linguagem", value: "Tom editorial, storytelling focado em problemas reais, sobriedade" },
          { label: "Foco Técnico", value: "Alimentar a mente do tomador de decisão com frameworks autorais" },
          { label: "Relação com o Lead", value: "Relacionamento um-para-um, intimidade digital e convite consultivo" }
        ]
      }
    }
  },
  {
    id: 4,
    chapter: "03. AUDIÊNCIA & DORES",
    title: "A Anatomia da Audiência Ideal",
    subtitle: "Quem Débora Bolangno precisa atrair e quais são as dores silenciosas que nossa linha editorial irá ativar.",
    speakerNotes: [
      "Aqui identificamos exatamente quem é a pessoa na outra ponta da tela.",
      "Não estamos escrevendo para o estudante ou para o profissional júnior. Estamos escrevendo para o Decisor Cético — fundadores de empresas, diretores e tomadores de decisão.",
      "Eles têm três dores que raramente admitem: a sensação de isolamento estratégico, a fadiga de lidar com processos confusos e o peso oculto de uma operação ineficiente.",
      "Nossos temas de conteúdo vão acender uma luz exatamente nessas fendas de dor, posicionando a Débora como a pessoa ideal para resolvê-las."
    ],
    content: {
      profiles: [
        {
          name: "O Decisor Cético (C-Suite & Founders)",
          tags: ["Valoriza o tempo", "Repele pitch de vendas agressivo", "Focado em resultado"],
          description: "Um líder experiente que já contratou soluções genéricas no passado e se frustrou. Ele não consome conteúdo por entretenimento; consome para mitigar riscos corporativos e encontrar parceiros intelectuais reais."
        },
        {
          name: "O Especialista Líder de Setor",
          tags: ["Preza por reputação", "Busca parcerias sólidas", "Crítico de clichês"],
          description: "Alguém que entende profundamente da própria área, mas reconhece que precisa de suporte externo qualificado para destravar novos horizontes de eficiência ou expansão."
        }
      ],
      pains: [
        {
          title: "Isolamento na Decisão",
          description: "A solidão do topo: o tomador de decisão precisa de um espelho intelectual confiável para validar suas escolhas mais difíceis."
        },
        {
          title: "Ruído Operacional Oculto",
          description: "O cansaço crônico com a complexidade desnecessária nos negócios e o desperdício de energia em processos que deveriam ser simples."
        },
        {
          title: "Falta de Parceiros de Alto Nível",
          description: "A dificuldade real de encontrar no mercado prestadores de serviços que possuam maturidade corporativa e tom sênior."
        }
      ]
    }
  },
  {
    id: 5,
    chapter: "04. ECOSSISTEMA DE CANAIS",
    title: "A Sinfonia dos Canais Integrados",
    subtitle: "Como cada plataforma desempenha um papel único, atuando de forma sinérgica na sua estratégia.",
    speakerNotes: [
      "Neste slide interativo, nós estruturamos o ecossistema de canais que criará o seu cerco de autoridade.",
      "Cada canal tem um papel estratégico claro. Por favor, clique nos canais no painel para ver como o Instagram, o LinkedIn, o WhatsApp, o seu Blog/Site e as parcerias interagem.",
      "O LinkedIn constrói a tese de negócios profunda. O Instagram humaniza o seu estilo de vida intelectual e valores de trabalho. O WhatsApp e o direct são onde a mágica das conversas de fechamento acontece."
    ],
    content: {
      channels: [
        {
          id: "instagram",
          name: "Instagram",
          role: "Vitrine de Estilo & Autoridade Fluida",
          purpose: "Funciona como a primeira impressão diária. Mostra a estética, os bastidores intelectuais, a consistência e a presença profissional da Débora no dia a dia.",
          formats: ["Carrosséis conceituais de alto padrão estético", "Stories estratégicos de rotina corporativa", "Destaques institucionais refinados"],
          kpi: "Início de diálogos ativos via direct (DMs)"
        },
        {
          id: "linkedin",
          name: "LinkedIn",
          role: "Thought Leadership (Liderança de Pensamento)",
          purpose: "Onde consolidamos sua profundidade de negócios. Foco na rede de executivos, investidores, parceiros de mercado e tomadores de decisão qualificados.",
          formats: ["Artigos de opinião forte e estruturada", "Estudos de caso reais de soluções de negócios", "Análises de cenários e tendências corporativas"],
          kpi: "Taxa de novos seguidores qualificados e contatos diretos no inbox corporativo"
        },
        {
          id: "whatsapp",
          name: "WhatsApp",
          role: "O Close-up e a Conversão Consultiva",
          purpose: "O canal de máxima intimidade e proximidade. Utilizado para estreitar laços, enviar materiais exclusivos selecionados sob medida e agendar conversas por vídeo.",
          formats: ["Interação humana individual personalizada", "Envio de frameworks sob medida para o desafio do lead", "Áudios assertivos e explicativos sobre o problema do cliente"],
          kpi: "Reuniões de diagnóstico estratégico agendadas"
        },
        {
          id: "hub",
          name: "Blog / Acervo Intelectual",
          role: "Seu Território de Propriedade Marca",
          purpose: "Sua casa digital. Onde o conteúdo aprofundado reside livre das distrações, anúncios e limitações das redes sociais de terceiros.",
          formats: ["Frameworks e metodologias exclusivas escritas detalhadamente", "Ensaios conceituais ricos", "Página de apresentação institucional premium"],
          kpi: "Tempo de permanência na página e solicitações de contato qualificadas"
        },
        {
          id: "partnerships",
          name: "Parcerias & Indicações",
          role: "A Alavanca de Endosso Silencioso",
          purpose: "Utilização da rede de contatos e marcas parceiras para transferir autoridade e reputação por meio de colaborações sutis e convites fechados.",
          formats: ["Co-autoria de artigos de negócios", "Participação em eventos fechados ou podcasts de parceiros", "Recomendações mútuas e discretas"],
          kpi: "Acesso a novas fatias de audiência pré-filtrada por parceiros confiáveis"
        }
      ]
    }
  },
  {
    id: 6,
    chapter: "05. CONTEÚDO EM CONVERSA",
    title: "O Caminho do Insight à Conversão",
    subtitle: "A mecânica exata de conversão silenciosa: como transformamos um leitor passivo em uma oportunidade real.",
    speakerNotes: [
      "Esta é a mecânica operacional de como o conteúdo orgânico gera vendas.",
      "Ela é dividida em 4 passos simples. Nós criamos um 'Insight Provocador' (passo 1) que desestabiliza o status quo.",
      "Em seguida, fazemos uma 'Chamada de Conexão Sutil' (passo 2) — sem empurrar vendas, convidando o leitor a pedir um framework prático ou um arquivo complementar de valor na DM.",
      "No direct, iniciamos uma 'Triagem Qualificada' (passo 3) que é uma conversa humana genuína. Quando identificamos o fit, fazemos o 'Convite para a Mesa' (passo 4)."
    ],
    content: {
      steps: [
        {
          number: "01",
          title: "O Insight Provocador",
          subtitle: "Atração Intelectual",
          description: "Publicamos um conteúdo autoral que quebra clichês do mercado. O decisor lê, sente que o texto foi escrito exatamente para o seu momento atual e reconhece a sua sênioridade técnica."
        },
        {
          number: "02",
          title: "A Conexão Sutil (CTA)",
          subtitle: "Gatilho de Reciprocidade",
          description: "Ao final do conteúdo, fazemos um convite leve: 'Desenhei um framework de 4 passos que usei para solucionar essa dor. Se quiser receber um PDF explicativo, basta me enviar \"DIAGNÓSTICO\" no privado.' Sem links frios, gerando interação imediata."
        },
        {
          number: "03",
          title: "A Triagem Qualificada",
          subtitle: "Diálogo de Especialista",
          description: "A equipe da Orvalia em parceria com você, ou você diretamente, abre o diálogo na DM enviando o material solicitado. Fazemos perguntas sinceras sobre o contexto do lead para entender se há um problema real ali."
        },
        {
          number: "04",
          title: "O Convite para a Mesa",
          subtitle: "Transição para Venda",
          description: "Identificado o fit estratégico e financeiro, fazemos o convite natural: 'Esse desafio é comum. Vamos agendar um diagnóstico rápido de 20 minutos no Zoom para mapearmos os caminhos?' O lead aceita sem sentir pressão comercial."
        }
      ]
    }
  },
  {
    id: 7,
    chapter: "06. RITMO DE CAMPANHA",
    title: "O Cronograma de julho & agosto",
    subtitle: "A cadência de implementação e os focos narrativos estruturados semana a semana.",
    speakerNotes: [
      "O nosso planejamento para os próximos dois meses é extremamente estruturado.",
      "Julho será o mês de consolidação de bases e ativação de autoridade. Definiremos a voz, criaremos os primeiros artigos de opinião fortes e iniciaremos o ecossistema.",
      "Agosto será o mês focado em capturar a intenção ativa e iniciar o fluxo de conversas. Disponibilizaremos o primeiro material rico proprietário e começaremos a colheita consultiva.",
      "Esta visão em linha do tempo mostra a progressão sem pressa, mas com ritmo constante."
    ],
    content: {
      timeline: [
        {
          phase: "FASE 1 — JULHO (Semanas 1-2)",
          title: "Consolidação de Fundamentos",
          focus: "Imersão de Voz & Setup Editorial",
          details: [
            "Alinhamento estratégico do tom de voz e narrativa da Débora.",
            "Auditoria de posicionamento dos perfis públicos (LinkedIn & Instagram).",
            "Desenvolvimento do primeiro lote de 4 conteúdos âncora de altíssimo nível."
          ]
        },
        {
          phase: "FASE 2 — JULHO (Semanas 3-4)",
          title: "Ativação de Autoridade",
          focus: "Lançamento da Tese de Mercado",
          details: [
            "Início das publicações semanais no LinkedIn (artigos estruturados).",
            "Narrativas provocadoras no Instagram focando nas principais dores do C-Suite.",
            "Início sutil de interação em comentários com tomadores de decisão selecionados."
          ]
        },
        {
          phase: "FASE 3 — AGOSTO (Semanas 5-6)",
          title: "Geração de Valor Dedicado",
          focus: "Lançamento de Material Rico",
          details: [
            "Criação e distribuição orgânica de um material rico / framework proprietário.",
            "Ativação do fluxo de CTA para DMs ('Envie MATERIAL para receber').",
            "Triagem inicial de leads que demonstraram interesse no conteúdo."
          ]
        },
        {
          phase: "FASE 4 — AGOSTO (Semanas 7-8)",
          title: "Nutrição & Transição",
          focus: "Colheita de Oportunidades",
          details: [
            "Condução dos leads qualificados para conversas consultivas privadas.",
            "Primeira rodada de agendamentos de diagnóstico no Zoom.",
            "Revisão geral de métricas, aprendizados e preparação para o próximo ciclo."
          ]
        }
      ]
    }
  },
  {
    id: 8,
    chapter: "07. FUNIL DE CONVERSA ORGÂNICA",
    title: "O Caminho Silencioso da Decisão",
    subtitle: "Uma visualização geométrica de como refinamos as interações para atrair apenas quem tem fit real.",
    speakerNotes: [
      "Neste slide, trouxemos um funil visual clássico, porém adaptado ao mercado premium.",
      "Note que a boca do nosso funil é mais estreita por design. Nós não queremos milhões de pessoas curiosas.",
      "O topo do funil foca em atração intelectual de elite. O meio em conexão e frameworks práticos. O relacionamento acontece na DM/WhatsApp em conversas humanas.",
      "O fundo do funil é a conversão, onde oferecemos o diagnóstico especializado."
    ],
    content: {
      funnelStages: [
        {
          name: "ATRAÇÃO (Topo)",
          goal: "Atrair Líderes & Decisores",
          metric: "Visualizações qualificadas, cliques no perfil, novos seguidores de cargos sênior.",
          description: "Conteúdos que desestabilizam verdades confortáveis no mercado e demonstram sua visão de vanguarda."
        },
        {
          name: "CONEXÃO (Meio)",
          goal: "Gerar Reciprocidade Intelectual",
          metric: "Solicitação de materiais na DM, salvamentos de posts, comentários reflexivos.",
          description: "Frameworks autorais, fluxos práticos e guias de resolução de problemas específicos do cliente."
        },
        {
          name: "RELACIONAMENTO (Meio-Fundo)",
          goal: "Iniciar Diálogos Genuínos",
          metric: "Troca de mensagens diretas personalizadas, áudios trocados, interesse explícito.",
          description: "Triagem humana e consultiva na DM / WhatsApp. Conversas de especialista para especialista."
        },
        {
          name: "CONVERSÃO (Fundo)",
          goal: "Agendar Diagnóstico de Negócios",
          metric: "Reuniões marcadas no Zoom, propostas corporativas enviadas, contratos de alto ticket fechados.",
          description: "A transição perfeita da rede social para o ambiente seguro de uma sala de reuniões executiva."
        }
      ]
    }
  },
  {
    id: 9,
    chapter: "08. COMO FUNCIONA A EXECUÇÃO",
    title: "Sua Voz, Nossa Engenharia Editorial",
    subtitle: "A parceria simbiótica: Orvalia cuida de toda a complexidade operacional para que você foque no seu negócio.",
    speakerNotes: [
      "Uma das grandes barreiras que os executivos encontram para criar conteúdo é o tempo.",
      "Por isso, desenhamos um fluxo onde o seu tempo é totalmente otimizado. Nós não queremos que você passe horas editando posts ou escrevendo rascunhos.",
      "Nós faremos reuniões rápidas e estruturadas de 45 minutos por mês para extrair seus insights reais, causos práticos e o seu tom de voz natural.",
      "A partir daí, a Orvalia faz toda a engenharia editorial. Nós escrevemos, desenhamos e cuidamos de todo o processo de publicação. Você só precisa ler e aprovar."
    ],
    content: {
      workflow: [
        {
          title: "1. Imersão & Co-Criação",
          subtitle: "Tempo de Dedicação: Rápido & Focado",
          description: "Realizamos uma sessão de 45 minutos mensal com a Débora para debater os tópicos estratégicos do mês, capturar histórias reais de clientes e definir o tom editorial das narrativas."
        },
        {
          title: "2. Engenharia de Escrita & Design",
          subtitle: "Orvalia assume 100% da Operação",
          description: "Nossa equipe traduz as conversas gravadas em artigos maduros para o LinkedIn, carrosséis de design sóbrio para o Instagram e roteiros sob medida. Mantemos sua assinatura de voz intacta."
        },
        {
          title: "3. Homologação & Aprovação",
          subtitle: "Segurança de Marca Absoluta",
          description: "Disponibilizamos todos os conteúdos em uma plataforma de aprovação simples e unificada. Nada vai ao ar sem a sua revisão e o seu aval. Seus padrões éticos e profissionais são protegidos."
        },
        {
          title: "4. Monitoria & Triage Inicial",
          subtitle: "Facilitando o Seu Fechamento",
          description: "Orvalia acompanha as interações diárias. Quando um lead solicita um material rico, nós auxiliamos no envio rápido e na triagem das primeiras perguntas para encaminhar o lead pronto para o seu WhatsApp."
        }
      ]
    }
  },
  {
    id: 10,
    chapter: "09. SINAIS DE SUCESSO",
    title: "Medindo o que Realmente Gera Valor",
    subtitle: "Os indicadores estratégicos que validam se estamos construindo um ativo corporativo real.",
    speakerNotes: [
      "Em estratégias de alto ticket, as métricas tradicionais de rede social podem mentir. Um post com poucas curtidas pode ter sido lido por cinco diretores de grandes empresas.",
      "Por isso, nossos sinais de sucesso focam na qualidade e na profundidade do engajamento.",
      "Estes são os nossos quatro principais indicadores: Conversas Genuínas Iniciadas (o indicador de tração mais crítico), a Qualidade do Perfil dos Novos Seguidores, a Taxa de Resposta Intelectual aos conteúdos e, por fim, as Reuniões de Diagnóstico Consultivo Agendadas."
    ],
    content: {
      metrics: [
        {
          title: "Conversas de Alta Intenção Iniciadas",
          value: "Métrica Principal",
          symbol: "speech",
          trend: "Crescimento contínuo",
          description: "O volume de leads qualificados que tomam a iniciativa de enviar mensagens privadas em busca de frameworks ou para comentar seus posicionamentos teóricos."
        },
        {
          title: "Qualidade de Perfil de Audiência",
          value: "Filtro Ativo",
          symbol: "user-check",
          trend: "Auditoria quinzenal",
          description: "Monitoramento do perfil profissional das pessoas que passam a interagir com os posts (LinkedIn e Instagram) para garantir que ocupam cargos de decisão."
        },
        {
          title: "Taxa de Resposta Intelectual",
          value: "Métrica de Debate",
          symbol: "message-square",
          trend: "Maturidade de discussão",
          description: "Quantidade de comentários longos, de alto nível, onde o leitor não apenas elogia, mas traz perguntas reais, dúvidas operacionais e contribuições sinceras."
        },
        {
          title: "Taxa de Reuniões de Diagnóstico",
          value: "Conversão Comercial",
          symbol: "calendar",
          trend: "Nossa meta final",
          description: "Percentual de conversas de direct e WhatsApp que se transformam em agendamentos de reuniões de negócios por vídeo com Débora Bolangno."
        }
      ]
    }
  },
  {
    id: 11,
    chapter: "10. PRÓXIMOS PASSOS",
    title: "O Caminho do Início",
    subtitle: "O plano de ação imediato para estruturar o ecossistema estratégico de comunicação orgânica.",
    speakerNotes: [
      "Para iniciarmos este projeto fantástico com o pé direito, estruturamos os quatro passos imediatos pós-aprovação.",
      "Primeiro, formalizamos nossa parceria com a assinatura do acordo comercial.",
      "Segundo, fazemos a imersão de voz detalhada de 1 hora e meia, onde destrinchamos as suas teses intelectuais, jargões e tabus do seu mercado.",
      "Terceiro, entregamos o primeiro lote de conteúdos conceituais para sua aprovação. E por fim, no dia 1 de Julho, iniciamos oficialmente as publicações e o monitoramento estratégico."
    ],
    content: {
      steps: [
        {
          number: "01",
          title: "Aprovação & Alinhamento de Escopo",
          time: "Imediato",
          description: "Assinatura do acordo comercial de parceria estratégica e formalização dos cronogramas de entrega."
        },
        {
          number: "02",
          title: "Sessão de Imersão e Voz (Branding)",
          time: "Semana 1",
          description: "Entrevista em profundidade (1.5h) para mapearmos o vocabulário da Débora, seus pontos de vista fortes, seus tabus profissionais e principais histórias de sucesso."
        },
        {
          number: "03",
          title: "Apresentação da Linha Editorial & Calendário Mês 1",
          time: "Semana 2",
          description: "Envio do planejamento de temas, roteiros iniciais dos carrosséis do Instagram e o primeiro artigo completo do LinkedIn para sua revisão e ajustes."
        },
        {
          number: "04",
          title: "Lançamento Oficial & Monitoramento de Interações",
          time: "Dia 1 de Julho",
          description: "Início coordenado das publicações nos canais e início do monitoramento ativo de directs e comentários para triagem de conversas de valor."
        }
      ]
    }
  },
  {
    id: 12,
    chapter: "EPÍLOGO",
    title: "Autoridade não se grita. Constrói-se.",
    subtitle: "A transição silenciosa, elegante e inevitável de um posicionamento genérico para se tornar a principal referência intelectual do seu nicho.",
    speakerNotes: [
      "Chegamos ao final da nossa apresentação estratégica, Débora.",
      "A nossa tese é clara: no mercado premium, quem fala mais alto raramente convence. Convence quem fala com mais propriedade, elegância e direcionamento.",
      "Este planejamento foi desenhado para respeitar o seu tempo, a sua inteligência de negócios e a sua sofisticação pessoal.",
      "Obrigado pela confiança. Estamos prontos para iniciar essa jornada de valor junto com você e a Orvalia.",
      "Estou aberto a dúvidas, feedbacks e ajustes para consolidarmos este plano!"
    ],
    content: {
      finalWord: "O mercado premium não escolhe quem aparece mais vezes. Escolhe quem demonstra mais clareza, maestria técnica e maturidade intelectual em seus pontos de vista.",
      deboraSignature: "Débora Bolangno",
      deboraRole: "Posicionamento Estratégico",
      orvaliaSignature: "Orvalia",
      orvaliaRole: "Inteligência & Narrativas de Autoridade"
    }
  }
];
