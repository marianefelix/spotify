import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  :root {
    font-size: 100%;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
