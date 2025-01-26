import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: [],
  totalPrice: 0,
  grantTotal: 0,
  tax: 0,
  taxRate: 0.05,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        console.log("Item already added");
      }
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grantTotal = setGrandTotal(state);
    },
  },
});

// Utility functions
export const setSelectedItems = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity);
  });

export const setTotalPrice = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price);
  });

export const setTax = (state) => setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state) => {
  return setTotalPrice(state) + setTotalPrice(state) * state.taxRate;
};

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
