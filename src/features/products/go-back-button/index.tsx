import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../../utils/paths';

const GoBackButton = () => {
  return <Link to={PRODUCTS}>목록으로 돌아가기</Link>;
};
export default GoBackButton;
