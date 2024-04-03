import { AppDialog } from '@repo/ui/modal';
import type { PokemonStats } from '../../types/pokemon';

interface PokemonStatsProps {
  pokemonStats: PokemonStats;
}

export default function PokemonStatsView({
  pokemonStats,
}: PokemonStatsProps): JSX.Element {
  return (
    <AppDialog cta='Stats'>
      <table className='w-full table-auto text-center'>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🏥 HP</td>
            <td>{pokemonStats.HP}</td>
          </tr>
          <tr>
            <td>💪 Attack</td>
            <td>{pokemonStats.Attack}</td>
          </tr>
          <tr>
            <td>🛡 Defense</td>
            <td>{pokemonStats.Defense}</td>
          </tr>
          <tr>
            <td>🔥 Sp. Atk</td>
            <td>{pokemonStats.Sp}</td>
          </tr>
          <tr>
            <td>🏃‍♂️ Speed</td>
            <td>{pokemonStats.Speed}</td>
          </tr>
          <tr>
            <td>📊 Total</td>
            <td>{pokemonStats.Total}</td>
          </tr>
        </tbody>
      </table>
    </AppDialog>
  );
}
