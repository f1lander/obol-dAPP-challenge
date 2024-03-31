import * as React from 'react';

import PokemonList from '../presentation/pokemon-list';
import { pokemonQueries } from '../data/query/pokemon';

export default async function Page(): Promise<JSX.Element> {
  const initialPokemonData = await pokemonQueries.getPokemonList({
    limit: 20,
    offset: 20,
  });

  return (
    <main className='min-h-screen p-24'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='text-xl' />
        <div className='text-xl' />
        <div className='text-xl' />
        <div className='text-xl' />
      </div>
      <PokemonList initialData={initialPokemonData} />
    </main>
  );
}
