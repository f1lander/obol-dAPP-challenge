const fs = require("fs");
const path = require("path");

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

const fetchPokemonList = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data;
};

(async () => {
  const force = process.argv[2] === "--force";

  const filePath = path.join(__dirname, "../pages/api/pokemon/poke-data.json");
  const fileExists = fs.existsSync(filePath);

  if (fileExists && !force) {
    console.log("File already exists, skipping download");

    return;
  }

  console.log("Downloading pokemon data");

  const pokemonList = await fetchPokemonList();
  for (let i = 0; i < pokemonList.results.length; i++) {
    const pokemon = pokemonList.results[i];
    const res = await fetch(pokemon.url);
    const data = await res.json();

    pokemonList.results[i].details = data;
  }
  fs.writeFileSync(filePath, JSON.stringify(pokemonList));
})();
