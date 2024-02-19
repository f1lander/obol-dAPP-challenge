import type { NextApiRequest, NextApiResponse } from "next";

import pokeData from "./poke-data.json";

type ResponseData = Array<{
  name: string;
  abilities: Array<PokemonAbility>;
  image: string;
}>;

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

type Pokemon = {
  forms: Array<{
    name: string;
    url: string;
  }>;
  abilities: Array<PokemonAbility>;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

type PokemonList = {
  results: Array<{
    name: string;
    url: string;
    details: Pokemon;
  }>;
};

export default async function GET(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const returnList: ResponseData = [];

  const pokemonList = (pokeData as PokemonList).results;
  for (const pokemon of pokemonList) {
    returnList.push({
      name: pokemon.name,
      abilities: pokemon.details.abilities,
      image: pokemon.details.sprites.other["official-artwork"].front_default,
    });
  }

  res.status(200).json(returnList);
}
