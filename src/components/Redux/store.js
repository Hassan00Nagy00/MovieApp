import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
