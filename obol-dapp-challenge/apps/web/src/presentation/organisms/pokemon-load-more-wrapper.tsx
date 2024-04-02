import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import {
  setSearchQuery,
  useGetPokemonListQuery,
} from '../../store/pokemon/pokemon-slice';

interface LoadMoreWrapperProps {
  children: React.ReactNode;
  searchQuery: string;
}

export function PaginatedPokemonLoader({
  children,
  searchQuery,
}: LoadMoreWrapperProps): JSX.Element {
  const [page, setPage] = useState(0);
  const { isFetching } = useGetPokemonListQuery(page);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchQuery(searchQuery));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    const onScroll = (): void => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  return <>{children}</>;
}
