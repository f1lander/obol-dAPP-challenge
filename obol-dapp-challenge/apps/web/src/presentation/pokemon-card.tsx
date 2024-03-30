import type { PokemonDetails, PokemonListItem } from '../types/pokemon';

import Chip from './type-chip';
import { ImageCard } from '@repo/ui/cards';
import { pokemonQueries } from '../data/query/pokemon';
import { titleCase } from '../utils/string-utils';

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

const getPokemonTypes = (pokemon: PokemonDetails): string[] => {
  return pokemon.types.map((type) => type.type.name);
};

export default async function PokemonCard(
  props: PokemonCardProps
): Promise<JSX.Element> {
  const { pokemon } = props;

  const pokemonDetails = await pokemonQueries.getPokemonDetails(pokemon.name);
  const types = getPokemonTypes(pokemonDetails);

  return (
    <div
      className='overflow-hidden rounded-lg bg-white shadow'
      key={pokemon.name}
    >
      <ImageCard
        imageUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        title={titleCase(pokemon.name)}
      >
        <div className='flex flex-row gap-4'>
          {types.map((type) => (
            <Chip key={type} type={type} />
          ))}
        </div>
      </ImageCard>
    </div>
  );
}
