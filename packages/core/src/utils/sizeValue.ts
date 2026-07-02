export type SizeValue = number | string;

/** Convert numeric size values to pixel strings for inline styles. */
export function toCssSize(value?: SizeValue): string | undefined {
  if (value == null) {
    return undefined;
  }
  return typeof value === 'number' ? `${value}px` : value;
}
