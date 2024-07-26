import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";
import { api } from "./api/api";
import orderSlice from "./slice/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    order: orderSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
