import { ButtonHTMLAttributes } from 'react';
import * as S from './style';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
  return (
    <S.Button data-testid="primary-button" {...props}>
      {children}
    </S.Button>
  );
};
