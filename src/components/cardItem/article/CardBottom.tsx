import * as style from './CardBottom.css';
import { useState } from 'react';
import { Avatar, Divider, Icon } from '@/components/common';
import CardModal from '@/components/cardItem/article/CardModal';
import { Link } from 'react-router-dom';

type CardBottomProps = {
  linkUrl: string;
  creater: string;
  date: string;
  title: string;
  companyAvatar: string;
  companyName: string;
};

const CardBottom = ({
  linkUrl,
  creater,
  date,
  title,
  companyAvatar,
  companyName,
}: CardBottomProps) => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  const handleDotIconClick = () => {
    console.log('크리에이터 추천 안하는 api 호출');
  };

  return (
    <div className={style.CardBottom}>
      {isModalShow && <div className={style.CardBackgroundDim} />}
      <div className={style.BottomContent}>
        <div className={style.BottomInfo}>
          <div style={{ display: 'flex' }}>
            <Link to="/creater">
              <span className={style.BottomInfoCreater}>{creater}</span>
            </Link>
            <Divider type="vertical" />
            <span>{date}</span>
          </div>
          <CardModal
            isOpen={isModalShow}
            onClose={() => setIsModalShow(false)}
            style={{ top: '2.2rem', right: '1rem', zIndex: 2000 }}
          >
            <div className={style.NotRecommanded} onClick={handleDotIconClick}>
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
            onClick={() => setIsModalShow(true)}
            className={style.BottomEllipsis}
          >
            <Icon type="solid" name="ellipsis-vertical" />
          </div>
        </div>
        <a href={linkUrl} target="_blank" rel="noreferrer">
          <div className={style.BottomTitle}>{title}</div>
        </a>
      </div>
      <footer className={style.BottomCompany}>
        <div>
          <Avatar src={companyAvatar} shape="circle" size="small" />
        </div>
        <div>
          <div className={style.CompanyName}>{companyName}</div>
          <div className={style.CompanyText}>사람들도 관심있게 보고있어요</div>
        </div>
      </footer>
    </div>
  );
};

export default CardBottom;
