const tokens = {
  "colors.background": {
    "value": "var(--astryx-background)",
    "variable": "var(--colors-background)"
  },
  "colors.surface": {
    "value": "var(--astryx-surface)",
    "variable": "var(--colors-surface)"
  },
  "colors.surfaceRaised": {
    "value": "var(--astryx-surface-raised)",
    "variable": "var(--colors-surface-raised)"
  },
  "colors.surfaceSunken": {
    "value": "var(--astryx-surface-sunken)",
    "variable": "var(--colors-surface-sunken)"
  },
  "colors.overlay": {
    "value": "var(--astryx-overlay)",
    "variable": "var(--colors-overlay)"
  },
  "colors.border": {
    "value": "var(--colors-border)",
    "variable": "var(--colors-border)"
  },
  "colors.borderSubtle": {
    "value": "var(--astryx-border-subtle)",
    "variable": "var(--colors-border-subtle)"
  },
  "colors.borderStrong": {
    "value": "var(--astryx-border-strong)",
    "variable": "var(--colors-border-strong)"
  },
  "colors.text": {
    "value": "var(--astryx-text)",
    "variable": "var(--colors-text)"
  },
  "colors.textSubtle": {
    "value": "var(--astryx-text-subtle)",
    "variable": "var(--colors-text-subtle)"
  },
  "colors.textMuted": {
    "value": "var(--astryx-text-muted)",
    "variable": "var(--colors-text-muted)"
  },
  "colors.textOnAccent": {
    "value": "var(--astryx-text-on-accent)",
    "variable": "var(--colors-text-on-accent)"
  },
  "colors.textOnSuccess": {
    "value": "var(--astryx-text-on-success)",
    "variable": "var(--colors-text-on-success)"
  },
  "colors.textOnWarning": {
    "value": "var(--astryx-text-on-warning)",
    "variable": "var(--colors-text-on-warning)"
  },
  "colors.textOnDanger": {
    "value": "var(--astryx-text-on-danger)",
    "variable": "var(--colors-text-on-danger)"
  },
  "colors.accent": {
    "value": "var(--astryx-accent)",
    "variable": "var(--colors-accent)"
  },
  "colors.accentSubtle": {
    "value": "var(--astryx-accent-subtle)",
    "variable": "var(--colors-accent-subtle)"
  },
  "colors.accentHover": {
    "value": "var(--astryx-accent-hover)",
    "variable": "var(--colors-accent-hover)"
  },
  "colors.success": {
    "value": "var(--astryx-success)",
    "variable": "var(--colors-success)"
  },
  "colors.successSubtle": {
    "value": "var(--astryx-success-subtle)",
    "variable": "var(--colors-success-subtle)"
  },
  "colors.warning": {
    "value": "var(--astryx-warning)",
    "variable": "var(--colors-warning)"
  },
  "colors.warningSubtle": {
    "value": "var(--astryx-warning-subtle)",
    "variable": "var(--colors-warning-subtle)"
  },
  "colors.danger": {
    "value": "var(--astryx-danger)",
    "variable": "var(--colors-danger)"
  },
  "colors.dangerSubtle": {
    "value": "var(--astryx-danger-subtle)",
    "variable": "var(--colors-danger-subtle)"
  },
  "colors.focus": {
    "value": "var(--astryx-focus)",
    "variable": "var(--colors-focus)"
  },
  "colors.blue50": {
    "value": "#e3f2fd",
    "variable": "var(--colors-blue50)"
  },
  "colors.blue500": {
    "value": "#2196f3",
    "variable": "var(--colors-blue500)"
  },
  "colors.blue700": {
    "value": "#1976d2",
    "variable": "var(--colors-blue700)"
  },
  "colors.gray50": {
    "value": "#fafafa",
    "variable": "var(--colors-gray50)"
  },
  "colors.gray100": {
    "value": "#f5f5f5",
    "variable": "var(--colors-gray100)"
  },
  "colors.gray200": {
    "value": "#eeeeee",
    "variable": "var(--colors-gray200)"
  },
  "colors.gray300": {
    "value": "#e0e0e0",
    "variable": "var(--colors-gray300)"
  },
  "colors.gray500": {
    "value": "#9e9e9e",
    "variable": "var(--colors-gray500)"
  },
  "colors.gray700": {
    "value": "#616161",
    "variable": "var(--colors-gray700)"
  },
  "colors.gray900": {
    "value": "#212121",
    "variable": "var(--colors-gray900)"
  },
  "spacing.0": {
    "value": "0",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.px": {
    "value": "1px",
    "variable": "var(--spacing-px)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "radii.none": {
    "value": "0",
    "variable": "var(--radii-none)"
  },
  "radii.sm": {
    "value": "var(--astryx-radius-sm, 4px)",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "var(--astryx-radius-md, 6px)",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "var(--astryx-radius-lg, 8px)",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "var(--astryx-radius-xl, 12px)",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "var(--astryx-radius-2xl, 16px)",
    "variable": "var(--radii-2xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "sizes.0": {
    "value": "0",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.screen": {
    "value": "100vh",
    "variable": "var(--sizes-screen)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "fonts.sans": {
    "value": "system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
    "variable": "var(--fonts-sans)"
  },
  "fonts.mono": {
    "value": "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "variable": "var(--fonts-mono)"
  },
  "fonts.display": {
    "value": "system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
    "variable": "var(--fonts-display)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "lineHeights.tight": {
    "value": "1.2",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.snug": {
    "value": "1.35",
    "variable": "var(--line-heights-snug)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    "value": "1.625",
    "variable": "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    "value": "2",
    "variable": "var(--line-heights-loose)"
  },
  "shadows.none": {
    "value": "none",
    "variable": "var(--shadows-none)"
  },
  "shadows.xs": {
    "value": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.focus": {
    "value": "0 0 0 3px var(--astryx-focus-ring, rgba(31, 138, 248, 0.4))",
    "variable": "var(--shadows-focus)"
  },
  "durations.fast": {
    "value": "120ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "320ms",
    "variable": "var(--durations-slow)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.2, 0, 0, 1)",
    "variable": "var(--easings-default)"
  },
  "easings.in": {
    "value": "cubic-bezier(0.4, 0, 1, 1)",
    "variable": "var(--easings-in)"
  },
  "easings.out": {
    "value": "cubic-bezier(0, 0, 0.2, 1)",
    "variable": "var(--easings-out)"
  },
  "easings.inOut": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-in-out)"
  },
  "zIndex.hide": {
    "value": "-1",
    "variable": "var(--z-index-hide)"
  },
  "zIndex.base": {
    "value": "0",
    "variable": "var(--z-index-base)"
  },
  "zIndex.dropdown": {
    "value": "1000",
    "variable": "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": "1100",
    "variable": "var(--z-index-sticky)"
  },
  "zIndex.fixed": {
    "value": "1200",
    "variable": "var(--z-index-fixed)"
  },
  "zIndex.modalBackdrop": {
    "value": "1300",
    "variable": "var(--z-index-modal-backdrop)"
  },
  "zIndex.modal": {
    "value": "1400",
    "variable": "var(--z-index-modal)"
  },
  "zIndex.popover": {
    "value": "1500",
    "variable": "var(--z-index-popover)"
  },
  "zIndex.tooltip": {
    "value": "1600",
    "variable": "var(--z-index-tooltip)"
  },
  "zIndex.toast": {
    "value": "1700",
    "variable": "var(--z-index-toast)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.fg": {
    "value": "var(--colors-text)",
    "variable": "var(--colors-fg)"
  },
  "colors.fg.subtle": {
    "value": "var(--colors-text-subtle)",
    "variable": "var(--colors-fg-subtle)"
  },
  "colors.fg.muted": {
    "value": "var(--colors-text-muted)",
    "variable": "var(--colors-fg-muted)"
  },
  "colors.fg.onAccent": {
    "value": "var(--colors-text-on-accent)",
    "variable": "var(--colors-fg-on-accent)"
  },
  "colors.fg.onDanger": {
    "value": "var(--colors-text-on-danger)",
    "variable": "var(--colors-fg-on-danger)"
  },
  "colors.bg": {
    "value": "var(--colors-background)",
    "variable": "var(--colors-bg)"
  },
  "colors.bg.surface": {
    "value": "var(--colors-surface)",
    "variable": "var(--colors-bg-surface)"
  },
  "colors.bg.raised": {
    "value": "var(--colors-surface-raised)",
    "variable": "var(--colors-bg-raised)"
  },
  "colors.bg.sunken": {
    "value": "var(--colors-surface-sunken)",
    "variable": "var(--colors-bg-sunken)"
  },
  "colors.bg.overlay": {
    "value": "var(--colors-overlay)",
    "variable": "var(--colors-bg-overlay)"
  },
  "colors.border.subtle": {
    "value": "var(--colors-border-subtle)",
    "variable": "var(--colors-border-subtle)"
  },
  "colors.border.strong": {
    "value": "var(--colors-border-strong)",
    "variable": "var(--colors-border-strong)"
  },
  "spacing.-0": {
    "value": "calc(var(--spacing-0) * -1)",
    "variable": "var(--spacing-0)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-px": {
    "value": "calc(var(--spacing-px) * -1)",
    "variable": "var(--spacing-px)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--colors-color-palette-subtle)",
    "variable": "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.muted": {
    "value": "var(--colors-color-palette-muted)",
    "variable": "var(--colors-color-palette-muted)"
  },
  "colors.colorPalette.onAccent": {
    "value": "var(--colors-color-palette-on-accent)",
    "variable": "var(--colors-color-palette-on-accent)"
  },
  "colors.colorPalette.onDanger": {
    "value": "var(--colors-color-palette-on-danger)",
    "variable": "var(--colors-color-palette-on-danger)"
  },
  "colors.colorPalette.surface": {
    "value": "var(--colors-color-palette-surface)",
    "variable": "var(--colors-color-palette-surface)"
  },
  "colors.colorPalette.raised": {
    "value": "var(--colors-color-palette-raised)",
    "variable": "var(--colors-color-palette-raised)"
  },
  "colors.colorPalette.sunken": {
    "value": "var(--colors-color-palette-sunken)",
    "variable": "var(--colors-color-palette-sunken)"
  },
  "colors.colorPalette.overlay": {
    "value": "var(--colors-color-palette-overlay)",
    "variable": "var(--colors-color-palette-overlay)"
  },
  "colors.colorPalette.strong": {
    "value": "var(--colors-color-palette-strong)",
    "variable": "var(--colors-color-palette-strong)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar