import '@repo/ui/styles.css';
import './globals.css';

import { Provider } from 'jotai';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { cookieToInitialState } from 'wagmi';
import { config } from '../config';
import Web3ModalProvider from '../context';
import { ObolBrandLogo } from '../presentation/logo/obol-logo';

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
        <Provider>
          <nav className='sticky top-0 z-50 bg-gray-800 text-white shadow'>
            <div className='flex flex-row items-center justify-between px-8 py-4'>
              <ObolBrandLogo />
              <w3m-button />
            </div>
          </nav>
          <Web3ModalProvider initialState={initialState}>
            {children}
          </Web3ModalProvider>
        </Provider>
      </body>
    </html>
  );
}
