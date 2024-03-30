import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const customRender = (ui: ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

export { customRender as render, screen };
