'use client';

import { ImageCard } from '@repo/ui/cards';
import type { PokemonListItem } from '../types/pokemon';
import { titleCase } from '../utils/string-utils';

interface PokemonCardProps {
  pokemon: PokemonListItem;
  children?: React.ReactNode;
}

export default function PokemonCard(props: PokemonCardProps): JSX.Element {
  const { pokemon } = props;
  return (
    <div className='overflow-hidden rounded-lg shadow' key={pokemon.name}>
      <ImageCard
        imageUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        title={titleCase(pokemon.name)}
      >
        {props.children}
      </ImageCard>
    </div>
  );
}
