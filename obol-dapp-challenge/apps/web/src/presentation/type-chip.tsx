/* eslint-disable react/function-component-definition -- r*/
import React from 'react';
import { titleCase } from '../utils/string-utils';

const typeColorMap = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

// Define a type for the Chip props
interface ChipProps {
  type: string;
}

const Chip: React.FC<ChipProps> = ({ type }) => {
  const typeColor = `bg-[${typeColorMap[type]}]`;
  const commonClasses = 'px-2 py-1 rounded-full text-white text-sm font-medium';

  return (
    <span className={`${commonClasses} ${typeColor}`}>{titleCase(type)}</span>
  );
};

export default Chip;
