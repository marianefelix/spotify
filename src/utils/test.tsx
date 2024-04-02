import { ReactElement } from 'react';
import { RenderOptions, render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
};

export { customRender as render, screen };
