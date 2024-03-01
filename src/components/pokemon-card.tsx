import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Button } from './ui/button';
import { CollectButton } from './collect-pokemon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ToolTipDetails from '@/components/tooltip-details';
import rightArrow from '@/assets/icons/arrow.svg';
import { firstLetterToUppercase } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StatObject } from '@/lib/types';

type PokemonCardProps = {
  name: string;
  abilities: string[];
  image: string;
  id: number;
  order: number;
  stats: StatObject;
  weight: number;
  isCollected: {
    result: string;
    status: string;
  };
};

function PokemonCard({ name, abilities, image, id, isCollected, order, stats, weight }: PokemonCardProps) {
  const [open, setOpen] = useState(false);

  const motionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: motionRef,
    offset: ['0 1', '1.5 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.section
      className="group rounded-lg bg-obolDark transition-colors"
      ref={motionRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{
        scale: 0,
        opacity: 0.8,
      }}
    >
      <Image src={image} alt={name} width={320} height={180} className="object-cover mx-auto" priority />
      <div className="flex flex-col justify-between items-center p-4 h-64 bg-obolDark rounded-b-lg">
        <h2 className="text-xl font-semibold text-white ">{firstLetterToUppercase(name)}</h2>

        <ul className="text-sm text-gray-300">
          {abilities.map((ability, index) => (
            <li key={index}> ✦ {firstLetterToUppercase(ability)}</li>
          ))}
        </ul>

        <div className="flex flex-col justify-between items-center">
          <CollectButton className="py-3 px-6" pokemonId={id} isCollected={isCollected} />
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
              <TooltipContent className="border-none state-effects">
                <ToolTipDetails name={name} image={image} order={order} stats={stats} weight={weight} />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.section>
  );
}

export default PokemonCard;
