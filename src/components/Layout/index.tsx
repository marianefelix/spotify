import { ReactNode, useEffect } from 'react';
import { Menu } from '../../components/Menu';
import { ItemProps } from '../../components/Menu/Item';
import { DiscIcon } from '../../components/icons/Disc';
import { DownloadIcon } from '../../components/icons/Download';
import { HomeIcon } from '../../components/icons/Home';
import { PlayIcon } from '../../components/icons/Play';
import { UserIcon } from '../../components/icons/User';

import * as S from './style';
import { applicationStore } from '../../store/application';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    applicationStore.setCurrentPage(path);
  }, [location.pathname]);

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
    {
      id: 'playlist-item',
      title: 'Playlist',
      icon: <PlayIcon id="playlist-icon" />,
      to: '/playlist',
    },
    {
      id: 'user-item',
      title: 'Perfil',
      icon: <UserIcon id="user-icon" />,
      to: '/user',
    },
  ];

  const footerItem = {
    id: 'download-item',
    title: 'Instalar PWA',
    icon: <DownloadIcon id="download-icon" />,
    to: '#',
  };

  return (
    <S.Container>
      <Menu items={mainItems} footerItem={footerItem} />
      <S.AsideBox>{children}</S.AsideBox>
    </S.Container>
  );
};
