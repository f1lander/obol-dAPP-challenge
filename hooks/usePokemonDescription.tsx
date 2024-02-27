import { config } from "@/components/utils/constants";
import { useEffect, useState } from "react";

type Description = {
  description: string;
};

export const usePokemonDescription = (name: string): Description => {
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${config.url}/api/getPokemonDescription`, {
          method: "POST",
          body: JSON.stringify({ name }),
        });
        const { description } = await res.json();
        setDescription(description);
      } catch (err) {
        console.log("Something went wrong...");
      }
    })();
  }, [name]);

  return { description };
};
