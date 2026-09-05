# Tech Stack

- Language: TypeScript 5.6, Vue 3.5 (SFC `<script setup lang="ts">`)
- Build: Vite 5 (lib mode for core, dev server for playground)
- Styling: Panda CSS 0.51 (`jsxFramework: 'vue'`, atomic compile-time, `cva()`/`css()`)
- Package manager: pnpm 10.33 (workspaces)
- Testing: Vitest 2 + @vue/test-utils 2 + happy-dom (unit), Playwright 1.49 (e2e)
- Type checking: vue-tsc 2
- Node: >=20.0.0
- Semantic code tools: Serena MCP (LSP backend, Vue support)
- Theme system: Pure CSS custom properties (`--astryx-*`), zero JS runtime