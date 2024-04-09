import { TProduct } from './product';

export type TProductsApiResponse = {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
};
