import { JSDOM } from "jsdom";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  description: string | null | undefined;
};

const getPokemonDescription = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const body = JSON.parse(req.body as string);
  const { name: pokemonName } = body;
  const response = await fetch(
    `https://bulbapedia.bulbagarden.net/wiki/${pokemonName}`
  );
  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const description = document.querySelector(
    'a[title="Pokémon category"]'
  )?.textContent;

  res.status(200).json({ description });
};

export default getPokemonDescription;
