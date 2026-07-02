<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { mergeThemeClassName, themeProps } from '../utils/themeProps';
import { toCssSize, type SizeValue } from '../utils/sizeValue';

export type CardVariant =
  | 'default'
  | 'transparent'
  | 'muted'
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';

export type SpacingStep = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10;

const PADDING_BY_STEP: Record<SpacingStep, string> = {
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
};

const props = withDefaults(
  defineProps<{
    width?: SizeValue;
    height?: SizeValue;
    maxWidth?: SizeValue;
    minHeight?: SizeValue;
    padding?: SpacingStep;
    variant?: CardVariant;
    class?: string;
  }>(),
  {
    variant: 'default',
    padding: 4,
  },
);

const attrs = useAttrs();

const hasFixedHeight = computed(
  () => props.height != null && props.height !== 'auto',
);

const rootStyle = computed(() => ({
  width: toCssSize(props.width),
  height: toCssSize(props.height),
  maxWidth: toCssSize(props.maxWidth),
  minHeight: toCssSize(props.minHeight),
  padding: PADDING_BY_STEP[props.padding],
}));

const rootProps = computed(() => {
  const themed = mergeThemeClassName(
    themeProps('card', { variant: props.variant }),
    props.class,
  );
  const { className, ...dataAttrs } = themed;

  return {
    class: [
      'astryx-vue-card',
      className,
      { 'astryx-vue-card--scrollable': hasFixedHeight.value },
      { 'astryx-vue-card--bordered': props.variant === 'default' },
    ],
    style: rootStyle.value,
    ...dataAttrs,
    ...attrs,
  };
});
</script>

<template>
  <div v-bind="rootProps">
    <slot />
  </div>
</template>

<style scoped>
.astryx-vue-card {
  border: 1px solid transparent;
  border-radius: var(--radius-container, 0.75rem);
  overflow: clip;
}

.astryx-vue-card--bordered {
  border-color: var(--color-border-emphasized, #d4d4d4);
}

.astryx-vue-card--scrollable {
  overflow: auto;
}

.astryx-vue-card.default {
  background: var(--color-background-card, #fff);
}

.astryx-vue-card.transparent {
  background: transparent;
}

.astryx-vue-card.muted {
  background: var(--color-background-muted, #f5f5f5);
}

.astryx-vue-card.blue {
  background: var(--color-background-blue, #e8f0fe);
}

.astryx-vue-card.cyan {
  background: var(--color-background-cyan, #e0f7fa);
}

.astryx-vue-card.gray {
  background: var(--color-background-gray, #f5f5f5);
}

.astryx-vue-card.green {
  background: var(--color-background-green, #e8f5e9);
}

.astryx-vue-card.orange {
  background: var(--color-background-orange, #fff3e0);
}

.astryx-vue-card.pink {
  background: var(--color-background-pink, #fce4ec);
}

.astryx-vue-card.purple {
  background: var(--color-background-purple, #f3e5f5);
}

.astryx-vue-card.red {
  background: var(--color-background-red, #ffebee);
}

.astryx-vue-card.teal {
  background: var(--color-background-teal, #e0f2f1);
}

.astryx-vue-card.yellow {
  background: var(--color-background-yellow, #fffde7);
}
</style>
