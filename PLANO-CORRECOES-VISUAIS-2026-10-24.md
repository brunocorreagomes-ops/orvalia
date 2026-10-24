# Orvalia: correções da hero e das interações

Base analisada: `fc688d7eeb97d9367a8be951c02bc33d64f2be5e`, branch `main`, em 24/10/2026 (horário de São Paulo).

## Evidência e escopo

Foram lidos os componentes usados pela home, os estilos globais, o retrato da página de marca, a página de redes sociais e o fluxo de build/publicação. A home publicada foi aberta em navegador: o símbolo exato da marca está visível, em verde profundo e ciano. Não foi reproduzida uma camada de opacidade apagando a hero. A versão atual já substituiu o vídeo/cena anterior por SVG e já tem menus em português. O relato anterior não deve ser tratado como prova de que esses problemas continuam iguais.

No navegador da versão publicada, o botão “Ver proposta organizada” levou o comparador a 0%, com recorte de 100%; Home e seta direita produziram 1%; o botão da hero mudou `data-paused` para `true`. Portanto, os controles existem e funcionam. A mudança de comparação por mera passagem do mouse foi identificada no código, não reproduzida por gesto no navegador.

## Plano priorizado

| Prioridade | Tipo | Achado | Menor solução segura | Situação |
| --- | --- | --- | --- | --- |
| P1 | Implementação e composição | Hero usa texto e SVG posicionados independentemente; entre 1024 e 1279 px o texto ocupa 68% e a arte 49%, com risco de colisão. No celular, a arte vem após um bloco de texto com altura mínima de 90svh. | Inserir texto e figura na mesma grade, com colunas limitadas; empilhar abaixo de 1024 px e retirar a altura mínima no celular. | Implementado; revisão visual nas larguras-alvo pendente. |
| P1 | Implementação de interação | `onPointerMove` altera a comparação mesmo sem pressionar o mouse. Entrar novamente no quadro desfaz a posição escolhida nos botões ou barra. | Atualizar por clique/arraste com captura de ponteiro, mantendo barra nativa, botões e teclado. Atualizar a instrução visível. | Implementado; gesto de arraste em dispositivo real pendente. |
| P1 | Implementação e acesso ao conteúdo | Legenda do retrato em `/branding/` usa `opacity-0` e só aparece no hover. A transição da foto inclui transform, mas não filter. | Manter identificação sempre visível; animar transform e filter; deixar foto em cores em dispositivos sem hover. | Implementado; revisão visual pendente. |
| P2 | Direção visual | A oscilação do símbolo pode ser pouco perceptível; o desenho atual já tem contraste. | Preservar geometria, materiais, fundo mineral e ciano. Ajustar ciclo de 16 para 12 s e deslocamento de 10 para 16 px; manter pausa e preferência por movimento reduzido. | Implementado; intensidade final depende da revisão visual. |
| P2 | Implementação e feedback | Links com setas e abas do método têm retorno visual desigual; miniaturas têm zoom no hover sem equivalente de foco. | Acrescentar feedback discreto em links acionáveis e abas; foco visível e zoom equivalente por teclado nas miniaturas; retirar zoom em telas sem hover e com movimento reduzido. | Implementado. |
| P2 | Copy | Home usa “layout”, “feed” e “stories” sem explicação na entrada dos serviços. | “Antes do visual”, “Análise e publicações” e “Publicações com imagens (feed)” / “Vídeos curtos (stories)” nos títulos de entregas. | Implementado; termos conhecidos das plataformas preservados no conteúdo detalhado. |
| P3 | Copy | Há termos de mercado em artigos e páginas de apoio. | Revisar separadamente, conforme contexto; não alterar URLs, nomes próprios ou todo termo técnico indiscriminadamente. | Fora deste lote. |

Não é necessário trocar o símbolo, adicionar vídeo pesado, aumentar animações em toda a página ou reformular a identidade Mineral Editorial. A solução mantém a mesma paleta, fontes, identidade e conteúdo estratégico.

## Validação realizada

- `npm run typecheck`: passou.
- `npm run build`: passou, incluindo SSR e prerender.
- `npm run verify`: passou, com 62 páginas de aplicação, 68 HTML e 2.307 referências de navegação/canonical verificadas, além de compartilhamento, blog e conteúdo comercial.
- `node --test server/contact/contact.test.mjs scripts/verify-analytics.test.mjs`: 6 testes passaram.
- Contrato existente de conteúdo comercial atualizado para os novos títulos de entregas, mantendo as demais verificações.
- Revisão React: sem novas dependências, efeitos, downloads de mídia ou APIs; mantém estado SSR estável, controle nativo por teclado e limpeza dos observadores existentes.

A prévia Vite iniciou em `127.0.0.1:3000`, mas o navegador remoto recebeu `ERR_CONNECTION_REFUSED`. Isso impede afirmar que as alterações locais foram verificadas visualmente. Não se trata de falha comprovada do site. O comando padrão com `0.0.0.0` também encontrou uma limitação de interfaces de rede deste ambiente; não foi necessário alterar a configuração do projeto.

## Critérios antes da publicação

1. Conferir 360, 390, 768, 1024, 1280 e 1440 px: texto e símbolo sem colisões, sem rolagem horizontal e botão principal legível.
2. Confirmar que mover o mouse sem pressionar preserva o comparador; clique e arraste horizontal alteram o recorte; soltar fora do quadro encerra o gesto.
3. Conferir arraste no celular, rolagem vertical e barra nativa; Home/End/setas e botões devem manter acesso a ambos os lados.
4. Confirmar identificação do retrato sempre visível e feedback nos links/abas por mouse e teclado.
5. Com movimento reduzido, símbolo parado inicialmente; “Ativar animação” deve funcionar por escolha explícita e “Pausar” deve interrompê-lo. Conferir pausa fora da tela/aba oculta.
6. Após integrar, acompanhar GitHub Actions e conferir as mesmas interações no domínio publicado.

As alterações são entregues em branch/PR. A produção continua na versão anterior até integração; não há declaração de deploy ou aprovação visual neste lote.
