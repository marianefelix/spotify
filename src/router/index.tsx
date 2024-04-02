import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Authenticator } from '../pages/Authenticator';
import { PrivateRoute } from './PrivateRoute';
import { CustomRoute } from './CutomLoginRoute/inde';
import { Artists } from '../pages/Artists';
import { ArtistDetails } from '../pages/Artists/ArtistDetails';
import { User } from '../pages/User';
import { Playlists } from '../pages/Playlists';

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
  {
    path: '/artists',
    element: (
      <PrivateRoute>
        <Artists />
      </PrivateRoute>
    ),
  },
  {
    path: '/artists/:id',
    element: (
      <PrivateRoute>
        <ArtistDetails />
      </PrivateRoute>
    ),
  },
  {
    path: '/user',
    element: (
      <PrivateRoute>
        <User />
      </PrivateRoute>
    ),
  },
  {
    path: '/playlists',
    element: (
      <PrivateRoute>
        <Playlists />
      </PrivateRoute>
    ),
  },
]);
