import user from '@/assets/user.svg';
import { Button, Icon } from '@/components/common';

import { logout } from '@/api/auth';
import { isAuthorizedState } from '@/stores/auth';
import { isLoginModalVisibleState } from '@/stores/modal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import * as style from './style.css';

const UserNav = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(isAuthorizedState);
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);
  /*
    TODO
    1. 로그인 버튼을 눌렀을 때, 로그인 모달 띄우기 
    2. 로그인 상태에 따라 헤더 UI 변경
   */

  const handleLogout = async () => {
    await logout();
    setIsAuthorized(false);
  };

  return (
    <div className={style.userNav}>
      {!isAuthorized ? (
        <Button
          isBold={true}
          text="로그인"
          onClick={() => setIsLoginModalVisible(true)}
        />
      ) : (
        <div className={style.iconGroup}>
          <Icon type="regular" name="pen-to-square" size="xLarge" />
          <Icon type="regular" name="bell" size="xLarge" />
          <button type="button">
            <img
              className={style.userIcon}
              src={user}
              alt="user image"
              onClick={handleLogout} // TODO: 내 정보 모달 열기로 변경
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserNav;
