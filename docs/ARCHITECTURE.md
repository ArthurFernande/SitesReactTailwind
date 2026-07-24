# Arquitetura atual — Projeto Gtech

## Visão geral

Aplicação institucional/landing pages em Next.js 16, com App Router, React 19, TypeScript estrito e Tailwind CSS 3. O projeto é organizado em páginas por rota, componentes de seções e APIs internas de captura de leads.

```text
app/
  layout.tsx                 layout raiz, fontes e TranslationProvider
  globals.css                Tailwind, tokens e estilos globais
  page.tsx                   rota `/` (Gtech)
  arcade/page.tsx            rota `/arcade`
  form-contato/page.tsx      rota `/form-contato`
  produtos/page.tsx          rota `/produtos`
  pagina-game/page.tsx       rota `/pagina-game`
  global-gaming-erp/page.tsx rota `/global-gaming-erp`
  gaming-legacy-erp/page.tsx rota `/gaming-legacy-erp`
  politica-de-privacidad/    rota `/politica-de-privacidad`
  api/
    arcade-lead/route.ts
    form-contato/route.ts
    produtos-lead/route.ts
    whatsapp-lead/route.ts
components/
  Header.tsx, Footer.tsx     elementos compartilhados usados em `/` e `/arcade`
  gtech/                     seções exclusivas da página inicial
  arcade/                    seções e formulário da página Arcade
  form-contato/              seções e formulário da página de contato
  produtos/                  seções, formulário, schema e Header/Footer próprios
  traducaoButtons/           provider, seletor, hook, tipos e catálogos por rota
  whatsapButton/             botão e formulário de WhatsApp
public/assets/
  imgs/{arcade,form-contato,global-gaming-erp,gtech,layout,produtos}/
  videos/
```

## Configurações e convenções técnicas

- `next.config.mjs` não define customizações.
- `tsconfig.json` habilita `strict`, `noEmit`, `moduleResolution: bundler` e o alias `@/*` para a raiz.
- `tailwind.config.ts` varre `app/` e `components/`; não há extensões de tema ou plugins.
- `postcss.config.js` usa Tailwind e Autoprefixer.
- `app/layout.tsx` define o idioma `pt-BR`, carrega Inter, IBM Plex Mono e Space Grotesk via `next/font/google`, importa `globals.css` e envolve o conteúdo com `TranslationProvider`.
- `globals.css` declara os tokens de fontes e cores, fundo escuro global e utilitários `.font-body`, `.font-title` e `.font-space`.
- As seções usam Tailwind diretamente. A responsividade é feita por variantes de breakpoint do Tailwind dentro dos componentes; novos componentes devem manter essa abordagem e ser verificados em telas pequenas e grandes.

## Páginas e composição

| Rota | Componentes de página |
| --- | --- |
| `/` | `Header`, `gtech/HeroSection`, `SolutionsSection`, `PartnerSection`, `RegulatedMarketSection`, `ArcadeSection`, `Footer` |
| `/arcade` | `Header`, seções em `components/arcade/`, `Footer` |
| `/form-contato` | seções em `components/form-contato/` e `WhatsAppButton` |
| `/produtos` | `components/produtos/Header`, `HeroSection`, `DifferencesSection`, `SolutionsSection`, `ContactSection`, `Footer` |
| `/pagina-game` | seções em `components/pagina-game/` |
| `/global-gaming-erp` | seções em `components/global-gaming-erp/` |
| `/gaming-legacy-erp` | seções em `components/gaming-legacy-erp/` |
| `/politica-de-privacidad` | `PrivacyPolicyContent` em `components/politica-de-privacidad/` |

As APIs recebem formulários por `POST`. As rotas de Arcade e WhatsApp enviam primeiro ao CRM e agendam o envio secundário ao n8n; Produtos valida a entrada com `contactSchema` (Zod) e encaminha ao CRM. Variáveis de ambiente controlam URLs e token do CRM.

## Tradução e idioma por rota

- Existe um único `TranslationProvider`, montado em `app/layout.tsx`. Componentes traduzíveis consomem a API pública `{ language, setLanguage, t }` por `useTranslation()`.
- Os catálogos tipados ficam em `components/traducaoButtons/translations/`, com conteúdo específico em `translations/pages/`. Toda chave existe em `pt-BR` e `es`; a paridade é verificada pelo TypeScript.
- O idioma original de cada rota é declarado em `translations/pageDefaultLanguages.ts`. A preferência do usuário é persistida separadamente como `site-language:<pathname>` e nunca é lida durante a renderização do servidor.
- `TraducaoButtons` apenas altera o contexto compartilhado. Atualmente ele é renderizado exclusivamente no Header de `/produtos`, nas variantes desktop e mobile; as demais rotas já consomem o mesmo catálogo e podem receber o seletor futuramente sem criar outro provider.
- Não se usa tradução direta do DOM, `MutationObserver`, `innerHTML`, serviços externos ou estado de idioma por seção.
- `npm run validate:translations` verifica chaves literais usadas por `t()`, duplicações no mesmo objeto de catálogo e emite um relatório de candidatos a strings visíveis fixas para revisão manual. Nomes de marcas, valores, código e termos técnicos exibidos podem aparecer no relatório e devem ser revisados, não substituídos automaticamente.
- Após `npm run build`, `npm run validate:translations:browser` inicia o servidor de produção e usa Chrome/Edge headless para conferir idiomas padrão, preferência por rota, seletor desktop/mobile, preservação de input, Console, Network e overflow nas larguras 320, 375, 430, 768, 1024, 1280 e 1440 px. O caminho do navegador pode ser informado por `BROWSER_PATH`.

## Assets

- A página inicial usa `public/assets/imgs/gtech/`; o logo compartilhado está em `public/assets/imgs/layout/`.
- Arcade, Formulário de contato e Produtos possuem pastas próprias em `public/assets/imgs/`.
- Regra permanente: imagens específicas de cada página ficam em **`public/assets/imgs/<slug-da-pagina>/`** e são acessadas por **`/assets/imgs/<slug-da-pagina>/<nome-do-arquivo>`**. Não crie `public/assets/img/`.

## Fluxo para uma nova página

1. Pesquise componentes e assets reutilizáveis antes de criar arquivos.
2. Escolha uma rota em kebab-case, por exemplo `minha-pagina`.
3. Crie `app/minha-pagina/page.tsx` para organizar as seções.
4. Coloque seções exclusivas em `components/minha-pagina/`, em PascalCase.
5. Coloque imagens exclusivas em `public/assets/imgs/minha-pagina/`.
6. Reutilize apenas componentes realmente compartilhados e mantenha os imports via `@/` quando apropriado.
7. Valide responsividade e execute `npm run build` quando a alteração afetar código de produção.

```text
app/minha-pagina/page.tsx
components/minha-pagina/HeroSection.tsx
components/minha-pagina/AboutSection.tsx
components/minha-pagina/BenefitsSection.tsx
components/minha-pagina/ContactSection.tsx
components/minha-pagina/index.ts
public/assets/imgs/minha-pagina/hero.webp
```

## Inconsistências e migrações futuras sugeridas

- A home usa componentes em `components/gtech/`, não em `components/<nome-da-rota>/` (a rota raiz não tem um nome de pasta correspondente). Uma migração separada poderia decidir uma convenção explícita para a home.
- Há Header e Footer globais e variantes exclusivas em `components/produtos/` e `components/form-contato/`; a reutilização deve ser avaliada caso a caso, sem consolidá-las automaticamente.
- Não existe `index.ts` nas pastas de componentes de página (exceto `traducaoButtons/`), portanto esse padrão deve ser introduzido apenas quando agregar valor.
- Há nomes que fogem da convenção desejada: `components/whatsapButton/` e `WhatsapButton.tsx` usam grafia diferente de “WhatsApp”; `UnlockBenefitsSection..tsx` possui ponto extra no nome; `contactForm.tsx` não usa PascalCase. Uma migração de nomenclatura deve ser separada, pois exige atualizar imports.
- `package.json` não expõe scripts `lint` ou `typecheck`; a validação disponível é `npm run build`.
