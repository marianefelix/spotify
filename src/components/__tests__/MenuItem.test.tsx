import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test';
import { HomeIcon } from '../icons/Home';
import { Item as MenuItem } from '../Menu/Item';
import { BrowserRouter } from 'react-router-dom';

const props = {
  id: 'home-item',
  title: 'Home',
  icon: <HomeIcon id="home-icon" />,
  to: '/home',
};

beforeEach(() => {
  render(<MenuItem {...props} />, { wrapper: BrowserRouter });
});

describe('<Item />', () => {
  it('Should render the right title', () => {
    const menuItemElement = screen.getByTestId(props.id);

    expect(menuItemElement.textContent).toContain(props.title);
  });

  it('Should render the right icon', () => {
    const iconElement = screen.getByTestId('home-icon');

    expect(iconElement).toBeInTheDocument();
  });
});
