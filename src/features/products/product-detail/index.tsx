import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store';

type ProductDetailParam = {
  id: string;
};

const ProductDetail = () => {
  const { id } = useParams<ProductDetailParam>();
  const productID = Number(id);
  const product = useSelector((state: RootState) =>
    state.products.products.find((product) => product.id === productID)
  );

  //   TODO: 404페이지 구현
  if (!product) return <div>404</div>;

  const { thumbnail, brand, title, price, description, images } = product;
  return (
    <div>
      <img src={thumbnail} alt="제품 썸네일" />
      <span>{brand}</span>
      <span>{title}</span>
      <span>{price}</span>
      <span>{description}</span>
      {images.map((image) => (
        <img key={image} src={image} alt="제품 사진" />
      ))}
    </div>
  );
};

export default ProductDetail;
