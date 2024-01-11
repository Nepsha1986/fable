import type { Metadata } from 'next';
import { Dancing_Script } from 'next/font/google';
import './globals.css';

const inter = Dancing_Script({ subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
