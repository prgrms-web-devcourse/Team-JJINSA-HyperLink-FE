import { useNavigate } from 'react-router-dom';
import alert from '/assets/alert.svg';
import { Button, Heading } from '@/components/common';
import * as style from './style.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.wrapper}>
      <img src={alert} alt="not-found page" />
      <Heading level={6}>
        주소가 잘못되었거나
        <br /> 더 이상 제공되지 않는 페이지입니다.
      </Heading>
      <Button
        fontSize="medium"
        paddingSize="medium"
        text="홈으로 돌아가기"
        isBold={true}
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default NotFoundPage;
