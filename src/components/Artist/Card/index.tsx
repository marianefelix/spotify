import { Artist } from '../../../models/artist';
import * as S from './style';

type ArtistCardProps = Artist;

export const ArtistCard = ({ id, name, avatarURL, genres }: ArtistCardProps) => {
  return (
    <S.Container id={id}>
      <img data-testid="artist-card-image" src={avatarURL} alt={`Imagem do artista ${name}`} />
      <S.TextBox>
        <S.ArtistName data-testid="artist-card-name">{name}</S.ArtistName>
        <S.GenreListText data-testid="artist-card-genres">{genres.join(', ')}</S.GenreListText>
      </S.TextBox>
    </S.Container>
  );
};
