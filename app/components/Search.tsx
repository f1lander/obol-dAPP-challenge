"use client";
import { FormEvent } from "react";
import { useSearch } from "../context/SearchProvider";
import Button from "./Button";

export default function Search() {
  const { setSearch } = useSearch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;

    setSearch(search.trim().toLowerCase());
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="my-10 ml-10 flex items-center space-x-4">
        <h3 className="text-light text-2xl font-bold">Search</h3>
        <input
          className="text-light border-divider bg-input w-96 rounded-md border-2 px-4 py-2 outline-none"
          type="text"
          placeholder=""
          name="search"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
