import { createSlice } from "@reduxjs/toolkit";

const addCartSlide = createSlice({
  name: "addcart",
  initialState: {
    item: [],
  },
  reducers: {
    add(state, action) {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
        discount: action.payload.discount,
        value: 1,
      };
      if (!state.item.length) {
        state.item.push(newItem);
      } else {
        const found = state.item.find((item) => item.id === newItem.id);
        if (found) {
          state.item.map((item) =>
            item.id === newItem.id ? { ...item, value: item.value++ } : item
          );
        } else state.item.push(newItem);
      }
    },
    remove(state, action) {
      state.item = state.item.filter((item) => item.id !== action.payload.id);
    },
    plus(state, action) {
      state.item.map((item) =>
        item.id === action.payload.id ? { ...item, value: item.value++ } : item
      );
    },
    sub(state, action) {
      state.item.map((item) =>
        item.id === action.payload.id && item.value > 1
          ? { ...item, value: item.value-- }
          : item
      );
    },
    changevalue(state, action) {
      state.item = state.item.map((item) =>
        item.id === action.payload.id
          ? { ...item, value: action.payload.some }
          : item
      );
    },
  },
});

const addcartReducer = addCartSlide.reducer;
export default addcartReducer;
export const addcartAction = addCartSlide.actions;
