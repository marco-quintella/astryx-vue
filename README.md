# Astryx Vue

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Open-source Vue 3 port of [Meta Astryx](https://github.com/facebook/astryx) — the agent-ready design system built on React and StyleX.

**Repository:** https://github.com/marco-quintella/astryx-vue

Astryx Vue reuses official `@astryxdesign/theme-*` packages for tokens and theming while providing Vue-native components with matching prop names, `themeProps()` conventions, and `data-*` attribute surfaces.

## Status

**v0.1.0 — early scaffold**

| Area | Status |
| --- | --- |
| Theme provider (`AstryxTheme`) | ✅ MVP |
| `themeProps()` utility | ✅ Parity with React core |
| `Button` | ✅ MVP (token-based styles) |
| Remaining ~150 components | 🚧 Planned |

## Quick start

```bash
pnpm install
pnpm dev
```

Open the playground at `http://localhost:5175`.

### In your app

```bash
pnpm add @astryxdesign-vue/core @astryxdesign/theme-neutral vue
```

```vue
<script setup lang="ts">
import { AstryxTheme, Button } from '@astryxdesign-vue/core';
import { neutralTheme } from '@astryxdesign/theme-neutral/built';
import '@astryxdesign-vue/core/style.css';
</script>

<template>
  <AstryxTheme :theme="neutralTheme">
    <Button label="Hello Astryx" variant="primary" />
  </AstryxTheme>
</template>
```

## Architecture

```
astryx-vue/
├── packages/core/     # @astryxdesign-vue/core — Vue components + theme bridge
└── playground/        # Vite demo app
```

**Port strategy**

1. **Themes** — consume official `@astryxdesign/theme-*` CSS and built theme objects (no fork).
2. **API contract** — mirror React prop names and `themeProps()` / `data-variant` surfaces so agents and docs stay portable.
3. **Components** — Vue SFCs; v0 uses token-driven CSS. Full StyleX-class parity is tracked for a later bridge once the component catalog stabilizes.
4. **CLI / MCP** — follow-up package `@astryxdesign-vue/cli` will expose the same manifest pattern as `@astryxdesign/cli`.

## Relationship to upstream

This is an **independent open-source project**, not affiliated with Meta. We track upstream Astryx releases and aim for API compatibility so teams can move between React and Vue stacks without relearning the system.

## License

MIT — see [LICENSE](./LICENSE). Upstream Astryx is also MIT.
