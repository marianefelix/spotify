import * as S from './style';

interface GenericCardProps {
  id: string;
  imageURL: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const GenericCard = ({ id, imageURL, imageAlt, title, description }: GenericCardProps) => {
  return (
    <S.Container data-testid={id}>
      <img src={imageURL} alt={imageAlt} />
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextBox>
    </S.Container>
  );
};
