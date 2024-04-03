import { Spinner } from '@repo/ui/spinner';
import { useGetPokemonByNameQuery } from '../../store/pokemon/pokemon-slice';
import type { PokemonListItem } from '../../types/pokemon';
import Chip from '../type-chip';

interface PokemonAdditionalDetailsProps {
  pokemon: PokemonListItem;
}

export default function PokemonAdditionalDetails({
  pokemon,
}: PokemonAdditionalDetailsProps): JSX.Element {
  const { data, isFetching } = useGetPokemonByNameQuery(pokemon.name);

  if (isFetching) {
    return <Spinner />;
  }

  const types = data?.types.map((type) => type.type.name) ?? [];

  return (
    <div className='my-2 flex flex-row gap-4'>
      {types.map((type) => (
        <Chip key={type} type={type} />
      ))}
    </div>
  );
}
