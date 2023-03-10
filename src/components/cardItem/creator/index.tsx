import { Avatar, Button, Card } from '@/components/common';
import { isAuthorizedState } from '@/stores/auth';
import { isLoginModalVisibleState } from '@/stores/modal';
import { isHomeScrolledState } from '@/stores/scroll';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { recommendedCreator } from '@/types/contents';
import { MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as style from './style.css';
import { postSubscribeResponse } from '@/api/subscribe';
import { selectedTabState } from '@/stores/tab';

const CreatorCard = ({
  creatorId,
  profileImgUrl,
  creatorName,
  subscriberAmount,
  isSubscribed,
  creatorDescription,
}: recommendedCreator & { isSubscribed?: boolean }) => {
  const [isSubscribe, setIsSubscribe] = useState(
    typeof isSubscribed === 'undefined' ? false : isSubscribed
  );

  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);
  const setTabState = useSetRecoilState(selectedTabState);

  const queryClient = useQueryClient();
  const subScribeMutation = useMutation({
    mutationFn: () => postSubscribeResponse(creatorId),

    onSuccess: () => queryClient.invalidateQueries(['creatorList']),
  });

  const handleCreatorCardClick = () => {
    setTabState('none');
  };

  const handleSubscribeClick = (event: MouseEvent) => {
    event.preventDefault();
    if (!isAuthorized) {
      setIsLoginModalVisible(true);
      return;
    }
    setIsSubscribe(!isSubscribe);
    subScribeMutation.mutate();
  };

  useEffect(() => {
    setIsHomeScrolled(true);
  });

  useEffect(() => {
    if (typeof isSubscribed !== 'undefined') {
      setIsSubscribe(isSubscribed);
    }
  }, [isSubscribed]);

  return (
    <Card type="creator">
      <Link to={`/creator/${creatorId}`} onClick={handleCreatorCardClick}>
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
            <div onClick={(e) => handleSubscribeClick(e)}>
              <Button
                version={isSubscribe ? 'blue' : 'blueInverted'}
                paddingSize="small"
                isBold={true}
                text={isSubscribe ? '구독중' : '구독'}
              />
            </div>
          </div>
          <div className={style.creatorCardBottom}>{creatorDescription}</div>
        </div>
      </Link>
    </Card>
  );
};

export default CreatorCard;
