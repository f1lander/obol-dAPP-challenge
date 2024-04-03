import { Spinner } from '@repo/ui/spinner';
import {
  useGetPokemonByNameQuery,
  useGetPokemonScrappedDetailsQuery,
} from '../../store/pokemon/pokemon-slice';
import type { PokemonListItem } from '../../types/pokemon';
import Chip from '../type-chip';
import PokemonStatsView from './pokemon-stats';

interface PokemonAdditionalDetailsProps {
  pokemon: PokemonListItem;
}

export default function PokemonAdditionalDetails({
  pokemon,
}: PokemonAdditionalDetailsProps): JSX.Element {
  const { data: typeData, isFetching } = useGetPokemonByNameQuery(pokemon.name);
  const { data: wikiData, isFetching: isScrappedDataFetching } =
    useGetPokemonScrappedDetailsQuery(pokemon.name);

  if (isFetching || isScrappedDataFetching) {
    return <Spinner />;
  }

  const types = typeData?.types.map((type) => type.type.name) ?? [];

  return (
    <div className='flex flex-col'>
      {wikiData ? <PokemonStatsView pokemonStats={wikiData.stats} /> : null}

      <div className='mt-4 flex flex-row justify-center gap-4'>
        {types.map((type) => (
          <Chip key={type} type={type} />
        ))}
      </div>
    </div>
  );
}
