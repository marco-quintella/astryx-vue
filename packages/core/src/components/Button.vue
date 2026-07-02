<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { mergeThemeClassName, themeProps } from '../utils/themeProps';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

const props = withDefaults(
  defineProps<{
    label: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    type?: ButtonType;
    isDisabled?: boolean;
    isLoading?: boolean;
    isIconOnly?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    class?: string;
  }>(),
  {
    variant: 'secondary',
    size: 'md',
    type: 'button',
    isDisabled: false,
    isLoading: false,
    isIconOnly: false,
  },
);

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const attrs = useAttrs();

const rootProps = computed(() => {
  const themed = mergeThemeClassName(
    themeProps('button', { variant: props.variant, size: props.size }),
    props.class,
  );

  const { className, ...dataAttrs } = themed;
  const disabled = props.isDisabled || props.isLoading;

  return {
    class: ['astryx-vue-button', className],
    ...dataAttrs,
    ...attrs,
    'aria-busy': props.isLoading || undefined,
    'aria-disabled': props.isDisabled && !props.href ? true : undefined,
    'aria-label': props.isIconOnly ? props.label : undefined,
    disabled: props.href ? undefined : disabled,
  };
});

function onClick(event: MouseEvent) {
  if (props.isDisabled || props.isLoading) {
    event.preventDefault();
    return;
  }
  emit('click', event);
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    v-bind="rootProps"
    :href="href"
    :target="target"
    :rel="rel"
    :type="href ? undefined : type"
    @click="onClick"
  >
    <span v-if="isLoading" class="astryx-vue-button__spinner" aria-hidden="true" />
    <span class="astryx-vue-button__content" :aria-hidden="isLoading || undefined">
      <span v-if="$slots.icon" class="astryx-vue-button__icon">
        <slot name="icon" />
      </span>
      <span v-if="!isIconOnly" class="astryx-vue-button__label">
        <slot>{{ label }}</slot>
      </span>
      <span v-if="!isIconOnly && $slots.endContent" class="astryx-vue-button__end">
        <slot name="endContent" />
      </span>
    </span>
    <span class="astryx-vue-button__live" role="status" aria-live="polite">
      {{ isLoading ? 'Loading' : '' }}
    </span>
  </component>
</template>

<style scoped>
.astryx-vue-button {
  align-items: center;
  border: 1px solid transparent;
  border-radius: var(--radius-control, 0.5rem);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-family-body, system-ui, sans-serif);
  font-size: var(--font-size-base, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  gap: 0.375rem;
  justify-content: center;
  line-height: 1.2;
  min-height: 2.25rem;
  padding: 0.5rem 0.875rem;
  text-decoration: none;
  transition:
    background-color 120ms ease,
    color 120ms ease,
    border-color 120ms ease,
    transform 80ms ease;
}

.astryx-vue-button[data-size='sm'] {
  font-size: var(--font-size-sm, 0.75rem);
  min-height: 1.875rem;
  padding: 0.375rem 0.625rem;
}

.astryx-vue-button[data-size='lg'] {
  font-size: var(--font-size-lg, 1.0625rem);
  min-height: 2.75rem;
  padding: 0.625rem 1rem;
}

.astryx-vue-button.primary {
  background: var(--color-accent, #0866ff);
  color: var(--color-text-on-accent, #fff);
}

.astryx-vue-button.secondary {
  background: var(--color-background-surface, #f5f5f5);
  border-color: var(--color-border-subtle, #d4d4d4);
  color: var(--color-text-primary, #171717);
}

.astryx-vue-button.ghost {
  background: transparent;
  color: var(--color-text-primary, #171717);
}

.astryx-vue-button.destructive {
  background: var(--color-error-muted, #ffe5e5);
  color: var(--color-error, #c62828);
}

.astryx-vue-button:hover:not(:disabled):not([aria-disabled='true']) {
  filter: brightness(0.97);
}

.astryx-vue-button:active:not(:disabled):not([aria-disabled='true']) {
  transform: scale(0.98);
}

.astryx-vue-button:disabled,
.astryx-vue-button[aria-disabled='true'] {
  cursor: not-allowed;
  opacity: var(--button-disabled-opacity, 0.5);
}

.astryx-vue-button__content {
  align-items: center;
  display: inline-flex;
  gap: 0.375rem;
}

.astryx-vue-button__icon,
.astryx-vue-button__end {
  display: inline-flex;
}

.astryx-vue-button__live {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.astryx-vue-button__spinner {
  animation: astryx-vue-spin 0.8s linear infinite;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  height: 0.875rem;
  width: 0.875rem;
}

@keyframes astryx-vue-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
