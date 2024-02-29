import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import rightArrow from '@/assets/icons/arrow.svg';

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
      </div>
    </section>
  );
}

export default PokemonCard;
