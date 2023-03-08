import { Avatar, Card } from '@/components/common';
import { isHomeScrolledState } from '@/stores/scroll';
import { recommendedCreator } from '@/types/contents';
import { MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as style from './style.css';

const CreatorCard = ({
  creatorId,
  profileImgUrl,
  creatorName,
  subscriberAmount,
  isSubscribed,
  creatorDescription,
}: recommendedCreator & { isSubscribed?: boolean }) => {
  /*
    TODO
    1. 크리에이터 클릭 시 특정 크리에이터로 이동하는 route 설정 
    2. 구독 버튼 클릭 시, 구독 여부에 따라 구독 or 구독 취소
    3. CreatorCard API가 오면 props가 card data 1개로 변하니 나중에 수정할 것
   */
  const [isSubscribe, setIsSubscribe] = useState(
    typeof isSubscribed !== 'undefined' ? false : isSubscribed
  );
  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);

  const handleSubscribeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    isSubscribe
      ? console.log(creatorId, '구독 취소')
      : console.log(creatorId, '구독');
    setIsSubscribe(!isSubscribe);
  };

  useEffect(() => {
    setIsHomeScrolled(true);
  });

  return (
    <Card type="creator">
      <Link to={`/creator/${creatorId}`}>
        <div className={style.creatorCardContainer}>
          <div className={style.creatorCardTop}>
            <Avatar
              src={profileImgUrl}
              shape="circle"
              size="medium"
              style={{ flexShrink: 0 }}
            />
            <div className={style.topInfo}>
              <div className={style.infoCreator}>{creatorName}</div>
              <div
                className={style.infoSubscriber}
              >{`구독자 ${subscriberAmount}명`}</div>
            </div>
            <button
              type="button"
              onClick={handleSubscribeClick}
              className={style.topButton({ type: isSubscribe })}
            >
              {isSubscribe ? '구독중' : '구독'}
            </button>
          </div>
          <div className={style.creatorCardBottom}>{creatorDescription}</div>
        </div>
      </Link>
    </Card>
  );
};

export default CreatorCard;
