import '@repo/ui/styles.css';
import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poke Dapp',
  description: "Gotta catch 'em all!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#081011]`}>{children}</body>
    </html>
  );
}
