import React from 'react';
import PokemonCard from './pokemon-card';
import { TPokemon } from '@/lib/types';

type PokemonListProps = {
  pokemonList: TPokemon[];
};

function PokemonList({ pokemonList }: PokemonListProps) {
  return (
    <>
      <div className="mb-32 w-full gap-x-12 gap-y-9 grid text-center lg:mb-0 md:grid-cols-2 lg:grid-cols-3 lg:text-left">
        {pokemonList.map((pokemon, i) => (
          <PokemonCard name={pokemon.name} key={pokemon.name} abilities={pokemon.abilities} image={pokemon.image} id={pokemon.id} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
