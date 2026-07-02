export type ThemeMode = 'light' | 'dark' | 'system';

export interface AstryxThemeDefinition {
  name: string;
  tokens?: Record<string, string>;
}

export interface AstryxThemeContext {
  theme: AstryxThemeDefinition;
  mode: ThemeMode;
}
