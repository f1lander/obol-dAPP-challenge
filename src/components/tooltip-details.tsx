import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { firstLetterToUppercase } from '@/lib/utils';

type PokemonCardProps = {
  name: string;
  image: string;
};

function ToolTipDetails({ name, image }: PokemonCardProps) {
  return (
    <section className="group rounded-lg bg-obolDark transition-colors">
      <Image src={image} alt={name} width={320} height={180} className="object-cover mx-auto" priority />

      <div className="flex flex-col justify-between items-center p-8 h-[124px] bg-obolDark rounded-b-lg">
        <h2 className="text-xl font-semibold text-light">{firstLetterToUppercase(name)}</h2>
        <div className="text-body text-base">Pokemon Details</div>
      </div>
    </section>
  );
}

export default ToolTipDetails;
