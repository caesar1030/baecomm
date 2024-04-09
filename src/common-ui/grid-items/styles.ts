import styled from 'styled-components';
import { GridItemsProps } from '.';

export const GridItems = styled.div<GridItemsProps>`
  display: grid;
  grid-template-columns: repeat(${({ $itemsPerRow }) => $itemsPerRow}, 1fr);
  justify-items: center;

  row-gap: 16px;
`;
