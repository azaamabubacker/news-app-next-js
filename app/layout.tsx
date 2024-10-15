import type { Metadata } from 'next';
import './globals.css';
import MainHeader from '@/components/MainHeader';

export const metadata: Metadata = {
  title: 'News App',
  description: 'News app build by Nextjs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
