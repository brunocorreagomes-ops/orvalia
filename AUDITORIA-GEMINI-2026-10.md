# Orvalia: auditoria das ponderações do Gemini

Data: 24/10/2026. Base comparada: versão publicada correspondente ao commit `8569ea3`, código do repositório e arquivo de análise fornecido pelo proprietário. As alterações descritas neste documento foram implementadas na fonte e verificadas localmente; o resultado da publicação é conferido na execução do GitHub Actions correspondente.

## Conclusão estratégica e comercial

O relatório reúne boas recomendações de clareza comercial, mas descreve vários elementos de uma versão anterior do site. O conteúdo publicado conferido não tinha “Mapear meu gap”, já possuía FAQ e já ampliava as imagens dos projetos. A origem da leitura antiga não pôde ser determinada: não há evidência suficiente para atribuí-la a cache, DNS ou ao navegador usado pelo Gemini.

A direção adotada foi facilitar a decisão de compra com linguagem próxima, entregas verificáveis, exemplos e expectativas de contato claras. Não foram adotados medo, vergonha, superioridade autodeclarada ou promessas sem base operacional. Isso preserva o posicionamento da Orvalia como atendimento direto e profissional para empresas de Indaiatuba e região.

## Comparação ponto a ponto

| # | Ponderação | O que havia na versão conferida | Decisão e justificativa comercial |
|---|---|---|---|
| 1 | A home publicada seria antiga | H1 “Marca e sites para empresas de Indaiatuba e Campinas”; textos em português, nova animação e cartões já publicados | Diagnóstico não reproduzido. A comparação partiu do conteúdo atual, sem restaurar elementos antigos. |
| 2 | `/branding/`, `/portfolio/` e `/contato/` falhariam para acesso direto | As três páginas responderam HTTP 200 com HTML pré-renderizado, com e sem www | Nenhuma mudança de hospedagem: não havia falha confirmada para corrigir. Um acesso bem-sucedido não comprova indexação de todos os buscadores. |
| 3 | O www causaria versão diferente ou redirecionamento incorreto | Os quatro endereços com www fizeram um único 301 para a rota equivalente sem www; os conteúdos finais de cada par tinham SHA-256 igual | DNS e CNAME preservados. Alterá-los sem falha aumentaria o risco sem benefício comprovado. |
| 4 | Texto de abertura abstrato | Já havia uma versão mais simples que a citada pelo relatório | Refinado para a situação real de quem recebe indicação e pesquisa antes do contato. Mantida a frase principal aprovada pelo proprietário. |
| 5 | Dor de percepção: concorrentes menos qualificados e comparação por preço em cinco segundos | Texto ainda conceitual na seção de dificuldades | Adaptado para “Seu trabalho é bom. O site mostra isso?”. Removidas a comparação não demonstrada com concorrentes e a regra arbitrária de cinco segundos. |
| 6 | Dor de clareza: explicar o básico no WhatsApp | Ainda havia “hierarquia de menos” e “competência em ruído” | Trocado por “Você explica sempre as mesmas coisas?”. O texto mostra quais dúvidas o site pode esclarecer, sem desqualificar quem entra em contato. |
| 7 | Dor de conversão: vergonha de enviar o próprio site e vendedor 24h | A seção explicava conversão com termos técnicos | Trocado por dificuldades observáveis: telefone escondido, informações incompletas e uso no celular. Não foi usada vergonha como argumento de venda. |
| 8 | Trocar “Mapear meu gap” e esclarecer o botão | O jargão já havia sido removido; o CTA ainda dizia “Pedir diagnóstico estratégico” | Padronizados os CTAs principais como “Conversar sobre meu projeto”. A abertura explica que o visitante preenche um formulário e Bruno responde por e-mail. |
| 9 | Prometer diagnóstico gratuito, WhatsApp imediato e parecer em duas horas úteis | O caminho real é formulário, confirmação na própria página e retorno posterior | Promessa rejeitada: canal incorreto, prazo não definido e gratuidade não confirmada. Evita expectativa que o atendimento pode não sustentar. |
| 10 | Faixa de públicos atendidos logo após a abertura | Não havia uma faixa compacta de identificação por público | Implementados quatro grupos: saúde e atendimento; serviços técnicos e empresas; turismo e hospedagem; profissionais e negócios locais. A linguagem apresenta o público pretendido sem inventar experiência em setores não demonstrados. |
| 11 | Mais prova concreta nos projetos | As imagens já abriam em ampliação, mas faltavam entregas identificáveis e destinos próprios | Adicionadas três entregas por projeto e seis páginas específicas, com objetivo, organização do trabalho e imagem real. A pessoa pode compartilhar e avaliar um exemplo sem cair sempre no portfólio genérico. |
| 12 | Mostrar site no computador e celular | Havia capturas reais de celular, uma identidade visual e uma apresentação profissional | Mantidos os materiais disponíveis. Não foram fabricadas capturas de computador, resultados ou métricas para preencher o layout. |
| 13 | Substituir Reposicionar / Reconstruir / Evoluir por entregáveis | Os cartões com exemplos e ações de contato já tinham sido publicados | Preservado o raciocínio por momento, com a identificação explícita de logotipo/identidade, criação de sites/páginas e Google/buscas com IA. Reconhecimento da necessidade e escopo aparecem juntos. |
| 14 | H1 deveria mencionar serviços e cidades | O H1 semântico já citava marca, sites, Indaiatuba e Campinas; a frase grande era um H2 | Refinado para “Identidade visual e criação de sites em Indaiatuba e Campinas”. Título e descrição da página também foram atualizados, sem esconder palavras-chave. |
| 15 | H2 dos serviços deveria usar termos de compra | O título da seção dizia “A solução começa pelo seu momento” | Alterado para “Marca, site e buscas. Cada um com um papel.”, com escopos concretos nos três cartões. Mantidos títulos editoriais onde ajudam a leitura. |
| 16 | Palavras coladas no HTML | As expressões antigas citadas não estavam no conteúdo atual; o site usava headings, parágrafos, listas e links separados semanticamente | Não foi aplicado um `{" "}` indiscriminado entre todos os blocos. A leitura por um extrator que apaga tags não é, isoladamente, prova de problema de indexação. Novas informações usam estrutura textual e semântica explícita. |
| 17 | Criar FAQ visível na home | Já existiam três perguntas e respostas | Ampliado para seis perguntas úteis: envio, responsável, serviços, prazo, cidades e contratação. Um único conjunto de dados alimenta o texto visível e o JSON-LD, evitando contradições. |
| 18 | Pergunta “Qual é a melhor agência?” com resposta autodeclarada | Essa afirmação não existia | Rejeitada. Não foi encontrada prova independente que sustente superioridade. A confiança é construída com projetos reais e informações conferíveis. |
| 19 | Contrapor a Orvalia a “agências comuns” que vendem pacotes | O site já destacava a condução direta por Bruno | Mantida uma diferenciação positiva: responsável identificado e escopo definido por projeto. Não foi generalizado o trabalho de concorrentes. |
| 20 | Prazos de duas a quatro e três a seis semanas | Não havia uma política confirmada desses prazos | Não publicados. O FAQ informa que prazo depende do escopo, conteúdo, páginas e aprovações e é definido na proposta. |
| 21 | Declarar ampla experiência em clínicas médicas, arquitetura, indústria e outros segmentos | O portfólio contém psicologia, estética, elétrica, hospedagem, atendimento profissional e turismo | Os exemplos foram limitados ao que os materiais existentes sustentam. Público que se deseja atender não foi apresentado como histórico comprovado. |
| 22 | Resumo factual com endereço e novo e-mail | Nome, experiência, base em Indaiatuba, telefone e Gmail já constavam no site; endereço de rua e `contato@orvalia.com.br` não estavam confirmados | Criado resumo visível com responsável, serviços, base, região, telefone e `orvaliastudio@gmail.com`. Não foram publicados endereço nem caixa postal novos. |
| 23 | Garantir recomendação por ChatGPT, Gemini, Perplexity ou Claude | A página de buscas já explicava que não há garantia de posição ou citação | Mantida a distinção entre melhorar compreensão/acesso e prometer indicação. FAQ e dados estruturados ajudam a organizar informação; não asseguram recomendações. |
| 24 | Colocar arquivos na branch gh-pages | O workflow publica o artefato `dist` com `actions/deploy-pages`, e as rotas estavam acessíveis | Nenhuma branch nova foi criada. As páginas novas entram no pré-render e no sitemap já utilizados pelo projeto. |

## Ajustes efetivamente implementados

1. Abertura com serviços/localidade explícitos e texto comercial ligado à pesquisa após indicação.
2. CTAs principais consistentes e explicação do formulário e do retorno por e-mail.
3. Faixa de identificação de público logo após a abertura, com links úteis.
4. Três dificuldades reescritas como situações reconhecíveis pelo empresário.
5. Entregas explícitas nos cartões de atuação, preservando a organização por momento.
6. Três etiquetas de entregas em cada um dos seis projetos e páginas próprias para Ryna Hayashi, Beth Olmeda, Dario Eletricidade, Quinta de Caraíva, Marta Ana Chiconato e KNJ Tur.
7. Páginas de projetos com título, canonical, descrição e navegação próprios, imagem existente, contexto e caminho para contato. Rotas antigas do portfólio foram preservadas.
8. FAQ de seis perguntas compartilhado entre interface e dados estruturados.
9. Resumo factual visível na seção de Bruno e cadastro único dos dados usados na home.
10. Remoção da duplicação da entidade da empresa no HTML da home: a informação específica da página passa a ser a referência. Sem endereço de rua ou contato inventados.
11. Atualização do pré-render, sitemap e índice de projetos em `llms.txt`; este arquivo continua sendo tratado como índice auxiliar, sem promessa de efeito no Google.
12. Verificação automatizada das seis páginas, descoberta pela home, canonicals, imagens, FAQ visível versus JSON-LD e expectativas de contato.

## Evidência técnica

- Oito endereços conferidos antes das alterações: quatro rotas com e sem www. Todos terminaram em HTTP 200. O www fez exatamente um 301 preservando a rota. Cada par retornou conteúdo final idêntico.
- TypeScript passou.
- Seis testes dos contratos de contato e analytics passaram, sem novo envio real de formulário nesta auditoria.
- Build e pré-render geraram 60 páginas da aplicação e 66 arquivos HTML.
- Verificação: 1.946 referências de links/canonicals, 56 destinos internos e 49 URLs canônicas, sem destinos ou âncoras ausentes.
- Compartilhamento: 60 páginas com metadados completos; imagens de 1.200 × 630 existentes.
- Conteúdo editorial: 21 artigos preservados com canonicals, metadados, FAQ, capas e sitemap conferidos.
- Verificação comercial: seis projetos distintos com URL própria; FAQ da home consistente com o HTML; uma única definição principal da organização na home.
- A retirada dos preços e dos materiais privados da publicação continua verificada pelo script de release.

## O que esta auditoria não comprova

Não é um estudo de aumento de conversão, faturamento ou posições no Google. O identificador real do GA4 continua sem configuração no projeto; não há base para afirmar ganho percentual de contatos. Search Console e Perfil da Empresa não foram acessados, portanto indexação e dados desses painéis não foram certificados. Isso não impede as melhorias de conteúdo, mas limita a medição do resultado comercial.

## Fontes primárias consultadas

- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, guia para recursos generativos: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central, políticas de dados estruturados: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google Search Central, atualizações: https://developers.google.com/search/updates

A documentação do Google diz que não há uma otimização especial ou marcação obrigatória para suas experiências de IA; continuam valendo os fundamentos de SEO e informações úteis e confiáveis. Também informa o encerramento do resultado enriquecido de FAQ a partir de 7/5/2026. O FAQ permanece útil para o visitante e para clareza do conteúdo, sem ser vendido como garantia de destaque na busca. Essa orientação sobre o Google não implica que todos os outros serviços de IA usem os mesmos critérios.
