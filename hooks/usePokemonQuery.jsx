import { getPokemonsList } from "@/pages/api/getPokemonsList";
import { useQuery } from "@tanstack/react-query";

export const usePokemonQuery = () => {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: getPokemonsList,
  });
};
