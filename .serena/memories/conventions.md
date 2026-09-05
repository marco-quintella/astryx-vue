# Conventions

## Component Structure
- Directory: `packages/core/src/<Name>/` with `<Name>.vue`, `index.ts`, `<Name>.test.ts` colocalized
- SFC: `<script setup lang="ts">` + `<template>` only (no `<style scoped>` for layout/atoms)
- Props: `defineProps` + `withDefaults`, export union types for variant/size/color
- Root element attributes: `data-variant`, `data-size`, `data-color` for testing hooks
- Exports: named only via barrel `index.ts`; package root re-exports all components

## Styling
- Import from `../../styled-system/css`: `css()` for one-off, `cva()` for variants
- Semantic tokens only (`bg.surface`, `fg`, `border.default`) — never raw hex/rgb
- Allowed raw values: `transparent`, `inherit`, `currentColor`, `0`, `'none'`, `'full'`
- After editing `panda.config.ts`: run `pnpm prepare` to regenerate styled-system

## Testing
- Vitest + @vue/test-utils + happy-dom; tests colocalized as `<Name>.test.ts`
- Use `data-*` attributes as selectors; assert atomic class count >= 2
- Coverage: 100% for pilot Button, 80% minimum per component thereafter
- E2E: Playwright against playground preview server (port 4173)

## Code Style
- PascalCase for components, camelCase for props/composables
- No React patterns (forwardRef, JSX, useState); use `v-model`, `defineExpose`, slots
- Tree-shakeable: each component has separate entrypoint in `package.json` exports map