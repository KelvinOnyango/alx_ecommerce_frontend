/* eslint-disable @typescript-eslint/no-explicit-any */
// store/slices/productsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiService } from "../../lib/api";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image?: string;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

export const fetchProducts = () => async (dispatch: any) => {
  dispatch(fetchProductsStart());
  try {
    const products = await apiService.getProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error: any) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export default productsSlice.reducer;
