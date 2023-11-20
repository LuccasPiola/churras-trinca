'use client';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/utils/styled-components-registry';

const theme: DefaultTheme = {
  primary: '#FFD836',
  secondary: '#998220',
  gray: {
    main: '#F1F1F1',
    background: '#FAFAFA',
  },
  text: {
    main: '#000000',
    secondary: '#121217',
  },
};

type CustomThemeProviderProps = {
  children: React.ReactNode;
};

export default function CustomThemeProvider({
  children,
}: CustomThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
}
