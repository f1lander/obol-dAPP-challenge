import type { PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { POKEMON_BASE_URL } from '../../constants';
import type {
  PokemonDetails,
  PokemonListItem,
  PokemonListResponse,
  PokemonScrappedData,
} from '../../types/pokemon';
import { createAppSlice } from '../create-app-slice';

export interface PokemonSliceState {
  pokemons: PokemonListItem[];
  searchQuery?: string;
  offset: number;
  pokemonSignatures: Record<string, string>;
}

const initialState: PokemonSliceState = {
  pokemons: [],
  searchQuery: '',
  offset: 0,
  pokemonSignatures: {},
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
    setPokemonSignature: create.reducer<{ name: string; signature: string }>(
      (state, action: PayloadAction<{ name: string; signature: string }>) => {
        state.pokemonSignatures[action.payload.name] = action.payload.signature;
        localStorage.setItem(action.payload.name, action.payload.signature);
      }
    ),
  }),
  extraReducers: (builder) => {
    builder.addMatcher(
      pokemonApiSlice.endpoints.getPokemonList.matchFulfilled,
      (state, action) => {
        state.pokemons.push(...action.payload.results);
      }
    );
  },
  selectors: {
    selectPokemons: (state) => state.pokemons,
    selectSearchQuery: (state) => state.searchQuery,
    selectPokemonSignature: (state, name: string) => {
      if (state.pokemonSignatures[name]) {
        return state.pokemonSignatures[name];
      }
      return localStorage.getItem(name);
    },
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

export const serverApiSlice = createApi({
  reducerPath: 'serverApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Server'],
  endpoints: (builder) => ({
    getPokemonScrappedDetails: builder.query<PokemonScrappedData, string>({
      query: (name: string) => `pokemon?name=${name}`,
    }),
  }),
});

export const { setPokemons, setSearchQuery, setPokemonSignature } =
  pokemonSlice.actions;
export const {
  selectPokemons,
  selectSearchQuery,
  filteredPokemons,
  selectPokemonSignature,
} = pokemonSlice.selectors;
export const { useGetPokemonListQuery, useGetPokemonByNameQuery } =
  pokemonApiSlice;

export const { useGetPokemonScrappedDetailsQuery } = serverApiSlice;
