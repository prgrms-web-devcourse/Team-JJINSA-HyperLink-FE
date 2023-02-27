import * as style from './CardTop.css';
import { useState } from 'react';
import { Icon } from '@/components/common';
import ImageComponent from '@/components/common/Image';

type CardTopProps = {
  link: string;
  contentImgUrl: string;
  isBookmarked: boolean;
  isLiked: boolean;
  likeCount: number;
  viewCount: number;
};

const CardTop = ({
  link,
  contentImgUrl,
  isBookmarked,
  isLiked,
  likeCount,
  viewCount,
}: CardTopProps) => {
  const [userBookmarked, setUserBookmarked] = useState<boolean>(isBookmarked);
  const [userLiked, setUserLiked] = useState<boolean>(isLiked);

  return (
    <section className={style.cardTop}>
      <a href={link} target="_blank" rel="noreferrer">
        <ImageComponent
          defaultImage="https://via.placeholder.com/200"
          src={contentImgUrl}
          alt="카드 썸네일 이미지"
          block={true}
          width="28.8rem"
          height="21rem"
          objectFit="cover"
        />
      </a>
      <div
        className={style.bookmarkWrapper}
        onClick={() => setUserBookmarked(!userBookmarked)}
      >
        {userBookmarked ? (
          <div className={style.iconWrapper({ bookmark: true })}>
            <Icon
              name="bookmark"
              type="solid"
              size="large"
              style={{ color: 'white' }}
            />
          </div>
        ) : (
          <div className={style.iconWrapper({ bookmark: true })}>
            <Icon name="bookmark" type="regular" size="large" color="white" />
          </div>
        )}
      </div>
      <div
        className={style.numberIconWrapper}
        onClick={() => setUserLiked(!userLiked)}
      >
        {userLiked ? (
          <div className={style.iconWrapper({ heart: true })}>
            <Icon
              name="heart"
              type="solid"
              size="medium"
              style={{ color: 'white' }}
            />
            <div style={{ color: 'white' }}>{likeCount}</div>
          </div>
        ) : (
          <div className={style.iconWrapper({ heart: true })}>
            <Icon name="heart" type="regular" size="medium" />
            <div>{likeCount}</div>
          </div>
        )}
        <div className={style.iconWrapper({ eyes: true })}>
          <Icon name="eye" type="regular" size="medium" />
          <div>{viewCount}</div>
        </div>
      </div>
    </section>
  );
};

export default CardTop;
