import * as cheerio from 'cheerio';
import { Redis } from '@upstash/redis';
import { POKEMON_DETAILS_URL } from '../constants';
import type { PokemonScrappedData, PokemonStats } from '../types/pokemon';

export class BulbapediaScrapper {
  private readonly pokemonName: string;
  private readonly redis: Redis = Redis.fromEnv();

  constructor(pokemonName: string) {
    this.pokemonName = pokemonName;
  }

  async getHtmlData(): Promise<string> {
    const url = `${POKEMON_DETAILS_URL}/${encodeURIComponent(this.pokemonName)}`;

    const response = await fetch(url);
    return response.text();
  }

  public async getPokemonData(): Promise<PokemonScrappedData> {
    const cachedResponse = await this.redis.get<PokemonScrappedData>(
      `pokemon_details:${this.pokemonName}`
    );

    if (cachedResponse) {
      return cachedResponse;
    }

    const html = await this.getHtmlData();
    const pokemonData = this.buildPokemonData(html);

    await this.redis.set(`pokemon_details:${this.pokemonName}`, pokemonData, {
      ex: 60 * 60 * 24 * 7,
    });

    return pokemonData;
  }

  private buildPokemonData(html: string): PokemonScrappedData {
    const $ = cheerio.load(html);

    const responsePayload: PokemonScrappedData = {
      abilities: this.getAbilities($),
      generations: this.getGenerations($),
      stats: this.getStats($),
    };

    return responsePayload;
  }

  private getAbilities($: cheerio.CheerioAPI): string[] {
    const abilities = $('td a[href*=(Ability)] span')
      .toArray()
      .map((el) => $(el).text());

    // clean up the abilities, remove "Cacophony" and duplicates
    const cleanedAbilities = [...new Set(abilities)].filter(
      (ability) => ability !== 'Cacophony'
    );

    return cleanedAbilities;
  }

  private getGenerations($: cheerio.CheerioAPI): string[] {
    return $('ul li span a[class*="external text"] ')
      .toArray()
      .map((el) => $(el).text());
  }

  private getStats($: cheerio.CheerioAPI): PokemonStats {
    const statsSelector = $(
      'th[style*="padding-left: 0.2em; padding-right: 0.2em;"]'
    );
    const stats = statsSelector.toArray().map((el) => $(el).text());
    const statMap: Record<string, number> = {};

    stats.forEach((stat) => {
      const statNameMatch = /\w+/.exec(stat);
      const statNumberMatch = /\d+/.exec(stat);
      if (statNameMatch && statNumberMatch) {
        const statName = statNameMatch[0];
        const statNumber = parseInt(statNumberMatch[0]);
        statMap[statName] = statNumber;
      }
    });

    return statMap as unknown as PokemonStats;
  }
}
