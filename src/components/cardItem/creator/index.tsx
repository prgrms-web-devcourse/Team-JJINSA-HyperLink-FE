import { Avatar, Card } from '@/components/common';
import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from './style.css';

export type CreatorCardProps = {
  src: string;
  creator: string;
  subscriber: number;
  isSubscribe: boolean;
  description: string;
};

const CreatorCard = ({
  src,
  creator,
  subscriber,
  isSubscribe,
  description,
}: CreatorCardProps) => {
  /*
    TODO
    1. 크리에이터 클릭 시 특정 크리에이터로 이동하는 route 설정 
    2. 구독 버튼 클릭 시, 구독 여부에 따라 구독 or 구독 취소
    3. CreatorCard API가 오면 props가 card data 1개로 변하니 나중에 수정할 것
   */
  const [isSubscribed, setIsSubscribed] = useState(isSubscribe);
  const handleSubscribeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    isSubscribed ? console.log('구독 취소') : console.log('구독');
    setIsSubscribed(!isSubscribed);
  };

  return (
    <Card type="creator">
      <Link to="/creator">
        <div className={style.creatorCardContainer}>
          <div className={style.creatorCardTop}>
            <Avatar src={src} shape="circle" size="medium" />
            <div className={style.topInfo}>
              <div className={style.infoCreator}>{creator}</div>
              <div
                className={style.infoSubscriber}
              >{`구독자 ${subscriber}명`}</div>
            </div>
            {isSubscribed ? (
              <button
                type="button"
                onClick={handleSubscribeClick}
                className={style.topButton({ type: isSubscribed })}
              >
                구독중
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubscribeClick}
                className={style.topButton({})}
              >
                구독
              </button>
            )}
          </div>
          <div className={style.creatorCardBottom}>{description}</div>
        </div>
      </Link>
    </Card>
  );
};

export default CreatorCard;
