import { PrimaryButton } from '../../components/Button';
import * as S from './style';
import { useAuth } from '../../hooks/auth';
import { observer } from 'mobx-react';
import { authStore } from '../../store/authentication';
import { Logo } from '../../components/Logo';

export const Login = observer(() => {
  const { authorization } = useAuth();

  const handleLoginOnClick = () => {
    authorization();
  };

  return (
    <S.Container>
      <Logo />
      <S.Description>Entra com sua conta Spotify clicando no botão abaixo</S.Description>
      <PrimaryButton id="login-button" disabled={authStore.isLoading} onClick={handleLoginOnClick}>
        {authStore.isLoading ? 'Entando...' : 'Entrar'}
      </PrimaryButton>
    </S.Container>
  );
});
