import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import {
  useGetPokemonListQuery,
  setSearchQuery,
  setPokemons,
} from '../../store/pokemon/pokemon-slice';

interface LoadMoreWrapperProps {
  children: React.ReactNode;
  searchQuery: string;
}

export function LoadMoreWrapper({
  children,
  searchQuery,
}: LoadMoreWrapperProps): JSX.Element {
  const [page, setPage] = useState(0);
  const { data, isFetching } = useGetPokemonListQuery(page);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchQuery(searchQuery));
  }, [dispatch, searchQuery]);

  const onScroll = (): void => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (scrolledToBottom && !isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, isFetching]);

  useEffect(() => {
    if (data?.results) {
      dispatch(setPokemons(data.results));
    }
  }, [data, dispatch]);

  if (isFetching) return <div>Loading...</div>;

  return <>{children}</>;
}
