import { BulbapediaScrapper } from '../../clients/bulbapedia-scrapper';
import PokemonStatsView from '../organisms/pokemon-stats';

export default async function PokemonStats({
  pokemonName,
}: {
  pokemonName: string;
}): Promise<JSX.Element> {
  const bulbaScrapper = new BulbapediaScrapper(pokemonName);
  const wikiData = await bulbaScrapper.getPokemonData();

  return <PokemonStatsView pokemonStats={wikiData.stats} />;
}
