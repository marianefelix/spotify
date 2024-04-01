import { useEffect } from 'react';
import { Layout } from '../../components/Layout';
import useFetch from '../../hooks/fetch';
import { User } from '../../models/user';
import { observer } from 'mobx-react';
import { userStore } from '../../store/user';
import { Header } from '../../components/Layout/Header';
import { ArtistList } from '../../components/Artist/List';
import { useFetchArtists } from '../../hooks/fetchArtists';
import { getCurrentTime } from '../../utils/currentTime';

export const Home = observer(() => {
  const { fetchData } = useFetch();
  const { fetchTopArtits } = useFetchArtists();

  useEffect(() => {
    const handleFetchUserData = async () => {
      const { response, error } = await fetchData<User>('/me');

      if (response !== null) {
        userStore.setUserData(response.data);
        return;
      }
    };

    handleFetchUserData();
    fetchTopArtits(5);
  }, [fetchData, fetchTopArtits]);

  const getTopFiveArtists = () => {
    if (userStore.topArtits !== null) {
      const topFiveArtists = userStore.topArtits.slice(0, 5);
      return topFiveArtists;
    }

    return;
  };

  const getTitle = () => {
    return `${getCurrentTime()} ${userStore.data?.display_name ?? ''}!`;
  };

  return (
    <Layout>
      <Header
        title={getTitle()}
        description="Seu top 5 artistas mais ouvidos nas últimas semanas"
      />
      <ArtistList artists={getTopFiveArtists()} />
    </Layout>
  );
});
