import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import { site } from '@/config/site';

import './globals.css';

const primaryFont = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  authors: [{ name: site.author.name, url: site.author.url }],
  openGraph: {
    type: 'website',
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: '#000922',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
