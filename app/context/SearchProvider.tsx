"use client";

import { createContext, useContext, useState } from "react";

type SearchContextType = {
  search: string;
  setSearch: (search: string) => void;
};

export const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
});

export type SearchProviderProps = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}
