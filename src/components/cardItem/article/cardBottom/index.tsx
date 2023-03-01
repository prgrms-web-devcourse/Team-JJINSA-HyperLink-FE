import * as style from './style.css';
import { useState } from 'react';
import { Divider, Icon } from '@/components/common';
import { Link } from 'react-router-dom';
import { companyProps } from '@/components/cardItem/article';
import CardModal from '@/components/cardItem/article/CardModal';
import BannerAvatar from '@/components/cardItem/article/banner/BannerAvatar';
import BannerText from '@/components/cardItem/article/banner/BannerText';

type CardBottomProps = {
  link: string;
  creatorName: string;
  createdAt: string;
  title: string;
  recommendationCompanies?: companyProps[];
};

const CardBottom = ({
  link,
  creatorName,
  createdAt,
  title,
  recommendationCompanies,
}: CardBottomProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleDotIconClick = () => {
    console.log('크리에이터 추천 안하는 api 호출');
  };

  return (
    <div className={style.cardBottom}>
      {isModalVisible && <div className={style.cardBackgroundDim} />}
      <div className={style.bottomContent}>
        <div className={style.bottomInfo}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to="/creater">
              <span className={style.bottomInfoCreater}>{creatorName}</span>
            </Link>
            <Divider type="vertical" />
            <span>{createdAt}</span>
          </div>
          <CardModal
            isOpen={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            style={{ top: '2.2rem', right: '1rem', zIndex: 2000 }}
          >
            <div className={style.notRecommended} onClick={handleDotIconClick}>
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
          <div
            onClick={() => setIsModalVisible(true)}
            className={style.bottomEllipsis}
          >
            <Icon type="solid" name="ellipsis-vertical" />
          </div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <div className={style.bottomTitle}>{title}</div>
        </a>
      </div>
      {recommendationCompanies?.length && (
        <footer className={style.companyBanner}>
          <BannerAvatar companies={recommendationCompanies} />
          <div>
            <BannerText companies={recommendationCompanies} />
            <div className={`${style.companyText}`}>
              사람들도 관심있게 보고있어요
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default CardBottom;
