import { getPokemonList } from '@/lib/server-utils';
import Container from '@/components/container';

export default async function MyPokemons() {
  const pokemonList = await getPokemonList();

  return (
    <>
      <Container pokemonList={pokemonList} />
    </>
  );
}
