import { configureStore } from "@reduxjs/toolkit";
import addcartReducer from "./addcart/addCart.slice";

const store = configureStore({
  reducer: {
    addcart: addcartReducer,
  },
});

export default store;
