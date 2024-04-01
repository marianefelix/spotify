import axios from 'axios';
import { Buffer } from 'buffer';
import * as queryParser from 'qs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authStore } from '../store/authentication';
import { useCallback } from 'react';

interface TokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  refresh_token: string;
  token_type: string;
}

export interface UseAuthenticationData {
  authorization: () => void;
  authenticate: (code: string) => Promise<void>;
  refreshToken: (refreshToken: string | null) => Promise<void>;
  getAuthCode: () => string | null;
}

export const useAuth = (): UseAuthenticationData => {
  const [queryParameters] = useSearchParams();
  const navigate = useNavigate();
  const authCode = queryParameters.get('code');

  const authorization = () => {
    const scope = 'user-read-private user-read-email user-top-read';

    const requestParams = {
      response_type: 'code',
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      show_dialog: true,
    };
    const parsedParams = queryParser.stringify(requestParams);
    const singinURL = `${import.meta.env.VITE_SPOTIFY_AUTH_URL}?${parsedParams}`;

    window.open(singinURL, '_self');
  };

  const authenticate = async (code: string) => {
    authStore.setIsLoading(true);

    try {
      const body = {
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      };

      const encodedClient = Buffer.from(
        import.meta.env.VITE_SPOTIFY_CLIENT_ID + ':' + import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
      ).toString('base64');

      const headers = {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedClient}`,
      };

      const response = await axios.post<TokenResponse>(
        import.meta.env.VITE_SPOTIFY_TOKEN_URL,
        body,
        {
          headers,
        }
      );

      authStore.setToken(response.data.access_token);
      authStore.setRefreshToken(response.data.refresh_token);
    } catch (err) {
      navigate('/login');
    } finally {
      authStore.setIsLoading(false);
    }
  };

  const refreshToken = useCallback(
    async (refreshToken: string | null) => {
      try {
        const body = {
          grant_type: 'refresh_token',
          refres_token: refreshToken,
          client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        };

        const headers = {
          'content-type': 'application/x-www-form-urlencoded',
        };

        const response = await axios.post<TokenResponse>(
          import.meta.env.VITE_SPOTIFY_TOKEN_URL,
          body,
          {
            headers,
          }
        );

        authStore.setToken(response.data.access_token);
        authStore.setRefreshToken(response.data.refresh_token);
      } catch (err) {
        navigate('/login');
      }
    },
    [navigate]
  );

  const getAuthCode = () => {
    return authCode;
  };

  return { authorization, authenticate, refreshToken, getAuthCode };
};
