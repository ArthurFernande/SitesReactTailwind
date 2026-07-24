---
name: new-tradution
description: Preparar uma nova página Next.js já concluída e aprovada neste projeto para o sistema atual de tradução pt-BR/es, criando seu catálogo específico, convertendo textos visíveis para t() e registrando a rota sem adicionar TraducaoButtons. Usar somente após a implementação funcional e visual da nova rota; não usar para refatorar a tradução global ou páginas antigas.
---

# Preparar a tradução de uma nova página

Preparar somente a nova rota indicada para os idiomas `pt-BR` e `es`. Tratar a implementação atual de tradução do repositório como fonte da verdade e preservar integralmente o visual, a copy original, as interações e as integrações.

## Respeitar o limite da tarefa

- Executar esta Skill somente quando a nova página estiver funcional e visualmente aprovada.
- Não refatorar o sistema global de tradução.
- Não alterar páginas antigas nem seus catálogos.
- Não adicionar `TraducaoButtons`, botões BR/ES, estado local de idioma ou outro `TranslationProvider`.
- Não alterar CSS, classes, layout, assets, animações, responsividade, links, APIs ou lógica de negócio.
- Interromper e pedir confirmação se completar a tradução exigir modificar um componente compartilhado ainda usado por páginas antigas.
- Manter um único provider global e preparar a rota para que, futuramente, baste renderizar `<TraducaoButtons />` ou `<TraducaoButtons mobile />`.

## Ler a fonte da verdade

Antes de editar:

1. Ler integralmente `AGENTS.md`, `docs/ARCHITECTURE.md`, `package.json` e `app/layout.tsx`.
2. Ler integralmente `components/traducaoButtons/`, incluindo todos os catálogos em `translations/pages/`, o agregador, os tipos, o mapa de idiomas, o provider, o hook e o seletor.
3. Ler os scripts de validação de tradução existentes no `package.json`.
4. Ler uma rota já convertida, especialmente `app/produtos/page.tsx`, e todos os componentes importados por ela.
5. Ler [references/translation-checklist.md](references/translation-checklist.md) e usá-la durante toda a execução.
6. Registrar `git status` e `git diff` antes de editar para separar alterações preexistentes das alterações desta execução.

Seguir os caminhos e formatos realmente encontrados. Não introduzir nomes, camadas ou abstrações paralelas quando já existir um padrão funcional.

## Receber ou detectar a rota

Usar diretamente a rota informada. Aceitar também slug, idioma original e uma lista de termos que não devem ser traduzidos.

Quando a rota não for informada:

1. Comparar as pastas com `page.tsx` dentro de `app/` com as rotas do mapa de idioma padrão e os arquivos em `translations/pages/`.
2. Consultar `git status`, `git diff`, arquivos recém-criados e componentes específicos importados por cada candidata.
3. Ignorar `app/api/`, `.next/`, `node_modules/`, logs, HTMLs de referência, temporários e configurações sem relação com a página.
4. Usar a rota se houver exatamente uma candidata nova.
5. Apresentar as candidatas e pedir confirmação se houver mais de uma. Não escolher silenciosamente.

Confirmar o caminho real de `app/<slug>/page.tsx`. Não prosseguir se a página não estiver concluída ou se a rota continuar ambígua.

## Delimitar os arquivos da página

Traçar a árvore de imports a partir do `page.tsx` e classificar:

- compositor da rota;
- componentes exclusivos em `components/<slug>/`;
- CSS Modules e dados exclusivos;
- componentes compartilhados;
- APIs, schemas, assets e integrações apenas consumidos pela página.

Modificar somente o `page.tsx` e os componentes exclusivos que exibem textos, além dos arquivos centrais estritamente necessários para registrar o novo catálogo e validar a nova rota. Consumir componentes compartilhados já traduzidos sem alterá-los.

Se um componente compartilhado ainda contiver texto fixo necessário à nova página, avaliar o impacto em todas as rotas consumidoras. Não modificá-lo nem duplicá-lo silenciosamente; informar o conflito e pedir direção.

## Identificar o idioma original

Aceitar apenas `pt-BR` ou `es` quando o idioma vier informado.

Quando não vier:

- analisar títulos, parágrafos, botões, formulários, cards, menus e o texto predominante;
- ignorar marcas, empresas, produtos, URLs, e-mails, códigos, siglas e termos técnicos internacionais;
- pedir confirmação se o conteúdo for intencionalmente bilíngue ou se a predominância não for clara.

Para uma página originalmente em `pt-BR`, copiar a copy atual sem reescrever para o catálogo `pt-BR`, criar uma tradução natural em espanhol e registrar `pt-BR` como padrão. Para uma página originalmente em `es`, copiar a copy atual sem reescrever para `es`, criar uma tradução natural em português do Brasil e registrar `es` como padrão.

Não resumir, melhorar, corrigir ou adaptar a copy original.

## Inventariar todos os textos

Mapear antes de converter:

- títulos, subtítulos, parágrafos, spans, destaques, strong e links;
- menus, cabeçalhos, rodapés, botões, CTAs, badges, cards, listas e tabelas;
- tabs, FAQs, accordions, modais, sliders, tooltips e estados condicionais;
- labels, placeholders, options visíveis, mensagens de erro, sucesso e carregamento;
- textos auxiliares, estados vazios, `aria-label`, `title` e `alt` traduzível;
- strings em arrays, objetos, dados renderizados com `map()` e componentes Client;
- textos que apareçam somente depois de uma interação.

Não traduzir nomes de empresas, marcas, produtos, URLs, e-mails, telefones, ids, `className`, variáveis, endpoints, payloads, `name`, valores técnicos, caminhos de assets, códigos, SVG paths ou siglas que devam permanecer iguais. Registrar no relatório as exceções e seus motivos.

## Criar o catálogo da página

Criar um arquivo em `components/traducaoButtons/translations/pages/<slug>.ts`, adaptando somente a forma do nome exportado ao padrão encontrado.

Usar chaves neutras organizadas por página, seção e elemento. Converter o slug para um prefixo sem referência ao idioma, por exemplo:

```text
novaPagina.hero.title.line1
novaPagina.features.cards.first.description
novaPagina.form.name.placeholder
novaPagina.footer.copyright
```

Não usar sufixos como `Pt`, `Es`, `Portuguese` ou `Spanish`. Dividir títulos estruturados em chaves suficientes para preservar spans, destaques, quebras e animações.

Seguir o formato tipado atual:

```ts
const ptBR = {
  "novaPagina.hero.title": "Título",
  "novaPagina.hero.description": "Descrição",
} as const;

type Key = keyof typeof ptBR;

const es = {
  "novaPagina.hero.title": "Título",
  "novaPagina.hero.description": "Descripción",
} as const satisfies Record<Key, string>;

export const novaPaginaTranslations = {
  "pt-BR": ptBR,
  es,
} as const;
```

Mesmo quando a origem for espanhola, manter o formato real do projeto, preservar a copy original no objeto `es` e criar `ptBR` com as mesmas chaves. Garantir paridade bidirecional, ausência de duplicações, inferência de tipos e ausência de `any`.

## Converter os componentes

Substituir strings visíveis por `t("chave")` sem alterar a estrutura JSX:

```tsx
<h1>
  <span>{t("novaPagina.hero.title.line1")}</span>
  <span className="text-blue">
    {t("novaPagina.hero.title.highlight")}
  </span>
</h1>
```

Em cada componente que chamar o hook:

```tsx
"use client";

import { useTranslation } from "@/components/traducaoButtons";

const { t } = useTranslation();
```

- Adicionar `"use client"` somente ao menor componente que realmente precisar do hook.
- Manter `page.tsx` como compositor Server sempre que possível.
- Não transformar um `page.tsx` que exporta Metadata em Client; mover apenas o conteúdo traduzível para um componente específico quando necessário.
- Não usar `dangerouslySetInnerHTML`, tradução direta do DOM, `MutationObserver` ou serviço externo.
- Preservar interpolações pelo padrão já existente, usando placeholders estáveis e substituição explícita quando necessário.
- Não usar o texto traduzido como `key`, id, `value`, discriminante de estado ou condição de negócio.

Para arrays e objetos fora do componente, armazenar chaves tipadas:

```ts
const cards = [
  {
    titleKey: "novaPagina.cards.validated.title",
    descriptionKey: "novaPagina.cards.validated.description",
  },
] satisfies ReadonlyArray<{
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}>;
```

Renderizar com `t(card.titleKey)` e preservar números, ids, ícones, URLs e demais dados técnicos. Não contornar a tipagem com casts genéricos.

## Preservar formulários e interações

Traduzir somente labels, placeholders, options visíveis, mensagens apresentadas ao usuário, textos auxiliares e atributos acessíveis.

Não alterar:

- `name`, `id`, `value`, endpoints e payloads;
- máscaras, schemas, validações, APIs e comportamento de envio;
- tabs ativas, FAQ aberto, modal, slider, timers, inputs ou estado condicional;
- chaves React e identidades usadas para manter componentes montados.

Quando mensagens de um schema técnico precisarem aparecer traduzidas, mapear o erro para uma `TranslationKey` na camada de apresentação, seguindo o exemplo real de `/produtos`. Não modificar o contrato enviado à API.

Testar as interações nos dois idiomas. A atualização do contexto deve apenas renderizar novos textos, sem recarregar a página, limpar campos, fechar controles, duplicar timers ou reiniciar animações por remount.

## Registrar o catálogo e o idioma

Atualizar somente o necessário:

1. Importar o novo catálogo em `components/traducaoButtons/translations/index.ts`.
2. Espalhar seu ramo `"pt-BR"` no agregador português e seu ramo `es` no agregador espanhol.
3. Confirmar que `TranslationKey` inclui as novas chaves. Na arquitetura atual ele é inferido de `typeof translations["pt-BR"]`; não editar `types.ts` apenas para criar uma união manual.
4. Adicionar `"/<slug>": "<idioma-original>"` a `pageDefaultLanguages.ts`.
5. Preservar todas as entradas e os idiomas padrão já existentes.
6. Se uma validação de navegador mantiver uma lista explícita de rotas, adicionar somente a nova rota e sua expectativa de idioma, sem alterar casos antigos.

Não refazer catálogos anteriores, reordenar todo o agregador ou criar um segundo provider.

## Validar a conversão

Completar a checklist de referência e executar:

1. Revisar o diff restrito à nova rota, seus componentes, seu catálogo e os registros centrais indispensáveis.
2. Confirmar que nenhuma página antiga ou catálogo antigo foi modificado.
3. Procurar chamadas `t()` sem catálogo, chaves duplicadas, textos visíveis esquecidos e caracteres corrompidos.
4. Confirmar a paridade `pt-BR`/`es` por TypeScript e pelo validador existente.
5. Confirmar que `TraducaoButtons` não foi importado ou renderizado na nova rota.
6. Confirmar que não surgiu outro `TranslationProvider`.
7. Executar `npm run validate:translations` quando o script existir e revisar manualmente os candidatos limitados à rota.
8. Executar o script `typecheck` apenas se ele existir. Neste projeto, `npm run build` é também a validação de compilação e TypeScript.
9. Executar obrigatoriamente `npm run build`.
10. Depois do build, executar `npm run validate:translations:browser` quando houver Chrome/Edge disponível e a nova rota tiver sido registrada no script.
11. Abrir a rota após limpar `site-language:<pathname>` e confirmar o idioma original.
12. Testar o outro idioma usando a preferência por rota já suportada, sem adicionar seletor temporário à página.
13. Verificar Console, Network, hidratação, 404, overflow e interações em 320, 375, 430, 768, 1024, 1280 e 1440 px.
14. Comparar os dois idiomas com a versão aprovada e revisar textos maiores sem fazer redesign.
15. Corrigir todos os erros causados pela conversão e distinguir falhas preexistentes.

Não declarar validação visual, Console ou Network como aprovada quando não tiver sido executada.

## Relatar o resultado

Informar:

1. rota processada;
2. idioma original detectado;
3. componentes analisados;
4. componentes modificados;
5. arquivo de tradução criado;
6. arquivos de tradução atualizados;
7. quantidade aproximada de chaves adicionadas;
8. strings visíveis convertidas;
9. textos não traduzidos e o motivo;
10. componentes que receberam `"use client"`;
11. alterações no agregador;
12. alteração no mapa de idioma padrão;
13. confirmação de que `TraducaoButtons` não foi adicionado;
14. confirmação de preservação visual e funcional;
15. resultado da validação das chaves;
16. resultado do TypeScript;
17. resultado de `npm run build`;
18. instrução para ativar o seletor futuramente.

Listar também limitações reais de navegador ou validações não executadas.

## Exemplos de invocação

Exemplo completo:

```text
$new-tradution

Rota:
/nova-pagina

Slug:
nova-pagina

Idioma original:
pt-BR

A página está visualmente finalizada:
sim

Não traduzir:
Global Tech, nomes de produtos, marcas, siglas técnicas, URLs e nomes próprios.
```

Exemplo curto:

```text
$new-tradution

Prepare a rota /nova-pagina para português e espanhol.
```
