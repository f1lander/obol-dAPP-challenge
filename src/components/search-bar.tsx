import { Label } from './ui/label';
import { Button } from './ui/button';
import SearchInput from './search-input';

type SearchBarProps = {
  searchText: string;
  handleFilterList: () => void;
  setSearchText: (text: string) => void;
};

function SearchBar({ searchText, setSearchText, handleFilterList }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setSearchText(filteredValue);
  };

  return (
    <div className="flex items-center h-12 w-full max-w-4xl mr-auto gap-x-6 mb-12">
      <Label className="text-white md:block hidden text-[32px]" htmlFor="search">
        Search
      </Label>
      <SearchInput searchText={searchText} setSearchText={setSearchText} handleInputChange={handleInputChange} />
      <Button onClick={handleFilterList} type="submit" variant="obolPrimary" className="h-full py-3 px-6 cursor-pointer" disabled={!searchText}>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
