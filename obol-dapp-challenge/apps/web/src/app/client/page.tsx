'use client';

import { InputFormField } from '@repo/ui/form-fields';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useDebounce } from '../../hooks/use-debounce';
import PokemonCard from '../../presentation/pokemon-card';
import {
  filteredPokemons,
  setPokemons,
  setSearchQuery,
  useGetPokemonListQuery,
} from '../../store/pokemon/pokemon-slice';

export default function Page(): JSX.Element {
  const [page, setPage] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>('');
  const debouncedSearchInput = useDebounce<string>(searchInput, 500);
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetPokemonListQuery(page);

  const selectedPokemons = useAppSelector(filteredPokemons);

  const pokemons = data?.results ?? [];

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearchInput));
  }, [debouncedSearchInput]);

  useEffect(() => {
    const onScroll = (): void => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  useEffect(() => {
    dispatch(setPokemons(pokemons));
  }, [dispatch, data]);

  return (
    <main className='min-h-screen p-24'>
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
    </main>
  );
}
