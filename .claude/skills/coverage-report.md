# /coverage-report

Generate and analyze test coverage for an Astryx Vue component.

## Usage

```
/coverage-report [ComponentName]
```

If no component name is given, reports coverage for all components in `packages/core/src/`.

## Instructions

You are generating and analyzing test coverage for Astryx Vue components against project targets (80% minimum per component, 100% for pilot Button).

### 1. Run coverage

For a specific component:
```bash
pnpm --filter @astryxdesign/vue-core exec vitest run src/<ComponentName>/ --coverage --coverage.reporter=text
```

For all components:
```bash
pnpm --filter @astryxdesign/vue-core exec vitest run --coverage --coverage.reporter=text
```

### 2. Parse results

Extract from the coverage output:
- Statements %, Branches %, Functions %, Lines %
- Uncovered lines list
- Uncovered branches list

### 3. Compare against targets

| Component | Target | Status |
|-----------|--------|--------|
| Button (pilot) | 100% | ✅/❌ |
| Others | 80% | ✅/❌ |

### 4. Analyze gaps

For each uncovered line/branch:
- Read the relevant code via Serena `find_symbol` with `include_body=true`
- Determine if it's a missing test case, unreachable code, or edge case
- Propose specific test additions to close the gap

### 5. Report

Output structured report:
```
## Coverage Report: <ComponentName>

| Metric     | Actual | Target | Status |
|------------|--------|--------|--------|
| Statements | 92%    | 80%    | ✅     |
| Branches   | 75%    | 80%    | ❌     |
| Functions  | 100%   | 80%    | ✅     |
| Lines      | 91%    | 80%    | ✅     |

Uncovered:
- Line 67: disabled + loading combined state → add test
- Line 89: iconOnly with size sm → add test

Recommendation: Add 2 test cases to reach 80% branch coverage.
```

Offer to write the missing tests using Serena tools.</content>