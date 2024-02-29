'use client';
import React, { useEffect, useState } from 'react';
import PokemonList from './pokemon-list';
import SearchBar from './search-bar';
import { TPokemon } from '@/lib/types';

type PokemonListProps = {
  pokemonList: TPokemon[];
};

function Container({ pokemonList }: PokemonListProps) {
  return (
    <>
      <SearchBar />
      <PokemonList pokemonList={pokemonList} />
    </>
  );
}

export default Container;
