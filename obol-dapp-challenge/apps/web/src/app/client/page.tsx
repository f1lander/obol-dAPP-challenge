'use client';

import { InputFormField } from '@repo/ui/form-fields';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import { PaginatedPokemonLoader } from '../../presentation/organisms/pokemon-load-more-wrapper';
import PokemonCard from '../../presentation/pokemon-card';
import { filteredPokemons } from '../../store/pokemon/pokemon-slice';

export default function Page(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>('');

  const selectedPokemons = useAppSelector(filteredPokemons);

  return (
    <main className='min-h-screen p-24'>
      <PaginatedPokemonLoader searchQuery={searchInput}>
        <div className='mb-8'>
          <InputFormField
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder='Search Pokemon...'
            value={searchInput}
          />
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {selectedPokemons.map((pokemon) => (
            <div className='text-xl' key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}
        </div>
      </PaginatedPokemonLoader>
    </main>
  );
}
