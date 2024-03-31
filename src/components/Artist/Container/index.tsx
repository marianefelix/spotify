import { Artist } from '../../../models/artist';
import { ArtistCard } from '../Card';
import * as S from './style';

interface ArtistContainerProps {
  artists?: Artist[];
}

export const ArtistContainer = ({ artists }: ArtistContainerProps) => {
  return (
    <S.Container>
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
