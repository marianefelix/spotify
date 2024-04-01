import { ArtistAlbum } from '../../../../models/artistAlbum';
import * as S from './style';

type AlbumProps = ArtistAlbum;

export const Album = ({ id, name, imageURL, releaseDate }: AlbumProps) => {
  return (
    <S.Container>
      <img data-testid="artist-card-image" src={imageURL} alt={`Capa do álbum`} />
      <S.TextBox>
        <S.Title>{name}</S.Title>
        <S.DateText>{releaseDate}</S.DateText>
      </S.TextBox>
    </S.Container>
  );
};
