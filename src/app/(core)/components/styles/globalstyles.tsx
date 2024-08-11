'use client';

import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

export const theme: DefaultTheme = {
  colors: {
    background: '#1C1B22',
    foreground: '#DDDDDD',
    primary: '#5555FF',
    secondary: '#FFFF54',
    analogous: '#54AAFF',
    complementary: '#AA54FF'
  }
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  main {
    width: 100%;
    height: 100%;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }

    html {
      color: ${({ theme }) => theme.colors.foreground};
      background: ${({ theme }) => theme.colors.background};
    }
  }
`;
