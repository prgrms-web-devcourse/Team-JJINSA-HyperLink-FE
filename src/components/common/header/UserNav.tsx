import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@/components/common';
import UserInfoModal from '@/components/modal/userInfo';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isAuthorizedState } from '@/stores/auth';
import {
  isLoginModalVisibleState,
  isUserInfoModalVisibleState,
} from '@/stores/modal';
import { logout } from '@/api/auth';
import * as style from './style.css';
import user from '@/assets/user.svg';

const UserNav = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useRecoilState(isAuthorizedState);
  const [isUserInfoModalVisible, setIsUserInfoModalVisible] = useRecoilState(
    isUserInfoModalVisibleState
  );
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);

  const handleLogout = async () => {
    await logout();
    setIsAuthorized(false);
    setIsUserInfoModalVisible(false);

    navigate('/');
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
          <button className={style.userIconButton} type="button">
            <img
              className={style.userIcon}
              src={user}
              alt="user image"
              onClick={() =>
                setIsUserInfoModalVisible((isVisible) => !isVisible)
              }
            />
            <UserInfoModal
              isOpen={isUserInfoModalVisible}
              onClose={() => setIsUserInfoModalVisible(false)}
              onLogout={handleLogout}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserNav;
