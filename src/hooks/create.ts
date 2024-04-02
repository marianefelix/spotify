import { useNavigate } from 'react-router';
import api from '../services/api';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { authStore } from '../store/authentication';

interface Error {
  status: number;
  message: string;
}

export const useCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const create = useCallback(
    async <T>(url: string, data?: any, options?: AxiosRequestConfig) => {
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

        response = await api.post<T>(url, data, options);
      } catch (err) {
        setIsLoading(false);

        const errorResponse = err as {
          response: Error;
        };

        error = errorResponse.response;

        if (error.status === 401) {
          authStore.clearAll();
          navigate('/login');
        }
      } finally {
        setIsLoading(false);
      }

      return { response, error };
    },
    [navigate]
  );

  return { create, isLoading };
};
