import { useCallback } from 'react';
import { Artist } from '../models/artist';
import useFetch from './fetch';
import { Bounce, toast } from 'react-toastify';
import { AxiosRequestConfig } from 'axios';
import { Paginated } from './pagination';

interface TopArtistsResponse extends Paginated {
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
    async (
      setData: (data: Artist[]) => void,
      handleSetTotalPages?: (totalResults: number) => void,
      options?: AxiosRequestConfig
    ) => {
      const { response, error } = await fetchData<TopArtistsResponse>('/me/top/artists', options);

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

        if (handleSetTotalPages) {
          handleSetTotalPages(response.data.total);
        }

        setData(topArtits);
      }

      if (error !== null && error.status !== 401) {
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
