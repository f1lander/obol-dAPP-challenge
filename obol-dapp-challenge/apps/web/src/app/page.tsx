import * as React from 'react';

import PokemonList from '../presentation/pokemon-list';
import { pokemonQueries } from '../data/query/pokemon';

export default async function Page(): Promise<JSX.Element> {
  const initialPokemonData = await pokemonQueries.getPokemonList({
    limit: 151,
    offset: 0,
  });

  return (
    <main className='min-h-screen p-24'>
      <PokemonList initialData={initialPokemonData} />
    </main>
  );
}
