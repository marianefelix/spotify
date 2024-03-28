import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      white: string;
      black: string;
      gray: {
        '300': string;
        '500': string;
        '800': string;
        '900': string;
      };
    };
    font: {
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
      };
      family: {
        rubik: string;
        dm_sans: string;
      };
      weight: {
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
      };
    };
    device: {
      mobile: (mediaQueryType?: string) => string;
      tablet: (mediaQueryType?: string) => string;
      desktop: (mediaQueryType?: string) => string;
      ultrawide: (mediaQueryType?: string) => string;
    };
  }
}
