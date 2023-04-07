import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ApiProduct } from "../../shared/ApiProducts";
import { AppThunk } from "../../app/store";

const url = "https://fakestoreapi.com/products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as ApiProduct[],
    leakedProducts: [] as ApiProduct[],
    status: "idle",
    error: null as string | null,
    categoryFilters: [
      "all",
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ],
  },
  reducers: {
    setProducts: (state, action: PayloadAction<ApiProduct[]>) => {
      state.products = action.payload;
      state.leakedProducts = action.payload;
    },
    leakedProducts(state, action: PayloadAction<string>) {
      state.leakedProducts = state.products;
      if (action.payload !== "all") {
        state.leakedProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },
  },
});
export const { setProducts, leakedProducts } = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = (): AppThunk => async (dispatch) => {
  try {
    const response: AxiosResponse<ApiProduct[]> = await axios.get(url);
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error(error);
  }
};
