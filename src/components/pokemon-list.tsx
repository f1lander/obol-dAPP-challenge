import React from 'react';
import PokemonCard from './pokemon-card';

function PokemonList() {
  return (
    <>
      <div className="mb-32 w-full gap-x-12 gap-y-9 grid text-center lg:mb-0 md:grid-cols-2 lg:grid-cols-3 lg:text-left">
        <PokemonCard name={'pokemonName'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} id={1} />
      </div>
    </>
  );
}

export default PokemonList;
