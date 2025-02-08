import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authAPI from "../features/auth/authAPI";
import authReducer from "../features/auth/authSlice";
import productsAPI from "../features/products/productsAPI";
import reviewsAPI from "../features/reviews/reviewsAPI";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    auth: authReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware, productsAPI.middleware, reviewsAPI.middleware),
});
