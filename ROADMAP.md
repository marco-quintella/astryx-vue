# Astryx Vue — Roadmap

Port do design system [Astryx](https://github.com/facebook/astryx) (Meta) para Vue 3.

> **Status:** v0.1.0 — Piloto (1 componente)
> **Stack:** Vue 3 + TypeScript + Panda CSS + Vite
> **Licença:** MIT (compatível com Astryx original)

---

## Why Panda CSS and not StyleX

StyleX (Meta) **é** framework-agnostic no nível do compiler — gera CSS estático e class names. Mas a integração oficial é first-class só com React, e a ergonomia de authoring (style props, types, plugin pipeline) precisa ser montada à mão no Vue.

Panda CSS é a melhor equação custo/benefício:

- API quasi-idêntica ao StyleX (atomic, compile-time, type-safe, style props)
- Mantém a "filosofia" do Astryx
- First-class Vue 3 support
- Themed via tokens/checkout (mesmo modelo mental)
- ~8x mais rápido de portar do que vanilla-extract

---

## Estrutura-alvo do monorepo

```
astryx-vue/
├── packages/
│   ├── core/              # @astryxdesign/vue-core — componentes Vue 3
│   ├── themes/            # @astryxdesign/vue-theme-* — 7 temas
│   ├── cli/               # @astryxdesign/vue-cli — scaffolder (swizzle, docs)
│   └── tokens/            # @astryxdesign/vue-tokens — design tokens puros
├── apps/
│   └── playground/        # Vite app - demos e smoke tests
├── package.json           # pnpm workspaces
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── panda.config.ts        # config Panda CSS raiz
```

---

## Roadmap por fases

### Fase 0 — Setup (v0.0.1) **[EM ANDAMENTO]**
- [x] Repo local + roadmap
- [ ] pnpm workspaces + tsconfig base
- [ ] Panda CSS preset + tokens (palette, spacing, radius, typography)
- [ ] Vite build (lib mode) para `@astryxdesign/vue-core`
- [ ] CI smoke: `pnpm build` + `pnpm test` passam

### Fase 1 — Piloto Button (v0.1.0) **[EM ANDAMENTO]**
- [ ] Button com API equivalente ao Astryx:
  - `variant`: solid | soft | outlined | ghost | danger
  - `size`: sm | md | lg
  - `color`: neutral | accent | success | warning | danger
  - `iconStart`, `iconEnd`, `loading`, `disabled`, `fullWidth`
- [ ] Estilos via Panda CSS (atomic, compile-time)
- [ ] Testes: Vitest (lógica) + Vue Test Utils (render) + Playwright (smoke)
- [ ] Playground com grid de variants
- [ ] Screenshot gerado + commit

### Fase 2 — MVP Base (v0.2.0) — 10 componentes
Subset essencial que destrava 80% dos apps:
- [ ] Box, Stack (HStack/VStack), Grid, Center
- [ ] Text, Heading, Blockquote, Code
- [ ] Icon (wrapper sobre lucide-vue-next)
- [ ] Avatar, Badge
- [ ] Field (form field wrapper com label/help/error)
- [ ] Button (já no piloto)

**Critério de pronto:** usado num app real (to-do ou form playground) sem hacks.

### Fase 3 — Forms & Inputs (v0.3.0) — 15 componentes
- [ ] TextInput, NumberInput, TextArea, SearchField
- [ ] Checkbox, Radio, Switch, CheckboxList
- [ ] Select, Combobox, TagsInput
- [ ] DateInput, DateRangeInput, DateTimeInput
- [ ] FileInput
- [ ] FieldStatus, FormLayout

**Critério:** schema validation (vee-validate ou zod) + accessibility (ARIA, keyboard).

### Fase 4 — Overlays & Navigation (v0.4.0) — 15 componentes
- [ ] Dialog, AlertDialog, useImperativeDialog
- [ ] DropdownMenu, ContextMenu, Menu
- [ ] Tooltip, Popover
- [ ] Toast, Banner
- [ ] Tabs, Accordion, Collapsible
- [ ] Breadcrumbs, Pagination
- [ ] CommandPalette

**Critério:** focus trap, ESC, scroll lock, portal — paridade com Radix Vue.

### Fase 5 — Data & Feedback (v0.5.0) — 15 componentes
- [ ] Table, DataTable (sortable, selectable)
- [ ] Card, ClickableCard
- [ ] Carousel, Calendar, DateRangePicker
- [ ] Spinner, ProgressBar, ProgressTracker
- [ ] Skeleton, EmptyState
- [ ] Image, AvatarGroup
- [ ] Divider, Separator
- [ ] Chip, Tag

### Fase 6 — AppShell & Layout (v0.6.0) — 10 componentes
- [ ] AppShell, AppShellMobile, Sidebar, TopBar
- [ ] Modal, Drawer, Sheet
- [ ] Stepper, Header, Footer
- [ ] Chat, Citation, CodeBlock
- [ ] AspectRatio

### Fase 7 — Themes (v0.7.0) — 7 themes
Port direto dos temas Astryx:
- [ ] neutral, butter, chocolate, matcha, stone, gothic, y2k
- [ ] Todos via CSS custom properties (drop-in swap)
- [ ] Dark mode toggle por tema

### Fase 8 — CLI (v0.8.0) — scaffolder
- [ ] `create-astryx-vue` — full project scaffold
- [ ] `astryx component --list` — list available components
- [ ] `astryx add <name>` — add a component to a project
- [ ] `astryx swizzle <name>` — eject component source (Vue SFC) into project
- [ ] `astryx theme --list` — list themes
- [ ] Self-documenting via AST parsing do core

### Fase 9 — Lab & Rich (v0.9.0) — experimental
- [ ] `@astryxdesign/vue-lab` — experimental components
- [ ] RichText (TipTap bindings)
- [ ] Charts (Vue wrapping de Vega-Lite)
- [ ] Vega (port direto)

### Fase 10 — v1.0
- [ ] 150+ componentes com paridade funcional ao Astryx React
- [ ] Documentação (VitePress) com playground interativo
- [ ] Storybook com stories para cada variant
- [ ] CI: lint + typecheck + unit + e2e + visual regression
- [ ] Migration codemods (do Astryx React → Astryx Vue em Single File Components)
- [ ] Publicação npm estável

---

## Princípios de design

1. **API Vue-first, não React-clone.** Sem `forwardRef`, sem JSX, sem `useState` em slots. Props Vue idiomáticas, `v-model` onde aplicável, `defineExpose` para imperative handles.
2. **Composables quando fizer sentido.** Lógica reutilizável vira `useXxx()` (e.g. `useDialog`, `useToast`). Igual ao Astryx original.
3. **Swizzle sempre opcional.** Cada componente publica o SFC source. Você sempre pode copiar e customizar.
4. **Theme via CSS vars.** Zero re-render pra trocar tema. Zero JS no runtime de styling.
5. **A11y por padrão.** Focus trap, ARIA, keyboard nav, RTL — tudo built-in, não opt-in.
6. **Tree-shakeable.** Cada componente em entrypoint separado. Importar `Button` não puxa `Modal`.
7. **Type-safe.** Props tipadas, eventos tipados, slots tipados (generics onde útil).

---

## Convenções de código

- **Naming:** PascalCase para componentes, camelCase para composables/props.
- **Files:** `<Name>.vue` (SFC) + `<name>.test.ts` (collocated) + `<name>.stories.ts` (Storybook).
- **Exports:** `index.ts` por pasta, named exports only.
- **Styling:** Toda classe atômica via Panda CSS (`css({...})`, `styled`, `cva`). Nada de `<style scoped>` pra layout/atoms.
- **Tests:** Vitest (unit) + Vue Test Utils (component) + Playwright (e2e). Mínimo 80% coverage por componente.

---

## Métricas de sucesso

| Métrica | v0.1 | v0.5 | v1.0 |
|---|---|---|---|
| Componentes | 1 | 50+ | 150+ |
| Temas | 1 (neutral) | 4 | 7 |
| Test coverage | 100% Button | 80% | 70% |
| Bundle size (gzip) | <2KB | <10KB | <30KB |
| Accessibility score | 100 | 100 | 100 |
| Storybook stories | 5 | 200+ | 600+ |

---

## Decisões a tomar no futuro

- [ ] Nome final do pacote npm (atualmente working como `@astryxdesign/vue-core`)
- [ ] Publicar no registry do Meta ou npm público?
- [ ] Adoptar Vue I18n para `locales/`?
- [ ] Integração com `radix-vue` ou construir primitives próprios?
- [ ] Suporte oficial a Nuxt 3 / VitePress?
- [ ] Suporte a Vue 2.7 (LTS)?
