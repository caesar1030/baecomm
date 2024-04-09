import { ReactNode } from 'react';
import styled from 'styled-components';

export interface GridItemsProps {
  $itemsPerRow: number;
  children: ReactNode;
}

const GridItems = styled.div<GridItemsProps>`
  display: grid;
  grid-template-columns: repeat(${({ $itemsPerRow }) => $itemsPerRow}, 1fr);
  justify-items: center;

  column-gap: 60px;
  row-gap: 32px;
`;

export default GridItems;
