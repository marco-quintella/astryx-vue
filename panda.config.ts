/**
 * Panda CSS config for Astryx Vue
 * - Atomic, compile-time, type-safe
 * - Theme via CSS custom properties (drop-in compatible with Astryx React)
 * - Tokens ported from @astryxdesign/theme-neutral
 */
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./packages/**/*.{vue,ts,tsx,js,jsx,mjs}', './apps/**/*.{vue,ts,tsx,js,jsx,mjs}'],
  exclude: [],

  jsxFramework: 'vue',

  outdir: 'packages/core/styled-system',

  // ----- Theme tokens -----
  theme: {
    // ----- Breakpoints -----
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    // ----- Tokens (kept in sync with Astryx React tokens) -----
    tokens: {
      colors: {
        // Color roles — values resolved via CSS custom properties so themes can override
        background: { value: 'var(--astryx-background)' },
        surface: { value: 'var(--astryx-surface)' },
        surfaceRaised: { value: 'var(--astryx-surface-raised)' },
        surfaceSunken: { value: 'var(--astryx-surface-sunken)' },
        overlay: { value: 'var(--astryx-overlay)' },
        border: { value: 'var(--astryx-border)' },
        borderSubtle: { value: 'var(--astryx-border-subtle)' },
        borderStrong: { value: 'var(--astryx-border-strong)' },
        text: { value: 'var(--astryx-text)' },
        textSubtle: { value: 'var(--astryx-text-subtle)' },
        textMuted: { value: 'var(--astryx-text-muted)' },
        textOnAccent: { value: 'var(--astryx-text-on-accent)' },
        textOnSuccess: { value: 'var(--astryx-text-on-success)' },
        textOnWarning: { value: 'var(--astryx-text-on-warning)' },
        textOnDanger: { value: 'var(--astryx-text-on-danger)' },
        accent: { value: 'var(--astryx-accent)' },
        accentSubtle: { value: 'var(--astryx-accent-subtle)' },
        accentHover: { value: 'var(--astryx-accent-hover)' },
        success: { value: 'var(--astryx-success)' },
        successSubtle: { value: 'var(--astryx-success-subtle)' },
        warning: { value: 'var(--astryx-warning)' },
        warningSubtle: { value: 'var(--astryx-warning-subtle)' },
        danger: { value: 'var(--astryx-danger)' },
        dangerSubtle: { value: 'var(--astryx-danger-subtle)' },
        focus: { value: 'var(--astryx-focus)' },
        // Raw palette for charts/illustrations
        blue50: { value: '#e3f2fd' },
        blue500: { value: '#2196f3' },
        blue700: { value: '#1976d2' },
        gray50: { value: '#fafafa' },
        gray100: { value: '#f5f5f5' },
        gray200: { value: '#eeeeee' },
        gray300: { value: '#e0e0e0' },
        gray500: { value: '#9e9e9e' },
        gray700: { value: '#616161' },
        gray900: { value: '#212121' },
      },
      spacing: {
        '0': { value: '0' },
        px: { value: '1px' },
        '0.5': { value: '0.125rem' },
        '1': { value: '0.25rem' },
        '1.5': { value: '0.375rem' },
        '2': { value: '0.5rem' },
        '2.5': { value: '0.625rem' },
        '3': { value: '0.75rem' },
        '4': { value: '1rem' },
        '5': { value: '1.25rem' },
        '6': { value: '1.5rem' },
        '8': { value: '2rem' },
        '10': { value: '2.5rem' },
        '12': { value: '3rem' },
        '16': { value: '4rem' },
        '20': { value: '5rem' },
      },
      radii: {
        none: { value: '0' },
        sm: { value: 'var(--astryx-radius-sm, 4px)' },
        md: { value: 'var(--astryx-radius-md, 6px)' },
        lg: { value: 'var(--astryx-radius-lg, 8px)' },
        xl: { value: 'var(--astryx-radius-xl, 12px)' },
        '2xl': { value: 'var(--astryx-radius-2xl, 16px)' },
        full: { value: '9999px' },
      },
      sizes: {
        '0': { value: '0' },
        '1': { value: '0.25rem' },
        '2': { value: '0.5rem' },
        '3': { value: '0.75rem' },
        '4': { value: '1rem' },
        '5': { value: '1.25rem' },
        '6': { value: '1.5rem' },
        '7': { value: '1.75rem' },
        '8': { value: '2rem' },
        '9': { value: '2.25rem' },
        '10': { value: '2.5rem' },
        '12': { value: '3rem' },
        '16': { value: '4rem' },
        full: { value: '100%' },
        screen: { value: '100vh' },
      },
      fonts: {
        sans: {
          value:
            'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
        mono: {
          value:
            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
        display: {
          value:
            'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
      },
      fontSizes: {
        'xs': { value: '0.75rem' },
        'sm': { value: '0.875rem' },
        'md': { value: '1rem' },
        'lg': { value: '1.125rem' },
        'xl': { value: '1.25rem' },
        '2xl': { value: '1.5rem' },
        '3xl': { value: '1.875rem' },
        '4xl': { value: '2.25rem' },
        '5xl': { value: '3rem' },
      },
      fontWeights: {
        normal: { value: '400' },
        medium: { value: '500' },
        semibold: { value: '600' },
        bold: { value: '700' },
      },
      lineHeights: {
        tight: { value: '1.2' },
        snug: { value: '1.35' },
        normal: { value: '1.5' },
        relaxed: { value: '1.625' },
        loose: { value: '2' },
      },
      shadows: {
        none: { value: 'none' },
        xs: { value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
        sm: { value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)' },
        md: { value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' },
        lg: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' },
        xl: { value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' },
        focus: { value: '0 0 0 3px var(--astryx-focus-ring, rgba(31, 138, 248, 0.4))' },
      },
      durations: {
        fast: { value: '120ms' },
        normal: { value: '200ms' },
        slow: { value: '320ms' },
      },
      easings: {
        default: { value: 'cubic-bezier(0.2, 0, 0, 1)' },
        in: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
        out: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
        inOut: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      },
      zIndex: {
        hide: { value: '-1' },
        base: { value: '0' },
        dropdown: { value: '1000' },
        sticky: { value: '1100' },
        fixed: { value: '1200' },
        modalBackdrop: { value: '1300' },
        modal: { value: '1400' },
        popover: { value: '1500' },
        tooltip: { value: '1600' },
        toast: { value: '1700' },
      },
    },

    // ----- Semantic tokens (resolve to design tokens above) -----
    semanticTokens: {
      colors: {
        fg: {
          DEFAULT: { value: '{colors.text}' },
          subtle: { value: '{colors.textSubtle}' },
          muted: { value: '{colors.textMuted}' },
          onAccent: { value: '{colors.textOnAccent}' },
          onDanger: { value: '{colors.textOnDanger}' },
        },
        bg: {
          DEFAULT: { value: '{colors.background}' },
          surface: { value: '{colors.surface}' },
          raised: { value: '{colors.surfaceRaised}' },
          sunken: { value: '{colors.surfaceSunken}' },
          overlay: { value: '{colors.overlay}' },
        },
        border: {
          DEFAULT: { value: '{colors.border}' },
          subtle: { value: '{colors.borderSubtle}' },
          strong: { value: '{colors.borderStrong}' },
        },
      },
    },
  },

  // ----- Global CSS -----
  globalCss: {
    'html, body': {
      bg: 'bg',
      color: 'fg',
      fontFamily: 'sans',
      fontSize: 'md',
      lineHeight: 'normal',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: 'focus',
    },
  },

  // ----- Utilities -----
  utilities: {
    extend: {
      // Animation utilities (cheap, no plugin)
      animation: {
        spin: {
          value: 'spin 1s linear infinite',
        },
        pulse: {
          value: 'pulse 1.5s ease-in-out infinite',
        },
      },
      keyframes: {
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
});
