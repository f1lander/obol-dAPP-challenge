import axios from "axios";
import { useEffect, useState } from "react";
import { usePokemonQuery } from "./usePokemonQuery";

type Ability = {
  ability: {
    name: string;
  };
};

type PokemonResponse = {
  id: string;
  name: string;
  abilities: Array<Ability>;
  sprites: { front_default: string };
};

export type Pokemon = {
  id: string;
  imageUrl: string;
  name: string;
  abilities: Array<string>;
  collected: boolean;
};

type PokemonsData = {
  pokemonsResult: Array<Pokemon>;
  handleSearch: (value: string) => void;
  handleCollect: (value: string) => void;
};

export const usePokemonList = (): PokemonsData => {
  const [pokemonsList, setPokemonsList] = useState<Array<Pokemon>>([]);
  const [pokemonsResult, setPokemonsResult] = useState<Array<Pokemon>>([]);
  const { data } = usePokemonQuery();

  const handleSearch = (value: string) => {
    const result = pokemonsList.filter((pokemon: Pokemon) =>
      pokemon.name.includes(value)
    );
    setPokemonsResult(result);
  };

  const handleCollect = (value: string) => {
    const pokemon = pokemonsList.find(({ name }) => name === value);
    if (!pokemon) return null;
    const collectedPokemon: Pokemon = { ...pokemon, collected: true };

    // Update list of all pokemons
    const newList = [...pokemonsList].map((pokemon: Pokemon) =>
      pokemon.name === collectedPokemon.name ? collectedPokemon : pokemon
    );

    // Update displayed results
    const newResults = [...pokemonsResult].map((obj) =>
      obj.name === collectedPokemon.name ? collectedPokemon : obj
    );

    setPokemonsList(newList);
    setPokemonsResult(newResults);
  };

  useEffect(() => {
    (async () => {
      if (data?.data) {
        try {
          const pokemons: Pokemon[] = await Promise.all(
            data.data.results.map(async (result) => {
              const data = await axios.get(result.url);
              const pokemon: PokemonResponse = data.data;
              const abilities = pokemon.abilities
                .map(({ ability }) => ability.name)
                .slice(0, 3);
              return {
                id: pokemon.id,
                imageUrl: pokemon.sprites.front_default,
                name: pokemon.name,
                abilities: abilities,
                collected: false,
              };
            })
          );
          setPokemonsList(pokemons);
          setPokemonsResult(pokemons);
        } catch (err) {
          console.log("Something went wrong...");
        }
      }
    })();
  }, [data]);

  return { pokemonsResult, handleSearch, handleCollect };
};
