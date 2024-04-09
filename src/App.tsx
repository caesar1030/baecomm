import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PRODUCT, PRODUCTS } from './utils/paths';
import Product from './pages/product';
import Products from './pages/products';
import AppLayout from './common-ui/app-layout';
import GlobalStyles from './styles/global-styles';
import NotFound from './pages/not-found';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to={PRODUCTS}></Navigate>}
            />
            <Route path={PRODUCTS} element={<Products />} />
            <Route path={`${PRODUCT}/:id`} element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
