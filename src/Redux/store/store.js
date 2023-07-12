import { configureStore } from "@reduxjs/toolkit";
import productsReducer ,{ productsFetch } from "../slices/productsSlice";
import { productsApi } from "../slices/productsApi";


export const store = configureStore({
    reducer : {
        products : productsReducer,
        [productsApi.reducerPath] : productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch())
