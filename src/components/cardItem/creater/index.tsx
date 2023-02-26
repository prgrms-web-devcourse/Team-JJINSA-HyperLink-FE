import { Avatar, Card } from '@/components/common';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from './style.css';

export type CreaterCardProps = {
  src: string;
  creater: string;
  subscriber: number;
  isSubscribe: boolean;
  description: string;
};

const CreaterCard = ({
  src,
  creater,
  subscriber,
  isSubscribe,
  description,
}: CreaterCardProps) => {
  /*
    TODO
    1. 크리에이터 클릭 시 특정 크리에이터로 이동하는 route 설정 
    2. 구독 버튼 클릭 시, 구독 여부에 따라 구독 or 구독 취소
    3. CreaterCard API가 오면 props가 card data 1개로 변하니 나중에 수정할 것
   */
  const [isSubscribed, setIsSubscribed] = useState(isSubscribe);
  const handleSubscribeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    isSubscribed ? console.log('구독 취소') : console.log('구독');
    setIsSubscribed(!isSubscribed);
  };

  return (
    <Card type="creater">
      <Link to="/creater">
        <div className={style.CreaterCardContainer}>
          <div className={style.CreaterCardTop}>
            <Avatar src={src} shape="circle" size="medium" />
            <div className={style.TopInfo}>
              <div className={style.InfoCreater}>{creater}</div>
              <div
                className={style.InfoSubscriber}
              >{`구독자 ${subscriber}명`}</div>
            </div>
            {isSubscribed ? (
              <button
                type="button"
                onClick={handleSubscribeClick}
                className={style.TopButton({ type: isSubscribed })}
              >
                구독중
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubscribeClick}
                className={style.TopButton({})}
              >
                구독
              </button>
            )}
          </div>
          <div className={style.CreaterCardBottom}>{description}</div>
        </div>
      </Link>
    </Card>
  );
};

export default CreaterCard;
