# /add-variant

Add a new variant, size, or color to an existing Astryx Vue component.

## Usage

```
/add-variant <ComponentName> --type variant|size|color --name <value> [--styles "{...}"]
```

Example: `/add-variant Button --type variant --name link --styles "{ color: 'accent', textDecoration: 'underline', bg: 'transparent' }"`

## Instructions

You are extending an existing Astryx Vue component with a new variant, size, or color option.

### 1. Locate the component

Use Serena `find_symbol` with `include_body=true` to read the target component's SFC. Identify:
- The `cva()` call and its current variants/sizes/colors
- The TypeScript union type for the dimension being extended (e.g., `ButtonVariant`)
- The `withDefaults` block for default values

### 2. Update the TypeScript type

Use Serena `replace_symbol_body` to add the new value to the union type:
```typescript
// Before
export type ButtonVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'danger';
// After
export type ButtonVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'danger' | 'link';
```

### 3. Add the cva() entry

Use Serena `insert_after_symbol` or `replace_symbol_body` to add the new variant/style block inside the `cva()` definition, following the pattern of existing entries. Use semantic tokens, never raw colors.

### 4. Add test coverage

Read the component's `.test.ts` via Serena. Add a test case that:
- Renders the component with the new prop value
- Asserts the correct `data-*` attribute is set
- Verifies CSS classes are generated

### 5. Update playground (if applicable)

If `apps/playground/src/App.vue` has a section for this component's variants/sizes/colors, add the new option there.

### 6. Verify

```bash
pnpm --filter @astryxdesign/vue-core typecheck
pnpm --filter @astryxdesign/vue-core test:unit
```

Report what was added and whether tests pass.