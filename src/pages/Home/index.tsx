import { useEffect } from 'react';
import { Layout } from '../../components/Layout';
import useFetch from '../../hooks/fetch';
import { User } from '../../models/user';
import { observer } from 'mobx-react';
import { userStore } from '../../store/user';
import * as S from './style';

export const Home = observer(() => {
  const { fetchData } = useFetch();

  const getTime = () => {
    const today = new Date();
    const currentHour = today.getHours();

    if (currentHour < 12) {
      return 'Bom dia';
    } else if (currentHour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  };

  useEffect(() => {
    const handleFetchData = async () => {
      const { response, error } = await fetchData<User>('/me');

      if (response !== null) {
        userStore.setUserData(response.data);
        return;
      }
    };

    handleFetchData();
  }, [fetchData]);

  return (
    <Layout>
      <S.GreetingText>
        {getTime()}, {userStore.data?.display_name}!
      </S.GreetingText>
    </Layout>
  );
});
