import { useCallback, useState } from 'react';
import api from '../services/api';
import { authStore } from '../store/authentication';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../store/user';

interface Error {
  status: number;
  message: string;
}

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = useCallback(
    async <T>(url: string, options?: AxiosRequestConfig) => {
      setIsLoading(true);
      let response = null as AxiosResponse<T, unknown> | null;
      let error = null as Error | null;

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
        const errorResponse = err as {
          response: Error;
        };

        error = errorResponse.response;

        if (error.status === 401) {
          authStore.clearAll();
          userStore.clearAll();
          navigate('/login');
        }
      } finally {
        setIsLoading(false);
      }

      return { response, error };
    },
    [navigate]
  );

  return { fetchData, isLoading };
};

export default useFetch;
