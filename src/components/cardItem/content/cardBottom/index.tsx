import * as style from './style.css';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, Icon } from '@/components/common';
import CardModal from '@/components/cardItem/content/CardModal';
import BannerAvatar from '../banner/bannerAvatar';
import BannerText from '../banner/bannerText';
import { company } from '@/types/contents';
import { useQuery } from '@tanstack/react-query';
import { getNotRecommendResponse } from '@/api/notRecommend';

type CardBottomProps = {
  creatorId: number;
  creatorName: string;
  createdAt: string;
  title: string;
  recommendationCompanies?: company[];
};

const CardBottom = ({
  creatorId,
  creatorName,
  createdAt,
  title,
  recommendationCompanies,
}: CardBottomProps) => {
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const notRecommendResponse = useQuery(
    ['creators'],
    () => getNotRecommendResponse(creatorId),
    {
      enabled: false,
    }
  );
  const handleCreatorClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate(`/creator/${creatorName}`);
  };

  const handleDotIconClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsModalVisible(true);
    console.log('dot click');
  };

  const handleNotRecommendClick = (e: MouseEvent) => {
    e.preventDefault();
    notRecommendResponse.refetch();
  };

  return (
    <div className={style.cardBottom}>
      {isModalVisible && <div className={style.cardBackgroundDim} />}
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
            <span>{createdAt}</span>
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
          <div onClick={handleDotIconClick} className={style.bottomEllipsis}>
            <Icon type="solid" name="ellipsis-vertical" />
          </div>
        </div>
        <div className={style.bottomTitle}>{title}</div>
      </div>
      <footer className={style.companyBanner}>
        <BannerAvatar companies={recommendationCompanies} />
        <div style={{ flexGrow: 1 }}>
          <BannerText companies={recommendationCompanies} />
          {!recommendationCompanies ? (
            <div className={`${style.companyText}`}>관심을 가지지 않았어요</div>
          ) : (
            <div className={`${style.companyText}`}>
              사람들도 관심있게 보고있어요
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default CardBottom;
