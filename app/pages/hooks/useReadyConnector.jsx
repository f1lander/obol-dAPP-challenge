import { useEffect, useState } from "react";
import { useConnect } from "wagmi";

export const useReadyConnector = () => {
  const { connectors, connect } = useConnect();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connectors[0].getProvider();
      setReady(!!provider);
    })();
  }, [connectors]);

  return { ready, connect, connector: connectors[0] };
};
