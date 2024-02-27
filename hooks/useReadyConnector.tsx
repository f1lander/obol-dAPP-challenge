import { useEffect, useState } from "react";
import { Config, Connector as WagmiConnector, useConnect } from "wagmi";
import { ConnectMutate } from "wagmi/query";

type Connector = {
  ready: boolean;
  connect: ConnectMutate<Config, unknown>;
  connector: WagmiConnector;
};

export const useReadyConnector = (): Connector => {
  const { connectors, connect } = useConnect();
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const provider = await connectors[0].getProvider();
      setReady(!!provider);
    })();
  }, [connectors]);

  return { ready, connect, connector: connectors[0] };
};
