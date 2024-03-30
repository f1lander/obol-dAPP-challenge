'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, WagmiProvider } from 'wagmi';

import { ReactNode } from 'react';
import { config } from '../config';
import { createWeb3Modal } from '@web3modal/wagmi/react';

// Setup queryClient
const queryClient = new QueryClient();

//todo: Move it to .env later
const projectId = '87e19f8fc9a0e69508729193d512f3b2';

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export default function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
