import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from './(core)/components/styles/registry';

const font = Roboto({ weight: '300', subsets: ['latin'] });

const APP_NAME = 'Next App';
const APP_DESCRIPTION = 'A full template ready to use';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_NAME,
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION
  },
  twitter: {
    card: 'summary',
    title: APP_NAME,
    description: APP_DESCRIPTION
  }
};

export const viewport: Viewport = {
  themeColor: '#5555FF'
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
