import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authAPI from "../features/auth/authAPI";
import authReducer from "../features/auth/authSlice";
import productsAPI from "../features/products/productsAPI";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    auth: authReducer,
    [productsAPI.reducer]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware, productsAPI.middleware),
});
