import { pokemonQueries } from '../data/query/pokemon';
import { LoadMoreWrapper } from '../presentation/organisms/load-more-wrapper';
import PokemonList from '../presentation/pokemon-list';

const PAGE_SIZE = 20;

async function loadMorePokemon(
  offset = 0
): Promise<[JSX.Element, number | null]> {
  'use server';
  const pokemon = await pokemonQueries.getPokemonList({ offset });

  const nextOffset =
    pokemon.results.length >= PAGE_SIZE ? offset + PAGE_SIZE : null;

  return [<PokemonList key={offset} pokemon={pokemon} />, nextOffset] as const;
}

export default async function Page(): Promise<JSX.Element> {
  const initialPokemonData = await pokemonQueries.getPokemonList({
    limit: PAGE_SIZE,
    offset: 0,
  });

  return (
    <main className='min-h-screen p-24'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='text-xl' />
        <div className='text-xl' />
        <div className='text-xl' />
        <div className='text-xl' />
      </div>
      <LoadMoreWrapper initialOffset={20} loadMoreAction={loadMorePokemon}>
        <PokemonList pokemon={initialPokemonData} />
      </LoadMoreWrapper>
    </main>
  );
}
