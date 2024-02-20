"use client";
import { useMemo } from "react";
import { useSearch } from "../context/SearchProvider";
import type { PokemonList as PokemonListType } from "../types";
import PokemonCard from "./PokemonCard";

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
    <div className="flex flex-wrap items-center justify-center">
      {filteredPokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
}
