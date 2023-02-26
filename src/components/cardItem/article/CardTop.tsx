import * as style from './CardTop.css';
import { useState } from 'react';
import { Icon } from '@/components/common';
import ImageComponent from '@/components/common/Image';

type CardTopProps = {
  linkUrl: string;
  imgSrc: string;
  isBookmark: boolean;
  isHeart: boolean;
  likes: number;
  views: number;
};

const CardTop = ({
  linkUrl,
  imgSrc,
  isBookmark,
  isHeart,
  likes,
  views,
}: CardTopProps) => {
  const [hasBookMark, setHasBookMark] = useState<boolean>(isBookmark);
  const [hasHeart, setHasHeart] = useState<boolean>(isHeart);

  return (
    <section className={style.CardTop}>
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <ImageComponent
          defaultImage="https://via.placeholder.com/200"
          src={imgSrc}
          alt="카드 썸네일 이미지"
          block={true}
          width="28.8rem"
          height="21rem"
          objectFit="cover"
        />
      </a>
      <div
        className={style.BookmarkWrapper}
        onClick={() => setHasBookMark(!hasBookMark)}
      >
        {hasBookMark ? (
          <div className={style.IconWrapper({ bookmark: true })}>
            <Icon
              name="bookmark"
              type="solid"
              size="large"
              style={{ color: 'white' }}
            />
          </div>
        ) : (
          <div className={style.IconWrapper({ bookmark: true })}>
            <Icon name="bookmark" type="regular" size="large" color="white" />
          </div>
        )}
      </div>
      <div
        className={style.NumberIconWrapper}
        onClick={() => setHasHeart(!hasHeart)}
      >
        {hasHeart ? (
          <div className={style.IconWrapper({ heart: true })}>
            <Icon
              name="heart"
              type="solid"
              size="medium"
              style={{ color: 'white' }}
            />
            <span style={{ color: 'white' }}> {likes}</span>
          </div>
        ) : (
          <div className={style.IconWrapper({ heart: true })}>
            <Icon name="heart" type="regular" size="medium" />
            <span> {likes}</span>
          </div>
        )}
        <div className={style.IconWrapper({ eyes: true })}>
          <Icon name="eye" type="regular" size="medium" />
          <span> {views}</span>
        </div>
      </div>
    </section>
  );
};

export default CardTop;
