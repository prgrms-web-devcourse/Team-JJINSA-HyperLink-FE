import { useRecoilValue, useSetRecoilState } from 'recoil';
import Authorized from './Authorized';
import { Button } from '@/components/common';
import { isAuthorizedState } from '@/stores/auth';
import { isLoginModalVisibleState } from '@/stores/modal';
import * as style from '../style.css';

const UserNav = () => {
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);

  return (
    <div className={style.userNav}>
      {isAuthorized ? (
        <Authorized />
      ) : (
        <Button
          isBold={true}
          text="로그인"
          onClick={() => setIsLoginModalVisible(true)}
        />
      )}
    </div>
  );
};

export default UserNav;
