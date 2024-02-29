import { Button } from '@/components/ui/button';
import React from 'react';
import SearchInput from './search-input';
import { Label } from '@/components/ui/label';

function SearchBar() {
  return (
    <div className="flex items-center h-12 w-full max-w-4xl mr-auto gap-x-6 mb-12">
      <Label className="text-white md:block hidden text-[32px]" htmlFor="search">
        Search
      </Label>
      <SearchInput />
      <Button type="submit" variant="obolPrimary" className="h-full py-3 px-6 cursor-pointer">
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
