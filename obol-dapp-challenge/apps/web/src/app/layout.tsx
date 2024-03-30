import '@repo/ui/styles.css';
import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Web3ModalProvider from '../context';
import { config } from '../config';
import { cookieToInitialState } from 'wagmi';
import { headers } from 'next/headers';

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
  const initialState = cookieToInitialState(config, headers().get('cookie'));

  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#081011]`}>
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
