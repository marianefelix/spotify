import { describe, it, expect } from 'vitest';
import { render, screen } from '../../utils/test';
import { Header } from '../Layout/Header';
import { getByText } from '@testing-library/dom';

describe('<Header />', () => {
  const props = {
    title: 'Título da página',
    description: 'Essa é a descrição da página',
  };

  it('Should show the header title correctly', () => {
    render(<Header {...props} />);

    const headerElement = screen.getByTestId('app-header');
    const titleElement = getByText(headerElement, /^Título/);

    expect(titleElement).toBeInTheDocument();
  });

  it('Should show the header description correctly', () => {
    render(<Header {...props} />);

    const headerElement = screen.getByTestId('app-header');
    const descriptionElement = headerElement.querySelector('p');

    expect(descriptionElement!.textContent).toContain('descrição');
  });
});
