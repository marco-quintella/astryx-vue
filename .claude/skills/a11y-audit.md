# /a11y-audit

Audit accessibility of an Astryx Vue component.

## Usage

```
/a11y-audit [ComponentName]
```

If no component name is given, audits all components in `packages/core/src/`.

## Instructions

You are auditing Astryx Vue components for WCAG 2.1 AA compliance and project a11y standards.

### 1. Read the component

Use Serena `find_symbol` with `include_body=true` to read the target component's SFC template and script.

### 2. Check required attributes

For interactive elements (buttons, inputs, links):
- `role` attribute present where semantic HTML is insufficient
- `aria-label` or visible text content for icon-only elements
- `aria-disabled` mirrors `disabled` prop
- `aria-busy` set during loading states
- `tabindex` managed correctly (no positive tabindex)
- Focus-visible ring via Panda's `focus` shadow token on `:focus-visible`

For overlays (dialogs, popovers, tooltips — future components):
- Focus trap implemented
- ESC key closes overlay
- Scroll lock when open
- Portal rendering (not inline DOM)
- `aria-modal="true"` on dialogs
- Labelled by title via `aria-labelledby`

### 3. Check keyboard navigation

- All interactive elements reachable via Tab
- No click-only interactions (hover menus without keyboard alternative)
- Enter/Space activates buttons
- Arrow keys for composite widgets (tabs, menus)

### 4. Check color contrast readiness

Verify the component uses semantic tokens (`fg`, `bg.surface`, etc.) that resolve to theme CSS vars. Hardcoded colors fail this check because they can't adapt to high-contrast themes.

### 5. Run Lighthouse (if playground is running)

If chrome-devtools-mcp is connected and the playground is accessible:
1. Navigate to the component demo page
2. Run `lighthouse_audit` with `mode: 'accessibility'`
3. Report score and failing audits

### 6. Report

Output structured findings:
```
## A11y Audit: <ComponentName>

✅ Semantic HTML element used
✅ aria-disabled mirrors disabled prop
✅ Focus-visible ring applied
⚠️ Missing aria-label on icon-only variant
✅ Color contrast: uses semantic tokens
Lighthouse: N/A (playground not running)
```

Offer to fix issues using Serena tools.