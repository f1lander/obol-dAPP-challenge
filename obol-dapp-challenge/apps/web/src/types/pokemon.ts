export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItem[];
}

export interface PokemonDetails {
  abilities: Ability[];
  height: number;
  id: number;
  name: string;
  weight: number;
  types: Type[];
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Type {
  type: {
    name: string;
  };
}
