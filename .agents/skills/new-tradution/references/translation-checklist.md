# Checklist de tradução de uma nova página

Usar esta checklist somente para a nova rota selecionada. Marcar cada item com evidência real ou registrar por que não se aplica.

## Entrada, rota e escopo

- [ ] Confirmar que a página está funcional e visualmente aprovada.
- [ ] Registrar a rota e o slug.
- [ ] Confirmar o caminho real de `app/<slug>/page.tsx`.
- [ ] Registrar `git status` e `git diff` antes da conversão.
- [ ] Identificar o idioma original como `pt-BR` ou `es`.
- [ ] Registrar termos que não devem ser traduzidos.
- [ ] Traçar todos os imports do `page.tsx`.
- [ ] Listar componentes exclusivos.
- [ ] Listar componentes compartilhados.
- [ ] Confirmar que nenhum componente compartilhado será alterado de forma a afetar páginas antigas.
- [ ] Confirmar que nenhuma página antiga ou catálogo antigo entrou no escopo.

## Inventário de textos

- [ ] Títulos e subtítulos.
- [ ] Parágrafos, spans, strong e destaques.
- [ ] Botões, CTAs e links.
- [ ] Menus, cabeçalho e rodapé.
- [ ] Cards, listas, badges e tabelas.
- [ ] Arrays e objetos de dados.
- [ ] Tabs e conteúdo de cada tab.
- [ ] FAQ e accordions.
- [ ] Modais, sliders e tooltips.
- [ ] Formulários e textos auxiliares.
- [ ] Labels e placeholders.
- [ ] Options visíveis, preservando seus `value`.
- [ ] Mensagens de erro, sucesso e carregamento.
- [ ] Estados vazios e conteúdo condicional.
- [ ] `aria-label`.
- [ ] Atributos `title`.
- [ ] `alt` traduzível.
- [ ] Textos estruturados divididos sem perder spans, estilos ou quebras.
- [ ] Nomes próprios, marcas, URLs, códigos e valores técnicos registrados como exceções.

## Catálogo

- [ ] Criar `translations/pages/<slug>.ts`.
- [ ] Usar prefixo neutro e chaves por página, seção e elemento.
- [ ] Não usar nomes de chaves dependentes de idioma.
- [ ] Preservar a copy original sem reescrita no idioma de origem.
- [ ] Criar tradução natural para o outro idioma.
- [ ] Criar o catálogo `pt-BR`.
- [ ] Criar o catálogo `es`.
- [ ] Confirmar paridade de chaves de `pt-BR` para `es`.
- [ ] Confirmar paridade de chaves de `es` para `pt-BR`.
- [ ] Confirmar ausência de chaves duplicadas.
- [ ] Confirmar tipagem inferida e ausência de `any`.

## Componentes e estado

- [ ] Converter todas as strings visíveis para `t()`.
- [ ] Tipar chaves em arrays e objetos com `TranslationKey`.
- [ ] Não usar casts genéricos para ocultar erros de chave.
- [ ] Adicionar `"use client"` somente aos componentes que chamam o hook.
- [ ] Manter `page.tsx` como compositor quando possível.
- [ ] Preservar Metadata em Server Components.
- [ ] Preservar estado de tabs, FAQ, accordions, modais e sliders.
- [ ] Preservar valores de inputs e estado dos formulários.
- [ ] Preservar timers, efeitos e animações sem remount.
- [ ] Não usar texto traduzido como `key`, id, `value` ou condição de negócio.
- [ ] Preservar JSX, classes, CSS, dimensões e responsividade.
- [ ] Preservar links, assets, endpoints, payloads, schemas e integrações.

## Registro na arquitetura

- [ ] Importar o catálogo no agregador atual.
- [ ] Espalhar as chaves em `pt-BR`.
- [ ] Espalhar as chaves em `es`.
- [ ] Confirmar que `TranslationKey` inclui as novas chaves por inferência.
- [ ] Não criar união manual de chaves se a arquitetura continuar inferida.
- [ ] Adicionar somente a nova rota ao mapa de idioma padrão.
- [ ] Preservar os idiomas padrão de todas as outras rotas.
- [ ] Registrar a rota na validação de navegador se ela usar uma lista explícita.
- [ ] Confirmar ausência de `TraducaoButtons` na nova página.
- [ ] Confirmar ausência de botões BR/ES manuais.
- [ ] Confirmar ausência de estado local de idioma.
- [ ] Confirmar ausência de `TranslationProvider` adicional.

## Validação

- [ ] Confirmar que a rota abre inicialmente no idioma original após limpar sua preferência.
- [ ] Confirmar que nenhuma chave aparece na interface.
- [ ] Confirmar que o outro idioma renderiza todos os textos.
- [ ] Revisar strings visíveis possivelmente esquecidas.
- [ ] Verificar caracteres corrompidos.
- [ ] Executar `npm run validate:translations`.
- [ ] Revisar manualmente os candidatos do validador para a nova rota.
- [ ] Validar TypeScript pelo script existente ou pelo build.
- [ ] Executar `npm run build`.
- [ ] Executar a validação de navegador quando o ambiente permitir.
- [ ] Verificar Console e warnings de hidratação.
- [ ] Verificar Network e erros 404.
- [ ] Testar 320, 375, 430, 768, 1024, 1280 e 1440 px.
- [ ] Confirmar ausência de overflow e textos cortados nos dois idiomas.
- [ ] Testar formulários, tabs, FAQ, modais, sliders e demais interações nos dois idiomas.
- [ ] Comparar o resultado visual com a página aprovada.
- [ ] Comparar o diff final com o baseline e confirmar que páginas antigas não mudaram.

## Relatório

- [ ] Informar rota e idioma original.
- [ ] Listar componentes analisados e modificados.
- [ ] Listar catálogos e registros alterados.
- [ ] Informar quantidade aproximada de chaves.
- [ ] Listar exceções de tradução e componentes que viraram Client.
- [ ] Informar resultados de chaves, TypeScript, Console, Network e build.
- [ ] Confirmar ausência de seletor e provider adicionais.
- [ ] Explicar que a ativação futura exige apenas adicionar `TraducaoButtons`.
- [ ] Registrar limitações e validações não executadas.
