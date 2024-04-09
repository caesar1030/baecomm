import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TProduct } from '../../types/product';
import { fetchProductsApi } from '../../services/apiService';
import { TProductsApiResponse } from '../../types/api-response';
import { RootState } from '../../store';

const initialState: {
  products: TProduct[];
  total: number;
  skip: number;
  searchTerm: string;
} = {
  products: [],
  total: 0,
  skip: 0,
  searchTerm: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadInitialProducts.fulfilled, (state, action) => {
        const { products, skip, total, limit, searchTerm } = action.payload;
        state.products = products;
        state.total = total;
        state.skip = skip + limit;
        state.searchTerm = searchTerm || '';
      })
      .addCase(loadMoreProducts.fulfilled, (state, action) => {
        const { products, skip, total, limit } = action.payload;
        state.products = [...state.products, ...products];
        state.total = total;
        state.skip = skip + limit;
      });
  },
});

export const loadInitialProducts = createAsyncThunk(
  'products/loadInitialProducts',
  async (searchTerm?: string) => {
    const data = await fetchProductsApi(0, searchTerm);
    return { ...data, searchTerm };
  }
);

export const loadMoreProducts = createAsyncThunk<
  TProductsApiResponse,
  void,
  { state: RootState }
>('products/loadMoreProducts', async (_, { getState }) => {
  const state = getState();
  const { skip, searchTerm } = state.products;
  const data = await fetchProductsApi(skip, searchTerm);

  return data;
});

export default productsSlice.reducer;
