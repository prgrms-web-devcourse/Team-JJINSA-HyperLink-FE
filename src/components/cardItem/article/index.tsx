import { Card } from '@/components/common';
import CardTop from './CardTop';
import CardBottom from './CardBottom';
import * as style from './style.css';

export type companyProps = {
  companyLogoImgUrl: string;
  companyName: string;
};

export type ArticleCardProps = {
  contentId: number;
  link: string;
  contentImgUrl: string;
  isBookmarked: boolean;
  isLiked: boolean;
  likeCount: number;
  viewCount: number;
  creater: string;
  createdAt: string;
  title: string;
  recommendationCompanies: {
    companyAvatar: string;
    companyName: string;
  };
};

// props: 링크, 이미지, 북마크, 하트, 조회수, 크리에이터 이름, 날짜, 제목, 회사, 회사 아바타
const ArticleCard = ({
  link,
  contentImgUrl,
  isBookmarked,
  isLiked,
  likeCount,
  viewCount,
  creater,
  createdAt,
  title,
  recommendationCompanies,
}: ArticleCardProps) => {
  /*
    TODO
    1. 아티클 카드 클릭 시 해당 링크로 이동
    2. 북마크, 하트 아이콘 클릭 시, 북마크, 하트 여부에 따라 북마크, 하트 or 북마크 하트 취소
    3. Article Card 데이터 API가 오면 props가 card data 1개로 변하니 나중에 수정할 것
   */
  console.log(recommendationCompanies);
  return (
    <Card type="article">
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
            creater={creater}
            createdAt={createdAt}
            title={title}
            recommendationCompanies={recommendationCompanies}
          />
        </div>
      </article>
    </Card>
  );
};

export default ArticleCard;
