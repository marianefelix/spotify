import { Artist } from '../../../models/artist';
import { ArtistCard } from '../Card';
import * as S from './style';

interface ArtistListProps {
  artists?: Artist[];
}

export const ArtistList = ({ artists }: ArtistListProps) => {
  return (
    <S.Container data-testid="artist-list">
      {artists?.map((artistItem) => (
        <ArtistCard
          key={artistItem.id}
          id={artistItem.id}
          name={artistItem.name}
          avatarURL={artistItem.avatarURL}
          genres={artistItem.genres}
        />
      ))}
    </S.Container>
  );
};
