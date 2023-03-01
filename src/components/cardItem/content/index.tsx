import { Card } from '@/components/common';
import CardTop from './cardTop';
import CardBottom from './cardBottom';
import * as style from './style.css';
import { content } from '@/types/contents';

// props: 링크, 이미지, 북마크, 하트, 조회수, 크리에이터 이름, 날짜, 제목, 회사, 회사 아바타
const ContentCard = ({
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
  /*
    TODO
    1. 콘텐츠 카드 클릭 시 해당 링크로 이동
    2. 북마크, 하트 아이콘 클릭 시, 북마크, 하트 여부에 따라 북마크, 하트 or 북마크 하트 취소
    3. Content Card 데이터 API가 오면 props가 card data 1개로 변하니 나중에 수정할 것
   */
  return (
    <Card type="content">
      <article className={style.cardItem}>
        <div className={style.cardContainer}>
          <CardTop
            link={link}
            contentImgUrl={contentImgUrl}
            isBookmarked={isBookmarked}
            isLiked={isLiked}
            likeCount={likeCount}
            viewCount={viewCount}
          />
          <CardBottom
            link={link}
            creatorName={creatorName}
            createdAt={createdAt}
            title={title}
            recommendationCompanies={recommendationCompanies}
          />
        </div>
      </article>
    </Card>
  );
};

export default ContentCard;
