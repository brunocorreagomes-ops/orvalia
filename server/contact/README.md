# Recebimento do contato

O endpoint preparado verifica a confirmação explícita do Google Forms antes de retornar sucesso. Ele não trata um HTTP 200 genérico como uma resposta aceita e não registra dados de contato nos logs da aplicação.

A implementação foi publicada pelo Sites. A fonte publicada está em um repositório próprio do projeto Sites, separada da publicação estática do GitHub Pages. `api/contact.js` contém o adaptador Node e os testes de contrato; o Worker usa as mesmas validações e mapeamento, substituindo apenas o gerador de UUID e o roteamento.

O frontend utiliza o envio integrado, ativado em `src/lib/site-config.ts`, e mostra uma mensagem da Orvalia na própria página. Não há navegação para a confirmação do Google. Configurações públicas, sem credenciais, estão em `.env.example`. O preflight CORS e um envio real autorizado foram verificados em 24/10/2026: a API retornou HTTP 200, `ok: true` e um identificador após a confirmação do provedor. A notificação por e-mail não foi confirmada.

Os testes locais usam um provedor simulado e cobrem validação, rejeição de origem desconhecida, mapeamento de campos e falha na ausência de confirmação. Eles não comprovam, isoladamente, a entrega real na planilha.

Execute `node --test server/contact/contact.test.mjs`.
