import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";

export default function useSignPokemon(name: string) {
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    if (!window.ethereum) {
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    signer
      .then((e) => e.getAddress())
      .then((address) => {
        const signedMessage = localStorage.getItem(`${address}${name}`);
        if (signedMessage) {
          setSigned(true);
        }
      });
  }, [name]);

  const signPokemon = useCallback(async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");

      window.open("https://metamask.io/download.html", "_blank");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const signedMessage = await (await signer).signMessage(name);

    const account = await (await signer).getAddress();

    localStorage.setItem(`${account}${name}`, signedMessage);
    setSigned(true);
  }, [name]);

  return {
    signPokemon,
    signed,
  };
}
