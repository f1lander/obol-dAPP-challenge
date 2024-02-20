"use client";
import { useMemo } from "react";
import { useSearch } from "../context/SearchProvider";
import type { PokemonList as PokemonListType } from "../types";

export type PokemonListProps = {
  data: PokemonListType;
};

export default function PokemonList({ data }: PokemonListProps) {
  const { search } = useSearch();

  const filteredPokemonList = useMemo(
    () =>
      data.filter((pokemon) => {
        return pokemon.name.includes(search);
      }),
    [search, data],
  );

  return (
    <div>
      <h1>Pokemon List</h1>
      {filteredPokemonList.map((pokemon) => {
        return (
          <div key={pokemon.name} className="flex flex-col items-center">
            <img src={pokemon.image} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <ul>
              {pokemon.abilities.map((ability) => {
                return (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
