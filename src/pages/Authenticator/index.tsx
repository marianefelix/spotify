import { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { Navigate } from 'react-router-dom';

export const Authenticator = () => {
  const { authenticate, getAuthCode } = useAuth();

  useEffect(() => {
    const authCode = getAuthCode();

    const handleAuthentication = async (code: string) => {
      await authenticate(code);
    };

    if (authCode !== null) {
      handleAuthentication(authCode);
    }
  }, [authenticate, getAuthCode]);

  return <Navigate to={'/home'} />;
};
