import { useNavigate } from 'react-router-dom';
import alert from '/assets/alert.svg';
import { Button, Heading } from '@/components/common';
import * as style from './style.css';

const ErrorView = ({ message }: { message: string }) => {
  const navigate = useNavigate();

  return (
    <div className={style.wrapper}>
      <img src={alert} alt="not-found page" />
      <Heading level={6}>{message}</Heading>
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

export default ErrorView;
