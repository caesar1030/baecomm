import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductImg = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 16px;
`;

export const ProductTitle = styled.span``;

export const ProductBrand = styled.span``;

export const ProductPrice = styled.span``;

export const ProductTitleAndBrand = styled.div`
  display: flex;
  gap: 8px;
`;

export const ProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  border: 1px solid black;
  border-radius: 16px;
  overflow: hidden;
  padding: 16px;
  text-decoration: none;

  &:hover {
    ${ProductTitleAndBrand} {
      color: blue;
    }
  }
`;
