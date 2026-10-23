# Revisão editorial e técnica do blog — 23/10/2026

## Escopo

21 matérias revisadas, com identidade Mineral Editorial, largura de leitura limitada, navegação por sumário, síntese inicial, checklist, perguntas e conexões temáticas. O índice passa a reunir todo o acervo, com busca de texto sem distinção de acentos e filtros por assunto preservados na URL.

Os textos foram revisados para separar intenções de leitura, trocar afirmações promocionais por explicações práticas e remover promessas não demonstráveis de resultados comerciais e recomendação por IA. Conteúdo de saúde e advocacia direciona à documentação dos órgãos responsáveis, sem certificar campanhas ou substituir validação profissional.

## Publicação e descoberta

- Cadastro editorial central em `src/data/articles.ts`.
- Datas originais preservadas quando documentadas (duas matérias sem data original não recebem uma data inventada); revisão registrada em 23/10/2026.
- Autor editorial: Orvalia Studio, igual no conteúdo e nos dados estruturados.
- 21 URLs principais sob `/blog/`; antigos endereços continuam funcionando e indicam o endereço principal por canonical. GitHub Pages não oferece redirecionamentos HTTP individuais neste fluxo.
- Metadados renderizados no HTML: título, descrição, canonical, Open Graph de artigo e imagem individual de compartilhamento.
- BlogPosting, BreadcrumbList e FAQPage coerentes com conteúdo visível. FAQ não pressupõe elegibilidade a resultado enriquecido.
- HTML inclui texto e links sem depender da execução do cliente.
- Sitemap inclui todos os artigos e exclui os aliases. Datas de alteração não são renovadas a cada build.
- Marcações institucionais antigas, com endereço não conferido, não são injetadas nas páginas editoriais.
- Capas locais de compartilhamento: 1200 × 630. Gerador reproduzível em `scripts/generate-blog-covers.py` (Pillow).

## Verificação

`npm run build` compila o cliente, o servidor e todas as páginas estáticas.
`node scripts/verify-blog.mjs` valida os 21 HTMLs: títulos e descrições únicos, H1, canonical, imagens locais, schema, FAQ visível, âncoras, links relacionados e sitemap.

Conferência no navegador: todas as 21 matérias em iframe com largura de 320 px; modelo compartilhado em 390, 430, 768, 1024 e 1440 px. Nenhuma rolagem horizontal observada. Busca por “clinicas”, estado vazio e filtro de IA conferidos. A conferência em larguras simuladas não substitui testes em todos os aparelhos e navegadores físicos.

A checagem TypeScript do projeto ainda aponta os erros preexistentes de inferência de animação em `ForWho.tsx` e `Services.tsx`, fora deste escopo. Nenhum erro novo foi apontado nos arquivos editoriais. A compilação de produção passa.

Indexação, rankings, snippets enriquecidos e citações por ferramentas de IA dependem dos respectivos serviços. Esta entrega não inclui acesso ao Search Console nem medição de crescimento após publicação.
