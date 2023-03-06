import { useRecoilValue } from 'recoil';
import NotAuthorized from './NotAuthorized';
import Authorized from './Authorized';
import { isAuthorizedState } from '@/stores/auth';
import * as style from '../style.css';

const UserNav = () => {
  const isAuthorized = useRecoilValue(isAuthorizedState);

  return (
    <div className={style.userNav}>
      {isAuthorized ? <Authorized /> : <NotAuthorized />}
    </div>
  );
};

export default UserNav;
