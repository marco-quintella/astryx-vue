<script setup lang="ts">
/**
 * Astryx Vue — Button
 * Piloto. Equivalente Vue-idiomático do @astryxdesign/core Button.
 *
 * Design direto:
 * - variant: solid | soft | outlined | ghost | danger
 * - size: sm | md | lg
 * - color: neutral | accent | success | warning | danger
 * - iconStart, iconEnd, loading, disabled, fullWidth
 */
import { computed } from 'vue';
import { css, cva } from '../../styled-system/css';
import Spinner from './Spinner.vue';

export type ButtonVariant = 'solid' | 'soft' | 'outlined' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
export type ButtonType = 'button' | 'submit' | 'reset';

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    type?: ButtonType;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    iconStart?: boolean;
    iconEnd?: boolean;
    /** When true, renders an icon-only square button (size lg = 40px). */
    iconOnly?: boolean;
    ariaLabel?: string;
  }>(),
  {
    variant: 'solid',
    size: 'md',
    color: 'accent',
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconStart: false,
    iconEnd: false,
    iconOnly: false,
    ariaLabel: undefined,
  },
);

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const button = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    fontFamily: 'sans',
    fontWeight: 'medium',
    cursor: 'pointer',
    borderRadius: 'md',
    border: '1px solid transparent',
    transition: 'background 120ms cubic-bezier(0.2, 0, 0, 1), border-color 120ms cubic-bezier(0.2, 0, 0, 1), color 120ms cubic-bezier(0.2, 0, 0, 1), box-shadow 120ms cubic-bezier(0.2, 0, 0, 1)',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: 'focus',
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'accent',
        color: 'fg.onAccent',
        borderColor: 'accent',
        '&:hover:not(:disabled)': {
          bg: 'colors.accentHover',
          borderColor: 'colors.accentHover',
        },
      },
      soft: {
        bg: 'accentSubtle',
        color: 'accent',
        borderColor: 'accentSubtle',
        '&:hover:not(:disabled)': {
          bg: 'colors.accentSubtle',
          filter: 'brightness(0.95)',
        },
      },
      outlined: {
        bg: 'transparent',
        color: 'accent',
        borderColor: 'border',
        '&:hover:not(:disabled)': {
          bg: 'bg.surface',
          borderColor: 'borderStrong',
        },
      },
      ghost: {
        bg: 'transparent',
        color: 'fg',
        borderColor: 'transparent',
        '&:hover:not(:disabled)': {
          bg: 'colors.surfaceSunken',
        },
      },
      danger: {
        bg: 'danger',
        color: 'fg.onDanger',
        borderColor: 'danger',
        '&:hover:not(:disabled)': {
          bg: 'colors.danger',
          filter: 'brightness(0.9)',
        },
      },
    },
    size: {
      sm: {
        h: '7',
        px: '3',
        fontSize: 'sm',
        lineHeight: 'snug',
      },
      md: {
        h: '9',
        px: '4',
        fontSize: 'md',
        lineHeight: 'snug',
      },
      lg: {
        h: '12',
        px: '6',
        fontSize: 'lg',
        lineHeight: 'snug',
      },
    },
    color: {
      neutral: {},
      accent: {},
      success: {
        '&[data-variant="solid"]': {
          bg: 'success',
          borderColor: 'success',
          color: 'fg.onSuccess',
        },
        '&[data-variant="soft"]': {
          bg: 'successSubtle',
          color: 'success',
        },
      },
      warning: {
        '&[data-variant="solid"]': {
          bg: 'warning',
          borderColor: 'warning',
          color: 'fg.onAccent',
        },
        '&[data-variant="soft"]': {
          bg: 'warningSubtle',
          color: 'warning',
        },
      },
      danger: {},
    },
    fullWidth: {
      true: { width: 'full' },
      false: {},
    },
    iconOnly: {
      true: {
        padding: '0',
        aspectRatio: '1',
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    color: 'accent',
  },
});

const buttonClass = computed(() =>
  button({
    variant: props.variant,
    size: props.size,
    color: props.color,
    fullWidth: props.fullWidth,
    iconOnly: props.iconOnly,
  }),
);

const isDisabled = computed(() => props.disabled || props.loading);
const computedAriaLabel = computed(() => props.ariaLabel);
</script>

<template>
  <button
    :class="buttonClass"
    :type="type"
    :disabled="isDisabled"
    :aria-label="computedAriaLabel"
    :aria-busy="loading || undefined"
    :aria-disabled="isDisabled || undefined"
    :data-variant="variant"
    :data-size="size"
    :data-color="color"
    :data-loading="loading || undefined"
    @click="(e: MouseEvent) => $emit('click', e)"
  >
    <Spinner
      v-if="loading"
      :size="size"
      :class="css({ position: 'absolute' })"
    />
    <span
      v-if="iconStart && !loading"
      :class="css({ display: 'inline-flex', alignItems: 'center' })"
      aria-hidden="true"
    >
      <slot name="iconStart" />
    </span>
    <span
      :class="
        css({
          display: 'inline-flex',
          alignItems: 'center',
          visibility: loading ? 'hidden' : 'visible',
        })
      "
    >
      <slot />
    </span>
    <span
      v-if="iconEnd && !loading"
      :class="css({ display: 'inline-flex', alignItems: 'center' })"
      aria-hidden="true"
    >
      <slot name="iconEnd" />
    </span>
  </button>
</template>
