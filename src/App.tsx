import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PRODUCT, PRODUCTS } from './utils/paths';
import Product from './pages/product';
import Products from './pages/products';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to={PRODUCTS}></Navigate>} />
        <Route path={PRODUCTS} element={<Products />} />
        <Route path={PRODUCT} element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
