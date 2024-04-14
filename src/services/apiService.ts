import { TProductsApiResponse } from '../types/api-response';

const BASE_URL = 'https://dummyjson.com/products';
const LIMIT = 10;

export const fetchProductsApi = async (skip: number, searchTerm = '') => {
  const res = await fetch(
    `${BASE_URL}${
      searchTerm ? `/search?q=${searchTerm}&` : '?'
    }limit=${LIMIT}&skip=${skip}`
  );

  if (!res.ok) throw new Error('failed to get products');

  const data = await res.json();

  return data as TProductsApiResponse;
};
