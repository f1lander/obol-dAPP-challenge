import { POKEMON_BASE_URL } from '../../constants';
import type { PokemonDetails, PokemonListResponse } from '../../types/pokemon';

export const pokemonQueries = {
  async getPokemonList(args: {
    limit?: number;
    offset?: number;
  }): Promise<PokemonListResponse> {
    const response = await fetch(
      `${POKEMON_BASE_URL}?limit=${args.limit ?? 20}&offset=${args.offset ?? 0}`
    );

    return (await response.json()) as PokemonListResponse;
  },

  async getPokemonDetails(name: string) {
    const response = await fetch(`${POKEMON_BASE_URL}/${name}`);
    return (await response.json()) as PokemonDetails;
  },
};
