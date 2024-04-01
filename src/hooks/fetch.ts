import { useCallback, useState } from 'react';
import api from '../services/api';
import { authStore } from '../store/authentication';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAuth } from './auth';

const useFetch = () => {
  const { refreshToken } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(
    async <T>(url: string, options?: AxiosRequestConfig) => {
      setIsLoading(true);
      let response = null as AxiosResponse<T, unknown> | null;
      let error = null as AxiosError | null;

      try {
        api.interceptors.request.use(
          (config) => {
            const token = authStore.getToken();

            if (token) {
              config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
          },

          (error) => Promise.reject(error)
        );

        response = await api.get<T>(url, options);
      } catch (err) {
        error = err as AxiosError;

        if (error.status === 401) {
          refreshToken(authStore.getRefreshToken());
        }
      }

      setIsLoading(false);

      return { response, error };
    },
    [refreshToken]
  );

  return { fetchData, isLoading };
};

export default useFetch;
