import { useCallback, useState } from 'react';
import { Artist } from '../models/artist';
import { userStore } from '../store/user';
import useFetch from './fetch';
import { Bounce, toast } from 'react-toastify';

interface TopArtistsResponse {
  next: string | null;
  items: [
    {
      id: string;
      genres: string[];
      images: {
        url: string;
        height: number;
        width: number;
      }[];
      name: string;
    },
  ];
}

export const useFetchArtists = () => {
  const { fetchData, isLoading } = useFetch();

  const fetchTopArtits = useCallback(
    async (limit: number, setData: (data: Artist[]) => void) => {
      const params = {
        limit,
        // offset: 0,
        time_range: 'short_term',
      };

      const { response, error } = await fetchData<TopArtistsResponse>('/me/top/artists', {
        params,
      });

      if (response !== null) {
        const topArtits = [] as Artist[];

        response.data.items.forEach((item) => {
          topArtits.push({
            id: item.id,
            name: item.name,
            avatarURL: item.images[0].url,
            genres: item.genres,
          });
        });

        setData(topArtits);
      }

      if (error !== null) {
        toast.error(
          'Erro ao carregar seus artistas favoritos. Recarregue a página e tente novamente!',
          {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
          }
        );
      }
    },
    [fetchData]
  );

  return { fetchTopArtits, isLoading };
};
