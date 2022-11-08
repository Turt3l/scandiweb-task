import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: {}, quantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.quantity++;
      const product = action.payload[0];
      const attribute1 = action.payload[1];
      const attribute2 = action.payload[2];
      const attribute3 = action.payload[3];
      const key = `${product.id}-${attribute1}-${attribute2}-${attribute3}`;
      if (!state.items[key]) {
        state.items[key] = {
          product,
          key,
          attribute1,
          attribute2,
          attribute3,
          quantity: 1
        };
      } else {
        state.items[key].quantity++;
      }
    },
    removeFromCart(state, action) {
      const product = action.payload[0];
      const attribute1 = action.payload[1];
      const attribute2 = action.payload[2];
      const attribute3 = action.payload[3];
      const key = `${product.id}-${attribute1}-${attribute2}-${attribute3}`;
      state.items[key].quantity--;
      state.quantity--;
      if (state.items[key].quantity === 0) delete state.items[key];
    },
    buyItems(state) {
      state.items = {};
      state.quantity = 0;
    }
  }
});
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;