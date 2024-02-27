import axios from "axios";

type Pokemon = {
  url: string;
};

type PokemonResponse = {
  results: Array<Pokemon>;
};

export const getPokemonsList = () =>
  axios.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon?limit=151");
