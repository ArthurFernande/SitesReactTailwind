# Checklist de conversão HTML para Next.js

## Entrada e arquitetura

- [ ] Confirmar o caminho real e ler integralmente o HTML.
- [ ] Identificar nome, slug, URL de produção, remoções e requisitos adicionais.
- [ ] Ler integralmente `AGENTS.md` e `docs/ARCHITECTURE.md`.
- [ ] Ler `package.json`, `tsconfig.json`, `next.config.*` e configurações relevantes.
- [ ] Inspecionar `app/`, `components/`, APIs, aliases e componentes compartilhados.
- [ ] Inspecionar `public/assets/` antes de criar pastas.
- [ ] Confirmar os scripts de validação realmente disponíveis.
- [ ] Registrar um plano breve e preservar arquivos não relacionados.

## Leitura do HTML

- [ ] Mapear a ordem e a finalidade de todas as seções.
- [ ] Mapear CSS inline, folhas externas, variáveis, media queries e breakpoints.
- [ ] Mapear imagens, backgrounds, vídeos, SVGs, ícones e fontes.
- [ ] Mapear scripts, animações, hover, scroll, menus, popups e modais.
- [ ] Mapear links, âncoras, formulários, endpoints e integrações.
- [ ] Mapear title, description, canonical, Open Graph e SEO pertinente.
- [ ] Separar comportamento visual de dependências técnicas de WordPress/Elementor.
- [ ] Identificar precisamente cada recurso solicitado para remoção.

## Implementação

- [ ] Criar `app/<slug>/page.tsx` como compositor.
- [ ] Criar componentes semânticos em `components/<slug>/`.
- [ ] Reutilizar componentes compatíveis sem perder fidelidade.
- [ ] Preservar design, copies, ordem, dimensões, cores e espaçamentos.
- [ ] Converter eventos e interações para React e hooks.
- [ ] Manter TypeScript estrito e evitar `any`.
- [ ] Usar Tailwind e CSS Modules conforme a fidelidade exigir.
- [ ] Evitar iframe, jQuery, runtime Elementor e HTML integral injetado.
- [ ] Não alterar componentes globais ou páginas não relacionadas.

## Imagens e assets

- [ ] Criar imagens somente em `public/assets/imgs/<slug>/`.
- [ ] Confirmar que `public/assets/img/` não foi criado.
- [ ] Preservar arquivos, extensões, qualidade, dimensões e proporções originais.
- [ ] Atualizar `src`, backgrounds, CSS Modules, estilos inline, arrays e objetos.
- [ ] Atualizar metadata, preload e componentes compartilhados usados pela página.
- [ ] Usar `next/image` quando apropriado.
- [ ] Configurar `sizes` em todo `Image` com `fill`.
- [ ] Organizar fontes em `public/assets/fonts/<slug>/` quando aplicável.
- [ ] Organizar vídeos em `public/assets/videos/<slug>/` quando aplicável.
- [ ] Documentar qualquer asset mantido externamente.
- [ ] Não usar placeholder quando o original puder ser recuperado.

## Fontes, animações e responsividade

- [ ] Preservar família, peso, estilo, tamanho, line-height e letter-spacing.
- [ ] Informar qualquer fonte indisponível antes de substituir.
- [ ] Reproduzir fade, slide, zoom, scroll, hover, delay, duração e easing.
- [ ] Preferir dependências instaladas ou APIs nativas.
- [ ] Considerar `prefers-reduced-motion`.
- [ ] Testar 320, 375, 768, 1024, 1280 e 1440 px quando possível.
- [ ] Verificar títulos, menu, colunas, cards, imagens, botões e alinhamentos.
- [ ] Verificar margens, paddings, elementos ocultos e overflow horizontal.
- [ ] Confirmar que a página termina após a última seção.
- [ ] Confirmar ausência de faixa vazia, footer residual e espaço de widget removido.

## Links, formulários e SEO

- [ ] Preservar textos, hrefs, destinos, âncoras, labels e placeholders.
- [ ] Não usar `href="#"` quando existir destino real.
- [ ] Validar campos, mensagens e aparência dos formulários.
- [ ] Inspecionar APIs existentes antes de conectar o envio.
- [ ] Não manter endpoint antigo sem confirmar sua validade.
- [ ] Documentar integrações pendentes sem expor segredos.
- [ ] Converter metadados pertinentes para a Metadata API.
- [ ] Excluir generators e metadados administrativos de WordPress/Elementor.

## Remoções solicitadas

- [ ] Localizar HTML, scripts, estilos e assets exclusivos do recurso.
- [ ] Confirmar que cada item pertence somente ao recurso.
- [ ] Remover apenas o que foi solicitado.
- [ ] Preservar CTAs, formulários, botões, seções e modais fora do escopo.
- [ ] Verificar que a remoção não deixou espaço ou código residual.

## Validação

- [ ] Executar apenas `lint`, `typecheck`, `build` ou outros scripts que existam.
- [ ] Abrir a rota e comparar visualmente com o HTML original.
- [ ] Verificar Console sem ocultar erros relevantes.
- [ ] Verificar Network, fontes, imagens e ausência de 404.
- [ ] Testar links, formulários, menus, animações e interações.
- [ ] Verificar regressões proporcionais nas rotas relacionadas.
- [ ] Registrar comandos, resultados e limitações reais.

## Relatório final

- [ ] Informar nome, rota e URL local.
- [ ] Listar arquivos criados e modificados.
- [ ] Listar componentes e assets adicionados.
- [ ] Listar recursos removidos.
- [ ] Informar integrações mantidas e pendentes.
- [ ] Informar dependências utilizadas.
- [ ] Informar comandos e verificações executados.
- [ ] Informar erros, bloqueios e validações não realizadas.
