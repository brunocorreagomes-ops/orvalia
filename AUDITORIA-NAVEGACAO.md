# Revisão de navegação e contato — 23/10/2026

- Seleção de texto: fundo ciano sólido #66E7E1 e texto #080A0C, inclusive em blocos escuros e campos de formulário. Removidos estilos locais que conflitavam com o padrão.
- Corrigida a identificação da aba ativa em URLs com barra final.
- Chamadas de diagnóstico do menu, abertura, serviços e encerramento levam ao formulário de contato. O atalho explicitamente identificado como WhatsApp continua disponível.
- Links do rodapé e da seção regional usam as rotas atuais de Branding e Sites.
- O portfólio deixa de oferecer um link para si próprio.
- Publicada a rota já existente /solucoes/branding-em-indaiatuba/, antes ausente no prerender.
- Metadados das páginas legais passam a usar SEO/Helmet para funcionar também na navegação pelo cliente.
- Formulário inclui e-mail de resposta e telefone opcional. 
- Recebimento automático por Google Forms incorporado na página, sem depender do aplicativo de e-mail do visitante. Link alternativo abre o mesmo formulário em outra aba.
- LinkedIn de Bruno corrigido no perfil visível e nos dados estruturados: https://www.linkedin.com/in/bruno-correa-gomes/.

## Validação

Build de produção aprovado. Verificações de navegação, blog e compartilhamento aprovadas: 57 páginas da aplicação, 63 arquivos HTML, 1.810 referências a links/canônicos, 52 destinos internos e 43 URLs canônicas. Nenhuma página ou âncora interna ausente, link vazio, número de telefone ou endereço de e-mail inválido encontrado. Os 21 artigos mantêm seus metadados e capas.

Verificados no navegador: seleção de texto em fundos claros e escuros, menu móvel, botão de diagnóstico até o formulário, validação de campos obrigatórios, preparação e preservação da mensagem de e-mail, ausência de rolagem horizontal do contato em 320 e 390 px, aba ativa em /sites/ e posicionamento do link Método (96 px abaixo do topo).

Fontes externas Google Search, OAB, CFM e W3C responderam HTTP 200. O LinkedIn retornou HTTP 999 para a verificação automatizada; esse retorno não comprova link quebrado. Links de WhatsApp foram verificados quanto a número e parâmetros, sem enviar mensagens.

Limitação preexistente: a checagem TypeScript completa aponta erros de tipagem de animação em ForWho.tsx e Services.tsx, não relacionados a esta revisão. Nenhum erro adicional nos arquivos alterados.

## Formulário de contato

Interface própria em React e CSS, com a identidade visual da Orvalia. Seleção de prioridade por cartões, dados essenciais obrigatórios e informações complementares opcionais em seção expansível. Sem iframe ou rolagem interna. No celular, um atalho leva diretamente ao formulário.

O envio HTML nativo faz POST para o formulário existente e abre a confirmação do provedor em outra aba. A página preserva os dados e orienta a conferir essa confirmação, sem declarar sucesso a partir do evento submit. Campos mapeados aos identificadores do formulário; mudanças nas perguntas do provedor exigem nova conferência da integração.

Validação: envio técnico aceito com confirmação explícita do provedor. Campos obrigatórios impedem envio vazio. Em 320 e 390 px, ausência de rolagem horizontal; estado visual de seleção conferido.
