import { PrimaryButton } from '../../components/Button';
import * as S from './style';
import SpotifyLogo from '../../assets/images/spotify-logo.png';
import { useAuthentication } from '../../hooks/auth';

export const Login = () => {
  const { authorization } = useAuthentication();

  const handleLogin = async () => {
    await authorization();
  };

  return (
    <S.Container>
      <img alt="Logo do Spotify na cor branca" src={SpotifyLogo} />
      <S.Description>Entra com sua conta Spotify clicando no botão abaixo</S.Description>
      <PrimaryButton id="login-button" onClick={handleLogin}>
        Entrar
      </PrimaryButton>
    </S.Container>
  );
};
