import { useState } from 'react';
import Button from '../button';
import Icon from '../icon';

import * as style from './style.css';
import user from '@/assets/user.svg';

const UserNav = () => {
  // 임시 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*
    TODO
    1. 로그인 버튼을 눌렀을 때, 로그인 모달 띄우기 
    2. 로그인 상태에 따라 헤더 UI 변경
   */
  return (
    <>
      {!isLoggedIn ? (
        <Button
          isBold={true}
          text="로그인"
          onClick={() => setIsLoggedIn((prevState) => !prevState)}
        />
      ) : (
        <div className={style.iconGroup}>
          <Icon type="regular" name="pen-to-square" size="xLarge" />
          <Icon type="regular" name="bell" size="xLarge" />
          <button type="button">
            <img
              className={style.user}
              src={user}
              alt="user image"
              onClick={() => setIsLoggedIn((prevState) => !prevState)}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default UserNav;
