# Contato, medição e materiais de clientes

## Publicado nesta etapa

Os valores comerciais dos planos foram substituídos por “Solicitar proposta”. O Gmail de contato foi mantido.

Os materiais de clientes foram copiados para um arquivo privado, com a integridade do ZIP conferida e acesso do armazenamento restrito ao proprietário. Os arquivos originais foram retirados da publicação atual; os endereços principais passam a mostrar apenas uma orientação de acesso privado. O arquivo privado e seu endereço não fazem parte deste repositório público.

Essa remoção não apaga cópias em commits históricos do GitHub. A resolução desse histórico é uma etapa separada; não se deve afirmar que a retirada da versão atual tornou todas as versões históricas privadas.

## Integração preparada

O endpoint de recebimento está publicado no Sites. Ele valida a origem, o tamanho e os campos recebidos e só retorna `ok: true` após encontrar a confirmação explícita do Google Forms. Um HTTP 200 isolado não representa sucesso.

A interface tem estados de envio, erro e recebimento, bloqueio de envios simultâneos e preservação dos campos em falha. O evento `generate_lead` só é emitido depois da confirmação verificável. O endpoint não publica respostas; o armazenamento e os avisos continuam no Google.

O envio integrado está ativado em `src/lib/site-config.ts`. A interface não abre nem redireciona para o Google. A confirmação é exibida na própria página apenas após uma resposta verificável do serviço. Em falha, mantém os campos preenchidos e apresenta uma mensagem da Orvalia.

A verificação OPTIONS confirmou que o endpoint aceita a origem do site. Em 24/10/2026, após autorização do proprietário e confirmação de que o serviço pertence à sua conta, um envio real identificado como teste retornou HTTP 200, `ok: true` e um identificador de recebimento. O endpoint só retorna esse estado após verificar a confirmação explícita do Google Forms. A entrega da notificação por e-mail não foi confirmada nesta verificação. Os testes de contrato também passaram com provedor simulado.

## Analytics preparado, ainda sem coleta

A configuração usa Google Analytics 4, com medição apenas após consentimento. Ela considera navegação por rota, cliques internos, WhatsApp, telefone, e-mail, abertura de projeto e eventos do formulário.

Não há identificador GA4 real configurado. Portanto, nenhuma coleta foi ativada. É preciso entrar na conta Google Analytics e obter/criar a propriedade do site. No fluxo de dados, a medição otimizada automática deve ser desativada antes da ativação para evitar eventos duplicados de navegação/formulário e coleta automática de URLs de saída; os eventos necessários são enviados pela instrumentação própria. A conexão do Gmail não concede acesso automático ao painel do Analytics.

A instrumentação não utiliza os campos do contato como parâmetros e remove parâmetros não permitidos. Recusa e revogação impedem os eventos; anúncios e personalização ficam negados. A política publicada acompanha os estados de configuração.

## Validação

Testes locais sem envio real cobrem campos inválidos, origem não permitida, mapeamento de perguntas, ausência de confirmação e filtragem de dados pessoais na medição. Testes com provedor simulado não comprovam registro na planilha real.
