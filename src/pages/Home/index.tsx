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
import { Artist } from '../../models/artist';

interface UserResponse {
  id: string;
  images: {
    url: string;
  }[];
  display_name: string;
  email: string;
}

export const Home = observer(() => {
  const { fetchData } = useFetch();
  const { fetchTopArtits } = useFetchArtists();

  const getUserDataParsed = (data: UserResponse) => {
    const userData = {
      id: data.id,
      display_name: data.display_name,
      email: data.email,
      avatarURL: data.images[1].url,
    } as User;

    return userData;
  };

  useEffect(() => {
    const handleFetchUserData = async () => {
      const { response, error } = await fetchData<UserResponse>('/me');

      if (response !== null) {
        userStore.setUserData(getUserDataParsed(response.data));
        return;
      }
    };

    handleFetchUserData();
    fetchTopArtits(5, (data: Artist[]) => userStore.setTopArtits(data));
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
