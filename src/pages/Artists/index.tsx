import { useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Layout/Header';
import { ArtistList } from '../../components/Artist/List';
import { observer } from 'mobx-react-lite';
import { useFetchArtists } from '../../hooks/fetchArtists';
import { userStore } from '../../store/user';
import { Artist } from '../../models/artist';
import { usePagination } from '../../hooks/pagination';
import { Pagination } from '../../components/Pagination';

export const Artists = observer(() => {
  const { fetchTopArtits } = useFetchArtists();
  const { offset, totalPages, currentPage, handleChangePage, handleSetTotalPages, DEFAULT_LIMIT } =
    usePagination();

  useEffect(() => {
    const setData = (data: Artist[]) => {
      userStore.setAllArtists(data);
    };

    const params = {
      limit: DEFAULT_LIMIT,
      offset,
      time_range: 'short_term',
    };

    fetchTopArtits(setData, handleSetTotalPages, {
      params,
    });
  }, [fetchTopArtits, DEFAULT_LIMIT, offset, handleSetTotalPages]);

  return (
    <Layout>
      <Header title={'Top Artistas'} description="Aqui você encontra seus artistas preferidos" />
      <ArtistList artists={userStore.getAllArtists()} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </Layout>
  );
});
