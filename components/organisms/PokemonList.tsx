import { usePokemonList } from "@/hooks/usePokemonList";
import { Search } from "../molecules/Search";
import { Card } from "./Card";

export const PokemonList = () => {
  const { pokemonsResult, handleSearch, handleCollect } = usePokemonList();

  return (
    <div className="p-24">
      <Search onSubmit={handleSearch} />
      <div className="grid grid-cols-card gap-y-10 mt-24">
        {pokemonsResult.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
            abilities={pokemon.abilities}
            collected={pokemon.collected}
            onCollect={handleCollect}
          />
        ))}
      </div>
    </div>
  );
};
