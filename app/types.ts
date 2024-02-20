import { Eip1193Provider } from "ethers";

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

declare global {
  interface Window {
    ethereum?: Eip1193Provider;
  }
}
