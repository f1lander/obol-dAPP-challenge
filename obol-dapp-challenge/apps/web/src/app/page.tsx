import * as React from "react";

import { Button } from "@repo/ui/button";
import { ImageCard } from "@repo/ui/cards";
import { InputFormField } from "@repo/ui/form-fields";
import Typography from "@repo/ui/typography";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <p className="text-3xl font-bold text-center">Init</p>

      <InputFormField />
      <Button variant="primary">Click me!</Button>
      <Typography variant="h1">Hello, World!</Typography>
      <ImageCard
        description="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
        imageUrl="https://img.pokemondb.net/artwork/large/pikachu.jpg"
        linkText="Learn more →"
        title="Open Source"
      />
    </main>
  );
}
