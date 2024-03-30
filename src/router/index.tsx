import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Authenticator } from '../pages/Authenticator';
import { PrivateRoute } from './PrivateRoute';
import { CustomRoute } from './CutomLoginRoute/inde';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Authenticator />,
  },
  {
    path: '/login',

    element: (
      <CustomRoute>
        <Login />
      </CustomRoute>
    ),
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
]);
