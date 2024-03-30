import * as cheerio from 'cheerio';

import { NextResponse } from 'next/server';
import { POKEMON_DETAILS_URL } from '../../../constants';

// To handle a GET request to /api
export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get('name');

  if (!name) {
    return NextResponse.json(
      { message: 'Please provide a name' },
      { status: 400 }
    );
  }

  // Gotta do some web scraping here
  const url = `${POKEMON_DETAILS_URL}/${encodeURIComponent(name)}`;

  try {
    const response = await fetch(url);
    const html = await response.text();

    // Do some web scraping here
    const $ = cheerio.load(html);

    const title = $('title').text();

    const abilities = $('td a[href*=(Ability)] span')
      .toArray()
      .map((el) => $(el).text());

    const gen = $('ul li span a[class*="external text"] ').text();

    // clean up the abilities, remove "Cacophony" and duplicates
    const cleanedAbilities = [...new Set(abilities)].filter(
      (ability) => ability !== 'Cacophony'
    );

    return NextResponse.json(
      { title, abilities: cleanedAbilities, gen },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 503 }
    );
  }
}
