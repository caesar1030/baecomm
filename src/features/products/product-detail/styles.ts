import styled from 'styled-components';
import Card from '../../../common-ui/card';

export const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

export const ThumbnailCard = styled(Card)`
  width: 500px;
  height: 360px;
`;

export const InfoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  flex-grow: 1;

  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 16px;
`;
