export type ClassValue = string | number | undefined | null;
export type ClassProps = Record<string, ClassValue>;
export type ThemeDataAttributes = Record<`data-${string}`, string | undefined>;
export type ThemeProps = { className: string } & ThemeDataAttributes;

const CLASS_PREFIX = 'astryx';

function stableClassName(component: string): string {
  return `${CLASS_PREFIX}-${component}`;
}

function toDataAttributeName(prop: string): `data-${string}` {
  return `data-${prop.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}` as `data-${string}`;
}

function classTokenForPropValue(prop: string, value: string): string {
  return /^\d/.test(value) ? `${prop}-${value}` : value;
}

function buildClassName(component: string, props?: ClassProps): string {
  const classes = [stableClassName(component)];

  if (props) {
    for (const [prop, value] of Object.entries(props)) {
      if (value == null) {
        continue;
      }
      classes.push(classTokenForPropValue(prop, String(value)));
    }
  }

  return classes.join(' ');
}

/** Reflect Astryx visual props as `data-*` attributes. */
export function themeDataAttributes(props?: ClassProps): ThemeDataAttributes {
  const attrs: ThemeDataAttributes = {};

  if (props) {
    for (const [prop, value] of Object.entries(props)) {
      if (value == null) {
        continue;
      }
      attrs[toDataAttributeName(prop)] = String(value);
    }
  }

  return attrs;
}

/**
 * Build the props object components spread onto the root element.
 * Mirrors `@astryxdesign/core` `themeProps()` for API parity.
 */
export function themeProps(component: string, props?: ClassProps): ThemeProps {
  return {
    className: buildClassName(component, props),
    ...themeDataAttributes(props),
  };
}

/** Merge an external class string into Astryx theme props. */
export function mergeThemeClassName(
  theme: ThemeProps,
  className?: string,
): ThemeProps {
  if (!className) {
    return theme;
  }

  return {
    ...theme,
    className: `${theme.className} ${className}`.trim(),
  };
}
