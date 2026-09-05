<script setup lang="ts">
import { computed } from 'vue';
import { css } from '../../styled-system/css';

type ButtonSize = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    size?: ButtonSize;
    label?: string;
  }>(),
  {
    size: 'md',
    label: 'Loading',
  },
);

const dim = computed(() => {
  switch (props.size) {
    case 'sm':
      return '14px';
    case 'lg':
      return '20px';
    default:
      return '16px';
  }
});

const spinnerClass = computed(() =>
  css({
    width: dim.value,
    height: dim.value,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'currentColor',
    borderTopColor: 'transparent',
    borderRadius: 'full',
    animation: 'spin 0.8s linear infinite',
  }),
);
</script>

<template>
  <span :class="spinnerClass" role="status" :aria-label="label" />
</template>
