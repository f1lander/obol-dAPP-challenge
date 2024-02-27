import dynamic from "next/dynamic";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "../atoms/Button";
import { useReadyConnector } from "@/hooks/useReadyConnector";

const Account = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex items-center">
      {address && <p className="text-gray-700 mr-3">{address}</p>}
      <Button onClick={() => disconnect()}>Disconnect</Button>
    </div>
  );
};

const WalletButton = () => {
  const { connector, connect, ready } = useReadyConnector();

  return (
    <Button
      disabled={ready ? false : true}
      onClick={() => connect({ connector })}
    >
      Connect Wallet
    </Button>
  );
};

export const ConnectWallet = () => {
  const { isConnected } = useAccount();
  return <div>{isConnected ? <Account /> : <WalletButton />}</div>;
};

export default dynamic(() => Promise.resolve(ConnectWallet), { ssr: false });
