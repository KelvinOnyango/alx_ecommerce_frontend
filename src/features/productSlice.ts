import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  categoryFilter: string | null;
  sortBy: "priceAsc" | "priceDesc" | null;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  categoryFilter: null,
  sortBy: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = [...state.products, ...action.payload];
      state.filteredProducts = [...state.products, ...action.payload];
    },
    filterByCategory(state, action: PayloadAction<string | null>) {
      state.categoryFilter = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        action.payload ? product.category === action.payload : true
      );
    },
    sortByPrice(state, action: PayloadAction<"priceAsc" | "priceDesc" | null>) {
      state.sortBy = action.payload;
      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
        if (action.payload === "priceAsc") return a.price - b.price;
        if (action.payload === "priceDesc") return b.price - a.price;
        return 0;
      });
    },
  },
});

export const { setProducts, filterByCategory, sortByPrice } =
  productSlice.actions;
export default productSlice.reducer;
