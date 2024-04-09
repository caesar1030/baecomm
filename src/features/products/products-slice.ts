import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TProduct } from '../../types/product';
import {
  fetchProductsApi,
  fetchProductsBySearchApi,
} from '../../services/apiService';
import { TProductsApiResponse } from '../../types/api-response';
import { RootState } from '../../store';

const LIMIT = 10;

const initialState: {
  products: TProduct[];
  total: number | null;
  skip: number;
} = {
  products: [],
  total: null,
  skip: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadInitialProducts.fulfilled, (state, action) => {
        const { products, skip, total } = action.payload;
        state.products = products;
        state.total = total;
        state.skip = skip + LIMIT;
      })
      .addCase(loadMoreProducts.fulfilled, (state, action) => {
        const { products, skip, total } = action.payload;
        state.products = [...state.products, ...products];
        state.total = total;
        state.skip = skip + LIMIT;
      })
      .addCase(loadProductsBySearch.fulfilled, (state, action) => {
        const { products, skip, total } = action.payload;
        state.products = products;
        state.total = total;
        state.skip = skip + LIMIT;
      });
  },
});

export const loadInitialProducts = createAsyncThunk(
  'products/loadInitialProducts',
  async () => {
    const data = await fetchProductsApi(LIMIT, 0);
    return data;
  }
);

export const loadMoreProducts = createAsyncThunk<
  TProductsApiResponse,
  void,
  { state: RootState }
>('products/loadMoreProducts', async (_, { getState }) => {
  const state = getState();
  const { skip } = state.products;
  const data = await fetchProductsApi(LIMIT, skip);

  return data;
});

export const loadProductsBySearch = createAsyncThunk(
  'products/loadProductsBySearch',
  async (searchTerm: string) => {
    const data = await fetchProductsBySearchApi(searchTerm);

    return data;
  }
);

export default productsSlice.reducer;
