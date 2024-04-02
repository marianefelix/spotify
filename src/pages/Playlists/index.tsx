import { useCallback, useEffect } from 'react';
import { PrimaryButton } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Layout/Header';
import useFetch from '../../hooks/fetch';
import { observer } from 'mobx-react-lite';
import { Playlist } from '../../models/playlist';
import { userStore } from '../../store/user';
import { GenericCard } from '../../components/GenericCard';
import { Main } from '../../components/Layout/Main';

interface PlaylistsRequestResponse {
  items: {
    id: string;
    description: string;
    images: {
      url: string;
    }[];
    name: string;
  }[];
}

export const Playlists = observer(() => {
  const { fetchData } = useFetch();

  const getParsedPlaylistData = useCallback((data: PlaylistsRequestResponse) => {
    const playlists = [] as Playlist[];

    data.items.forEach((item) => {
      playlists.push({
        id: item.id,
        name: item.name,
        imageURL: item.images[0].url,
        description: item.description,
      });
    });

    return playlists;
  }, []);

  useEffect(() => {
    const handleFetchPlaylists = async () => {
      const { response } = await fetchData<PlaylistsRequestResponse>(`/me/playlists`);

      if (response !== null) {
        userStore.setPlaylists(getParsedPlaylistData(response.data));
      }
    };

    handleFetchPlaylists();
  }, [fetchData, getParsedPlaylistData]);
  return (
    <Layout>
      <Header title="Minhas Playlists" description="Sua coleção pessoal de playlists">
        <PrimaryButton>Criar playlist</PrimaryButton>
      </Header>
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
    </Layout>
  );
});
