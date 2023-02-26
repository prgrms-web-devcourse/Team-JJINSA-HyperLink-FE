import { Outlet } from 'react-router-dom';
import Header from '@/components/common/header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
