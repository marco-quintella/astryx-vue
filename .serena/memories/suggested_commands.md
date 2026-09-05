# Suggested Commands

## Development
- `pnpm install` — install all workspace dependencies
- `pnpm prepare` — regenerate Panda CSS styled-system (runs automatically on install)
- `pnpm dev` — start playground dev server on :5173
- `pnpm build` — build all packages (lib + playground)

## Testing
- `pnpm test` — run all tests across workspace
- `pnpm test:unit` — vitest only (@astryxdesign/vue-core)
- `pnpm test:e2e` — playwright only (@astryxdesign/playground, auto-starts preview server)
- Single component: `pnpm --filter @astryxdesign/vue-core exec vitest run src/<Name>/`
- Watch mode: `pnpm --filter @astryxdesign/vue-core exec vitest`

## Quality
- `pnpm lint` — eslint across workspace
- `pnpm typecheck` — vue-tsc --noEmit across workspace

## macOS-specific
- Use `pbcopy` / `pbpaste` for clipboard (not `xclip`/`xsel`)
- `open <url>` to open browser (not `xdg-open`)
- Homebrew paths: `/opt/homebrew/` (Apple Silicon), not `/usr/local/`