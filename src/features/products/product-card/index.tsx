import { Link } from 'react-router-dom';
import { TProduct } from '../../../types/product';
import { PRODUCT } from '../../../utils/paths';
import * as S from './styles';

interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { thumbnail, brand, title, price, id } = product;

  return (
    <S.ProductCard as={Link} to={`${PRODUCT}/${id}`}>
      <S.ProductImg src={thumbnail} alt="상품 이미지" />
      <S.ProductTitleAndBrand>
        <span>{brand}</span>
        <span>{title}</span>
      </S.ProductTitleAndBrand>
      <span>${price}</span>
    </S.ProductCard>
  );
};

export default ProductCard;
