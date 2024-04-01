import { AppDialog } from '@repo/ui/modal';
import { BulbapediaScrapper } from '../../clients/bulbapedia-scrapper';

export default async function PokemonStats({
  pokemonName,
}: {
  pokemonName: string;
}): Promise<JSX.Element> {
  const bulbaScrapper = new BulbapediaScrapper(pokemonName);
  const wikiData = await bulbaScrapper.getPokemonData();

  return (
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
  );
}
