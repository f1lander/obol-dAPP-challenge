import type { PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { POKEMON_BASE_URL } from '../../constants';
import type {
  PokemonDetails,
  PokemonListItem,
  PokemonListResponse,
} from '../../types/pokemon';
import { createAppSlice } from '../create-app-slice';

export interface PokemonSliceState {
  pokemons: PokemonListItem[];
  searchQuery?: string;
  offset: number;
}

const initialState: PokemonSliceState = {
  pokemons: [],
  searchQuery: '',
  offset: 0,
};

export const pokemonSlice = createAppSlice({
  name: 'pokemon',
  initialState,
  reducers: (create) => ({
    setPokemons: create.reducer<PokemonListItem[]>(
      (state, action: PayloadAction<PokemonListItem[]>) => {
        state.pokemons = action.payload;
      }
    ),
    setSearchQuery: create.reducer<string>(
      (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      }
    ),
  }),
  selectors: {
    selectPokemons: (state) => state.pokemons,
    selectSearchQuery: (state) => state.searchQuery,
    filteredPokemons: (state) => {
      if (!state.searchQuery || state.searchQuery === '') return state.pokemons;

      return state.pokemons.filter((pokemon) =>
        pokemon.name.includes(state.searchQuery ?? '')
      );
    },
  },
});

export const pokemonApiSlice = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: POKEMON_BASE_URL }),
  tagTypes: ['Pokemon'],
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonDetails, string>({
      query: (name: string) => `/${name}`,
    }),
    getPokemonList: builder.query<PokemonListResponse, number>({
      query: (page: number) => `?offset=${page * 20}&limit=20`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { setPokemons, setSearchQuery } = pokemonSlice.actions;
export const { selectPokemons, selectSearchQuery, filteredPokemons } =
  pokemonSlice.selectors;
export const { useGetPokemonListQuery } = pokemonApiSlice;
