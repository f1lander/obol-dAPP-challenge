import Header from "./components/Header";
import Logo from "./components/Logo";
import PokemonListComponent from "./components/PokemonList";
import Search from "./components/Search";
import type { PokemonList } from "./types";

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
      <Search />
      <div>
        <PokemonListComponent data={pokemonList} />
      </div>
    </main>
  );
}
