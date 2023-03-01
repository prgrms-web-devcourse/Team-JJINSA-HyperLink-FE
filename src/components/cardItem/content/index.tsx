import { Card } from '@/components/common';
import CardTop from './cardTop';
import CardBottom from './cardBottom';
import * as style from './style.css';
import { content } from '@/types/contents';

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
  return (
    <Card type="content">
      <a href={link} target="_blank" rel="noreferrer">
        <article className={style.cardItem}>
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
