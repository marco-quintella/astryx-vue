/* eslint-disable */
export type Token = "colors.background" | "colors.surface" | "colors.surfaceRaised" | "colors.surfaceSunken" | "colors.overlay" | "colors.border" | "colors.borderSubtle" | "colors.borderStrong" | "colors.text" | "colors.textSubtle" | "colors.textMuted" | "colors.textOnAccent" | "colors.textOnSuccess" | "colors.textOnWarning" | "colors.textOnDanger" | "colors.accent" | "colors.accentSubtle" | "colors.accentHover" | "colors.success" | "colors.successSubtle" | "colors.warning" | "colors.warningSubtle" | "colors.danger" | "colors.dangerSubtle" | "colors.focus" | "colors.blue50" | "colors.blue500" | "colors.blue700" | "colors.gray50" | "colors.gray100" | "colors.gray200" | "colors.gray300" | "colors.gray500" | "colors.gray700" | "colors.gray900" | "spacing.0" | "spacing.1" | "spacing.2" | "spacing.3" | "spacing.4" | "spacing.5" | "spacing.6" | "spacing.8" | "spacing.10" | "spacing.12" | "spacing.16" | "spacing.20" | "spacing.px" | "spacing.0.5" | "spacing.1.5" | "spacing.2.5" | "radii.none" | "radii.sm" | "radii.md" | "radii.lg" | "radii.xl" | "radii.2xl" | "radii.full" | "sizes.0" | "sizes.1" | "sizes.2" | "sizes.3" | "sizes.4" | "sizes.5" | "sizes.6" | "sizes.8" | "sizes.10" | "sizes.12" | "sizes.16" | "sizes.full" | "sizes.screen" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "fonts.sans" | "fonts.mono" | "fonts.display" | "fontSizes.xs" | "fontSizes.sm" | "fontSizes.md" | "fontSizes.lg" | "fontSizes.xl" | "fontSizes.2xl" | "fontSizes.3xl" | "fontSizes.4xl" | "fontSizes.5xl" | "fontWeights.normal" | "fontWeights.medium" | "fontWeights.semibold" | "fontWeights.bold" | "lineHeights.tight" | "lineHeights.snug" | "lineHeights.normal" | "lineHeights.relaxed" | "lineHeights.loose" | "shadows.none" | "shadows.xs" | "shadows.sm" | "shadows.md" | "shadows.lg" | "shadows.xl" | "shadows.focus" | "durations.fast" | "durations.normal" | "durations.slow" | "easings.default" | "easings.in" | "easings.out" | "easings.inOut" | "zIndex.hide" | "zIndex.base" | "zIndex.dropdown" | "zIndex.sticky" | "zIndex.fixed" | "zIndex.modalBackdrop" | "zIndex.modal" | "zIndex.popover" | "zIndex.tooltip" | "zIndex.toast" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "colors.fg" | "colors.fg.subtle" | "colors.fg.muted" | "colors.fg.onAccent" | "colors.fg.onDanger" | "colors.bg" | "colors.bg.surface" | "colors.bg.raised" | "colors.bg.sunken" | "colors.bg.overlay" | "colors.border.subtle" | "colors.border.strong" | "spacing.-0" | "spacing.-1" | "spacing.-2" | "spacing.-3" | "spacing.-4" | "spacing.-5" | "spacing.-6" | "spacing.-8" | "spacing.-10" | "spacing.-12" | "spacing.-16" | "spacing.-20" | "spacing.-px" | "spacing.-0.5" | "spacing.-1.5" | "spacing.-2.5" | "colors.colorPalette" | "colors.colorPalette.subtle" | "colors.colorPalette.muted" | "colors.colorPalette.onAccent" | "colors.colorPalette.onDanger" | "colors.colorPalette.surface" | "colors.colorPalette.raised" | "colors.colorPalette.sunken" | "colors.colorPalette.overlay" | "colors.colorPalette.strong"

export type ColorPalette = "background" | "surface" | "surfaceRaised" | "surfaceSunken" | "overlay" | "border" | "borderSubtle" | "borderStrong" | "text" | "textSubtle" | "textMuted" | "textOnAccent" | "textOnSuccess" | "textOnWarning" | "textOnDanger" | "accent" | "accentSubtle" | "accentHover" | "success" | "successSubtle" | "warning" | "warningSubtle" | "danger" | "dangerSubtle" | "focus" | "blue50" | "blue500" | "blue700" | "gray50" | "gray100" | "gray200" | "gray300" | "gray500" | "gray700" | "gray900" | "fg" | "bg"

export type ColorToken = "background" | "surface" | "surfaceRaised" | "surfaceSunken" | "overlay" | "border" | "borderSubtle" | "borderStrong" | "text" | "textSubtle" | "textMuted" | "textOnAccent" | "textOnSuccess" | "textOnWarning" | "textOnDanger" | "accent" | "accentSubtle" | "accentHover" | "success" | "successSubtle" | "warning" | "warningSubtle" | "danger" | "dangerSubtle" | "focus" | "blue50" | "blue500" | "blue700" | "gray50" | "gray100" | "gray200" | "gray300" | "gray500" | "gray700" | "gray900" | "fg" | "fg.subtle" | "fg.muted" | "fg.onAccent" | "fg.onDanger" | "bg" | "bg.surface" | "bg.raised" | "bg.sunken" | "bg.overlay" | "border.subtle" | "border.strong" | "colorPalette" | "colorPalette.subtle" | "colorPalette.muted" | "colorPalette.onAccent" | "colorPalette.onDanger" | "colorPalette.surface" | "colorPalette.raised" | "colorPalette.sunken" | "colorPalette.overlay" | "colorPalette.strong"

export type SpacingToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20" | "px" | "0.5" | "1.5" | "2.5" | "-0" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-8" | "-10" | "-12" | "-16" | "-20" | "-px" | "-0.5" | "-1.5" | "-2.5"

export type RadiusToken = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"

export type SizeToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "full" | "screen" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type FontToken = "sans" | "mono" | "display"

export type FontSizeToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"

export type FontWeightToken = "normal" | "medium" | "semibold" | "bold"

export type LineHeightToken = "tight" | "snug" | "normal" | "relaxed" | "loose"

export type ShadowToken = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "focus"

export type DurationToken = "fast" | "normal" | "slow"

export type EasingToken = "default" | "in" | "out" | "inOut"

export type ZIndexToken = "hide" | "base" | "dropdown" | "sticky" | "fixed" | "modalBackdrop" | "modal" | "popover" | "tooltip" | "toast"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		colors: ColorToken
		spacing: SpacingToken
		radii: RadiusToken
		sizes: SizeToken
		fonts: FontToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		lineHeights: LineHeightToken
		shadows: ShadowToken
		durations: DurationToken
		easings: EasingToken
		zIndex: ZIndexToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"