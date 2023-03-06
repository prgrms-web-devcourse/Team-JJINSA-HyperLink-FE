import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@/components/common';
import { MyInfoModal } from '@/components/modal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isAuthorizedState } from '@/stores/auth';
import {
  isAlarmModalVisibleState,
  isLoginModalVisibleState,
  isMyInfoModalVisibleState,
} from '@/stores/modal';
import { logout } from '@/api/auth';
import * as style from './style.css';
import user from '@/assets/user.svg';
import AlarmModal from '@/components/modal/alarm';

const UserNav = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useRecoilState(isAuthorizedState);
  const [isMyInfoModalVisible, setIsMyInfoModalVisible] = useRecoilState(
    isMyInfoModalVisibleState
  );
  const [isAlarmModalVisible, setIsAlarmModalVisible] = useRecoilState(
    isAlarmModalVisibleState
  );
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);

  const handleLogout = async () => {
    await logout();
    setIsAuthorized(false);
    setIsMyInfoModalVisible(false);
    setIsAlarmModalVisible(false);

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
        <>
          <div className={style.iconGroup}>
            <Icon type="regular" name="pen-to-square" size="xLarge" />
            <div
              onClick={() => setIsAlarmModalVisible((isVisible) => !isVisible)}
            >
              <Icon type="regular" name="bell" size="xLarge" />
            </div>
            <button className={style.userIconButton} type="button">
              <img
                className={style.userIcon}
                src={user}
                alt="user image"
                onClick={() =>
                  setIsMyInfoModalVisible((isVisible) => !isVisible)
                }
              />
              <MyInfoModal
                isOpen={isMyInfoModalVisible}
                onClose={() => setIsMyInfoModalVisible(false)}
                onLogout={handleLogout}
              />
            </button>
          </div>
          <AlarmModal
            isOpen={isAlarmModalVisible}
            onClose={() => setIsAlarmModalVisible(false)}
          />
        </>
      )}
    </div>
  );
};

export default UserNav;
