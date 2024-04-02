import { ReactNode } from 'react';
import * as S from './style';

interface MainProps {
  id: string;
  children: ReactNode;
}

export const Main = ({ id, children }: MainProps) => {
  return <S.MainContent data-testid={id}>{children}</S.MainContent>;
};
