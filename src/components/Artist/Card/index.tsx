import { Artist } from '../../../models/artist';
import * as S from './style';

type ArtistCardProps = Artist;

export const ArtistCard = ({ id, name, avatarURL, genres }: ArtistCardProps) => {
  return (
    <S.Container id={id}>
      <img src={avatarURL} alt={`Imagem do artista ${name}`} />
      <S.TextBox>
        <S.ArtistName>{name}</S.ArtistName>
        <S.GenreListText>{genres.join(', ')}</S.GenreListText>
      </S.TextBox>
    </S.Container>
  );
};
