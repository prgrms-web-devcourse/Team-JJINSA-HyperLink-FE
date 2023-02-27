import * as style from './CardBottom.css';
import { useState } from 'react';
import { Avatar, Divider, Icon } from '@/components/common';
import CardModal from '@/components/cardItem/article/CardModal';
import { Link } from 'react-router-dom';
import { companyProps } from '.';

type CardBottomProps = {
  link: string;
  creater: string;
  createdAt: string;
  title: string;
  recommendationCompanies: companyProps[];
};

const CardBottom = ({
  link,
  creater,
  createdAt,
  title,
  recommendationCompanies,
}: CardBottomProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleDotIconClick = () => {
    console.log('크리에이터 추천 안하는 api 호출');
  };
  console.log(recommendationCompanies);
  return (
    <div className={style.cardBottom}>
      {isModalVisible && <div className={style.cardBackgroundDim} />}
      <div className={style.bottomContent}>
        <div className={style.bottomInfo}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to="/creater">
              <span className={style.bottomInfoCreater}>{creater}</span>
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
      <footer className={style.companyBanner}>
        <div>
          <Avatar
            src="https://avatars.githubusercontent.com/u/60571418?v=4"
            shape="circle"
            size="small"
          />
        </div>
        <div>
          <div className={style.companyName}>카카오</div>
          <div className={style.companyText}>사람들도 관심있게 보고있어요</div>
        </div>
      </footer>
    </div>
  );
};

export default CardBottom;
