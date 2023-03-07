import Button from '../../button';
import { useSetRecoilState } from 'recoil';
import { isLoginModalVisibleState } from '@/stores/modal';

const NotAuthorized = () => {
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);

  return (
    <Button
      isBold={true}
      text="로그인"
      onClick={() => setIsLoginModalVisible(true)}
    />
  );
};

export default NotAuthorized;
