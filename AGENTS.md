# Manual de desenvolvimento — Projeto Gtech

## Regras obrigatórias

- Antes de alterar ou importar algo, confirme o caminho real no repositório. Não invente caminhos.
- Preserve páginas, componentes globais e configurações existentes, salvo solicitação explícita.
- Não instale dependências sem explicar a necessidade e receber autorização.
- Reutilize componentes existentes antes de criar equivalentes.
- Use TypeScript estrito e evite `any` desnecessário.
- Mantenha o idioma, a tipografia, as cores, os espaçamentos e a composição visual já empregados na página afetada.

## Stack e comandos

- Next.js 16 com App Router, React 19, TypeScript e Tailwind CSS 3.
- Bibliotecas já disponíveis: Framer Motion, Lucide React, Swiper e Zod.
- `npm run dev`: desenvolvimento.
- `npm run build`: build de produção (também é a validação disponível mais próxima de compilação/TypeScript).
- `npm start`: servidor de produção após o build.
- Não há scripts `lint` nem `typecheck` no `package.json`; não suponha que existam.

## Estrutura e imports

- Rotas ficam em `app/<rota>/page.tsx`; APIs em `app/api/<endpoint>/route.ts`.
- O layout global é `app/layout.tsx` e os estilos globais são `app/globals.css`.
- `@/*` aponta para a raiz do repositório. Prefira imports com `@/` para caminhos não locais; imports relativos já coexistem no código e devem ser preservados quando editar arquivos existentes.
- Componentes compartilhados atuais: `components/Header.tsx`, `components/Footer.tsx`, `components/traducaoButtons/` e `components/whatsapButton/`.
- Componentes de uma página devem ficar em `components/<nome-da-rota>/` e ser compostos pela respectiva `app/<nome-da-rota>/page.tsx`.

## Convenção obrigatória para novas páginas

Para uma rota `minha-pagina`, crie:

```text
app/minha-pagina/page.tsx
components/minha-pagina/
  HeroSection.tsx
  ...
  index.ts                 # quando for útil expor a API da pasta
public/assets/imgs/minha-pagina/
```

- O mesmo nome em kebab-case deve ser usado na rota, na pasta de componentes e na pasta de imagens. Todas as imagens específicas de uma página devem ser armazenadas em `public/assets/imgs/<slug-da-pagina>/`; o caminho público correspondente é `/assets/imgs/<slug-da-pagina>/<nome-do-arquivo>`. Não crie `public/assets/img/`.
- Use PascalCase para componentes React e nomes descritivos como `HeroSection.tsx`.
- Não espalhe arquivos exclusivos de uma página em pastas genéricas.
- Componentes usados por várias páginas devem ficar em uma pasta compartilhada apropriada, sem duplicação.

## Assets, estilo e responsividade

- Assets estáticos são servidos de `public/assets/`; imagens atuais ficam em `public/assets/imgs/<contexto>/`, e há `public/assets/videos/`.
- Preserve o mecanismo já usado no componente (URLs de `/assets/...`, imagem HTML/CSS ou `next/image`); avalie otimização ao criar novos trechos.
- Fontes globais: Inter (`--font-body`), IBM Plex Mono (`--font-title`) e Space Grotesk (`--font-space`), carregadas em `app/layout.tsx` com `next/font/google`.
- Tokens globais incluem `--color-orange`, `--color-blue`, `--color-cyan` e `--color-dark`; Tailwind não possui extensões de tema configuradas.
- Use classes utilitárias Tailwind e preserve os breakpoints responsivos existentes. Toda página deve ser testada em celular, tablet, notebook e desktop.

## Cuidados com integrações

- Formulários usam rotas `app/api/*-lead/route.ts`, Zod onde já adotado e variáveis de ambiente, especialmente `CRM_TOKEN`, `CRM_URL` e `N8N_URL`.
- Não exponha segredos nem altere payloads, validações, timeouts ou integrações CRM/n8n sem necessidade explícita.

## Validação antes da entrega

- Execute os scripts existentes adequados à alteração. Atualmente, use `npm run build` quando a alteração puder afetar compilação ou comportamento de produção.
- Inspecione erros de imports, tipos e referências a assets. Como não há `lint`/`typecheck`, não os execute como se fossem scripts do projeto.
