import { postSubscribeResponse } from '@/api/subscribe';
import { Avatar, Button, Heading } from '@/components/common';
import { isAuthorizedState } from '@/stores/auth';
import { isLoginModalVisibleState } from '@/stores/modal';
import { creator } from '@/types/contents';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as style from './style.css';

const CreatorInfo = ({
  creatorId,
  profileImgUrl,
  creatorName,
  subscriberAmount,
  creatorDescription,
  isSubscribed,
}: creator) => {
  const [userSubscribe, setUserSubscribe] = useState(isSubscribed);
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);

  const queryClient = useQueryClient();
  const subScribeMutation = useMutation({
    mutationFn: () => postSubscribeResponse(creatorId),

    onSuccess: () => queryClient.invalidateQueries(['creatorInfo', creatorId]),
  });

  const handleSubscribeClick = () => {
    if (!isAuthorized) {
      setIsLoginModalVisible(true);
      return;
    }
    setUserSubscribe(!userSubscribe);
    subScribeMutation.mutate();
  };

  useEffect(() => {
    setUserSubscribe(isSubscribed);
  }, [isSubscribed, isAuthorized]);

  return (
    <div className={style.creator}>
      <div className={style.info}>
        <Avatar src={profileImgUrl} />
        <div className={style.detail}>
          <div className={style.header}>
            <Heading level={4} style={{ marginRight: '4rem' }}>
              <strong>{creatorName}</strong>
            </Heading>
            <span className={style.subscriber}>
              구독자 {subscriberAmount}명
            </span>
          </div>
          <div className={style.description}>{creatorDescription}</div>
        </div>
      </div>
      <Button
        version={userSubscribe ? 'blue' : 'blueInverted'}
        paddingSize="small"
        isBold={true}
        onClick={handleSubscribeClick}
        text={userSubscribe ? '구독중' : '구독'}
      />
    </div>
  );
};

export default CreatorInfo;
