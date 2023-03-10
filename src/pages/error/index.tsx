import { Button, Heading } from '@/components/common';
import { useLocation, useNavigate } from 'react-router-dom';
import * as style from './style.css';
import alert from '/assets/alert.svg';

const ErrorPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={style.wrapper}>
      <img src={alert} alt="not-found page" />
      <Heading level={6}>
        {!state && (
          <>
            주소가 잘못되었거나
            <br /> 더 이상 제공되지 않는 페이지입니다.
          </>
        )}
        {state && state.status === '401' && '접근 권한이 없는 페이지입니다.'}
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

export default ErrorPage;
