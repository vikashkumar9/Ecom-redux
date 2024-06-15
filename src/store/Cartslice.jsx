import { createSlice } from '@reduxjs/toolkit';

const initial = [];
const cartSlicer = createSlice({
  name: 'cart',
  initialState: initial,
  reducers: {
    addcart: (state, action) => {
      state.push(action.payload);
    },
    removecart: (state, action) => {
      return state.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const { addcart, removecart } = cartSlicer.actions;
export default cartSlicer.reducer;
