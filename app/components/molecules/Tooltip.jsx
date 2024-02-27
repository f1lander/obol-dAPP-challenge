import Image from "next/image";
import { Tooltip as ReactTooltip } from "react-tooltip";
import arrow from "@/public/arrow.svg";
import { usePokemonDescription } from "@/pages/hooks/usePokemonDescription";

export const Tooltip = ({ name, imageUrl }) => {
  const { description } = usePokemonDescription(name);

  return (
    <div className="mt-4">
      <a
        data-tooltip-id={name}
        className="flex cursor-pointer items-center text-teal-500 outline-none font-medium disabled:cursor-not-allowed"
      >
        Details
        <Image src={arrow} alt="arrow" className="ml-3" />
      </a>
      <ReactTooltip opacity={1} style={{ background: "transparent" }} id={name}>
        <div className="w-[395px] h-[346px] bg-gray-800 rounded-xl">
          <div
            className="bg-contain bg-no-repeat bg-center w-full h-[222px] rounded-t-xl"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          <div className="flex flex-col h-[124px] justify-center items-center">
            <h5 className="text-gray-100 font-bold text-lg">{name}</h5>
            <span className="text-gray-300 font-medium text-base mt-3 mb-5">
              {description}
            </span>
          </div>
        </div>
      </ReactTooltip>
    </div>
  );
};
