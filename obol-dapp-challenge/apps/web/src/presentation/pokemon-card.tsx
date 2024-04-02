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

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    pokemon.url.split('/')[6]
  }.png`;

  return (
    <div className='overflow-hidden rounded-lg shadow' key={pokemon.name}>
      <ImageCard imageUrl={url} title={titleCase(pokemon.name)}>
        {props.children}
      </ImageCard>
    </div>
  );
}
