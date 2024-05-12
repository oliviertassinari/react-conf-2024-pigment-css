const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

// To learn more about theming, visit: https://github.com/mui/pigment-css?tab=readme-ov-file#theming
export const rawTheme = {
  typography: {
    fontFamily: ['"IBM Plex Sans"', ...systemFont].join(','),
    fontFamilyTagline: ['"General Sans"', ...systemFont].join(','),
    fontFamilySystem: systemFont.join(','),
  },
  colorSchemes: {
    light: {
      palette: {
        background: '240 10% 3.9%',
        foreground: '0 0% 80%',
        primary: '0 0% 98%',
        border: '240 3.7% 15.9%',
      },
    },
    dark: {
      palette: {
        background: '0 0% 100%',
        foreground: '240 10% 3.9%',
        primary: '240 5.9% 10%',
        border: '240 5.9% 90%',
      },
    },
  },
};
