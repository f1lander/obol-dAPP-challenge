"use client";
import { ChangeEvent } from "react";
import { useSearch } from "../context/SearchProvider";

export default function Search() {
  const { search, setSearch } = useSearch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="text-black"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
