# Task Completion

Commands to run when a coding task is considered done:

1. `pnpm --filter @astryxdesign/vue-core typecheck` — no type errors
2. `pnpm --filter @astryxdesign/vue-core test:unit` — all tests pass
3. `pnpm build` — lib build succeeds (only if component files changed)
4. `pnpm prepare` — regenerate styled-system (only if panda.config.ts changed)

For new components, also verify:
- Export registered in `packages/core/src/index.ts`
- Tree-shakeable entrypoint added to `packages/core/package.json` exports map
- Playground renders without errors (if applicable)