import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { loadMoreProducts } from '../products-slice';
import Button from '../../../common-ui/button';

const LoadMoreButton = () => {
  const isMaximum = useSelector((state: RootState) => {
    const { skip, total } = state.products;
    return total <= skip;
  });
  const dispatch = useDispatch<AppDispatch>();

  if (isMaximum) return null;

  return <Button onClick={() => dispatch(loadMoreProducts())}>더 보기</Button>;
};
export default LoadMoreButton;
