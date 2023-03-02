import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isAuthorizedState } from '@/stores/auth';
import { isLoginModalVisibleState } from '@/stores/modal';
import { Header } from '@/components/common';
import { LoginModal } from '@/components/modal';
import { silentRefresh } from '@/api/auth';

const Layout = () => {
  const setIsAuthorized = useSetRecoilState(isAuthorizedState);
  const [isLoginModalVisible, setIsLoginModalVisible] = useRecoilState(
    isLoginModalVisibleState
  );

  useEffect(() => {
    (async () => {
      await silentRefresh();
      setIsAuthorized(true);
    })();
  }, []);

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
