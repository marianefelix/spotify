import { DefaultTheme } from 'styled-components';

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xxl: '1400px',
};

export const theme: DefaultTheme = {
  color: {
    primary: '#57B660',
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      '300': '#D3DADD',
      '500': '#949EA2',
      '800': '#181414',
      '900': '#090707',
    },
  },
  font: {
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
    },
    family: {
      rubik: 'Rubik',
      dm_sans: 'DM Sans',
    },
    weight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  device: {
    mobile: (mediaQueryType = 'max-width') =>
      `@media screen and (${mediaQueryType}: ${breakpoints.sm})`,
    tablet: (mediaQueryType = 'max-width') =>
      `@media screen and (${mediaQueryType}: ${breakpoints.md})`,
    desktop: (mediaQueryType = 'max-width') =>
      `@media screen and (${mediaQueryType}: ${breakpoints.lg})`,
    ultrawide: (mediaQueryType = 'max-width') =>
      `@media screen and (${mediaQueryType}: ${breakpoints.xxl})`,
  },
};
