import { Outlet } from 'react-router-dom';
import * as S from './styles';

const AppLayout = () => {
  return (
    <S.AppLayout>
      <Outlet />
    </S.AppLayout>
  );
};
export default AppLayout;
