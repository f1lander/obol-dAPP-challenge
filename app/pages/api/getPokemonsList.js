import axios from "axios";

export const getPokemonsList = () =>
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");



