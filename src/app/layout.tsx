import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from './(core)/components/styles/registry';

const font = Roboto({ weight: '300', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'A full template ready to use'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
