import { useSignMessage } from "wagmi";
import { Button } from "../atoms/Button";
import { Tooltip } from "../molecules/Tooltip";
import { useEffect } from "react";

type Props = {
  name: string;
  abilities: Array<string>;
  collected: boolean;
  imageUrl: string;
  onCollect: (name: string) => void;
};

export const Card = ({
  name,
  abilities,
  collected,
  imageUrl,
  onCollect,
}: Props) => {
  const { isPending, isSuccess: isConfirmed, signMessage } = useSignMessage();

  const handleCollect = () => {
    signMessage({ message: `You are collecting ${name}` });
  };
  useEffect(() => {
    if (isConfirmed) {
      onCollect(name);
    }
  }, [isConfirmed, name, onCollect]);

  return (
    <div className="w-[395px] h-[506px] bg-gray-800 rounded-xl">
      <div
        className="bg-contain bg-no-repeat bg-center w-full h-[222px] rounded-t-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="flex flex-col h-[284px] justify-center items-center">
        <h5 className="text-gray-100 font-bold text-lg">{name}</h5>
        <span className="text-gray-300 font-medium text-base mt-3 mb-5">
          {abilities.join(", ")}
        </span>
        <Button
          disabled={isPending || collected}
          className="mb-5"
          onClick={handleCollect}
        >
          {isPending ? "Confirming..." : collected ? "Collected" : "Collect"}
        </Button>

        <Tooltip name={name} imageUrl={imageUrl} />
      </div>
    </div>
  );
};
