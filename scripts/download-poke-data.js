const fs = require("fs");
const path = require("path");

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

const fetchPokemonList = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data;
};

(async () => {
  const pokemonList = await fetchPokemonList();
  for (let i = 0; i < pokemonList.results.length; i++) {
    const pokemon = pokemonList.results[i];
    const res = await fetch(pokemon.url);
    const data = await res.json();

    pokemonList.results[i].details = data;
  }
  fs.writeFileSync(
    path.join(__dirname, "../pages/api/pokemon/poke-data.json"),
    JSON.stringify(pokemonList),
  );
})();
