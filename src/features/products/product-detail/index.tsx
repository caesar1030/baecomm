import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store';
import * as S from './styles';
import useNotFound from '../../../hooks/use-not-found';

type ProductDetailParam = {
  id: string;
};

const ProductDetail = () => {
  const { id } = useParams<ProductDetailParam>();
  const productID = Number(id);
  const product = useSelector((state: RootState) =>
    state.products.products.find((product) => product.id === productID)
  );

  useNotFound(!product);

  if (!product) {
    return null;
  }

  const { thumbnail, brand, title, price, description, images } = product;

  return (
    <>
      <S.ProductDetail>
        <S.ThumbnailCard as="img" src={thumbnail} alt="제품 썸네일" />
        <S.InfoCard>
          <span>{brand}</span>
          <S.Title>{title}</S.Title>
          <span>${price}</span>
          <S.Description>{description}</S.Description>
        </S.InfoCard>
      </S.ProductDetail>

      <S.ImageContainer>
        {images.map((image) => (
          <S.Image key={image} src={image} alt="제품 사진" />
        ))}
      </S.ImageContainer>
    </>
  );
};

export default ProductDetail;
