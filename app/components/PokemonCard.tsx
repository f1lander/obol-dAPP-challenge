import { Pokemon } from "../types";
import Button from "./Button";
import CollectButton from "./CollectButton";

export type PokemonCardProps = {
  pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="mb-6 ml-8 flex w-[395px] flex-col items-center overflow-hidden rounded-xl">
      <div className="bg-muted/50 h-[222px] w-full">
        <div className="h-[222px] overflow-hidden">
          <img
            className="mx-auto h-full object-cover"
            src={pokemon.image}
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className="bg-content flex h-[284px] w-full flex-col justify-between p-8 text-center">
        <h5 className="text-lg font-bold capitalize">{pokemon.name}</h5>
        <ul className="text-sm">
          {pokemon.abilities.slice(0, 3).map((ability) => {
            return (
              <li className="capitalize" key={ability.ability.name}>
                {ability.ability.name}
              </li>
            );
          })}
        </ul>
        <div>
          <CollectButton pokemon={pokemon}>Collect</CollectButton>
        </div>
        <div>
          <Button
            variant="secondary"
            href={`${process.env.NEXT_PUBLIC_BULBAPEDIA}/${pokemon.name}`}
            target="_blank"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
