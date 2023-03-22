import { postNotRecommendResponse } from '@/api/notRecommend';

import CardModal from '@/components/cardItem/content/CardModal';
import { Divider, Icon, Tooltip } from '@/components/common';
import BannerAvatar from '../banner/bannerAvatar';
import BannerText from '../banner/bannerText';

import { isAuthorizedState } from '@/stores/auth';
import { isLoginModalVisibleState } from '@/stores/modal';
import { selectedTabState } from '@/stores/tab';

import { banner } from '@/types/contents';

import { useQuery } from '@tanstack/react-query';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as style from './style.css';

type CardBottomProps = {
  creatorId: number;
  creatorName: string;
  createdAt: string;
  title: string;
  recommendations?: banner[];
};

const CardBottom = ({
  creatorId,
  creatorName,
  createdAt,
  title,
  recommendations,
}: CardBottomProps) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const isAuthorized = useRecoilValue(isAuthorizedState);
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);
  const setTabState = useSetRecoilState(selectedTabState);

  const notRecommendResponse = useQuery(
    ['creators', creatorId],
    () => postNotRecommendResponse(creatorId),
    {
      enabled: false,
    }
  );
  const handleCreatorClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTabState('none');
    navigate(`/creator/${creatorId}`);
  };

  const handleDotIconClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalVisible(true);
  };

  const handleNotRecommendClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalVisible(false);
    if (!isAuthorized) {
      setIsLoginModalVisible(true);
      return;
    }
    notRecommendResponse.refetch();
  };

  const dateFormat = (date: string) => {
    return date?.slice(0, 10);
  };

  return (
    <div className={style.cardBottom}>
      {isModalVisible && <div className={style.cardBackgroundDim} />}
      <>
        <div className={style.bottomContent}>
          <div className={style.bottomInfo}>
            <div style={{ display: 'flex' }}>
              <span
                className={style.bottomInfoCreator}
                onClick={handleCreatorClick}
              >
                {creatorName}
              </span>
              <Divider type="vertical" />
              <span>{dateFormat(createdAt)}</span>
            </div>
            <CardModal
              isOpen={isModalVisible}
              onClose={() => setIsModalVisible(false)}
              style={{ top: '2.2rem', right: '1rem', zIndex: 2000 }}
            >
              <div
                className={style.notRecommended}
                onClick={handleNotRecommendClick}
              >
                <Icon
                  type="regular"
                  name="face-tired"
                  size="large"
                  color="lightgray"
                  style={{ marginRight: '0.5rem' }}
                />
                해당 크리에이터 추천 안함
              </div>
            </CardModal>
            <Tooltip message="더 보기" position="left">
              <div
                onClick={handleDotIconClick}
                className={style.bottomEllipsis}
              >
                <Icon type="solid" name="ellipsis-vertical" />
              </div>
            </Tooltip>
          </div>
          <Tooltip message={title} position="bottom-end">
            <div className={style.bottomTitle}>{title}</div>
          </Tooltip>
        </div>
        <footer className={style.companyBanner}>
          <BannerAvatar companies={recommendations} />
          <div style={{ flexGrow: 1 }}>
            <BannerText companies={recommendations} />
            {recommendations?.length === 0 ? (
              <div className={style.companyText}>관심을 가지지 않았어요</div>
            ) : (
              <div className={style.companyText}>
                사람들도 관심있게 보고있어요
              </div>
            )}
          </div>
        </footer>
      </>
    </div>
  );
};

export default CardBottom;
