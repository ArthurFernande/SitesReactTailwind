---
name: html-to-next-page
description: Converter um arquivo HTML completo em uma nova página Next.js fiel dentro deste repositório, preservando design, conteúdo, assets, fontes, animações, interações e responsividade. Usar ao migrar páginas estáticas ou exportadas de WordPress/Elementor para App Router, React, TypeScript, Tailwind CSS e CSS Modules.
---

# Converter HTML para página Next.js

Tratar o HTML informado como fonte da verdade visual e funcional. Usar o repositório apenas como referência de arquitetura, convenções e integrações.

## Receber e inferir entradas

Identificar:

- arquivo HTML de origem;
- nome da página;
- slug da rota;
- elementos solicitados para remoção;
- requisitos adicionais;
- URL de produção, quando informada.

Inferir nome e slug pelo arquivo e pela arquitetura quando isso for seguro. Perguntar somente se uma lacuna impedir uma implementação correta.

## Preparar o trabalho

1. Confirmar que o HTML e o repositório existem pelos caminhos reais.
2. Ler integralmente `AGENTS.md`, `docs/ARCHITECTURE.md` e o HTML.
3. Ler `package.json`, `tsconfig.json`, o `next.config.*` existente e as configurações relevantes.
4. Inspecionar `app/`, `components/`, `public/assets/`, APIs e componentes compartilhados.
5. Verificar aliases, fontes, bibliotecas, animações e scripts de validação disponíveis.
6. Mapear no HTML a hierarquia, as seções, os estilos inline e externos, media queries, assets, scripts, metadados, links, formulários, integrações e recursos a remover.
7. Ler [references/conversion-checklist.md](references/conversion-checklist.md) e usá-la durante toda a conversão.
8. Apresentar um plano breve antes de modificar arquivos.

Não iniciar a implementação antes de compreender a arquitetura e o HTML completo.

## Preservar a fonte da verdade

Preservar do HTML:

- ordem e composição das seções;
- textos, labels, placeholders e links;
- tipografia, pesos, tamanhos e espaçamentos;
- cores, bordas, sombras e gradientes;
- imagens, vídeos, ícones e proporções;
- animações, transições, hover e comportamento durante scroll;
- responsividade, interações e aparência de formulários;
- title, description, canonical, Open Graph e outros metadados pertinentes.

Usar páginas existentes somente para decidir organização, componentização, imports, TypeScript, Tailwind, CSS Modules, reutilização e validação. Não substituir o design do HTML pelo visual de outra página e não simplificar seções silenciosamente.

## Aplicar a arquitetura

Para o slug `<slug>`, usar:

```text
app/<slug>/page.tsx
components/<slug>/
public/assets/imgs/<slug>/
```

Usar `app/<slug>/page.tsx` principalmente como compositor. Criar componentes semânticos em PascalCase, como `HeroSection.tsx`, `FeaturesSection.tsx` e `FinalCtaSection.tsx`; não usar nomes como `Section1` ou `ComponentA`.

Reutilizar componentes compatíveis sem comprometer a fidelidade. Manter componentes exclusivos dentro de `components/<slug>/`. Não alterar componentes globais de forma que afete outras rotas.

Usar TypeScript estrito e evitar `any`. Preservar o padrão real de imports do arquivo editado e preferir o alias configurado para caminhos não locais.

## Converter para React e Next.js

- Converter `class` para `className`.
- Converter eventos e scripts interativos em componentes, hooks e APIs do navegador.
- Usar Client Components apenas onde houver interatividade.
- Converter estilos para Tailwind e usar CSS Modules quando forem necessários para fidelidade, animações complexas ou isolamento.
- Converter metadados pertinentes para a Metadata API.
- Usar tecnologias e dependências já instaladas.
- Solicitar autorização antes de instalar dependências.
- Preservar links reais e não trocar destinos conhecidos por `href="#"`.

Não usar iframe, não renderizar a página inteira com `dangerouslySetInnerHTML`, não manter toda a página em um único componente e não depender da árvore DOM original.

## Limpar WordPress e Elementor

Remover somente dependências técnicas sem função após a conversão, como scripts administrativos, jQuery, runtimes de WordPress/Elementor, metadados de generator, comentários gerados, classes inertes e plugins não usados.

Recriar em React qualquer comportamento visual necessário. Não remover um efeito apenas por ter sido produzido por Elementor.

Ao remover um recurso solicitado, localizar antes seu HTML, scripts, estilos e assets. Confirmar que pertencem exclusivamente ao recurso e preservar CTAs, formulários, botões e modais não abrangidos pelo pedido.

## Organizar assets

Para cada imagem específica:

1. Identificar a URL original.
2. Recuperar o arquivo original quando possível; solicitar acesso à rede quando necessário.
3. Salvar em `public/assets/imgs/<slug>/`.
4. Referenciar como `/assets/imgs/<slug>/<arquivo>`.
5. Preservar extensão, qualidade e proporção.
6. Atualizar ocorrências em `src`, `background-image`, CSS Modules, estilos inline, arrays, objetos, metadata, preload e componentes usados pela página.
7. Confirmar que não restaram referências quebradas.

Nunca criar `public/assets/img/`. Organizar outros recursos conforme a estrutura existente, normalmente em `public/assets/fonts/<slug>/` e `public/assets/videos/<slug>/`.

Preferir `next/image` quando apropriado. Informar dimensões e adicionar `sizes` sempre que usar `fill`. Não substituir assets recuperáveis por placeholders ou imagens parecidas. Documentar assets que precisarem permanecer externos.

## Preservar fontes e animações

Identificar `font-family`, pesos, estilos, tamanhos, line-height e letter-spacing. Usar fontes existentes, `next/font`, arquivos locais ou `@font-face` conforme o projeto permitir. Não substituir silenciosamente a fonte original por uma genérica.

Reproduzir delays, durações, easing, entradas, hover e diferenças entre desktop e mobile. Preferir bibliotecas existentes; usar CSS, Tailwind, Intersection Observer ou APIs nativas para efeitos simples. Respeitar `prefers-reduced-motion` quando aplicável.

## Tratar formulários e integrações

Preservar campos, labels, mensagens, validações visuais e aparência. Antes de conectar envios:

1. Inspecionar APIs e componentes de formulário existentes.
2. Verificar se endpoints e integrações originais ainda são válidos.
3. Reutilizar contratos existentes somente quando forem compatíveis.
4. Não expor segredos nem alterar payloads sem necessidade.
5. Documentar integrações pendentes.

## Validar

Executar somente scripts existentes e apropriados no `package.json`; não inventar `lint` ou `typecheck`.

Quando houver navegador:

1. Iniciar o projeto e abrir a nova rota.
2. Comparar com o HTML original em 320, 375, 768, 1024, 1280 e 1440 px quando possível.
3. Verificar Console e Network, fontes, imagens, links, animações, interações e erros 404.
4. Inspecionar quebras de texto, grids, cards, menu, overflow horizontal e o fim da página.
5. Confirmar ausência de faixa vazia, footer residual ou espaço deixado por recurso removido.
6. Fazer uma verificação de regressão proporcional nas rotas relacionadas.

Se uma validação não puder ser executada, informar claramente a limitação e não declarar sucesso visual sem evidência.

## Relatar

Informar:

1. nome e rota da página;
2. arquivos criados e modificados;
3. componentes criados;
4. imagens, fontes e vídeos adicionados;
5. assets externos;
6. recursos removidos;
7. integrações mantidas e pendentes;
8. dependências usadas;
9. comandos e verificações executados;
10. erros ou limitações;
11. URL local de teste.
