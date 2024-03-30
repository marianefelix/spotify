import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { observer } from 'mobx-react';
import { authStore } from '../../store/authentication';

interface CustomRouteProps {
  children: ReactNode;
}

export const CustomRoute = observer(({ children }: CustomRouteProps) => {
  if (authStore.getAuthenticated()) {
    return <Navigate to="/home" />;
  }

  return children;
});
