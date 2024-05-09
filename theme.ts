import { extendTheme } from '@pigment-css/vite-plugin';
import { rawTheme } from './rawTheme';

// To learn more about theming, visit https://github.com/mui/material-ui/blob/master/packages/zero-runtime/README.md#theming
export const theme = extendTheme({
  ...rawTheme,
  getSelector: (colorScheme) => `.theme-${colorScheme}`,
});
