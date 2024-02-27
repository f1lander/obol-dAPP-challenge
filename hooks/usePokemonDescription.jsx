import { config } from "@/components/utils/constants";
import { useEffect, useState } from "react";

export const usePokemonDescription = (name) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${config.url}/api/getPokemonDescription`, {
          method: "POST",
          mode: 'no-cors',
          body: JSON.stringify({ name }),
        });
        const { description } = await res.json();
        setDescription(description);
      } catch (err) {
        console.log("Something went wrong...");
      }
    })();
  }, []);

  return { description };
};
