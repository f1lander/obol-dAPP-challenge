import axios from "axios";
import { useEffect, useState } from "react";
import { usePokemonQuery } from "./usePokemonQuery";

export const usePokemonList = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemonsResult, setPokemonsResult] = useState([]);
  const { data } = usePokemonQuery();

  const handleSearch = (value) => {
    const result = pokemonsList.filter(({ name }) => name.includes(value));
    setPokemonsResult(result);
  };

  const handleCollect = (value) => {
    const pokemon = pokemonsList.find(({ name }) => name === value);
    const collectedPokemon = { ...pokemon, collected: true };

    // Update list of all pokemons
    const newList = [...pokemonsList].map((obj) =>
      obj.name === collectedPokemon.name ? collectedPokemon : obj
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
          const pokemons = await Promise.all(
            data.data.results.map(async (result) => {
              const data = await axios.get(result.url);
              const pokemon = data.data;
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
