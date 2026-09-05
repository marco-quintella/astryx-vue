# Contributing to Astryx Vue

Thanks for helping build the Vue port of [Meta Astryx](https://github.com/facebook/astryx).

## Development setup

```bash
corepack enable
pnpm install
pnpm dev      # playground at http://localhost:5175
pnpm build
pnpm typecheck
```

## Component port checklist

When adding a Vue component, mirror the upstream React API:

1. Run `node node_modules/@astryxdesign/core/docs.mjs <Component>` for props and behavior.
2. Use `themeProps()` from `@astryxdesign-vue/core` for `astryx-*` classes and `data-*` attributes.
3. Export from `packages/core/src/index.ts`.
4. Add a playground example in `playground/src/App.vue`.

## Pull requests

- Keep PRs focused on one component or concern.
- Ensure `pnpm build` and `pnpm typecheck` pass.
- Note upstream Astryx version compatibility in the PR description.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
