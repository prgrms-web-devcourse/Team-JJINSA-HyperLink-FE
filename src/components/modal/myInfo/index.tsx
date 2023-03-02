import { useNavigate } from 'react-router-dom';
import { Avatar, Modal, Spinner } from '@/components/common';
import { useQuery } from '@tanstack/react-query';
import { getMyInfo, myInfoResponse } from '@/api/member';
import * as style from './style.css';

export type MyInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
};

const MyInfoModal = ({ isOpen, onClose, onLogout }: MyInfoModalProps) => {
  const navigate = useNavigate();

  const { data: myInfo, isLoading } = useQuery(['myInfo'], getMyInfo, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Spinner size="huge" />;

  const { email, nickname, career, careerYear, profileImage } =
    myInfo as myInfoResponse;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      type="icon"
      style={{ padding: '1.2rem', textAlign: 'start' }}
    >
      <div className={style.myInfo}>
        <Avatar src={profileImage} size="medium" />
        <div className={style.myInfoDetail}>
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
    </Modal>
  );
};

export default MyInfoModal;
