import { POKEMON_BASE_URL } from '../../constants';
import { PokemonDetails, type PokemonListResponse } from '../../types/pokemon';

export const pokemonQueries = {
  async getPokemonList(args: {
    limit: number;
    offset: number;
  }): Promise<PokemonListResponse> {
    const response = await fetch(
      `${POKEMON_BASE_URL}?limit=${args.limit}&offset=${args.offset}`
    );

    const data = await response.json();
    return data as PokemonListResponse;
  },

  async getPokemonDetails(name: string) {
    const response = await fetch(`${POKEMON_BASE_URL}/${name}`);
    const data = await response.json();
    return data as PokemonDetails;
  },
};
