import { createTheme, type PaletteOptions } from '@mui/material/styles';

/**
 * MUI theme: palette is read from variables.css (single source of truth).
 * Typography and spacing stay here. Component styles live in mui-overrides.css.
 * Grille page : `CV_GRID_SPACING` dans cvLayout.ts (unité spacing = 8px).
 */
function getCssVar(name: string): string {
  if (typeof document === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function getPaletteFromCss(): PaletteOptions {
  return {
    mode: 'light',
    background: {
      default: getCssVar('--color-background-default'),
      paper: getCssVar('--color-background-paper'),
    },
    primary: {
      main: getCssVar('--color-primary'),
      light: getCssVar('--color-primary-light'),
      dark: getCssVar('--color-primary-dark'),
      contrastText: getCssVar('--color-primary-contrast'),
    },
    secondary: {
      main: getCssVar('--color-secondary'),
      light: getCssVar('--color-secondary-light'),
      dark: getCssVar('--color-secondary-dark'),
      contrastText: getCssVar('--color-secondary-contrast'),
    },
    info: {
      main: getCssVar('--color-tertiary'),
      light: getCssVar('--color-tertiary-light'),
      dark: getCssVar('--color-tertiary-dark'),
      contrastText: getCssVar('--color-tertiary-contrast'),
    },
    text: {
      primary: getCssVar('--color-text-primary'),
      secondary: getCssVar('--color-text-secondary'),
      disabled: getCssVar('--color-text-disabled'),
    },
    divider: getCssVar('--color-divider'),
  };
}

const typography = {
  fontFamily: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'].join(','),
  h1: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, letterSpacing: '-0.02em' },
  h2: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, letterSpacing: '-0.02em' },
  h3: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 600, letterSpacing: '-0.01em' },
  h4: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 600, letterSpacing: '-0.01em', fontSize: '1.25rem' },
  h5: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 600 },
  h6: { fontFamily: '"JetBrains Mono", monospace', fontWeight: 600, fontSize: '1rem' },
  body1: { fontFamily: 'Inter, sans-serif', lineHeight: 1.65 },
  body2: { fontFamily: 'Inter, sans-serif', lineHeight: 1.55 },
};

export function createCvTheme() {
  return createTheme({
    palette: getPaletteFromCss(),
    typography,
    spacing: 8,
  });
}
