# Orvalia: comparação do diagnóstico externo com o projeto real

Base da revisão: relatório e ZIP recebidos, comparados com o commit `dee9408c627a81d7b0be0ba7e21455c5cd01c1d2`, fonte local e interface publicada. O ZIP foi extraído em uma pasta separada. Não foi aplicado por cima do projeto.

## Parecer

O diagnóstico traz correções úteis de contraste, manutenção e conteúdo, mas mistura problemas técnicos, itens já resolvidos e preferências estéticas. Publicar o ZIP inteiro não é necessário. A seleção aplicada preserva o formulário próprio, as capturas recentes dos projetos, a tipografia definida a partir da home, o blog e os cartões de compartilhamento.

Na comparação inicial, 34 arquivos existentes apresentavam diferenças; 71 arquivos versionados não estavam no ZIP; havia um documento novo. A maior parte das diferenças visuais vinha da remoção de numeração, fonte monoespaçada e caixa alta, além da tradução dos rótulos. Essas escolhas não são, por si, correções de bugs.

## Conferência dos principais pontos

| Tema do relatório | O que foi confirmado | Decisão e ajuste |
| --- | --- | --- |
| Import do blog, menu móvel, hidratação e compartilhamento | Já estavam corrigidos na versão atual. | Preservados. Os 21 artigos e seus cartões continuam verificados. |
| README ensinava deploy por branch | O README atual já documentava Actions, Node 24 e publicação de `dist/`. | Complementado com os comandos de verificação, fontes e limites da medição. |
| Destaques dos títulos em outra família e itálico | No navegador, os destaques da home estavam em Hanken Grotesk, peso 500, estilo normal. O CSS compartilhado já neutralizava as classes serifadas nos títulos. | Não foi refeito o sistema tipográfico. A verificação distingue classes presentes no TSX do estilo efetivamente aplicado. |
| Title e título social da home diferentes | A diferença é intencional: apresentação na busca e mensagem de compartilhamento podem ser distintas. | Mantidos, sem metadados duplicados. |
| Contraste e textos muito pequenos | Confirmados o ciano escuro insuficiente em fundo claro, o rodapé pouco legível e diversos rótulos de 9–11 px. | Ciano escuro passa a `#006B68`; tons secundários claros foram escurecidos e o rodapé foi clareado. Rótulos de interface foram elevados a 12 px. O mock ilustrativo mantém escala própria. |
| Mono, caixa alta, números e inglês seriam problemas técnicos | São decisões editoriais, com exceção de legibilidade e inconsistências de linguagem. | A identidade foi preservada. Corrigidos usos de português europeu e o rótulo do rodapé que apontava para Branding. Não houve remoção indiscriminada de todos os rótulos. |
| Páginas legais no visual antigo | Confirmado. | Superfície clara, cores e hierarquia alinhadas à home; o conteúdo contratual não foi reescrito. |
| Fontes externas e pesos ausentes | Confirmados Google Fonts e pesos monoespaçados não solicitados. | Fontes passam a ser servidas pelo domínio a partir de `@fontsource`, com pesos usados pela interface. |
| Peso de Lenis e GSAP | As duas bibliotecas eram usadas apenas para alterar a rolagem. O arquivo de animações também incluía Framer Motion, portanto seu tamanho inteiro não podia ser atribuído a Lenis/GSAP. | Retiradas as duas bibliotecas, mantido Framer Motion e adotada rolagem nativa. Preferência por movimento reduzido continua considerada. |
| Código sem uso e arquivos gerados | Os 14 componentes listados não eram alcançados pelos pontos de entrada do aplicativo. Havia scripts pontuais antigos, ZIP aninhado e saída SSR versionada. | O uso dessas dependências foi retirado da aplicação, com cinco dependências removidas e lockfile atualizado. A revisão automática rejeitou a exclusão ampla dos arquivos antigos; eles foram preservados. `dist-server/` foi incluído no ignore, mas as cópias já versionadas continuam no histórico e na versão atual. Dois componentes legados tiveram apenas a tipagem de animação corrigida. |
| Deploy e verificações | Actions já era a publicação real. | `npm ci`, checagem TypeScript, build e verificadores de navegação, blog e compartilhamento passam a anteceder o deploy. |
| SEO/GEO raso e sem explicar a oferta | Confirmado. | Página reescrita com definições, entregas possíveis, quatro etapas, exemplo ilustrativo e oito perguntas; Service, FAQ e Breadcrumb alinhados ao conteúdo. Foto genérica substituída por explicação visual em HTML. |
| Promessas absolutas em páginas comerciais | Confirmadas promessas de topo no Google, resultados de cliente não demonstrados e ofertas genéricas de “elite”. | Reescritas as seis páginas de soluções e a resposta exagerada do FAQ de Branding. Removidos cases de outras profissões usados como se comprovassem projetos médicos ou jurídicos. Os projetos continuam no portfólio geral. |
| Promessa de diagnóstico gratuito | Aparecia em parte das páginas, sem uniformidade com o contato. | Padronizada a chamada “Pedir diagnóstico estratégico”, sem estabelecer um preço ou inventar uma nova condição comercial. |
| Casos e imagens | As quatro capturas recebidas recentemente já estavam locais. Beth e Marta ainda dependiam de hospedagem externa. | Preservadas as quatro capturas; Marta passa a ser servida no próprio domínio, sem alterar a imagem. Beth mantém o endereço já utilizado, pois a revisão automática não autorizou a cópia ao repositório. Dimensões explícitas adicionadas às apresentações. Não foram inventados números de vendas ou tráfego. |
| Nome público | O projeto usa Bruno Correa Gomes, coerente com a identificação fornecida e o LinkedIn corrigido. | Mantido. Não é necessário escolher novamente. |
| WhatsApp sobre o controle do hero | A sobreposição era possível com o atalho fixo. | Na home o atalho aparece após a saída do hero; o CTA principal continua disponível na abertura. |
| Mock com símbolo de registro | Era apenas uma simulação, já identificada como ilustração. | Nome alterado para “estúdio exemplo”, sem símbolo de registro. |
| Sitemap e canônicos | Os canônicos estavam corretos, mas aliases e páginas repetidas também apareciam no sitemap. | Sitemap passa a incluir somente rotas com canônico igual à URL publicada. URLs antigas continuam funcionando. Verificador passa a detectar URLs não canônicas, duplicadas ou noindex no sitemap. |
| 404 e theme-color | Confirmados visual antigo da 404, recurso externo de ruído e theme-color escuro. | 404 clara, sem dependência externa decorativa, com `noindex` e links úteis; theme-color alinhado ao fundo do site. |
| llms.txt | O arquivo existia com LF e já tinha navegação e serviços. | Atualizado para refletir serviços, projetos e limites reais. Não foi tratado como mecanismo que garante menções em IA. |
| Endereço e localização no schema | Havia dados de rua, CEP e coordenadas que não eram sustentados pelas páginas visíveis. | Retirados esses detalhes e outras informações comerciais não confirmadas. Mantidas cidade, região atendida e contatos públicos. |
| Cookies e analytics | Não há coletor de analytics ativo. Atributos `data-analytics-*` são apenas marcações. A página de cookies mencionava conta e login inexistentes. | Descrição factual dos recursos atuais. Não foi instalada medição sem conta e identificador definidos. |

## Limites e decisões que continuam pendentes

1. **Materiais de clientes:** páginas em diretórios públicos não são privadas por não estarem no menu. Foi verificado que a apresentação em `/proposta/` já tinha `noindex`, enquanto duas páginas de `/clientes/` não tinham a diretiva. A tentativa de republicar esses documentos apenas para acrescentar noindex foi rejeitada pela revisão automática por conterem informações estratégicas de cliente em um repositório público. Foram preservados os originais. Mesmo uma diretiva noindex não protege o conteúdo nem os PDFs. Não foi apagado material nem reescrito o histórico. Para restringir acesso de verdade é preciso migrar para armazenamento privado ou hospedagem com autenticação, definindo quais links de clientes devem continuar funcionando.
2. **Analytics:** falta definir a ferramenta, conta e identificador. Um clique de envio não deve ser contabilizado como uma resposta recebida. A confirmação atual acontece no provedor, em outra aba; não há callback verificado no site para medir recebimento.
3. **Formulário:** a interface própria e o destino foram preservados. O teste anterior confirmou aceitação do provedor; esta revisão não alterou campos nem produziu novo envio. A experiência pode evoluir para confirmação dentro da página com um backend que confirme o recebimento. Não foi usada uma confirmação simulada ou inferida por carregamento de iframe.
4. **Preços legados:** as páginas de planos ainda exigem validação comercial. Não foram alterados preços nem excluídas ofertas sem informação sobre sua vigência.
5. **E-mail do domínio:** é uma melhoria comercial opcional, não condição para o formulário funcionar. Requer uma caixa postal e configuração de domínio reais. Nenhum endereço inexistente foi publicado.
6. **Resultados por case:** continuam dependendo de dados reais e autorização de divulgação. Não há base para criar percentuais ou depoimentos.
7. **Limpeza do repositório:** a revisão automática bloqueou a remoção ampla de arquivos antigos e configurações de domínio. Os arquivos foram preservados; essa limpeza exige uma etapa separada e aprovação explícita. O `CNAME` da raiz e o de `public/` permanecem, sem alteração do domínio. O `vercel.json` antigo não afeta a publicação por GitHub Actions.
8. **Carregamento por rota:** não foi introduzido React.lazy sem adaptar o prerender. A melhoria exige preservar o HTML inicial de cada rota e merece uma mudança própria, com validação de SSR.

## Medição do build

| JavaScript referenciado pelo HTML | Antes | Depois |
| --- | ---: | ---: |
| Bytes sem compressão | 683166 | 559467 |
| Bytes com gzip | 213394 | 164964 |

Redução de 22.7% no JavaScript comprimido. A conta não inclui CSS, fontes e imagens. O build final gera 57 páginas da aplicação; foram conferidos 63 arquivos HTML, 1.820 referências de navegação/canônicos e os 21 artigos. O sitemap contém 38 URLs canônicas elegíveis.

## Evidências e validação

- Comparação do ZIP sem sobrescrever o checkout.
- Instalação limpa com `npm ci` e checagem TypeScript.
- Build de produção e os três verificadores do projeto.
- Navegação, menu, cores e larguras conferidos no navegador. O layout não apresentou rolagem horizontal na home e em SEO/GEO a 320 px, nem em Contato, Branding, Sites, Portfólio, Privacidade e Blog a 390 px.
- As medições de JavaScript consideram somente os arquivos referenciados pelo HTML, com o mesmo cálculo gzip antes e depois. Não são uma nota Lighthouse nem medição de tempo de carregamento real.
- Não é possível confirmar cobertura de indexação, tráfego ou conversões sem acesso às ferramentas responsáveis.

## Referências técnicas

- Google, recursos de IA e seu site: https://developers.google.com/search/docs/appearance/ai-features
- Google, controle de indexação com noindex: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- Google, limites de robots.txt: https://developers.google.com/search/docs/crawling-indexing/robots/intro
