import { pokemonQueries } from '../../data/query/pokemon';
import { PokemonDetails } from '../../types/pokemon';
import Chip from '../type-chip';

const getPokemonTypes = (pokemon: PokemonDetails): string[] => {
  return pokemon.types.map((type) => type.type.name);
};

export default async function PokemonTypeDetails({
  pokemonName,
}: {
  pokemonName: string;
}): Promise<JSX.Element> {
  const pokemonDetails = await pokemonQueries.getPokemonDetails(pokemonName);
  const types = getPokemonTypes(pokemonDetails);

  return (
    <div className='overflow-hidden rounded-lg shadow' key={pokemonName}>
      <div className='flex flex-row gap-4'>
        {types.map((type) => (
          <Chip key={type} type={type} />
        ))}
      </div>
    </div>
  );
}
