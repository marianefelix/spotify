import { Logo } from '../Logo';
import { Item, ItemProps } from './Item';
import * as S from './style';

interface MenuProps {
  items: ItemProps[];
  footerItem: ItemProps;
}

export const Menu = ({ items, footerItem }: MenuProps) => {
  return (
    <S.Nav data-testid="menu">
      <Logo />
      <S.ItemsContainer data-testid="main-items">
        {items.map((item) => (
          <Item id={item.id} key={item.id} title={item.title} icon={item.icon} to={item.to} />
        ))}
      </S.ItemsContainer>
      <Item id={footerItem.id} title={footerItem.title} icon={footerItem.icon} to={footerItem.to} />
    </S.Nav>
  );
};
