# Revisão de navegação e contato — 23/10/2026

- Seleção de texto: fundo ciano sólido #66E7E1 e texto #080A0C, inclusive em blocos escuros e campos de formulário. Removidos estilos locais que conflitavam com o padrão.
- Corrigida a identificação da aba ativa em URLs com barra final.
- Chamadas de diagnóstico do menu, abertura, serviços e encerramento levam ao formulário de contato. O atalho explicitamente identificado como WhatsApp continua disponível.
- Links do rodapé e da seção regional usam as rotas atuais de Branding e Sites.
- O portfólio deixa de oferecer um link para si próprio.
- Publicada a rota já existente /solucoes/branding-em-indaiatuba/, antes ausente no prerender.
- Metadados das páginas legais passam a usar SEO/Helmet para funcionar também na navegação pelo cliente.
- Formulário inclui e-mail de resposta e telefone opcional. Destino confirmado pelo proprietário: orvaliastudio@gmail.com.
- O modo atual prepara a mensagem no aplicativo de e-mail do visitante. Não afirma que a mensagem foi enviada. A mensagem também permanece disponível para copiar, caso o visitante não tenha aplicativo configurado.

## Validação

Build de produção aprovado. Verificações de navegação, blog e compartilhamento aprovadas: 57 páginas da aplicação, 63 arquivos HTML, 1.810 referências a links/canônicos, 52 destinos internos e 43 URLs canônicas. Nenhuma página ou âncora interna ausente, link vazio, número de telefone ou endereço de e-mail inválido encontrado. Os 21 artigos mantêm seus metadados e capas.

Verificados no navegador: seleção de texto em fundos claros e escuros, menu móvel, botão de diagnóstico até o formulário, validação de campos obrigatórios, preparação e preservação da mensagem de e-mail, ausência de rolagem horizontal do contato em 320 e 390 px, aba ativa em /sites/ e posicionamento do link Método (96 px abaixo do topo).

Fontes externas Google Search, OAB, CFM e W3C responderam HTTP 200. O LinkedIn retornou HTTP 999 para a verificação automatizada; esse retorno não comprova link quebrado. Links de WhatsApp foram verificados quanto a número e parâmetros, sem enviar mensagens.

Limitação preexistente: a checagem TypeScript completa aponta erros de tipagem de animação em ForWho.tsx e Services.tsx, não relacionados a esta revisão. Nenhum erro adicional nos arquivos alterados.

## Próxima etapa do recebimento automático

Para receber sem depender do aplicativo de e-mail do visitante e manter histórico no Drive, a opção proposta é Google Forms com respostas em Google Sheets e notificações para a conta da Orvalia. Campos: nome, empresa, e-mail de resposta, telefone opcional, site/Instagram, prioridade e contexto. Respostas e planilha devem permanecer privadas. Só o formulário de preenchimento será público. A configuração exige login na conta Google proprietária, ainda não autorizado no navegador desta sessão. Não há integração automática ativa nem resposta de cliente gravada no Drive neste momento.
