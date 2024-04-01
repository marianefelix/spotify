import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Layout/Header';
import { ArtistList } from '../../components/Artist/List';
import { observer } from 'mobx-react-lite';
import { useFetchArtists } from '../../hooks/fetchArtists';
import { userStore } from '../../store/user';
import { Artist } from '../../models/artist';

export const Artists = observer(() => {
  const { fetchTopArtits, isLoading } = useFetchArtists();

  useEffect(() => {
    fetchTopArtits(10, (data: Artist[]) => userStore.setAllArtists(data));
  }, [fetchTopArtits]);

  return (
    <Layout>
      <Header title={'Top Artistas'} description="Aqui você encontra seus artistas preferidos" />
      <ArtistList artists={userStore.getAllArtists()} />
    </Layout>
  );
});
