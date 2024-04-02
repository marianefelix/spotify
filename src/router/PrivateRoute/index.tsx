import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { observer } from 'mobx-react';
import { authStore } from '../../store/authentication';

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = observer(({ children }: PrivateRouteProps) => {
  if (!authStore.getAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
});
