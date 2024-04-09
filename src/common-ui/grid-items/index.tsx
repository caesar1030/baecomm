import { ReactNode } from 'react';
import * as S from './styles';

export interface GridItemsProps {
  $itemsPerRow: number;
  children: ReactNode;
}

const GridItems = ({ $itemsPerRow, children }: GridItemsProps) => {
  return <S.GridItems $itemsPerRow={$itemsPerRow}>{children}</S.GridItems>;
};

export default GridItems;
