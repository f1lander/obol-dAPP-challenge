'use client';

import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { pokemonABI } from '@/abis/CollectPokemon';
import { useWriteContract, useAccount } from 'wagmi';
import { wagmiConfig } from '@/config';
import { toast } from './ui/use-toast';

type CollectButtonProps = {
  pokemonId: number;
  className?: string;
  isCollected: { result: string; status: string };
};
export function CollectButton({ pokemonId, className, isCollected }: CollectButtonProps) {
  const { address: ownerAddress } = useAccount();
  const { data: hash, writeContract, isError, isSuccess, error, isPending } = useWriteContract({ config: wagmiConfig });

  const [collectedInSession, setCollectedInSession] = useState(false);

  useEffect(() => {
    if (isError && error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else if (isSuccess && hash) {
      toast({ title: 'Success', description: `Transaction Hash: ${hash}` });
      setCollectedInSession(true);
    }
  }, [isError, isSuccess, error, hash, pokemonId]);

  const handleCollect = async () => {
    try {
      writeContract({
        address: process.env.NEXT_PUBLIC_POKEMON_CONTRACT! as `0x${string}`,
        abi: pokemonABI,
        functionName: 'collectPokemon',
        args: [ownerAddress, BigInt(pokemonId)],
      });
      const collectedPokemons = JSON.parse(localStorage.getItem('collectedPokemons') || '[]');
      if (!collectedPokemons.includes(pokemonId)) {
        localStorage.setItem('collectedPokemons', JSON.stringify([...collectedPokemons, pokemonId]));
        setCollectedInSession(true);
      }
    } catch (error) {
      console.error('Collection Error:', error);
    }
  };

  const buttonText = isCollected?.result !== undefined || collectedInSession ? 'Collected' : 'Collect';
  return (
    <>
      <Button variant="obolPrimary" className={className} onClick={handleCollect} disabled={isCollected?.result !== undefined || isPending || collectedInSession}>
        {buttonText}
      </Button>
    </>
  );
}
