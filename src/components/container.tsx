import React from 'react';
import PokemonList from './pokemon-list';
import SearchBar from './search-bar';

function Container() {
  return (
    <>
      <SearchBar />
      <PokemonList />
    </>
  );
}

export default Container;
