# Orvalia Studio — revisão técnica aplicada

## Alterações aplicadas
- `src/main.tsx`: hidratação com `hydrateRoot` quando o prerender já gerou HTML.
- `vite.config.ts`: removida a injeção de `GEMINI_API_KEY` no bundle do navegador.
- `index.html` e `tailwind.config.js`: carregamento de Instrument Serif e JetBrains Mono e mapeamento tipográfico atualizado.
- `src/index.css`: removido import de fonte duplicado; adicionados scroll offset, preferência por movimento reduzido e contraste reforçado da classe `text-brand-muted`.
- `src/components/Navbar.tsx`: cabeçalho com fundo legível, links diretos para Branding/Sites/SEO-GEO/Portfólio/Blog/Contato, menu móvel acessível, fechamento com Escape e rastreamento de origem no WhatsApp.
- `src/App.tsx`: removido o botão “Voltar ao topo” que se sobrepunha ao WhatsApp; link flutuante único com origem da página na mensagem.
- `src/components/CTA.tsx`: removido o rodapé duplicado do CTA e ajustada a chamada comercial para português do Brasil.
- `src/pages/Contato.tsx`: formulário acessível que prepara uma mensagem estruturada para o WhatsApp; o usuário revisa e envia a mensagem no próprio WhatsApp.
- `src/components/Hero.tsx`: H1 descritivo de serviço e região; manchete emocional passa a H2.
- Canonicals preferenciais atualizados em `/branding/` e `/sites/`.
- Propostas comerciais removidas da pasta pública e preservadas fora da pasta do projeto, em `ORVALIA-ARQUIVO-PRIVADO/`; scripts temporários e ZIP aninhado removidos.

## Observações importantes
- Não foi aplicada a conversão em massa para `React.lazy`: o projeto usa `renderToString` no prerender, e componentes lazy suspensos podem virar fallbacks no HTML pré-renderizado. Para adotar lazy loading com segurança, é necessário atualizar também a estratégia SSR/prerender e testar todas as rotas.
- A mensagem de formulário abre o WhatsApp; não existe envio de e-mail/backend implementado.
- Revise os dados de contato/endereço e teste em ambiente de homologação antes de publicar.
- A compilação de produção precisa ser executada no ambiente Node/npm do projeto; este pacote foi alterado, mas não é declarado como build validado.
