import { useCallback, useEffect, useState } from 'react';
import { Layout } from '../../../components/Layout';
import { ArrowLeftIcon } from '../../../components/icons/Arrow/Left';
import * as S from './style';
import useFetch from '../../../hooks/fetch';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { userStore } from '../../../store/user';
import { ArtistAlbum } from '../../../models/artistAlbum';
import { Artist } from '../../../models/artist';
import { formatDate } from '../../../utils/formatDate';
import { GenericCard } from '../../../components/GenericCard';

interface ArtistAlbumsResponse {
  items: {
    id: string;
    images: {
      url: string;
    }[];
    name: string;
    release_date: string;
  }[];
}

export const ArtistDetails = observer(() => {
  const artist = useParams();
  const { fetchData } = useFetch();
  const navigate = useNavigate();
  const [artistData, setArtistData] = useState<Artist | null>(null);

  const getParsedAlbumsData = useCallback((data: ArtistAlbumsResponse) => {
    const albums = [] as ArtistAlbum[];

    data.items.forEach((item) => {
      albums.push({
        id: item.id,
        name: item.name,
        imageURL: item.images[0].url,
        releaseDate: formatDate(item.release_date),
      });
    });

    return albums;
  }, []);

  useEffect(() => {
    const handleFetchArtistAlbums = async () => {
      const { response } = await fetchData<ArtistAlbumsResponse>(`/artists/${artist.id}/albums`);

      if (response !== null) {
        userStore.setArtistAlbums(getParsedAlbumsData(response.data));
      }
    };

    handleFetchArtistAlbums();
  }, [artist, fetchData, getParsedAlbumsData]);

  useEffect(() => {
    const artistData = userStore
      .getAllArtists()
      .filter((artistItem) => artistItem.id === artist.id)[0];

    setArtistData(artistData);
  }, [artist]);

  const handleBackButtonOnClik = () => {
    navigate('/artists');
  };

  return (
    <Layout>
      <S.Header>
        <S.Container>
          <S.Link onClick={handleBackButtonOnClik}>
            <ArrowLeftIcon id="arrow-left-icon" />
          </S.Link>
          <S.Title>{artistData?.name}</S.Title>
        </S.Container>
        <img
          data-testid="artist-card-image"
          src={artistData?.avatarURL}
          alt={`Imagem do artista ${artistData?.name}`}
        />
      </S.Header>
      <S.MainContent>
        {userStore.artistAlbums.map((album) => (
          <GenericCard
            key={album.id}
            id={album.id}
            title={album.name}
            imageURL={album.imageURL}
            imageAlt="Capa do álbum"
            description={album.releaseDate}
          />
        ))}
      </S.MainContent>
    </Layout>
  );
});
