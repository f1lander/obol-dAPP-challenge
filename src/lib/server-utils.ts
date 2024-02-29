import 'server-only';
import { TPokemon, PokemonAbility } from './types';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemon(name: string) {
  const res = await fetch(`${apiUrl}/${name}`);
  const data = await res.json();
  console.log(data, 'data');
  return data;
}

export async function getPokemonList() {
  const res = await fetch(`${apiUrl}?limit=151`);
  const { results } = await res.json();
  const detailsPromises = results.map((pokemon: TPokemon) => fetch(pokemon.url).then((response) => response.json()));
  const detailsResults = await Promise.all(detailsPromises);

  const pokemonWithDetails = results.map((pokemon: TPokemon, index: number) => {
    const urlSegments = pokemon.url.trim().split('/');
    const id = urlSegments[urlSegments.length - 2];
    return {
      ...pokemon,
      id,
      image: detailsResults[index].sprites.other['official-artwork'].front_default,
      abilities: detailsResults[index].abilities.map((abilityInfo: PokemonAbility) => abilityInfo.ability.name),
    };
  });

  console.log(pokemonWithDetails);
  return pokemonWithDetails;
}
