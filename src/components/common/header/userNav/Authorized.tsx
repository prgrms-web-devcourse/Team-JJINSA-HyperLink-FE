import { logout } from '@/api/auth';
import { getMyInfo } from '@/api/member';

import { Avatar, Icon, Spinner, ToolTip } from '@/components/common';
import { CategoryModal, MyInfoModal } from '@/components/modal';

import { isAuthorizedState } from '@/stores/auth';
import {
  isCategoryModalVisibleState,
  isMyInfoModalVisibleState,
} from '@/stores/modal';

import { myInfo } from '@/types/myInfo';

import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import * as style from '../style.css';

const Authorized = () => {
  const navigate = useNavigate();
  const setIsAuthorized = useSetRecoilState(isAuthorizedState);
  const [isMyInfoModalVisible, setIsMyInfoModalVisible] = useRecoilState(
    isMyInfoModalVisibleState
  );
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useRecoilState(
    isCategoryModalVisibleState
  );

  const { data: myInfo } = useQuery<myInfo>(['myInfo'], getMyInfo, {
    suspense: true,
    refetchOnWindowFocus: false,
  });

  const handleLogout = async () => {
    await logout();
    setIsAuthorized(false);
    setIsMyInfoModalVisible(false);

    navigate('/');
  };

  return (
    <>
      <div className={style.iconGroup}>
        <ToolTip message="관심 카테고리 편집">
          <div
            onClick={() => setIsCategoryModalVisible((isVisible) => !isVisible)}
          >
            <Icon type="regular" name="pen-to-square" size="xLarge" />
          </div>
        </ToolTip>
        <button className={style.userIconButton} type="button">
          {!myInfo && <Spinner />}
          {myInfo && (
            <>
              <ToolTip message="내 정보">
                <div
                  className={style.userIcon}
                  onClick={() => {
                    setIsMyInfoModalVisible((isVisible) => !isVisible);
                    setIsCategoryModalVisible(false);
                  }}
                >
                  <Avatar
                    src={
                      myInfo.profileUrl +
                      '?r=' +
                      Math.floor(Math.random() * 100000)
                    }
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
              </ToolTip>
            </>
          )}
        </button>
      </div>
      <CategoryModal
        isOpen={isCategoryModalVisible}
        onClose={() => setIsCategoryModalVisible(false)}
      />
    </>
  );
};

export default Authorized;
