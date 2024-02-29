export type PokemonData = {
  count: number;
  next: string;
  previous: string;
  results: Array<{ name: string; url: string }>;
};

export type TPokemon = {
  name: string;
  url: string;
  image: string;
  abilities: string[];
  id: number;
};

type Ability = {
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
};

export type PokemonAbility = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

export type PokemonAbilities = PokemonAbility[];
