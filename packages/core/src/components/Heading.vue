<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { mergeThemeClassName, themeProps } from '../utils/themeProps';
import type { TextColor, TextDisplay, TextJustify, TextWrap, WordBreak } from './Text.vue';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingType = 'display-1' | 'display-2' | 'display-3';

const LEVEL_TAGS = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

const props = withDefaults(
  defineProps<{
    level: HeadingLevel;
    type?: HeadingType;
    accessibilityLevel?: HeadingLevel;
    color?: TextColor;
    display?: TextDisplay;
    maxLines?: number;
    hasTruncateTooltip?: boolean;
    wordBreak?: WordBreak;
    textWrap?: TextWrap;
    justify?: TextJustify;
    hasCapsize?: boolean;
    hasStrikethrough?: boolean;
    class?: string;
  }>(),
  {
    color: 'primary',
    display: 'block',
    maxLines: 0,
    hasTruncateTooltip: true,
    justify: 'start',
    hasCapsize: false,
    hasStrikethrough: false,
  },
);

const attrs = useAttrs();

const tag = computed(() => LEVEL_TAGS[props.level]);

const ariaProps = computed(() =>
  props.accessibilityLevel && props.accessibilityLevel !== props.level
    ? { 'aria-level': props.accessibilityLevel }
    : {},
);

const resolvedDisplay = computed(() =>
  props.maxLines > 0 || props.hasCapsize ? 'block' : props.display,
);

const rootProps = computed(() => {
  const themeVariant = {
    level: props.level,
    color: props.color,
    ...(props.type ? { type: props.type } : {}),
  };

  const themed = mergeThemeClassName(
    themeProps('heading', themeVariant),
    props.class,
  );
  const { className, ...dataAttrs } = themed;

  return {
    class: [
      'astryx-vue-heading',
      className,
      props.type ? `astryx-vue-heading--type-${props.type}` : `astryx-vue-heading--level-${props.level}`,
      `astryx-vue-heading--color-${props.color}`,
      `astryx-vue-heading--display-${resolvedDisplay.value}`,
      props.maxLines === 1 ? 'astryx-vue-heading--truncate-1' : null,
      props.maxLines > 1 ? 'astryx-vue-heading--truncate-multi' : null,
      props.justify !== 'start' ? `astryx-vue-heading--justify-${props.justify}` : null,
      props.textWrap ? `astryx-vue-heading--wrap-${props.textWrap}` : null,
      props.hasStrikethrough ? 'astryx-vue-heading--strikethrough' : null,
      props.hasCapsize ? 'astryx-vue-heading--capsize' : null,
    ],
    style:
      props.maxLines > 1
        ? { WebkitLineClamp: String(props.maxLines) }
        : undefined,
    ...dataAttrs,
    ...ariaProps.value,
    ...attrs,
  };
});
</script>

<template>
  <component :is="tag" v-bind="rootProps">
    <slot />
  </component>
</template>

<style scoped>
.astryx-vue-heading {
  font-family: var(--font-family-heading, system-ui, sans-serif);
  margin: 0;
}

.astryx-vue-heading--display-block,
.astryx-vue-heading--capsize,
.astryx-vue-heading--truncate-1,
.astryx-vue-heading--truncate-multi {
  display: block;
}

.astryx-vue-heading--level-1 {
  font-size: var(--heading-1-size, 2rem);
  font-weight: var(--heading-1-weight, 600);
  line-height: var(--heading-1-leading, 1.2);
}

.astryx-vue-heading--level-2 {
  font-size: var(--heading-2-size, 1.5rem);
  font-weight: var(--heading-2-weight, 600);
  line-height: var(--heading-2-leading, 1.25);
}

.astryx-vue-heading--level-3 {
  font-size: var(--heading-3-size, 1.25rem);
  font-weight: var(--heading-3-weight, 600);
  line-height: var(--heading-3-leading, 1.3);
}

.astryx-vue-heading--level-4 {
  font-size: var(--heading-4-size, 1.125rem);
  font-weight: var(--heading-4-weight, 600);
  line-height: var(--heading-4-leading, 1.35);
}

.astryx-vue-heading--level-5 {
  font-size: var(--heading-5-size, 1rem);
  font-weight: var(--heading-5-weight, 600);
  line-height: var(--heading-5-leading, 1.4);
}

.astryx-vue-heading--level-6 {
  font-size: var(--heading-6-size, 0.875rem);
  font-weight: var(--heading-6-weight, 600);
  line-height: var(--heading-6-leading, 1.4);
}

.astryx-vue-heading--type-display-1 {
  font-size: var(--text-display-1-size, 3rem);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--text-display-1-leading, 1.1);
}

.astryx-vue-heading--type-display-2 {
  font-size: var(--text-display-2-size, 2.25rem);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--text-display-2-leading, 1.15);
}

.astryx-vue-heading--type-display-3 {
  font-size: var(--text-display-3-size, 1.75rem);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--text-display-3-leading, 1.2);
}

.astryx-vue-heading--color-primary {
  color: var(--color-text-primary, #171717);
}

.astryx-vue-heading--color-secondary {
  color: var(--color-text-secondary, #525252);
}

.astryx-vue-heading--color-disabled {
  color: var(--color-text-disabled, #a3a3a3);
}

.astryx-vue-heading--color-placeholder {
  color: var(--color-text-placeholder, #a3a3a3);
}

.astryx-vue-heading--color-accent {
  color: var(--color-accent, #0866ff);
}

.astryx-vue-heading--color-inherit {
  color: inherit;
}

.astryx-vue-heading--justify-center {
  text-align: center;
}

.astryx-vue-heading--justify-end {
  text-align: end;
}

.astryx-vue-heading--truncate-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.astryx-vue-heading--truncate-multi {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}

.astryx-vue-heading--strikethrough {
  text-decoration: line-through;
}

.astryx-vue-heading--wrap-nowrap {
  white-space: nowrap;
}

.astryx-vue-heading--wrap-balance {
  text-wrap: balance;
}

.astryx-vue-heading--wrap-pretty {
  text-wrap: pretty;
}
</style>
