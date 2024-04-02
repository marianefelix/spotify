import { describe, it, expect } from 'vitest';
import { PrimaryButton } from '../Button';
import { render, screen } from '../../utils/test';

describe('<PrimaryButton />', () => {
  it('Should render the children correctly', () => {
    const children = 'Entrar';
    render(<PrimaryButton>{children}</PrimaryButton>);

    expect(screen.getByTestId('primary-button').textContent).toContain(children);
  });
});
