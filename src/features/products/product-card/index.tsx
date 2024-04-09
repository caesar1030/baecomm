import { TProduct } from '../../../types/product';
import * as S from './styles';

interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { thumbnail, brand, title, price } = product;
  return (
    <S.ProductCard to={'/'}>
      <S.ProductImg src={thumbnail} alt="상품 이미지" />
      <S.ProductTitleAndBrand>
        <S.ProductBrand>{brand}</S.ProductBrand>
        <S.ProductTitle>{title}</S.ProductTitle>
      </S.ProductTitleAndBrand>
      <S.ProductPrice>{price}</S.ProductPrice>
    </S.ProductCard>
  );
};
export default ProductCard;
