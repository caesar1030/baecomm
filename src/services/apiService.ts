import { TProductsApiResponse } from '../types/api-response';

export const fetchProductsApi = async (limit: number, skip: number) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();

  return data as TProductsApiResponse;
};

export const fetchProductsBySearchApi = async (searchTerm: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${searchTerm}`
  );
  const data = await res.json();

  return data as TProductsApiResponse;
};
