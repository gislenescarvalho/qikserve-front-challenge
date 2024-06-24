import { configureStore, Store } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import basketReducer from "./features/basket/basketSlice";

export const store: Store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
