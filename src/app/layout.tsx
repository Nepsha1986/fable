import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const primaryFont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The life',
  description: 'Demo project',
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
