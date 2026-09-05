# /theme-check

Validate that a component uses only theme-compatible CSS custom property tokens.

## Usage

```
/theme-check [ComponentName]
```

If no component name is given, checks all components in `packages/core/src/`.

## Instructions

You are auditing Astryx Vue components for theme compatibility. Every color, radius, and shadow must resolve through CSS custom properties (`var(--astryx-*)`) so themes can override them at runtime with zero JS.

### 1. Identify target files

If a component name is given, read `packages/core/src/<ComponentName>/<ComponentName>.vue` via Serena `find_symbol` with `include_body=true`. Otherwise, list all `.vue` files under `packages/core/src/` and check each.

### 2. Check for hardcoded values

Scan the `cva()` and `css()` calls for:
- Raw hex colors (e.g., `#2196f3`, `rgb(...)`, `rgba(...)`) — these bypass theming
- Raw pixel radii not using token names (e.g., `borderRadius: '4px'` instead of `'md'`)
- Hardcoded shadows not using the `focus` or other named shadow tokens

Allowed raw values: `transparent`, `inherit`, `currentColor`, `0`, `'none'`, `'full'` (for borderRadius).

### 3. Cross-reference against theme tokens

Read `packages/themes/neutral.css` to get the full set of `--astryx-*` variables. Read `panda.config.ts` to get the token-to-CSS-var mapping. Verify every semantic token used in the component (e.g., `bg.surface`, `fg.subtle`, `border.default`) resolves to a defined CSS var.

### 4. Check dark mode coverage

Verify that every CSS var used has both light and dark definitions in `neutral.css`. Flag any var that appears only in the light block.

### 5. Report

Output a structured report:
```
## Theme Check: <ComponentName>

✅ All colors use semantic tokens
✅ All radii use token names
⚠️ Found 1 hardcoded value:
   - Line 47: `color: '#616161'` → should be `fg.subtle`
✅ Dark mode: all vars have dark definitions
```

If no issues found, report clean status. If issues found, offer to fix them using Serena `replace_symbol_body`.