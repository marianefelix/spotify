import { PrimaryButton } from '../../components/Button';
import * as S from './style';
import SpotifyLogo from '../../assets/images/spotify-logo.png';
import { useAuth } from '../../hooks/auth';
import { observer } from 'mobx-react';
import { authStore } from '../../store/authentication';

export const Login = observer(() => {
  const { authorization } = useAuth();

  const handleLoginOnClick = () => {
    authorization();
  };

  return (
    <S.Container>
      <img alt="Logo do Spotify na cor branca" src={SpotifyLogo} />
      <S.Description>Entra com sua conta Spotify clicando no botão abaixo</S.Description>
      <PrimaryButton id="login-button" disabled={authStore.isLoading} onClick={handleLoginOnClick}>
        {authStore.isLoading ? 'Entando...' : 'Entrar'}
      </PrimaryButton>
    </S.Container>
  );
});
