'use client';

import { Button } from '@repo/ui/button';
import Typography from '@repo/ui/typography';
import { useEffect } from 'react';
import { useAccount, useSignMessage, useVerifyMessage } from 'wagmi';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  selectPokemonSignature,
  setPokemonSignature,
} from '../../store/pokemon/pokemon-slice';
import type { PokemonListItem } from '../../types/pokemon';

interface PokemonGotchaButtonProps {
  pokemon: PokemonListItem;
}

export default function PokemonGotchaButton(
  props: PokemonGotchaButtonProps
): JSX.Element {
  const account = useAccount();
  const { data: signature, error, signMessage } = useSignMessage();

  const dispatch = useAppDispatch();
  const localSignature = useAppSelector((state) =>
    selectPokemonSignature(state, props.pokemon.name)
  );

  const verifyMessage = useVerifyMessage({
    signature: localSignature
      ? (localSignature as `0x${string}` | undefined)
      : signature,
    message: `I am the owner of ${props.pokemon.name}`,
    address: account.address,
  });

  useEffect(() => {
    if (signature && verifyMessage.data) {
      dispatch(
        setPokemonSignature({
          name: props.pokemon.name,
          signature,
        })
      );
    }
  }, [dispatch, props.pokemon.name, signature, verifyMessage.data]);

  return (
    <div>
      {verifyMessage.data ? (
        <Typography variant='h4'>
          You caught a wild {props.pokemon.name}!
        </Typography>
      ) : (
        <Button
          onClick={() => {
            signMessage({
              message: `I am the owner of ${props.pokemon.name}`,
            });
          }}
          variant='primary'
        >
          Catch em ⚡
        </Button>
      )}

      {error ? <div>{error.message}</div> : null}
    </div>
  );
}
