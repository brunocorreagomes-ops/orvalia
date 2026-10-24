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

No GitHub Pages, o acesso direto às rotas usa os arquivos HTML gerados pelo prerender. A publicação valida navegação, artigos e cartões de compartilhamento antes do deploy.

## Verificação e manutenção

`npm run typecheck` confere os tipos dos arquivos de `src/`. Depois de `npm run build`, execute `npm run verify`.

As fontes vêm de pacotes `@fontsource` e são publicadas no próprio domínio. A rolagem usa o navegador; as animações de interface continuam com Framer Motion. `dist/` e `dist-server/` são saídas de build. Há cópias históricas já versionadas que foram preservadas nesta revisão; o ignore impede novas inclusões não rastreadas.

O sitemap lista apenas as rotas cujo canônico coincide com a URL gerada. Rotas antigas continuam funcionando, mas não são apresentadas como novas páginas independentes.

O formulário usa os identificadores das perguntas no provedor. Se as perguntas forem recriadas, a integração precisa ser conferida novamente.

Os atributos `data-analytics-*` são apenas marcações: não há coletor ou conta de analytics configurados nesta versão.
