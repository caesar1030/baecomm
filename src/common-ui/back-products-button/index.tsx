import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../utils/paths';
import Button from '../button';

const BackProductsButton = () => {
  return (
    <Button as={Link} to={PRODUCTS}>
      목록으로 돌아가기
    </Button>
  );
};
export default BackProductsButton;
