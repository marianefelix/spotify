import { useNavigate } from 'react-router-dom';
import { Artist } from '../../../models/artist';
import { ArrowRightIcon } from '../../icons/Arrow/Right';
import * as S from './style';

type ArtistCardProps = Artist;

export const ArtistCard = ({ id, name, avatarURL, genres }: ArtistCardProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/artists/${id}`);
  };

  return (
    <S.Container id={id} role="link" onClick={handleOnClick}>
      <S.ArtistBox>
        <img data-testid="artist-card-image" src={avatarURL} alt={`Imagem do artista ${name}`} />
        <S.TextBox>
          <S.ArtistName data-testid="artist-card-name">{name}</S.ArtistName>
          <S.GenreListText data-testid="artist-card-genres">{genres.join(', ')}</S.GenreListText>
        </S.TextBox>
      </S.ArtistBox>
      <S.ViewLink>
        <ArrowRightIcon id="arrow-right-icon" />
      </S.ViewLink>
    </S.Container>
  );
};
