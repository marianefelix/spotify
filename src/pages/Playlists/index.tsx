import { Fragment, useCallback, useEffect, useState } from 'react';
import { PrimaryButton } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Layout/Header';
import useFetch from '../../hooks/fetch';
import { observer } from 'mobx-react-lite';
import { Playlist } from '../../models/playlist';
import { userStore } from '../../store/user';
import { GenericCard } from '../../components/GenericCard';
import { Main } from '../../components/Layout/Main';
import { PlaylistModal } from './Modal';
import { useCreate } from '../../hooks/create';
import { Bounce, toast } from 'react-toastify';
import { Pagination } from '../../components/Pagination';
import { Paginated, usePagination } from '../../hooks/pagination';
import { LoadingSpinner } from '../../components/LoadingSpinner';

interface PlaylistItemResponse {
  id: string;
  description: string;
  images:
    | {
        url: string;
      }[]
    | null;
  name: string;
}
interface PlaylistsResponse extends Paginated {
  items: PlaylistItemResponse[];
}

export const Playlists = observer(() => {
  const { fetchData, isLoading } = useFetch();
  const { create, isLoading: isCreatingPlaylist } = useCreate();
  const { offset, totalPages, currentPage, handleChangePage, handleSetTotalPages, DEFAULT_LIMIT } =
    usePagination();

  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState('');

  const getParsedPlaylistData = useCallback((data: PlaylistsResponse) => {
    const playlists = [] as Playlist[];

    data.items.forEach((item) => {
      playlists.push({
        id: item.id,
        name: item.name,
        imageURL: item.images !== null ? item.images[0].url : '',
        description: item.description,
      });
    });

    return playlists;
  }, []);

  useEffect(() => {
    const handleFetchPlaylists = async () => {
      const { response } = await fetchData<PlaylistsResponse>(`/me/playlists`, {
        params: {
          offset,
          limit: DEFAULT_LIMIT,
        },
      });

      if (response !== null) {
        handleSetTotalPages(response.data.total);
        userStore.setPlaylists(getParsedPlaylistData(response.data));
      }
    };

    handleFetchPlaylists();
  }, [fetchData, getParsedPlaylistData, DEFAULT_LIMIT, handleSetTotalPages, offset]);

  const handlePlaylistModalOpen = (value: boolean) => {
    setIsPlaylistModalOpen(value);
    setModalInputValue('');
  };

  const handleModalInputChange = (value: string) => {
    setModalInputValue(value);
  };

  const handleCreatePlaylist = async () => {
    const { response } = await create<PlaylistItemResponse>(
      `/users/${userStore.data?.id}/playlists`,
      {
        name: modalInputValue,
        description: '',
        public: false,
      }
    );

    if (response !== null) {
      const responseData = response.data;
      const playlists = userStore.getPlaylists();

      const newPlaylist = {
        id: responseData.id,
        name: responseData.name,
        imageURL: '',
        description: responseData.description,
      };

      userStore.setPlaylists([...playlists, newPlaylist]);

      toast.success('Playlist criada com sucesso', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });

      handlePlaylistModalOpen(false);
    }
  };

  return (
    <Layout>
      <Header title="Minhas Playlists" description="Sua coleção pessoal de playlists">
        <PrimaryButton onClick={() => handlePlaylistModalOpen(true)}>Criar playlist</PrimaryButton>
      </Header>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Fragment>
          <Main>
            {userStore.getPlaylists().map((playlist) => (
              <GenericCard
                key={playlist.id}
                id={playlist.id}
                title={playlist.name}
                imageURL={playlist.imageURL}
                imageAlt="Imagem da playlist"
                description={playlist.description}
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

      <PlaylistModal
        isOpen={isPlaylistModalOpen}
        inputValue={modalInputValue}
        handleCloseModal={() => handlePlaylistModalOpen(false)}
        handleInputOnChange={handleModalInputChange}
        handleCreatePlaylist={handleCreatePlaylist}
        isLoading={isCreatingPlaylist}
      />
    </Layout>
  );
});
