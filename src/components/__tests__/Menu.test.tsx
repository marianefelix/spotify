import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test';
import { HomeIcon } from '../icons/Home';
import { ItemProps } from '../Menu/Item';
import { BrowserRouter } from 'react-router-dom';
import { DiscIcon } from '../icons/Disc';
import { DownloadIcon } from '../icons/Download';
import { Menu } from '../Menu';

const mainItems: ItemProps[] = [
  {
    id: 'home-item',
    title: 'Home',
    icon: <HomeIcon id="home-icon" />,
    to: '/home',
  },
  {
    id: 'artists-item',
    title: 'Artistas',
    icon: <DiscIcon id="disc-icon" />,
    to: '/artists',
  },
];

const footerItem = {
  id: 'download-item',
  title: 'Instalar PWA',
  icon: <DownloadIcon id="download-icon" />,
  to: '#',
};

beforeEach(() => {
  render(<Menu items={mainItems} footerItem={footerItem} />, { wrapper: BrowserRouter });
});

describe('<Menu />', () => {
  it('Should render the spotify logo', () => {
    const logoElement = screen.getByTestId('logo');

    expect(logoElement).toBeInTheDocument();
  });

  it('Should render a list of 2 main elements', () => {
    const mainItemsElement = screen.getByTestId('main-items');

    expect(mainItemsElement.children.length).toBe(2);
  });

  it('Should render footer item correctly', () => {
    const menuElement = screen.getByTestId('menu');
    const footerElement = screen.getByTestId(footerItem.id);

    expect(menuElement).toContain(footerElement);
  });
});
