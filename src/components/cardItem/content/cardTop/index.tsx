import { MouseEvent, useEffect, useState } from 'react';
import { Icon } from '@/components/common';
import ImageComponent from '@/components/common/Image';
import * as style from './style.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postBookmarkResponse } from '@/api/bookmark';
import { postLikeResponse } from '@/api/like';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedCategoryState } from '@/stores/selectedCategory';
import { isAuthorizedState } from '@/stores/auth';
import { isLoginModalVisibleState } from '@/stores/modal';

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
  const [views, setViews] = useState(viewCount);

  const isAuthorized = useRecoilValue(isAuthorizedState);
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const setIsLoginModalVisible = useSetRecoilState(isLoginModalVisibleState);

  const queryClient = useQueryClient();
  const bookmarkMutation = useMutation({
    mutationFn: () => postBookmarkResponse(contentId, isBookmarked),

    onSuccess: () =>
      queryClient.invalidateQueries(['mainContents', selectedCategory]),
  });
  const likeMutation = useMutation({
    mutationFn: () => postLikeResponse(contentId, userLiked),

    onSuccess: () =>
      queryClient.invalidateQueries(['mainContents', selectedCategory]),
  });

  const handleBookmarkClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthorized) {
      setIsLoginModalVisible(true);
      return;
    }
    setUserBookmarked(!userBookmarked);
    bookmarkMutation.mutate();
  };

  const handleLikeClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthorized) {
      setIsLoginModalVisible(true);
      return;
    }
    setUserLiked(!userLiked);
    likeMutation.mutate();
  };

  useEffect(() => {
    setUserBookmarked(isBookmarked);
  }, [isBookmarked]);

  useEffect(() => {
    setUserLiked(isLiked);
  }, [isLiked]);

  useEffect(() => {
    setViews(viewCount);
  }, [viewCount]);

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
      <div
        className={style.bookmarkWrapper({ bookmark: isBookmarked })}
        onClick={handleBookmarkClick}
      >
        {isBookmarked ? (
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
        {isLiked ? (
          <div
            className={style.iconWrapper({ heart: true })}
            onClick={handleLikeClick}
          >
            <Icon
              name="heart"
              type="solid"
              size="medium"
              style={{ color: 'red' }}
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
          <div>{views}</div>
        </div>
      </div>
    </section>
  );
};

export default CardTop;
