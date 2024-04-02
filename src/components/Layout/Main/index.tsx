import { ReactNode } from 'react';
import * as S from './style';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <S.MainContent>{children}</S.MainContent>;
};
