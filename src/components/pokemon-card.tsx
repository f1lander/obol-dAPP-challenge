import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import rightArrow from '@/assets/icons/arrow.svg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ToolTipDetails from '@/components/tooltip-details';
import CollectButton from './collect-pokemon';
import { firstLetterToUppercase } from '@/lib/utils';

type PokemonCardProps = {
  name: string;
  image: string;
  abilities: string[];
  id: number;
};

function PokemonCard({ name, abilities, image, id }: PokemonCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <section className="group rounded-lg bg-obolDark transition-colors">
      <Image src={image} alt={name} width={320} height={180} className="object-cover mx-auto" priority />
      <div className="flex flex-col justify-between items-center p-4 h-64 bg-obolDark rounded-b-lg">
        <h2 className="text-xl font-semibold text-white ">{firstLetterToUppercase(name)}</h2>

        <ul className="text-sm text-gray-300">
          {abilities.map((ability, index) => (
            <li key={index}> ✦ {firstLetterToUppercase(ability)}</li>
          ))}
        </ul>

        <div className="flex flex-col justify-between items-center">
          <CollectButton className="py-3 px-6" />
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                  <Link href={`https://bulbapedia.bulbagarden.net/wiki/${name}`} className="text-[#2FE4AB] flex gap-x-2 text-sm mt-2 font-bold ">
                    <span>Details</span>
                    <Image src={rightArrow} alt="Right Arrow" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-pink-700 border-none state-effects">
                <ToolTipDetails name={name} image={image} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}

export default PokemonCard;
