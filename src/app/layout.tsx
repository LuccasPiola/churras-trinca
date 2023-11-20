import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import TrincaLogo from '@/components/Logo';
import CustomThemeProvider from '@/utils/theme-provider';
import { MainWrapper } from './styles';
import ResetStyles from './reset-styles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Churras Trinca',
  description:
    'Teste técnico realizado para uma oportunidade Front-End Sênior na Trinca',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <CustomThemeProvider>
          <MainWrapper id="root">
            <ResetStyles />
            <Header />
            {children}
            <TrincaLogo />
          </MainWrapper>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
