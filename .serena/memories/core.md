# Astryx Vue — Core

Vue 3 port of Meta's Astryx design system. pnpm monorepo, Panda CSS for atomic compile-time styling.

## Source Map

- `packages/core/` (`@astryxdesign/vue-core`) — Vue 3 components, composables, generated `styled-system/`. Lib build via Vite (ES + CJS). Each component has tree-shakeable entrypoint.
- `packages/tokens/` (`@astryxdesign/vue-tokens`) — Shared token constants placeholder; real tokens in `panda.config.ts` and theme CSS.
- `packages/themes/` — Pure CSS custom property files per theme (e.g. `neutral.css`). Runtime-swappable, zero JS.
- `apps/playground/` (`@astryxdesign/playground`) — Vite dev app for visual testing. Imports core styles + theme CSS.
- `panda.config.ts` — Root Panda CSS config with `jsxFramework: 'vue'`, outputs to `packages/core/styled-system/`.

## Invariants

- All component styling via `css()`/`cva()` from generated `styled-system/css`. No `<style scoped>` for layout/atoms.
- Colors resolve through CSS custom properties (`var(--astryx-*)`). Raw hex/rgb forbidden in components.
- Components expose `data-variant`, `data-size`, `data-color` attributes for testing.
- Named exports only. Barrel `index.ts` per component folder.

## References

- Tech stack details: `mem:tech_stack`
- Build/dev/test commands: `mem:suggested_commands`
- Code style and patterns: `mem:conventions`
- Task completion checklist: `mem:task_completion`