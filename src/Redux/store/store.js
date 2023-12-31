import { configureStore } from "@reduxjs/toolkit";
import productsReducer ,{ productsFetch } from "../slices/productsSlice";
import { productsApi } from "../slices/productsApi";
import cartReducer, { getTotals } from "../slices/cartSlice";


export const store = configureStore({
    reducer : {
        products : productsReducer,
        cart : cartReducer,
        [productsApi.reducerPath] : productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals())
