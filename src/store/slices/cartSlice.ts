/* eslint-disable @typescript-eslint/no-explicit-any */
// store/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiService } from "../../lib/api";
import { RootState } from "../index";

export interface CartItem {
  product: number;
  quantity: number;
  details?: {
    name: string;
    price: number;
    image?: string;
  };
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess(state, action: PayloadAction<CartItem[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchCartFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addToCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    addToCartSuccess(state, action: PayloadAction<CartItem>) {
      state.loading = false;
      const existingItem = state.items.find(
        (item) => item.product === action.payload.product
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    updateCartItemStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateCartItemSuccess(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      state.loading = false;
      const item = state.items.find(
        (item) => item.product === action.payload.productId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeFromCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    removeFromCartSuccess(state, action: PayloadAction<number>) {
      state.loading = false;
      state.items = state.items.filter(
        (item) => item.product !== action.payload
      );
    },
  },
});

export const {
  fetchCartStart,
  fetchCartSuccess,
  fetchCartFailure,
  addToCartStart,
  addToCartSuccess,
  updateCartItemStart,
  updateCartItemSuccess,
  removeFromCartStart,
  removeFromCartSuccess,
} = cartSlice.actions;

export const fetchCart =
  () => async (dispatch: any, getState: () => RootState) => {
    const { token } = getState().auth;
    if (!token) return;

    dispatch(fetchCartStart());
    try {
      const cart = await apiService.getCart(token);
      dispatch(fetchCartSuccess(cart.items));
    } catch (error: any) {
      dispatch(fetchCartFailure(error.message));
    }
  };

export const addToCart =
  (productId: number, quantity: number = 1) =>
  async (dispatch: any, getState: () => RootState) => {
    const { token } = getState().auth;
    if (!token) return;

    dispatch(addToCartStart());
    try {
      await apiService.addToCart(productId, quantity, token);
      dispatch(addToCartSuccess({ product: productId, quantity }));
      dispatch(fetchCart());
    } catch (error: any) {
      dispatch(fetchCartFailure(error.message));
    }
  };

export const updateCartItem =
  (productId: number, quantity: number) =>
  async (dispatch: any, getState: () => RootState) => {
    const { token } = getState().auth;
    if (!token) return;

    dispatch(updateCartItemStart());
    try {
      await apiService.updateCart(productId, quantity, token);
      dispatch(updateCartItemSuccess({ productId, quantity }));
    } catch (error: any) {
      dispatch(fetchCartFailure(error.message));
    }
  };

export const removeFromCart =
  (productId: number) => async (dispatch: any, getState: () => RootState) => {
    const { token } = getState().auth;
    if (!token) return;

    dispatch(removeFromCartStart());
    try {
      await apiService.removeFromCart(productId, token);
      dispatch(removeFromCartSuccess(productId));
    } catch (error: any) {
      dispatch(fetchCartFailure(error.message));
    }
  };

export default cartSlice.reducer;
