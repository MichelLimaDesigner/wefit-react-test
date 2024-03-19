import { createSlice } from "@reduxjs/toolkit";
import { ShoppingCart } from "../cart.types";

const initialState: ShoppingCart = {
  items: [],
  quantity: 0,
  totalValue: 0,
};

export const slice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    changeCartItems(state, { payload }) {
      return {
        ...state,
        items: payload.items,
        quantity: payload.quantity,
        totalValue: payload.totalValue,
      };
    },
    changeItemQuantity(state, { payload }) {
      return {
        ...state,
        quantity: payload.quantity,
      };
    },
    resetCart(...state) {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const { changeCartItems, resetCart } = slice.actions;

export const selectCart = (state: { cart: ShoppingCart }) => state.cart;

export default slice.reducer;
