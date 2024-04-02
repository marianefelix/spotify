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
import { LoadingSpinner } from '../../components/LoadingSpinner';

interface UserResponse {
  id: string;
  images: {
    url: string;
  }[];
  display_name: string;
  email: string;
}

export const Home = observer(() => {
  const { fetchData, isLoading: fetchingUserData } = useFetch();
  const { fetchTopArtits, isLoading: fetchingTopArtists } = useFetchArtists();

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
      const { response } = await fetchData<UserResponse>('/me');

      if (response !== null) {
        userStore.setUserData(getUserDataParsed(response.data));
        return;
      }
    };

    handleFetchUserData();
    const setData = (data: Artist[]) => {
      userStore.setTopArtits(data);
    };

    fetchTopArtits(setData, undefined, {
      params: {
        limit: 5,
      },
    });
  }, [fetchData, fetchTopArtits]);

  const getTopFiveArtists = () => {
    const topArtists = userStore.getTopArtits();

    if (topArtists !== null) {
      const topFiveArtists = topArtists.slice(0, topArtists.length);
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
      {fetchingUserData || fetchingTopArtists ? (
        <LoadingSpinner />
      ) : (
        <ArtistList artists={getTopFiveArtists()} />
      )}
    </Layout>
  );
});
