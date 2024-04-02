import { ReactNode } from 'react';
import * as S from './style';
interface HeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export const Header = ({ title, description, children }: HeaderProps) => {
  return (
    <S.Header id="app-header" data-testid="app-header">
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextBox>
      {children}
    </S.Header>
  );
};
