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
  const searchTerm = useSelector(
    (state: RootState) => state.products.searchTerm
  );

  useEffect(() => {
    if (searchTerm) return;

    dispatch(loadInitialProducts());
  }, [dispatch, searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
      savedScrollPosition && window.scrollTo(0, Number(savedScrollPosition));
    }

    const handleScroll = () =>
      sessionStorage.setItem('scrollPosition', String(window.scrollY));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [searchTerm]);

  return (
    <GridItems $itemsPerRow={COLUMN}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </GridItems>
  );
};

export default ProductList;
