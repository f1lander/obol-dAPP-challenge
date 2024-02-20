export type Pokemon = {
  name: string;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  image: string;
};

export type PokemonList = Array<Pokemon>;
