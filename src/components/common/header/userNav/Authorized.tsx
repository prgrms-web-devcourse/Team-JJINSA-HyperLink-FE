import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { isAuthorizedState } from '@/stores/auth';
import {
  isCategoryModalVisibleState,
  isMyInfoModalVisibleState,
} from '@/stores/modal';
import { Avatar, Icon, Spinner } from '@/components/common';
import { CategoryModal, MyInfoModal } from '@/components/modal';
import { myInfo } from '@/types/myInfo';
import { getMyInfo } from '@/api/member';
import { logout } from '@/api/auth';
import * as style from '../style.css';
import { useEffect, useState } from 'react';

const Authorized = () => {
  const queryClient = useQueryClient();
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
  });

  //const [dd, setdd] = useState(myInfo);

  useEffect(() => {
    //queryClient.setQueryData(['myInfo'], myInfo);
    console.log('authorized', myInfo);
  }, [myInfo]);

  const handleLogout = async () => {
    await logout();
    setIsAuthorized(false);
    setIsMyInfoModalVisible(false);

    navigate('/');
  };

  return (
    <>
      <div className={style.iconGroup}>
        <div
          onClick={() => setIsCategoryModalVisible((isVisible) => !isVisible)}
        >
          <Icon type="regular" name="pen-to-square" size="xLarge" />
        </div>
        <button className={style.userIconButton} type="button">
          {!myInfo && <Spinner />}
          {myInfo && (
            <>
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
