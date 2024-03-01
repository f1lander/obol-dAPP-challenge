'use client';

import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { pokemonABI } from '@/abis/CollectPokemon';
import { useWriteContract, useAccount } from 'wagmi';
import { wagmiConfig } from '@/config';
import { toast } from './ui/use-toast';
import useWalletConnect from '@/hooks/useWalletConnect';
import useCollectPokemon from '@/hooks/useCollectPokemon';

type CollectButtonProps = {
  pokemonId: number;
  className?: string;
  isCollected: { result: string; status: string };
};

export function CollectButton({ pokemonId, className, isCollected }: CollectButtonProps) {
  const { handleCollect, isPending, collectedInSession } = useCollectPokemon(pokemonId);

  let buttonText = 'Collect';
  if (isCollected?.result !== undefined || collectedInSession) {
    buttonText = 'Collected';
  } else if (isPending) {
    buttonText = 'Collecting';
  }

  return (
    <>
      <Button variant="obolPrimary" className={className} onClick={handleCollect} disabled={isCollected?.result !== undefined || isPending || collectedInSession}>
        {buttonText}
      </Button>
    </>
  );
}
