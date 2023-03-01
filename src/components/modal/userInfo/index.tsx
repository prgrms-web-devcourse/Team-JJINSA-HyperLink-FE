import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Modal } from '@/components/common';
import { Spinner } from '@/components/common';
import { useQuery } from '@tanstack/react-query';
import { getMyInfo, myInfoResponse } from '@/api/member';
import * as style from './style.css';

export type UserInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
};

const UserInfoModal = ({ isOpen, onClose, onLogout }: UserInfoModalProps) => {
  const navigate = useNavigate();

  const { data: myInfo } = useQuery(['myInfo'], getMyInfo, {
    refetchOnWindowFocus: false,
  });

  const { email, nickname, career, careerYear, profileImage } =
    myInfo as myInfoResponse;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      type="icon"
      style={{ padding: '1.2rem', textAlign: 'start' }}
    >
      <Suspense fallback={<Spinner />}>
        <div className={style.userInfo}>
          <Avatar src={profileImage} size="medium" />
          <div className={style.userInfoDetail}>
            <div className={style.nickname}>{nickname}</div>
            <div className={style.career}>
              <span>{career}</span> | <span>경력 {careerYear}년차</span>
            </div>
            <div className={style.email}>{email}</div>
          </div>
        </div>
        <ul>
          <li className={style.menuItem} onClick={() => navigate('/')}>
            북마크 / 히스토리
          </li>
          <li className={style.menuItem} onClick={() => navigate('/mypage')}>
            내 정보
          </li>
          <li className={style.menuItem} onClick={onLogout}>
            로그아웃
          </li>
        </ul>
      </Suspense>
    </Modal>
  );
};

export default UserInfoModal;
