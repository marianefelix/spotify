import { observer } from 'mobx-react-lite';
import { PrimaryButton } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { authStore } from '../../store/authentication';
import * as S from './style';
import { userStore } from '../../store/user';
import { useNavigate } from 'react-router';

export const User = observer(() => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authStore.clearAll();
    navigate('/login');
  };

  return (
    <Layout>
      <S.MainContent>
        <img src={userStore.data?.avatarURL} alt="Sua imagem de perfil" />
        <S.Name>{userStore.data?.display_name}</S.Name>
        <PrimaryButton onClick={handleLogout}>Sair</PrimaryButton>
      </S.MainContent>
    </Layout>
  );
});