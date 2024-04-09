import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadInitialProducts } from '../products-slice';
import { AppDispatch, RootState } from '../../../store';
import GridItems from '../../../common-ui/grid-items';
import ProductCard from '../product-card';

const COLUMN = 2;

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(loadInitialProducts());
  }, [dispatch]);

  return (
    <GridItems $itemsPerRow={COLUMN}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </GridItems>
  );
};

export default ProductList;
