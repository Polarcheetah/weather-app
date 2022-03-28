import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

  body {
      margin: 0;
      padding: 0;
      background: #0a3d62;
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      letter-spacing: 0.7px;
  }
`;
