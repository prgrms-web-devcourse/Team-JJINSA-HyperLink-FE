import { Heading, Spinner } from '@/components/common';
import * as style from './style.css';
import { getMyInfo } from '@/api/member';
import { useQuery } from '@tanstack/react-query';
import { MyInfo } from '@/components/myPage';
import { myInfo } from '@/types/myInfo';
import { useRecoilValue } from 'recoil';
import { isAuthorizedState } from '@/stores/auth';

const MyPage = () => {
  const isAuthorized = useRecoilValue(isAuthorizedState);
  if (!isAuthorized) return <h3>다시 로그인 해주세요</h3>;

  const { data, isLoading, isError } = useQuery(['myInfo'], getMyInfo);

  if (isError) return <h3>에러 발생</h3>;
  if (isLoading) return <Spinner />;

  const myInfo = data as myInfo;

  return (
    <>
      <div className={style.wrapper}>
        <Heading>내 정보</Heading>
        <MyInfo myInfo={myInfo} />
      </div>
    </>
  );
};

export default MyPage;
