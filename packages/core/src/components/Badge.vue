<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { mergeThemeClassName, themeProps } from '../utils/themeProps';

export type BadgeVariant =
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';

const props = withDefaults(
  defineProps<{
    label: string;
    variant?: BadgeVariant;
    class?: string;
  }>(),
  {
    variant: 'neutral',
  },
);

const attrs = useAttrs();

const rootProps = computed(() => {
  const themed = mergeThemeClassName(
    themeProps('badge', { variant: props.variant }),
    props.class,
  );
  const { className, ...dataAttrs } = themed;

  return {
    class: ['astryx-vue-badge', className],
    ...dataAttrs,
    ...attrs,
  };
});
</script>

<template>
  <span v-bind="rootProps">
    <span v-if="$slots.icon" class="astryx-vue-badge__icon">
      <slot name="icon" />
    </span>
    <slot>{{ label }}</slot>
  </span>
</template>

<style scoped>
.astryx-vue-badge {
  align-items: center;
  border-radius: var(--radius-full, 9999px);
  display: inline-flex;
  font-family: inherit;
  font-size: var(--text-supporting-size, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
  gap: var(--spacing-1, 0.25rem);
  height: var(--spacing-5, 1.25rem);
  justify-content: center;
  line-height: var(--text-supporting-leading, 1.2);
  padding-inline: var(--spacing-2, 0.5rem);
  white-space: nowrap;
}

.astryx-vue-badge.neutral {
  background: var(--color-neutral, #e5e5e5);
  color: var(--color-text-primary, #171717);
}

.astryx-vue-badge.info {
  background: var(--color-accent, #0866ff);
  color: var(--color-on-accent, #fff);
}

.astryx-vue-badge.success {
  background: var(--color-success, #0d7d3b);
  color: var(--color-on-success, #fff);
}

.astryx-vue-badge.warning {
  background: var(--color-warning, #e67700);
  color: var(--color-on-warning, #fff);
}

.astryx-vue-badge.error {
  background: var(--color-error, #c62828);
  color: var(--color-on-error, #fff);
}

.astryx-vue-badge.blue {
  background: var(--color-background-blue, #e8f0fe);
  color: var(--color-text-blue, #0866ff);
}

.astryx-vue-badge.cyan {
  background: var(--color-background-cyan, #e0f7fa);
  color: var(--color-text-cyan, #00838f);
}

.astryx-vue-badge.green {
  background: var(--color-background-green, #e8f5e9);
  color: var(--color-text-green, #2e7d32);
}

.astryx-vue-badge.orange {
  background: var(--color-background-orange, #fff3e0);
  color: var(--color-text-orange, #ef6c00);
}

.astryx-vue-badge.pink {
  background: var(--color-background-pink, #fce4ec);
  color: var(--color-text-pink, #c2185b);
}

.astryx-vue-badge.purple {
  background: var(--color-background-purple, #f3e5f5);
  color: var(--color-text-purple, #7b1fa2);
}

.astryx-vue-badge.red {
  background: var(--color-background-red, #ffebee);
  color: var(--color-text-red, #c62828);
}

.astryx-vue-badge.teal {
  background: var(--color-background-teal, #e0f2f1);
  color: var(--color-text-teal, #00695c);
}

.astryx-vue-badge.yellow {
  background: var(--color-background-yellow, #fffde7);
  color: var(--color-text-yellow, #f9a825);
}

.astryx-vue-badge__icon {
  display: inline-flex;
}
</style>
