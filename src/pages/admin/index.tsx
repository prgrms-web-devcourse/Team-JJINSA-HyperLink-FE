import { Contents, Creators, Companies, WeeklyViews } from '@/components/admin';
import { Divider, Spinner } from '@/components/common';
import { isAdminState, isAuthorizedState } from '@/stores/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as style from './style.css';

const Admin = () => {
  const isAdmin = useRecoilValue(isAdminState);
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized === false || (isAuthorized && isAdmin === false)) {
      navigate('/error', { state: { status: '401' } });
    }
  }, [isAuthorized, isAdmin]);

  return (
    <>
      {isAuthorized === false || (isAuthorized && isAdmin === false) ? (
        <Spinner size="huge" />
      ) : (
        <div className={style.container}>
          <Contents />
          <Divider />
          <Creators />
          <Divider />
          <Companies />
          <Divider />
          <WeeklyViews />
        </div>
      )}
    </>
  );
};

export default Admin;
