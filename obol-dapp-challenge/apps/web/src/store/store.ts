import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import {
  pokemonApiSlice,
  pokemonSlice,
  serverApiSlice,
} from './pokemon/pokemon-slice';

const rootReducer = combineSlices(
  pokemonSlice,
  pokemonApiSlice,
  serverApiSlice
);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (): ReturnType<typeof configureStore> => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        pokemonApiSlice.middleware,
        serverApiSlice.middleware
      );
    },
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
