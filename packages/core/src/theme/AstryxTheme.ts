import {
  computed,
  defineComponent,
  h,
  inject,
  onMounted,
  onUnmounted,
  provide,
  type PropType,
  type VNode,
} from 'vue';
import type { AstryxThemeContext, AstryxThemeDefinition, ThemeMode } from './types';

const THEME_CONTEXT_KEY = Symbol('astryx-theme');

export function useAstryxTheme(): AstryxThemeContext {
  const context = inject<AstryxThemeContext | null>(THEME_CONTEXT_KEY, null);
  if (!context) {
    throw new Error('useAstryxTheme must be used within <AstryxTheme>');
  }
  return context;
}

function applyRootThemeAttributes(themeName: string, mode: ThemeMode): void {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.setAttribute('data-astryx-theme', themeName);
  if (mode === 'system') {
    document.documentElement.removeAttribute('data-theme');
    return;
  }
  document.documentElement.setAttribute('data-theme', mode);
}

function clearRootThemeAttributes(): void {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.removeAttribute('data-astryx-theme');
  document.documentElement.removeAttribute('data-theme');
}

export const AstryxTheme = defineComponent({
  name: 'AstryxTheme',
  props: {
    theme: {
      type: Object as PropType<AstryxThemeDefinition>,
      required: true,
    },
    mode: {
      type: String as PropType<ThemeMode>,
      default: 'system',
    },
    syncRoot: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const context = computed<AstryxThemeContext>(() => ({
      theme: props.theme,
      mode: props.mode,
    }));

    provide(THEME_CONTEXT_KEY, context.value);

    onMounted(() => {
      if (props.syncRoot) {
        applyRootThemeAttributes(props.theme.name, props.mode);
      }
    });

    onUnmounted(() => {
      if (props.syncRoot) {
        clearRootThemeAttributes();
      }
    });

    const tokenStyle = computed(() => {
      if (!props.theme.tokens) {
        return undefined;
      }
      return props.theme.tokens;
    });

    return (): VNode =>
      h(
        'div',
        {
          class: 'astryx-theme-root',
          'data-astryx-theme': props.theme.name,
          'data-theme': props.mode === 'system' ? undefined : props.mode,
          style: tokenStyle.value,
        },
        slots.default?.(),
      );
  },
});
