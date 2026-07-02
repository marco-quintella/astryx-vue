<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { mergeThemeClassName, themeProps } from '../utils/themeProps';

export type TextType =
  | 'body'
  | 'large'
  | 'label'
  | 'supporting'
  | 'code'
  | 'display-1'
  | 'display-2'
  | 'display-3';

export type TextSize =
  | '4xs'
  | '3xs'
  | '2xs'
  | 'xsm'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'placeholder'
  | 'accent'
  | 'inherit';

export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextDisplay = 'inline' | 'block';
export type TextJustify = 'start' | 'center' | 'end';
export type WordBreak = 'break-word' | 'break-all';
export type TextWrap = 'wrap' | 'nowrap' | 'balance' | 'pretty';
export type TextElement = 'span' | 'p' | 'div' | 'label' | 'h1' | 'h2' | 'h3';

const DEFAULT_COLOR_BY_TYPE: Record<TextType, TextColor> = {
  body: 'primary',
  large: 'primary',
  label: 'primary',
  supporting: 'secondary',
  code: 'primary',
  'display-1': 'primary',
  'display-2': 'primary',
  'display-3': 'primary',
};

const props = withDefaults(
  defineProps<{
    type?: TextType;
    size?: TextSize;
    color?: TextColor;
    weight?: TextWeight;
    display?: TextDisplay;
    as?: TextElement;
    maxLines?: number;
    hasTruncateTooltip?: boolean;
    wordBreak?: WordBreak;
    textWrap?: TextWrap;
    justify?: TextJustify;
    hasCapsize?: boolean;
    hasStrikethrough?: boolean;
    hasTabularNumbers?: boolean;
    class?: string;
  }>(),
  {
    type: 'body',
    display: 'inline',
    as: 'span',
    maxLines: 0,
    hasTruncateTooltip: true,
    justify: 'start',
    hasCapsize: false,
    hasStrikethrough: false,
    hasTabularNumbers: false,
  },
);

const attrs = useAttrs();

const resolvedColor = computed(
  () => props.color ?? DEFAULT_COLOR_BY_TYPE[props.type] ?? 'primary',
);

const resolvedDisplay = computed(() =>
  props.maxLines > 0 || props.hasCapsize ? 'block' : props.display,
);

const resolvedWordBreak = computed(
  () => props.wordBreak ?? (props.maxLines === 1 ? 'break-all' : 'break-word'),
);

const rootProps = computed(() => {
  const themed = mergeThemeClassName(
    themeProps('text', { type: props.type, color: resolvedColor.value }),
    props.class,
  );
  const { className, ...dataAttrs } = themed;

  return {
    class: [
      'astryx-vue-text',
      className,
      `astryx-vue-text--${props.type}`,
      `astryx-vue-text--color-${resolvedColor.value}`,
      `astryx-vue-text--display-${resolvedDisplay.value}`,
      props.size ? `astryx-vue-text--size-${props.size}` : null,
      props.weight ? `astryx-vue-text--weight-${props.weight}` : null,
      props.maxLines === 1 ? 'astryx-vue-text--truncate-1' : null,
      props.maxLines > 1 ? 'astryx-vue-text--truncate-multi' : null,
      props.justify !== 'start' ? `astryx-vue-text--justify-${props.justify}` : null,
      props.textWrap ? `astryx-vue-text--wrap-${props.textWrap}` : null,
      props.hasStrikethrough ? 'astryx-vue-text--strikethrough' : null,
      props.hasTabularNumbers ? 'astryx-vue-text--tabular' : null,
      props.hasCapsize ? 'astryx-vue-text--capsize' : null,
    ],
    style:
      props.maxLines > 1
        ? { WebkitLineClamp: String(props.maxLines) }
        : undefined,
    ...dataAttrs,
    ...attrs,
  };
});
</script>

<template>
  <component :is="as" v-bind="rootProps">
    <slot />
  </component>
</template>

<style scoped>
.astryx-vue-text {
  font-family: var(--font-family-body, system-ui, sans-serif);
  margin: 0;
}

.astryx-vue-text--display-block,
.astryx-vue-text--capsize,
.astryx-vue-text--truncate-1,
.astryx-vue-text--truncate-multi {
  display: block;
}

.astryx-vue-text--display-inline {
  display: inline;
}

.astryx-vue-text--body {
  font-size: var(--text-body-size, 0.875rem);
  line-height: var(--text-body-leading, 1.5);
}

.astryx-vue-text--large {
  font-size: var(--text-large-size, 1rem);
  line-height: var(--text-large-leading, 1.5);
}

.astryx-vue-text--label {
  font-size: var(--text-label-size, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--text-label-leading, 1.4);
}

.astryx-vue-text--supporting {
  font-size: var(--text-supporting-size, 0.75rem);
  line-height: var(--text-supporting-leading, 1.4);
}

.astryx-vue-text--code {
  font-family: var(--font-family-mono, ui-monospace, monospace);
  font-size: var(--text-code-size, 0.8125rem);
  line-height: var(--text-code-leading, 1.5);
}

.astryx-vue-text--display-1 {
  font-family: var(--font-family-heading, system-ui, sans-serif);
  font-size: var(--text-display-1-size, 3rem);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--text-display-1-leading, 1.1);
}

.astryx-vue-text--display-2 {
  font-family: var(--font-family-heading, system-ui, sans-serif);
  font-size: var(--text-display-2-size, 2.25rem);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--text-display-2-leading, 1.15);
}

.astryx-vue-text--display-3 {
  font-family: var(--font-family-heading, system-ui, sans-serif);
  font-size: var(--text-display-3-size, 1.75rem);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--text-display-3-leading, 1.2);
}

.astryx-vue-text--color-primary {
  color: var(--color-text-primary, #171717);
}

.astryx-vue-text--color-secondary {
  color: var(--color-text-secondary, #525252);
}

.astryx-vue-text--color-disabled {
  color: var(--color-text-disabled, #a3a3a3);
}

.astryx-vue-text--color-placeholder {
  color: var(--color-text-placeholder, #a3a3a3);
}

.astryx-vue-text--color-accent {
  color: var(--color-accent, #0866ff);
}

.astryx-vue-text--color-inherit {
  color: inherit;
}

.astryx-vue-text--weight-normal {
  font-weight: var(--font-weight-normal, 400);
}

.astryx-vue-text--weight-medium {
  font-weight: var(--font-weight-medium, 500);
}

.astryx-vue-text--weight-semibold {
  font-weight: var(--font-weight-semibold, 600);
}

.astryx-vue-text--weight-bold {
  font-weight: var(--font-weight-bold, 700);
}

.astryx-vue-text--justify-center {
  text-align: center;
}

.astryx-vue-text--justify-end {
  text-align: end;
}

.astryx-vue-text--truncate-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.astryx-vue-text--truncate-multi {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}

.astryx-vue-text--strikethrough {
  text-decoration: line-through;
}

.astryx-vue-text--tabular {
  font-variant-numeric: tabular-nums;
}

.astryx-vue-text--wrap-nowrap {
  white-space: nowrap;
}

.astryx-vue-text--wrap-balance {
  text-wrap: balance;
}

.astryx-vue-text--wrap-pretty {
  text-wrap: pretty;
}
</style>
