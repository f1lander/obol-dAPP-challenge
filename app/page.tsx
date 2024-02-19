import { GetStaticProps, InferGetStaticPropsType } from "next";
import Header from "./components/Header";
import Logo from "./components/Logo";

type PokemonList = Array<{
  name: string;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  image: string;
}>;

export default async function Home() {
  const pokemonList: PokemonList = await (
    await fetch("http://localhost:3000/api/pokemon", {
      cache: "force-cache",
    })
  ).json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header>
        <Logo />
      </Header>
      <div>
        {pokemonList.map((pokemon) => {
          return (
            <div key={pokemon.name} className="flex flex-col items-center">
              <img src={pokemon.image} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              <ul>
                {pokemon.abilities.map((ability) => {
                  return (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}
