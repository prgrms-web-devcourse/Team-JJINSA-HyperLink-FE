import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { isAuthorizedState } from '@/stores/auth';
import { isMyInfoModalVisibleState } from '@/stores/modal';
import { Avatar, Icon, Spinner } from '@/components/common';
import { MyInfoModal } from '@/components/modal';
import { myInfo } from '@/types/myInfo';
import { getMyInfo } from '@/api/member';
import { logout } from '@/api/auth';
import * as style from '../style.css';

const Authorized = () => {
  const navigate = useNavigate();
  const setIsAuthorized = useSetRecoilState(isAuthorizedState);
  const [isMyInfoModalVisible, setIsMyInfoModalVisible] = useRecoilState(
    isMyInfoModalVisibleState
  );

  const { data: myInfo } = useQuery<myInfo>(['myInfo'], getMyInfo, {
    refetchOnWindowFocus: false,
    suspense: true,
  });

  const handleLogout = async () => {
    await logout();
    setIsAuthorized(false);
    setIsMyInfoModalVisible(false);

    navigate('/');
  };

  return (
    <div className={style.iconGroup}>
      <Icon type="regular" name="pen-to-square" size="xLarge" />
      <Icon type="regular" name="bell" size="xLarge" />
      {!myInfo && <Spinner />}
      {myInfo && (
        <button className={style.userIconButton} type="button">
          <div
            className={style.userIcon}
            onClick={() => setIsMyInfoModalVisible((isVisible) => !isVisible)}
          >
            <Avatar
              src={myInfo.profileUrl.toString()}
              shape="circle"
              size="small"
            />
          </div>
          <MyInfoModal
            myInfoData={myInfo}
            isOpen={isMyInfoModalVisible}
            onClose={() => setIsMyInfoModalVisible(false)}
            onLogout={handleLogout}
          />
        </button>
      )}
    </div>
  );
};

export default Authorized;
