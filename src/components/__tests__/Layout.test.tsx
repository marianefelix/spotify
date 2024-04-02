import { describe, it, expect } from 'vitest';
import { render, screen } from '../../utils/test';
import { Layout } from '../Layout';
import { BrowserRouter } from 'react-router-dom';

describe('<Layout />', () => {
  it('Should render the children correctly', () => {
    const children = <main data-testid="children">Conteúdo da página</main>;

    render(<Layout>{children}</Layout>, { wrapper: BrowserRouter });

    const childElement = screen.getByTestId('children');

    expect(childElement.textContent).toContain('Conteúdo');
  });
});
