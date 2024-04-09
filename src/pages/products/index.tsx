import LoadMoreButton from '../../features/products/load-more-button';
import ProductList from '../../features/products/product-list';
import SearchBar from '../../features/products/search-bar';

const Products = () => {
  return (
    <div>
      <SearchBar />

      <ProductList />

      <LoadMoreButton />
    </div>
  );
};

export default Products;
