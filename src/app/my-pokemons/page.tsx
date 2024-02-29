'use client';
import { useEffect, useState } from 'react';
import { getPokemonList } from '@/lib/server-utils';
import Container from '@/components/container';
import { TPokemon } from '@/lib/types';

export default function MyPokemons() {
  const [filteredPokemonList, setFilteredPokemonList] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonList = await getPokemonList();
      const collectedPokemons = JSON.parse(localStorage.getItem('collectedPokemons') || '[]');

      const filteredList = pokemonList.filter((pokemon: TPokemon) => collectedPokemons.includes(pokemon.id));
      setFilteredPokemonList(filteredList);
    };
    fetchPokemonList();
  }, []);

  return (
    <>
      <Container pokemonList={filteredPokemonList} />
    </>
  );
}
