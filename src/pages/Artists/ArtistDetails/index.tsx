import { Fragment, useCallback, useEffect } from 'react';
import { Layout } from '../../../components/Layout';
import { ArrowLeftIcon } from '../../../components/icons/Arrow/Left';
import * as S from './style';
import useFetch from '../../../hooks/fetch';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { userStore } from '../../../store/user';
import { ArtistAlbum } from '../../../models/artistAlbum';
import { formatDate } from '../../../utils/formatDate';
import { GenericCard } from '../../../components/GenericCard';
import { Main } from '../../../components/Layout/Main';
import { Paginated, usePagination } from '../../../hooks/pagination';
import { Pagination } from '../../../components/Pagination';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

interface ArtistAlbumsResponse extends Paginated {
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
  const { fetchData, isLoading } = useFetch();
  const { offset, totalPages, currentPage, handleChangePage, handleSetTotalPages, DEFAULT_LIMIT } =
    usePagination();
  const navigate = useNavigate();

  const artistData = userStore
    .getAllArtists()
    .filter((artistItem) => artistItem.id === artist.id)[0];

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
      const params = {
        offset,
        limit: DEFAULT_LIMIT,
        include_groups: 'album,single,compilation',
      };

      const { response } = await fetchData<ArtistAlbumsResponse>(`/artists/${artist.id}/albums`, {
        params,
      });

      if (response !== null) {
        handleSetTotalPages(response.data.total);
        userStore.setArtistAlbums(getParsedAlbumsData(response.data));
      }
    };

    handleFetchArtistAlbums();
  }, [artist, fetchData, getParsedAlbumsData, handleSetTotalPages, DEFAULT_LIMIT, offset]);

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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Fragment>
          <Main id="artist-details-main">
            {userStore.getArtistAlbums().map((album) => (
              <GenericCard
                key={album.id}
                id={album.id}
                title={album.name}
                imageURL={album.imageURL}
                imageAlt="Capa do álbum"
                description={album.releaseDate}
              />
            ))}
          </Main>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
          />
        </Fragment>
      )}
    </Layout>
  );
});
