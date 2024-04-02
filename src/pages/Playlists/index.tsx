import { PrimaryButton } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Layout/Header';

export const Playlists = () => {
  return (
    <Layout>
      <Header title="Minhas Playlists" description="Sua coleção pessoal de playlists">
        <PrimaryButton>Criar playlist</PrimaryButton>
      </Header>
    </Layout>
  );
};
