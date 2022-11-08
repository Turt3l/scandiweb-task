import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0, symbol: "$", label: "USD" };
const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency(state, action) {
      state.value = action.payload;
      switch (state.value) {
        case 0: {
          state.symbol = "$";
          state.label = "USD";
          break;
        }
        case 1: {
          state.symbol = "£";
          state.label = "GBP";
          break;
        }
        case 2: {
          state.symbol = "A$";
          state.label = "AUD";
          break;
        }
        case 3: {
          state.symbol = "¥";
          state.label = "JPY";
          break;
        }
        case 4: {
          state.symbol = "₽";
          state.label = "RUB";
          break;
        }
        default: {
          state.symbol = "$";
          state.label = "USD";
        }
      }
    }
  }
});
export const currencyActions = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;