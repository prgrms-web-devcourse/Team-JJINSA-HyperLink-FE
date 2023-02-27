import { Outlet } from 'react-router-dom';
import Header from '@/components/common/header';
import { LoginModal } from '@/components/modal';
import { useRecoilState } from 'recoil';
import { isLoginModalVisibleState } from '@/stores/atoms';

const Layout = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useRecoilState(
    isLoginModalVisibleState
  );

  return (
    <>
      <LoginModal
        isOpen={isLoginModalVisible}
        onClose={() => setIsLoginModalVisible(false)}
      />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
