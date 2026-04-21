# Orval'IA Studio - Site

Este projeto foi construído usando **React + Vite + Tailwind CSS**.

## Como rodar localmente
1. Instale as dependências: `npm install`
2. Rode o servidor de desenvolvimento: `npm run dev`

## Como publicar no GitHub Pages
O projeto já está configurado para o GitHub Pages.

1. No terminal, execute o comando:
   ```bash
   npm run deploy
   ```
   *Isso irá construir o projeto e enviar a pasta `dist` para a branch `gh-pages` do seu repositório.*

2. Vá nas configurações do seu repositório no GitHub -> **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `gh-pages` e a pasta `/ (root)`.
5. Salve e aguarde alguns minutos.

## Versão em HTML/CSS Simples
Se você preferir não usar o sistema de build do Node.js no futuro, após rodar `npm run build`, os arquivos dentro da pasta `dist/` são arquivos estáticos comuns (HTML, CSS, JS) que podem ser colocados em qualquer servidor.

## Domínio Personalizado
O site está configurado para o domínio **www.orvalia.com.br**.

1. O arquivo `CNAME` já está configurado na pasta `public/` e na raiz.
2. Nas configurações do GitHub Pages, certifique-se de que o campo **Custom domain** está preenchido com `www.orvalia.com.br`.
3. Verifique se o **Enforce HTTPS** está ativado.

---
© 2026 Orval'IA Studio
