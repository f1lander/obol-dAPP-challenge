import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import rightArrow from '@/assets/icons/arrow.svg';
import CollectButton from './collect-pokemon';

type PokemonCardProps = {
  name: string;
  image: string;
  id: number;
};

function PokemonCard({ name, id, image }: PokemonCardProps) {
  return (
    <section className="group rounded-lg bg-obolDark transition-colors">
      <Image src={image} alt={name} width={320} height={180} className="object-cover mx-auto" priority />
      <div className="flex flex-col justify-between items-center p-4 h-64 bg-obolDark rounded-b-lg">
        <h2 className="text-xl font-semibold text-white ">name</h2>

        <ul className="text-sm text-gray-300"></ul>
        <div className="flex flex-col justify-between items-center">
          <CollectButton className="py-3 px-6" />
          <Button asChild variant="ghost">
            <Link href={`https://bulbapedia.bulbagarden.net/wiki/${name}`} className="text-[#2FE4AB] flex gap-x-2 text-sm mt-2 font-bold ">
              <span>Details</span>
              <Image src={rightArrow} alt="Right Arrow" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PokemonCard;
