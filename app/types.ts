export type PokemonList = Array<{
  name: string;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  image: string;
}>;
