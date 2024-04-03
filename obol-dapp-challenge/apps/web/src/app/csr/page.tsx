'use client';

import { HoverCard } from '@repo/ui/cards';
import { InputFormField } from '@repo/ui/form-fields';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import PokemonGotchaButton from '../../presentation/molecules/pokemon-gotcha-button';
import PokemonAdditionalDetails from '../../presentation/organisms/pokemon-additional-details';
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
        <div className='grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {selectedPokemons.length === 0 ? (
            <div>No Pokemon found, try searching for another Pokemon</div>
          ) : (
            selectedPokemons.map((pokemon) => (
              <div className='text-xl' key={pokemon.name}>
                <HoverCard>
                  <PokemonCard pokemon={pokemon}>
                    <div className='my-2'>
                      <PokemonGotchaButton pokemon={pokemon} />
                    </div>
                    <PokemonAdditionalDetails pokemon={pokemon} />
                  </PokemonCard>
                </HoverCard>
              </div>
            ))
          )}
        </div>
      </PaginatedPokemonLoader>
    </main>
  );
}
