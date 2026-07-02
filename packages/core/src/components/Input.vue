<script setup lang="ts">
import { computed, useAttrs, useId } from 'vue';
import { mergeThemeClassName, themeProps } from '../utils/themeProps';

export type InputType = 'text' | 'password' | 'email';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputStatusType = 'error' | 'warning' | 'success';

export interface InputStatus {
  type: InputStatusType;
  message?: string;
}

const props = withDefaults(
  defineProps<{
    label: string;
    value: string;
    type?: InputType;
    size?: InputSize;
    isLabelHidden?: boolean;
    description?: string;
    isOptional?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    placeholder?: string;
    labelTooltip?: string;
    status?: InputStatus;
    hasClear?: boolean;
    hasAutoFocus?: boolean;
    htmlName?: string;
    class?: string;
  }>(),
  {
    type: 'text',
    size: 'md',
    isLabelHidden: false,
    isOptional: false,
    isRequired: false,
    isDisabled: false,
    isLoading: false,
    hasClear: false,
    hasAutoFocus: false,
  },
);

const emit = defineEmits<{
  'update:value': [value: string];
  change: [value: string, event: Event];
}>();

const attrs = useAttrs();
const fieldId = useId();
const descriptionId = `${fieldId}-description`;
const statusId = `${fieldId}-status`;

const showClear = computed(
  () => props.hasClear && props.value.length > 0 && !props.isDisabled && !props.isLoading,
);

const statusType = computed(() => props.status?.type);

const inputProps = computed(() => {
  const themed = mergeThemeClassName(
    themeProps('text-input', {
      size: props.size,
      ...(statusType.value ? { status: statusType.value } : {}),
    }),
    props.class,
  );
  const { className, ...dataAttrs } = themed;

  return {
    class: ['astryx-vue-input__control', className],
    ...dataAttrs,
    ...attrs,
  };
});

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:value', target.value);
  emit('change', target.value, event);
}

function clearValue() {
  emit('update:value', '');
}
</script>

<template>
  <div
    class="astryx-vue-input"
    :class="[
      `astryx-vue-input--${size}`,
      statusType ? `astryx-vue-input--status-${statusType}` : null,
      { 'astryx-vue-input--disabled': isDisabled, 'astryx-vue-input--loading': isLoading },
    ]"
  >
    <label
      :for="fieldId"
      class="astryx-vue-input__label"
      :class="{ 'astryx-vue-input__label--hidden': isLabelHidden }"
    >
      <span>{{ label }}</span>
      <span v-if="isOptional" class="astryx-vue-input__meta">Optional</span>
      <span v-else-if="isRequired" class="astryx-vue-input__meta">Required</span>
      <span v-if="labelTooltip" class="astryx-vue-input__tooltip" :title="labelTooltip">i</span>
    </label>

    <p v-if="description" :id="descriptionId" class="astryx-vue-input__description">
      {{ description }}
    </p>

    <div class="astryx-vue-input__wrapper">
      <span v-if="$slots.startIcon" class="astryx-vue-input__start-icon">
        <slot name="startIcon" />
      </span>

      <input
        :id="fieldId"
        v-bind="inputProps"
        :type="type"
        :name="htmlName"
        :value="value"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :required="isRequired"
        :autofocus="hasAutoFocus || undefined"
        :aria-invalid="status?.type === 'error' ? true : undefined"
        :aria-required="isRequired || undefined"
        :aria-busy="isLoading || undefined"
        :aria-describedby="
          [description ? descriptionId : null, status?.message ? statusId : null]
            .filter(Boolean)
            .join(' ') || undefined
        "
        @input="onInput"
      />

      <button
        v-if="showClear"
        type="button"
        class="astryx-vue-input__clear"
        aria-label="Clear input"
        @click="clearValue"
      >
        ×
      </button>

      <span v-if="isLoading" class="astryx-vue-input__spinner" aria-hidden="true" />

      <span
        v-else-if="statusType"
        class="astryx-vue-input__status-icon"
        :class="`astryx-vue-input__status-icon--${statusType}`"
        aria-hidden="true"
      />
    </div>

    <p v-if="status?.message" :id="statusId" class="astryx-vue-input__status-message">
      {{ status.message }}
    </p>
  </div>
</template>

<style scoped>
.astryx-vue-input {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
}

.astryx-vue-input__label {
  align-items: center;
  color: var(--color-text-primary, #171717);
  display: inline-flex;
  font-size: var(--text-label-size, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  gap: 0.375rem;
}

.astryx-vue-input__label--hidden {
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

.astryx-vue-input__meta {
  color: var(--color-text-secondary, #525252);
  font-size: var(--text-supporting-size, 0.75rem);
  font-weight: var(--font-weight-normal, 400);
}

.astryx-vue-input__tooltip {
  border: 1px solid var(--color-border-subtle, #d4d4d4);
  border-radius: 50%;
  color: var(--color-text-secondary, #525252);
  cursor: help;
  display: inline-flex;
  font-size: 0.625rem;
  height: 1rem;
  justify-content: center;
  width: 1rem;
}

.astryx-vue-input__description {
  color: var(--color-text-secondary, #525252);
  font-size: var(--text-supporting-size, 0.75rem);
  margin: 0;
}

.astryx-vue-input__wrapper {
  align-items: center;
  background: var(--color-background-surface, #fff);
  border: 1px solid var(--color-border-subtle, #d4d4d4);
  border-radius: var(--radius-control, 0.5rem);
  display: flex;
  gap: 0.5rem;
  padding-inline: 0.75rem;
  transition:
    border-color 120ms ease,
    box-shadow 120ms ease;
}

.astryx-vue-input--sm .astryx-vue-input__wrapper {
  min-height: var(--size-element-sm, 2rem);
}

.astryx-vue-input--md .astryx-vue-input__wrapper {
  min-height: var(--size-element-md, 2.25rem);
}

.astryx-vue-input--lg .astryx-vue-input__wrapper {
  min-height: var(--size-element-lg, 2.75rem);
}

.astryx-vue-input__wrapper:focus-within {
  border-color: var(--color-accent, #0866ff);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent, #0866ff) 20%, transparent);
}

.astryx-vue-input--status-error .astryx-vue-input__wrapper {
  border-color: var(--color-error, #c62828);
}

.astryx-vue-input--status-warning .astryx-vue-input__wrapper {
  border-color: var(--color-warning, #e67700);
}

.astryx-vue-input--status-success .astryx-vue-input__wrapper {
  border-color: var(--color-success, #0d7d3b);
}

.astryx-vue-input--disabled .astryx-vue-input__wrapper {
  cursor: not-allowed;
  opacity: 0.6;
}

.astryx-vue-input__control {
  background: transparent;
  border: 0;
  color: var(--color-text-primary, #171717);
  flex: 1;
  font-family: var(--font-family-body, system-ui, sans-serif);
  font-size: var(--text-body-size, 0.875rem);
  line-height: var(--text-body-leading, 1.5);
  min-width: 0;
  outline: none;
  padding: 0;
}

.astryx-vue-input__control::placeholder {
  color: var(--color-text-secondary, #525252);
}

.astryx-vue-input__control:disabled {
  cursor: not-allowed;
}

.astryx-vue-input__start-icon,
.astryx-vue-input__clear,
.astryx-vue-input__status-icon {
  align-items: center;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
}

.astryx-vue-input__clear {
  background: transparent;
  border: 0;
  color: var(--color-text-secondary, #525252);
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1;
  padding: 0;
}

.astryx-vue-input__spinner {
  animation: astryx-vue-input-spin 0.8s linear infinite;
  border: 2px solid var(--color-text-secondary, #525252);
  border-radius: 50%;
  border-top-color: transparent;
  height: 0.875rem;
  width: 0.875rem;
}

.astryx-vue-input__status-icon {
  border-radius: 50%;
  height: 0.625rem;
  width: 0.625rem;
}

.astryx-vue-input__status-icon--error {
  background: var(--color-error, #c62828);
}

.astryx-vue-input__status-icon--warning {
  background: var(--color-warning, #e67700);
}

.astryx-vue-input__status-icon--success {
  background: var(--color-success, #0d7d3b);
}

.astryx-vue-input__status-message {
  color: var(--color-text-secondary, #525252);
  font-size: var(--text-supporting-size, 0.75rem);
  margin: 0;
}

.astryx-vue-input--status-error .astryx-vue-input__status-message {
  color: var(--color-error, #c62828);
}

@keyframes astryx-vue-input-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
