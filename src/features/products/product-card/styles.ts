import styled from 'styled-components';
import Card from '../../../common-ui/card';

export const ProductImg = styled.img`
  width: 480px;
  height: 300px;
  border-radius: 16px;
`;

export const ProductTitleAndBrand = styled.div`
  display: flex;
  gap: 8px;
`;

export const ProductCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    ${ProductTitleAndBrand} {
      color: blue;
    }
  }
`;
