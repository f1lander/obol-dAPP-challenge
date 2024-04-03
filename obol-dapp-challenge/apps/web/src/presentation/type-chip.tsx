/* eslint-disable react/function-component-definition -- r*/
import React from 'react';

export const typeColorMap: Record<string, string> = {
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
  return (
    <span
      style={{
        borderColor: typeColorMap[type],
        border: `1px solid ${typeColorMap[type]}`,
        padding: '0.25rem 0.5rem',
        borderRadius: '8px',
        fontSize: '0.75rem',
        fontWeight: 500,
        textTransform: 'capitalize',
      }}
    >
      {type}
    </span>
  );
};

export default Chip;
