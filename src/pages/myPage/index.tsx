import { Heading, Spinner } from '@/components/common';
import * as style from './style.css';
import { getMyInfo } from '@/api/member';
import { useQuery } from '@tanstack/react-query';
import { ErrorView, MyInfo } from '@/components/myPage';
import { myInfo } from '@/types/myInfo';
import { useRecoilValue } from 'recoil';
import { isAuthorizedState } from '@/stores/auth';

const MyPage = () => {
  const isAuthorized = useRecoilValue(isAuthorizedState);
  if (!isAuthorized) return <ErrorView message="다시 로그인 해주세요" />;

  const { data, isLoading, isError } = useQuery(['myInfo'], getMyInfo);

  if (isError) return <ErrorView message="잠시 후 다시 시도해주세요" />;
  if (isLoading) return <Spinner size="huge" />;

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
