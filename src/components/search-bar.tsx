import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import { TPokemon } from '@/lib/types';

type SearchBarProps = {
  searchText: string;
  handleFilterList: () => void;
  setSearchText: (text: string) => void;
  pokemonList: TPokemon[];
};

export default function SearchBar({ searchText, setSearchText, handleFilterList, pokemonList }: SearchBarProps) {
  const [filteredOptions, setFilteredOptions] = useState<string[]>(pokemonList.map((pokemon: any) => pokemon.name));
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setSearchText(filteredValue);
    setDropdownVisible(true);
    if (filteredValue) {
      const lowerCaseValue = filteredValue.toLowerCase();
      const filtered = pokemonList.filter((pokemon: any) => pokemon.name.toLowerCase().includes(lowerCaseValue));
      setFilteredOptions(filtered.slice(0, 10).map((pokemon: any) => pokemon.name));
    } else {
      setFilteredOptions(pokemonList.slice(0, 10).map((pokemon: any) => pokemon.name));
    }
  };

  return (
    <div className="flex items-center h-12 w-full max-w-4xl mr-auto gap-x-6 mb-12">
      <Label className="text-white md:block hidden text-[32px]" htmlFor="search">
        Search
      </Label>
      <div className="relative w-full">
        <Input
          className="rounded border-2 h-full border-input_border placeholder:text-light text-light text-base py-3 px-4"
          type="text"
          id="search"
          value={searchText}
          onChange={onChangeText}
          autoComplete="off"
          placeholder="find your favorite Pokémon ..."
          autoFocus
          list="pokemon-names"
          options={filteredOptions}
          setInputValue={setSearchText}
          dropdownVisible={dropdownVisible}
          setDropdownVisible={setDropdownVisible}
        />

        {searchText && (
          <button onClick={() => setSearchText('')} className="absolute right-0 top-1 p-2 mr-2 font-bold">
            x
          </button>
        )}
      </div>
      <Button onClick={handleFilterList} type="submit" variant="obolPrimary" className="h-full py-3 px-6 cursor-pointer" disabled={!searchText}>
        Search
      </Button>
    </div>
  );
}
