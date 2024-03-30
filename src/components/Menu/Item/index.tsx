import { useNavigate } from 'react-router-dom';
import { applicationStore } from '../../../store/application';
import * as S from './style';
import { observer } from 'mobx-react';

export interface ItemProps {
  id: string;
  title: string;
  icon: JSX.Element;
  to: string;
}

export const Item = observer(({ id, title, icon, to }: ItemProps) => {
  const navigate = useNavigate();
  const isSelected = applicationStore.currentPage === to;

  const handleOnClick = () => {
    navigate(to);
  };

  return (
    <S.Item
      id={id}
      data-testid={id}
      className={isSelected ? 'selected' : ''}
      onClick={handleOnClick}
    >
      {icon} {title}
    </S.Item>
  );
});
