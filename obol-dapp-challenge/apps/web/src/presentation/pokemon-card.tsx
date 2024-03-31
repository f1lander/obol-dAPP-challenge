import { ImageCard } from '@repo/ui/cards';
import { AppDialog } from '@repo/ui/modal';
import { pokemonQueries } from '../data/query/pokemon';
import type { PokemonDetails, PokemonListItem } from '../types/pokemon';
import { titleCase } from '../utils/string-utils';
import Chip from './type-chip';

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

  const wikiData = await pokemonQueries.getBulbapediaData(pokemon.name);

  return (
    <div className='overflow-hidden rounded-lg shadow' key={pokemon.name}>
      <ImageCard
        imageUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        title={titleCase(pokemon.name)}
      >
        <>
          <div className='flex flex-row gap-4'>
            {types.map((type) => (
              <Chip key={type} type={type} />
            ))}
          </div>
          <AppDialog cta='Stats'>
            <div className='flex flex-col bg-bg-5 p-4'>
              <span>🏥 HP :{wikiData.stats.HP}</span>
              <span>💪 Attack: {wikiData.stats.Attack}</span>
              <span>🛡 Defense: {wikiData.stats.Defense}</span>
              <span>🔥 Sp. Atk: {wikiData.stats.Sp}</span>
              <span>🏃‍♂️ Speed: {wikiData.stats.Speed}</span>
              <span>📊 Total: {wikiData.stats.Total}</span>
            </div>
          </AppDialog>
        </>
      </ImageCard>
    </div>
  );
}
