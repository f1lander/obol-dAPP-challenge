import { type PokemonListResponse } from '../types/pokemon';
import PokemonCard from './pokemon-card';

interface PokemonListProps {
  initialData: PokemonListResponse;
}

export default function PokemonList(props: PokemonListProps): JSX.Element {
  return (
    <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-4 gap-4'>
        {props.initialData.results.map((pokemon) => (
          <div
            className='overflow-hidden rounded-lg bg-white shadow'
            key={pokemon.name}
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}
