import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0, text: "all" };
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.value = action.payload;
      if (state.value === 0) state.text = "all";
      if (state.value === 1) state.text = "tech";
      if (state.value === 2) state.text = "clothes";
    },
  },
});
export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;