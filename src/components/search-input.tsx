import { Input } from './ui/input';

type SearchInputProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function SearchInput({ searchText, setSearchText, handleInputChange }: SearchInputProps) {
  return (
    <div className="relative w-full">
      <Input
        className="rounded border-2 h-full border-input_border placeholder:text-light text-light text-base py-3 px-4"
        type="text"
        id="search"
        value={searchText}
        onChange={handleInputChange}
        placeholder="find your favorite Pokémon ..."
        autoFocus
      />

      {searchText && (
        <button onClick={() => setSearchText('')} className="absolute right-0 top-1 p-2 mr-0.5 font-bold">
          x
        </button>
      )}
    </div>
  );
}

export default SearchInput;
