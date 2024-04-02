import { Artist } from '../../../models/artist';
import { Main } from '../../Layout/Main';
import { ArtistCard } from '../Card';

interface ArtistListProps {
  artists?: Artist[];
}

export const ArtistList = ({ artists }: ArtistListProps) => {
  return (
    <Main data-testid="artist-list">
      {artists?.map((artistItem) => (
        <ArtistCard
          key={artistItem.id}
          id={artistItem.id}
          name={artistItem.name}
          avatarURL={artistItem.avatarURL}
          genres={artistItem.genres}
        />
      ))}
    </Main>
  );
};
