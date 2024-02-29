import { Input } from '@/components/ui/input';
import React from 'react';

function SearchInput() {
  return (
    <div className="relative w-full">
      <Input
        className="rounded border-2 h-full border-input_border placeholder:text-light text-light text-base py-3 px-4"
        type="text"
        id="search"
        value={'input'}
        placeholder="find your favorite Pokémon ..."
        autoFocus
      />
      <button className="absolute right-0 top-1 p-2 mr-0.5 font-bold">x</button>
    </div>
  );
}

export default SearchInput;
