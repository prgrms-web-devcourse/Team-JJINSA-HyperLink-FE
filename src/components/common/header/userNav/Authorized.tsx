import { logout } from '@/api/auth';
import { getMyInfo } from '@/api/member';

import { Avatar, Icon, Spinner, Tooltip } from '@/components/common';
import { CategoryModal, MyInfoModal } from '@/components/modal';

import { isAuthorizedState } from '@/stores/auth';
import {
  isCategoryModalVisibleState,
  isMyInfoModalVisibleState,
} from '@/stores/modal';
import { isHomeScrolledState } from '@/stores/scroll';

import { myInfo } from '@/types/myInfo';

import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import * as style from '../style.css';

const Authorized = () => {
  const navigate = useNavigate();
  const setIsAuthorized = useSetRecoilState(isAuthorizedState);
  const isHomeScrolled = useRecoilValue(isHomeScrolledState);
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
    <div className={style.navWrapper}>
      <div className={style.iconGroup}>
        <Tooltip message="검색">
          <Icon
            name="magnifying-glass"
            size="xLarge"
            className={style.searchIcon({ isScrolled: isHomeScrolled })}
          />
        </Tooltip>
        <Tooltip message="관심 카테고리 편집">
          <Icon
            type="regular"
            name="pen-to-square"
            size="xLarge"
            onClick={() => setIsCategoryModalVisible((isVisible) => !isVisible)}
          />
        </Tooltip>
        <button className={style.userIconButton} type="button">
          {!myInfo && <Spinner />}
          {myInfo && (
            <>
              <Tooltip message="내 정보">
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
              </Tooltip>
              <MyInfoModal
                myInfoData={myInfo}
                isOpen={isMyInfoModalVisible}
                onClose={() => setIsMyInfoModalVisible(false)}
                onLogout={handleLogout}
              />
            </>
          )}
        </button>
      </div>
      <CategoryModal
        isOpen={isCategoryModalVisible}
        onClose={() => setIsCategoryModalVisible(false)}
      />
    </div>
  );
};

export default Authorized;
