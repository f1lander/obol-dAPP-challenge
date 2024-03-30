import type { PokemonDetails, PokemonListResponse } from '../../types/pokemon';

import { POKEMON_BASE_URL } from '../../constants';

export const pokemonQueries = {
  async getPokemonList(args: {
    limit: number;
    offset: number;
  }): Promise<PokemonListResponse> {
    const response = await fetch(
      `${POKEMON_BASE_URL}?limit=${args.limit}&offset=${args.offset}`
    );

    return (await response.json()) as PokemonListResponse;
  },

  async getPokemonDetails(name: string) {
    const response = await fetch(`${POKEMON_BASE_URL}/${name}`);
    return (await response.json()) as PokemonDetails;
  },
};
