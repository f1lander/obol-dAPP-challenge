import * as React from 'react';

import PokemonList from '../presentation/pokemon-list';
import { pokemonQueries } from '../data/query/pokemon';

export default async function Page(): Promise<JSX.Element> {
  const initialPokemonData = await pokemonQueries.getPokemonList({
    limit: 15,
    offset: 0,
  });

  return (
    <main className='min-h-screen p-24'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='text-xl'></div>
        <div className='text-xl'></div>
        <div className='text-xl'></div>
        <div className='text-xl'></div>
      </div>
      <w3m-button />
      <PokemonList initialData={initialPokemonData} />
    </main>
  );
}
