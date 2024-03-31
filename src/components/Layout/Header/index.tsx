import * as S from './style';
interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <S.Header id="app-header" data-testid="app-header">
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Header>
  );
};
