import type { PokemonListItem } from '../types/pokemon';
import PokemonStats from './molecules/pokemon-stats';
import PokemonTypeDetails from './molecules/pokemon-type-details';
import PokemonCard from './pokemon-card';

interface PokemonListProps {
  pokemon?: { results: PokemonListItem[] };
}

export default function PokemonList(props: PokemonListProps): JSX.Element {
  return (
    <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-4 gap-4'>
        {(props.pokemon?.results || []).map((pokemon: PokemonListItem) => (
          <div
            className='overflow-hidden rounded-lg bg-white shadow'
            key={pokemon.name}
          >
            <PokemonCard pokemon={pokemon}>
              <PokemonTypeDetails pokemonName={pokemon.name} />
              <PokemonStats pokemonName={pokemon.name} />
            </PokemonCard>
          </div>
        ))}
      </div>
    </div>
  );
}
