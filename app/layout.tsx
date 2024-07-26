import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CookiesProvider } from 'next-client-cookies/server';

export const metadata: Metadata = {
  title: 'Heisenbug Ads',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookiesProvider>
      <html lang='en'>
        <body className='bg-white'>{children}</body>
      </html>
    </CookiesProvider>
  );
}
