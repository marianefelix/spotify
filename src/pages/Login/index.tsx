import { PrimaryButton } from '../../components/Button';
import * as S from './style';
import SpotifyLogo from '../../assets/images/spotify-logo.png';

export const Login = () => {
  return (
    <S.Container>
      <img alt="Logo do Spotify na cor branca" src={SpotifyLogo} />
      <S.Description>Entra com sua conta Spotify clicando no botão abaixo</S.Description>
      <PrimaryButton id="login-button" onClick={() => {}}>
        Entrar
      </PrimaryButton>
    </S.Container>
  );
};
