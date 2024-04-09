import { TProduct } from '../../../types/product';
import { PRODUCT } from '../../../utils/paths';
import * as S from './styles';

interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { thumbnail, brand, title, price, id } = product;

  return (
    <S.ProductCard to={`${PRODUCT}/${id}`}>
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
