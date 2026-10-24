# Orvalia: segunda revisão das ponderações externas

24/10/2026. Base: commit `433015b`, fonte React e respostas HTTP do site publicado. As notas de 0 a 10 do relatório são opiniões editoriais, não medições de desempenho ou conversão.

## Parecer comercial

A contribuição mais útil desta rodada é reduzir abstração e aproximar os serviços da decisão de contratação. Foram priorizados o conteúdo da página de sites, a navegação para serviços, os caminhos de orçamento e a qualidade dos guias. A home recebida no HTML já continha a versão atual. Não se confirmou a necessidade de limpar cache, alterar DNS ou substituir a identidade visual.

## Comparação individual

| # | Observação | Conferência e decisão |
|---|---|---|
| 1 | Print diferente do HTML da home | Não reproduzido: o HTML HTTP já continha “Falta clareza”, o bloco de públicos e seis perguntas. Nenhuma explicação de cache foi assumida como fato. |
| 2 | Menus diferentes na home, blog e sites | Não reproduzido no cabeçalho atual, que é um componente compartilhado. Foram encontrados CTAs antigos no corpo das páginas de serviço e corrigidos. |
| 3 | Datas do blog provam home antiga | Datas editoriais não identificam o deploy da home. Revisões de artigos são registradas conforme mudanças reais, sem atualizar todos apenas para parecerem recentes. |
| 4 | Alternância de superfícies e slider funcionam visualmente | Preservados, assim como a abertura minimalista em movimento contínuo. |
| 5 | Seção e fotografia de Bruno funcionam | Preservadas. A imagem já era WebP no próprio domínio. |
| 6 | Inglês visível na home | As expressões citadas não estavam no HTML atual. Não houve troca de nomes internos de componentes por serem invisíveis ao visitante. |
| 7 | Numeração duplicada e salto 06–08 | Havia números de seção e de itens sobrepostos. Retirados os números dos três problemas, ordenadas as seções e identificado o FAQ como 07. |
| 8 | Imagens de casos pequenas ou desiguais | Área das imagens padronizada, ampliando as apresentações de Beth e Marta. Mantidos formatos e materiais reais, sem transformar identidade em captura fictícia de site. |
| 9 | Apoios pequenos e cinza | Aumentados nota do formulário, entregas dos serviços e dados do estúdio. Cinco pares críticos de texto/fundo calculados entre 4,82:1 e 11,40:1. Não equivale a uma certificação de contraste de todos os elementos do site. |
| 10 | Português de Portugal | Encontrados “precisa de ser”, “Contactar” e “utilizador” em páginas internas. Corrigidos os trechos. Os exemplos alegados na home não foram reproduzidos. |
| 11 | Blocos repetem a mesma mensagem | O bloco de momentos virou uma explicação objetiva de serviços, com menos texto repetido. O método foi mantido por explicar o processo, com caminho direto para contato. |
| 12 | Falta “O que fazemos” com três serviços | Implementado usando os cartões existentes, antes dos projetos. Cada cartão informa público, entregas e link para a página do serviço. |
| 13 | H1 antigo, escondido ou com “alta performance” | O H1 recebido já era visível e dizia “Identidade visual e criação de sites em Indaiatuba e Campinas”. Preservado junto da frase principal aprovada. Não foi adotado um diagnóstico baseado na versão antiga. |
| 14 | Tom agressivo da /sites | Confirmado. Removidos medo de concorrência, desqualificação de outros fornecedores e promessa de ranqueamento desde o primeiro dia. |
| 15 | Diagnóstico sem explicar duração ou gratuidade | CTAs principais das páginas de serviço padronizados como “Conversar sobre meu projeto”. Contato explica formulário e resposta por e-mail. Não inventada conversa gratuita de 20 minutos. |
| 16 | Falta Business Scan | Não há produto operacional confirmado na versão atual. Não foi criado um novo diagnóstico, captura de dados ou entrega automática sem definição. Os guias públicos funcionam como primeiro passo de menor compromisso. |
| 17 | Mostrar pacote de R$597 ou faixa de preços | Contraria a decisão anterior do proprietário de retirar preços. Preservada essa decisão. Adicionados links para guias que explicam fatores de custo e comparação de propostas. |
| 18 | Artigo de identidade visual sem links da home e sites | A home agora liga aos guias de identidade visual e sites. A página de sites liga ao guia específico de custo, mais adequado ao contexto. |
| 19 | Muitos nomes de CTA | Uniformizados CTAs principais nos serviços; botões utilitários continuam descrevendo a ação: e-mail, WhatsApp, ampliar imagem, conhecer serviço. Não se renomeou um botão de WhatsApp como se fosse formulário. |
| 20 | Rota “/” na mensagem do WhatsApp | Confirmado e corrigido. Mensagem: “Olá, Bruno! Vim pelo site da Orvalia e quero conversar sobre meu projeto.” A origem continua disponível nos atributos de analytics. |
| 21 | Só Ryna tem contexto e entregas | Todos os seis projetos já têm URL própria, objetivo, abordagem e entregas. A profundidade da evidência disponível varia; nenhum resultado ou depoimento foi inventado para preencher lacunas. |
| 22 | Depoimentos, site ao vivo e antes/depois como prova | Só seriam publicados com texto e destino conferidos. Não foram criados depoimentos, URLs externas presumidas ou antes/depois que os materiais disponíveis não comprovam. Os guias passaram a ligar a exemplos reais do portfólio. |
| 23 | Método termina apenas no blog | Confirmado. Adicionado “Conversar sobre meu projeto” ao fim do bloco, preservando as leituras complementares. |
| 24 | Orvalia não apareceu em duas buscas | Não é prova de ausência no índice. Search Console e Perfil da Empresa não foram acessados nesta rodada; não há certificação de indexação ou ranking. |
| 25 | /sites sem cidade no título e descrição curta | Corrigido título para “Criação de sites em Indaiatuba e Campinas”. Descrição informa público, serviços, contato e convite à conversa. |
| 26 | Cinco artigos curtos | Aprofundados identidade visual/preço, branding local, clínicas, advogados e estética com exemplos, responsabilidades e critérios de contratação. Tempo de leitura recalculado. Não adotada uma quota de 900–1.500 palavras como requisito de SEO. |
| 27 | Possível canibalização entre artigos de marca | Diferenciados os títulos/intenção: guia local, etapas de um projeto e manutenção cotidiana da marca. Artigos de apoio ligam ao guia local. Sem dados do Search Console não é possível afirmar competição real entre URLs. URLs antigas preservadas. |
| 28 | Falta conteúdo de custo de site | Criado “Quanto custa um site em Indaiatuba? Como comparar propostas”, com custos de implantação e recorrentes, conteúdo, integrações e responsabilidades. Sem preços não aprovados. |
| 29 | Criar páginas por segmento | Já existem páginas de soluções para médicos e advogados, e seis projetos específicos. Nesta rodada foram conectados serviços técnicos e hospedagem à /sites e os guias aos projetos. Não criadas páginas repetidas para cada termo/cidade sem conteúdo próprio. |
| 30 | Beth, Marta e Bruno hospedados no ibb | A alegação não corresponde aos três componentes atuais: já são WebP locais, com dimensões. Encontrada e corrigida uma referência residual à imagem de Beth em uma página de soluções. |
| 31 | NAP e CNPJ no rodapé | Acrescentados nome, cidade/UF, e-mail, telefone e atendimento por agendamento em todas as páginas. Não publicado CNPJ ou endereço de rua não confirmado. O Perfil da Empresa não foi acessado para comparar cadastros. |
| 32 | Casos com URL própria | Seis URLs já existiam na base e foram preservadas, agora com ligações adicionais a partir dos guias. |
| 33 | www deve redirecionar | Home, sites, blog e contato com e sem www chegaram a HTTP 200 e cada par tinha conteúdo final idêntico. Nenhuma mudança de domínio necessária. |
| 34 | sitemap, robots, llms.txt e schema | Arquivos do projeto e HTML gerado verificados, novo artigo incluído no sitemap e pré-render. Testes conferem JSON-LD, FAQ visível, URLs e compartilhamento. Isso não equivale a uma execução do Rich Results Test ou acesso ao Search Console. |
| 35 | PageSpeed mobile | Tentativa pela API oficial retornou HTTP 429. Não há score válido desta rodada, nem base para atribuir LCP ao hero ou ao slider. |
| 36 | Slider touch e scroll vertical | A implementação já usa `touch-action: pan-y pinch-zoom`, cancelamento de ponteiro e captura; o range nativo oferece alternativa de teclado. Não foi alegado teste em aparelho físico. |
| 37 | Movimento reduzido e teclado | Já há MotionConfig com preferência do usuário, redução global de animações e controle de pausa no hero. Verificação de teclado e interação em navegador complementa a leitura do código; não equivale a um teste físico mobile. |
| 38 | Respostas do FAQ no HTML | As seis perguntas e respostas já estão no HTML pré-renderizado, com schema compartilhado. Teste automatizado confirma correspondência. |
| 39 | /contato: campos e confirmação | Mantida prioridade obrigatória e nome/e-mail/empresa obrigatórios. Telefone, site/perfil e contexto são opcionais. Confirmação integrada só é exibida após retorno de sucesso do serviço; sem abrir tela do Google. Removida estimativa não medida de preenchimento em menos de um minuto. Nenhum novo envio real de dados nesta auditoria. |
| 40 | Reescrever toda a home | Não necessário. Ajustada a organização e o conteúdo com falhas confirmadas, mantendo identidade, animação e trabalho já aprovado. |

## Verificação e limites

TypeScript, testes dos contratos de contato/analytics, build e verificação de páginas são executados antes da publicação. A revisão inclui 22 artigos e seis projetos específicos, com metadados, descoberta, FAQ, imagens de compartilhamento e sitemap.

O GA4 permanece sem identificador real configurado. Não há dados para anunciar aumento de conversão, vendas, posições ou citações por IA. O PageSpeed retornou 429, e não houve teste em telefone físico. A publicação e as interações observadas em navegador são conferidas separadamente após o deploy.

Fontes primárias: Google Search Central, conteúdo útil (https://developers.google.com/search/docs/fundamentals/creating-helpful-content) e PageSpeed Insights API (https://developers.google.com/speed/docs/insights/v5/get-started). O Google informa que não possui uma contagem preferida de palavras. O objetivo da ampliação editorial é resolver dúvidas, não atingir uma quantidade arbitrária.
