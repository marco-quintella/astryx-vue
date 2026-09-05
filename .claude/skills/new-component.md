# /new-component

Scaffold a new Astryx Vue component following project conventions.

## Usage

```
/new-component <ComponentName> [--variants v1,v2,...] [--sizes s1,s2,...] [--colors c1,c2,...]
```

Example: `/new-component Badge --variants solid,soft,outlined --sizes sm,md,lg --colors neutral,accent,success`

## Instructions

You are scaffolding a new component for the Astryx Vue design system. Follow these steps exactly:

### 1. Validate input
- Component name must be PascalCase (e.g., `Badge`, `TextInput`, `AppShell`)
- If no variants specified, default to `solid,soft,outlined,ghost`
- If no sizes specified, default to `sm,md,lg`
- If no colors specified, default to `neutral,accent,success,warning,danger`

### 2. Create component directory and files

Create three colocalized files in `packages/core/src/<ComponentName>/`:

#### `<ComponentName>.vue`
- Use `<script setup lang="ts">` with TypeScript
- Define props via `defineProps` + `withDefaults` matching the Button pattern
- Export types for variant/size/color as union types
- Use `cva()` from `../../styled-system/css` for styling (never `<style scoped>` for layout)
- Apply semantic tokens (`bg.surface`, `fg`, `border.default`) not raw color values
- Include `data-variant`, `data-size`, `data-color` attributes on root element
- Support `disabled` prop (sets `aria-disabled`, reduces opacity, disables pointer events)
- Add focus-visible ring via Panda's `focus` shadow token
- Reference existing `Button.vue` at `packages/core/src/Button/Button.vue` as the canonical template

#### `index.ts`
```typescript
export { default as <ComponentName> } from './<ComponentName>.vue';
export type { <ComponentName>Variant, <ComponentName>Size, <ComponentName>Color } from './<ComponentName>.vue';
```

#### `<ComponentName>.test.ts`
- Import from `@vue/test-utils` and `vitest`
- Test all variants render without errors
- Test all sizes apply correct data attributes
- Test disabled state sets aria-disabled
- Test CSS classes are generated (at least 2 atomic classes)
- Reference `packages/core/src/Button/Button.test.ts` as the canonical test template

### 3. Register exports

Add to `packages/core/src/index.ts`:
```typescript
export * from './<ComponentName>';
```

### 4. Add tree-shakeable entrypoint

Add to `packages/core/package.json` under `"exports"`:
```json
"./<ComponentName>": {
  "types": "./dist/<ComponentName>/index.d.ts",
  "import": "./dist/<ComponentName>/index.js"
}
```

### 5. Verify

Run these commands and report results:
```bash
pnpm prepare          # regenerate styled-system if needed
pnpm build            # verify lib build succeeds
pnpm test:unit        # verify tests pass
```

If any step fails, fix the issue before reporting completion.

### 6. Report

Summarize what was created:
- Files created (with paths)
- Exports registered
- Build status
- Test results
- Any issues or follow-ups needed