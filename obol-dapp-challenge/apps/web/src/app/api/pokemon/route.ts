import { NextResponse } from 'next/server';
import { BulbapediaScrapper } from '../../../clients/bulbapedia-scrapper';

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
  const scrapper = new BulbapediaScrapper(name);
  const pokemonData = await scrapper.getPokemonData();

  return NextResponse.json(pokemonData, { status: 200 });
}
