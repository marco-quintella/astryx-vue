# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astryx Vue is a Vue 3 port of Meta's Astryx design system. Currently in v0.1.0 pilot phase with Button as the sole component validating the stack. Built as a pnpm monorepo with Panda CSS for atomic, compile-time styling.

## Commands

```bash
# Install dependencies
pnpm install

# Generate Panda CSS styled-system (runs automatically on prepare)
pnpm prepare

# Development — starts playground dev server on :5173
pnpm dev

# Build all packages
pnpm build

# Tests
pnpm test              # all tests across workspace
pnpm test:unit         # vitest only (@astryxdesign/vue-core)
pnpm test:e2e          # playwright only (@astryxdesign/playground)

# Quality
pnpm lint              # eslint across workspace
pnpm typecheck         # vue-tsc --noEmit across workspace
```

Single test file: `pnpm --filter @astryxdesign/vue-core exec vitest run src/Button/Button.test.ts`
Watch mode: `pnpm --filter @astryxdesign/vue-core exec vitest`

E2E tests require the preview server; Playwright config auto-starts it via `pnpm preview`.

## Architecture

### Monorepo Structure

- **`packages/core`** (`@astryxdesign/vue-core`) — Vue 3 components, composables, and the generated `styled-system/` output from Panda CSS. Built with Vite in lib mode (ES + CJS). Each component has its own entrypoint for tree-shaking (e.g., `@astryxdesign/vue-core/Button`).
- **`packages/tokens`** (`@astryxdesign/vue-tokens`) — Shared design token constants. Currently a placeholder; real tokens live in `panda.config.ts` and theme CSS files.
- **`packages/themes`** — Pure CSS custom property files per theme (e.g., `neutral.css`). Themes are drop-in swappable at runtime with zero JS.
- **`apps/playground`** (`@astryxdesign/playground`) — Vite dev app for visual testing and demos. Imports `@astryxdesign/vue-core/styles.css` and a theme CSS file directly.

### Styling Pipeline

Panda CSS is configured at the monorepo root (`panda.config.ts`) with `jsxFramework: 'vue'`. It scans `.vue` and `.ts` files in `packages/` and `apps/`, then outputs the generated `styled-system/` directory into `packages/core/styled-system/`.

Components use `css()`, `cva()`, and `styled` from the generated `styled-system/css` — never `<style scoped>` for layout or atomic styles. All color tokens resolve through CSS custom properties (`var(--astryx-*)`) so themes can override them without rebuilding.

The Vite build for `@astryxdesign/vue-core` includes a custom `copy-panda-css` plugin that copies `styled-system/styles.css` into `dist/styles.css`. Consumers import `@astryxdesign/vue-core/styles.css` plus a theme file.

### Component Conventions

- **SFC structure:** `<script setup lang="ts">` + `<template>`. Props via `defineProps` with `withDefaults`. Emits via `defineEmits`.
- **File colocation:** `Component.vue`, `index.ts` (barrel export), `Component.test.ts` all in the same folder.
- **Exports:** Named exports only. Each component folder re-exports from `index.ts`; package root `src/index.ts` re-exports all components.
- **Data attributes:** Components expose `data-variant`, `data-size`, `data-color`, `data-loading` for testing and external styling hooks.
- **Accessibility:** `aria-*` attributes applied conditionally (e.g., `aria-busy` only when loading, `aria-disabled` only when disabled). Focus visible uses Panda's `focus` shadow token.
- **Loading state:** Disables interaction, shows Spinner, hides icon slots, sets `aria-busy="true"`.

### TypeScript

Extends `tsconfig.base.json` (strict mode, ES2022 target, bundler module resolution). Path aliases: `styled-system/*` → generated output, `@/*` → `src/*`. Type checking via `vue-tsc`.

### Testing

- **Unit/component:** Vitest + @vue/test-utils + happy-dom. Tests mount components and assert DOM output, attributes, emitted events, and class generation.
- **E2E:** Playwright against the built playground preview server (port 4173). Chromium only by default.
- **Coverage target:** 80% minimum per component (100% for pilot Button).

## Serena MCP — Semantic Code Tools

This project uses [Serena](https://github.com/oraios/serena) for symbol-aware code reading and editing. Serena's tools are PRIMARY for code files; built-in Read/Edit/Grep/Glob are SECONDARY.

| Task | Serena Tool |
|---|---|
| File structure / outline | `get_symbols_overview` |
| Read a symbol's body | `find_symbol` (include_body=true) |
| Find symbol by name | `find_symbol` |
| Find references / callers | `find_referencing_symbols` |
| Declarations / implementations | `find_declaration` / `find_implementations` |
| Edit a symbol's body | `replace_symbol_body` |
| Insert near a symbol | `insert_before_symbol` / `insert_after_symbol` |
| Pattern replace in file | `replace_content` |
| Rename / move / delete symbol | `rename_symbol` / `move_symbol` / `safe_delete` |

Built-in tools are permitted on code files only when Serena has been tried and failed, the file is not parseable as code, or a regex sweep across many files is needed as a discovery step (follow-up edits still go through Serena). Non-code files (markdown, JSON, YAML, config) use built-in tools normally.

**Required workflow before editing code:**
1. `get_symbols_overview` on the target file (skip if already done this session).
2. `find_symbol` with `include_body=true` for the specific symbols to touch.
3. Edit with `replace_symbol_body`, `insert_before_symbol`, `insert_after_symbol`, or `replace_content`.

Hooks are configured in `.claude/settings.json` (remind, auto-approve, activate, cleanup). If Serena tools aren't being used, restart with: `claude --system-prompt="$(serena prompts print-cc-system-prompt-override)"`

## Skills

Available slash commands for common workflows:

| Skill | Description |
|---|---|
| `/new-component <Name>` | Scaffold SFC + index + test, register exports, verify build |
| `/add-variant <Name>` | Add variant/size/color to existing component via Serena |
| `/theme-check [Name]` | Validate component uses only theme-compatible CSS var tokens |
| `/a11y-audit [Name]` | Audit ARIA, focus, keyboard nav, color contrast readiness |
| `/coverage-report [Name]` | Run vitest coverage and analyze gaps vs targets |

## Hook Behaviors

Configured in `.claude/settings.json`:

- **PostToolUse (code edits):** Auto-runs `vue-tsc --noEmit` after any Serena or file edit on code files. Catches type errors immediately.
- **PreToolUse (panda.config.ts):** Warns to run `pnpm prepare` after editing Panda config to regenerate styled-system.
- **PreToolUse (Serena remind):** Nudges agent to use Serena tools when too many consecutive built-in reads/greps occur.
- **PreToolUse (Serena auto-approve):** Auto-approves Serena tool calls in permissive permission modes.
- **SessionStart:** Activates Serena project and loads instructions.
- **SessionEnd:** Cleans up Serena hook session data.

## Key Decisions

- **Panda CSS over StyleX:** StyleX lacks first-class Vue integration. Panda provides equivalent atomic/compile-time/type-safe API with native Vue support.
- **CSS custom properties for theming:** Zero runtime cost for theme switching. Theme packages are pure CSS, no JS bundling required.
- **Vue-idiomatic API:** No React patterns (forwardRef, JSX, useState). Uses `v-model` where applicable, `defineExpose` for imperative handles, slots for composition.
- **Tree-shakeable exports:** Each component is a separate entrypoint. Importing Button does not pull in Modal.