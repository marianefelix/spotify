import axios from 'axios';
import { Buffer } from 'buffer';
import * as queryParser from 'qs';
import { useLocation } from 'react-router-dom';

interface TokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  refresh_token: string;
  token_type: string;
}

export const useAuthentication = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const authorization = async () => {
    const scope = 'user-read-private user-read-email';
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

    const authCode = searchParams.get('code');

    if (authCode) {
      await authenticate(authCode);
    } else {
      // error
    }
  };

  const authenticate = async (code: string) => {
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

      // save token
    } catch (err) {
      // error
    }
  };

  return { authorization };
};
