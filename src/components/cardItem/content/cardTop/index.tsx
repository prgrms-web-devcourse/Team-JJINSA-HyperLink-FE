import { MouseEvent, useState } from 'react';
import { Icon } from '@/components/common';
import ImageComponent from '@/components/common/Image';
import * as style from './style.css';
import { useQuery } from '@tanstack/react-query';
import { getBookmarkResponse } from '@/api/bookmark';
import { getLikeResponse } from '@/api/like';

type CardTopProps = {
  contentId: number;
  contentImgUrl: string;
  isBookmarked: boolean;
  isLiked: boolean;
  likeCount: number;
  viewCount: number;
};

const CardTop = ({
  contentId,
  contentImgUrl,
  isBookmarked,
  isLiked,
  likeCount,
  viewCount,
}: CardTopProps) => {
  const [userBookmarked, setUserBookmarked] = useState<boolean>(isBookmarked);
  const [userLiked, setUserLiked] = useState<boolean>(isLiked);

  const bookmarkResponse = useQuery(
    ['bookmark'],
    () => getBookmarkResponse(contentId, userBookmarked),
    {
      enabled: false,
    }
  );

  const likeResponse = useQuery(
    ['like'],
    () => getLikeResponse(contentId, userLiked),
    {
      enabled: false,
    }
  );

  const handleBookmarkClick = (e: MouseEvent) => {
    e.preventDefault();
    setUserBookmarked(!userBookmarked);
    bookmarkResponse.refetch();
  };

  const handleLikeClick = (e: MouseEvent) => {
    e.preventDefault();
    setUserLiked(!userLiked);
    likeResponse.refetch();
  };

  return (
    <section className={style.cardTop}>
      <ImageComponent
        defaultImage="https://via.placeholder.com/200"
        src={contentImgUrl}
        alt="카드 썸네일 이미지"
        block={true}
        width="100%"
        height="21rem"
        objectFit="cover"
      />
      <div className={style.bookmarkWrapper} onClick={handleBookmarkClick}>
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
      <div className={style.numberIconWrapper}>
        {userLiked ? (
          <div
            className={style.iconWrapper({ heart: true })}
            onClick={handleLikeClick}
          >
            <Icon
              name="heart"
              type="solid"
              size="medium"
              style={{ color: 'white' }}
            />
            <div style={{ color: 'white' }}>{likeCount}</div>
          </div>
        ) : (
          <div
            className={style.iconWrapper({ heart: true })}
            onClick={handleLikeClick}
          >
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
