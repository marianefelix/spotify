import parse from 'html-react-parser';
import { MusicIcon } from '../icons/Music';
import * as S from './style';

interface GenericCardProps {
  id: string;
  imageURL: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const GenericCard = ({ id, imageURL, imageAlt, title, description }: GenericCardProps) => {
  const parsedDescription = parse(description);

  return (
    <S.Container data-testid={id}>
      {imageURL === '' ? (
        <S.DefaultImage data-testid="default-image-box">
          <MusicIcon />
        </S.DefaultImage>
      ) : (
        <img src={imageURL} alt={imageAlt} />
      )}
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.Description>{parsedDescription}</S.Description>
      </S.TextBox>
    </S.Container>
  );
};
