# Orvalia Studio

Site React + Vite com páginas pré-renderizadas para https://orvalia.com.br.

## Desenvolvimento e build

Use Node.js 24, a mesma versão configurada no GitHub Actions.

```sh
npm ci
npm run dev
```

Para conferir a versão de produção:

```sh
npm run build
npm run preview
```

O build compila JavaScript/CSS e gera as páginas HTML em `dist/`. Os arquivos da raiz e de `src/` precisam passar por esse build antes da publicação.

## Publicação no GitHub Pages

1. Em **Settings → Pages → Build and deployment**, selecione **Source: GitHub Actions**.
2. Mantenha o domínio personalizado `orvalia.com.br` configurado em **Custom domain**.
3. Ao atualizar a branch `main`, o workflow `.github/workflows/deploy.yml` executa o build e publica a pasta `dist/`.
4. Confira o resultado em **Actions → Deploy to GitHub Pages**. Também é possível iniciar o workflow pelo botão **Run workflow**.

O arquivo `vercel.json` se aplica apenas à Vercel. No GitHub Pages, o acesso direto às rotas usa os arquivos HTML gerados pelo prerender.
