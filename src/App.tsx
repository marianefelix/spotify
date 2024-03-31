import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
