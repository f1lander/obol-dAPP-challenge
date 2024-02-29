import { TPokemon } from '@/lib/types';
import PokemonCard from './pokemon-card';
import usePokemonCollectedStatuses from '@/hooks/usePokemonCollectedStatuses';

type PokemonListProps = {
  pokemonList: TPokemon[];
};

export default function PokemonList({ pokemonList }: PokemonListProps) {
  const collectedStatuses = usePokemonCollectedStatuses(pokemonList);

  return (
    <>
      <div className="mb-32 w-full gap-x-12 gap-y-9 grid text-center lg:mb-0 md:grid-cols-2 lg:grid-cols-3 lg:text-left">
        {pokemonList.map((pokemon, i) => (
          <PokemonCard name={pokemon.name} key={pokemon.name} abilities={pokemon.abilities} image={pokemon.image} id={pokemon.id} isCollected={collectedStatuses[i]} />
        ))}
      </div>
      {/* <PaginationControls prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} /> */}
    </>
  );
}
