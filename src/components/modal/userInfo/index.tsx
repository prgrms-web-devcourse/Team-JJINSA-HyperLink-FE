import { useNavigate } from 'react-router-dom';
import { Avatar, Modal } from '@/components/common';
import * as style from './style.css';
import user from '@/assets/user.svg';

export type UserInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
};

const UserInfoModal = ({ isOpen, onClose, onLogout }: UserInfoModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      type="icon"
      style={{ padding: '1.2rem', textAlign: 'start' }}
    >
      <div className={style.userInfo}>
        <Avatar src={user} size="medium" />
        <div className={style.userInfoDetail}>
          <div className={style.nickname}>Mostafa Lotfy</div>
          <div className={style.career}>
            <span>개발</span> | <span>경력 3년차</span>
          </div>
          <div className={style.email}>rldnd5555@gmail.com</div>
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

export default UserInfoModal;
