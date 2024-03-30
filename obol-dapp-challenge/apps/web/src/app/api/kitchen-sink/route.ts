import * as cheerio from 'cheerio';

import { promises as fs } from 'fs';

export async function GET(_: Request): Promise<Response> {
  const filePath = process.cwd() + '/temp.html';
  // read the temp.html file
  const html = await fs.readFile(filePath, 'utf8');
  const $ = cheerio.load(html);

  const abilities = $('td a[href*=(Ability)] span')
    .toArray()
    .map((el) => $(el).text());

  const gen = $('ul li span a[class*="external text"] ')
    .toArray()
    .map((el) => $(el).text());

  // clean up the abilities, remove "Cacophony" and duplicates

  const cleanedAbilities = [...new Set(abilities)].filter(
    (ability) => ability !== 'Cacophony'
  );

  //select th with this attribute padding-left: 0.2em; padding-right: 0.2em;
  const statsSelector = $(
    'th[style*="padding-left: 0.2em; padding-right: 0.2em;"]'
  );

  const stats = statsSelector.toArray().map((el) => $(el).text());

  const statMap: Record<string, number> = {};

  stats.forEach((stat) => {
    const statName = stat.match(/\w+/)[0];
    const statNumber = parseInt(stat.match(/\d+/)[0]);
    statMap[statName] = statNumber;
  });

  return new Response(
    JSON.stringify({ abilities: cleanedAbilities, stats: statMap, gen }),
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
