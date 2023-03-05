import { Header } from '@/components/common';
import { LoginModal } from '@/components/modal';
import { isLoginModalVisibleState } from '@/stores/modal';
import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';

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
