import { Card } from '@/components/common';
import CardTop from './cardTop';
import CardBottom from './cardBottom';
import * as style from './style.css';
import { content } from '@/types/contents';
import { useQuery } from '@tanstack/react-query';
import { getViewResponse } from '@/api/view';
import { useState } from 'react';

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
  recommendationCompanies,
}: content) => {
  const [isClick, setIsClick] = useState(false);
  const { refetch } = useQuery(['views'], () => getViewResponse(contentId), {
    enabled: isClick,
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: () => {
      setIsClick(false);
    },
  });
  const handleViewClick = () => {
    setIsClick(true);
    refetch();
    return false;
  };
  return (
    <Card type="content">
      <a href={link} target="_blank" rel="noreferrer">
        <article className={style.cardItem} onClick={handleViewClick}>
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
              recommendationCompanies={recommendationCompanies}
            />
          </div>
        </article>
      </a>
    </Card>
  );
};

export default ContentCard;
