import { Card } from '@/components/common';
import CardTop from './cardTop';
import CardBottom from './cardBottom';
import * as style from './style.css';
import { content } from '@/types/contents';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchViewResponse } from '@/api/view';
import { useRecoilValue } from 'recoil';
import { selectedCategoryState } from '@/stores/selectedCategory';
import { useLocation } from 'react-router-dom';

// props: 링크, 이미지, 북마크, 하트, 조회수, 크리에이터 이름, 날짜, 제목, 회사, 회사 아바타
const ContentCard = ({
  contentId,
  creatorId,
  link,
  contentImgUrl,
  isBookmarked,
  isLiked,
  likeCount,
  viewCount,
  creatorName,
  createdAt,
  title,
  recommendations,
}: content) => {
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const queryClient = useQueryClient();

  const { pathname } = useLocation();

  const viewMutation = useMutation({
    mutationFn: patchViewResponse,

    onSuccess: () =>
      queryClient.invalidateQueries(['mainContents', selectedCategory]),
  });
  const handleClick = () => {
    viewMutation.mutate({
      contentId: contentId,
      pageType: pathname.includes('search') ? 1 : 0,
    });
  };

  return (
    <Card type="content">
      <a href={link} target="_blank" rel="noreferrer">
        <article className={style.cardItem} onClick={handleClick}>
          <div className={style.cardContainer}>
            <CardTop
              contentId={contentId}
              contentImgUrl={contentImgUrl}
              isBookmarked={isBookmarked}
              isLiked={isLiked}
              likeCount={likeCount}
              viewCount={viewCount}
            />
            <CardBottom
              creatorId={creatorId}
              creatorName={creatorName}
              createdAt={createdAt}
              title={title}
              recommendations={recommendations}
            />
          </div>
        </article>
      </a>
    </Card>
  );
};

export default ContentCard;
