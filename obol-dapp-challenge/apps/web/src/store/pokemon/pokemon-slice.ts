import type { PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
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
    fetchPokemons: create.asyncThunk(
      async (args: { offset: number }, { dispatch }) => {
        const response = await dispatch(
          pokemonApiSlice.endpoints.getPokemonList.initiate(args.offset)
        );

        if (response.data) {
          return response.data;
        }
      },
      {
        fulfilled: (state, action) => {
          if (action.payload?.next) {
            state.offset += 20;
          }

          if (action.payload?.results) {
            state.pokemons = state.pokemons.concat(action.payload.results);
          }
        },
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
  reducerPath: 'pokemon-api',
  baseQuery: fetchBaseQuery({ baseUrl: POKEMON_BASE_URL }),
  tagTypes: ['Pokemon'],
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonDetails, string>({
      query: (name: string) => `/${name}`,
    }),

    getPokemonList: builder.query<PokemonListResponse, number>({
      query: (offset = 20) => `?offset=${offset.toString()}&limit=20`,
    }),
  }),
});

export const { setPokemons, setSearchQuery, fetchPokemons } =
  pokemonSlice.actions;
export const { selectPokemons, selectSearchQuery, filteredPokemons } =
  pokemonSlice.selectors;
export const { getPokemonByName, getPokemonList } = pokemonApiSlice.endpoints;
