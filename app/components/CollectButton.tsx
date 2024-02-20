import Button, { ButtonProps } from "./Button";
import { Pokemon } from "../types";
import useSignPokemon from "../hooks/useSignPokemon";

export type CollectButtonProps = ButtonProps & {
  pokemon: Pokemon;
};

export default function CollectButton({
  pokemon,
  children,
  ...props
}: CollectButtonProps) {
  const { signed, signPokemon } = useSignPokemon(pokemon.name);

  return (
    <Button {...props} disabled={signed} onClick={signPokemon}>
      {children}
    </Button>
  );
}
