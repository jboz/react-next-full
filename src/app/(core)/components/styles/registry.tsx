'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { DefaultTheme, ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalstyles';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const theme: DefaultTheme = {
    colors: {
      primary: '#ddd',
      secondary: '#0070f3'
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <GlobalStyle />
        {children}
      </StyleSheetManager>
    </ThemeProvider>
  );
}
