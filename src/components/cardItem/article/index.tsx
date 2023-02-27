import { Card } from '@/components/common';
import CardTop from './CardTop';
import CardBottom from './CardBottom';
import * as style from './style.css';

export type ArticleCardProps = {
  linkUrl: string;
  imgSrc: string;
  isBookmark: boolean;
  isHeart: boolean;
  likes: number;
  views: number;
  creater: string;
  date: string;
  title: string;
  companyAvatar: string;
  companyName: string;
};

// props: 링크, 이미지, 북마크, 하트, 조회수, 크리에이터 이름, 날짜, 제목, 회사, 회사 아바타
const ArticleCard = ({
  linkUrl,
  imgSrc,
  isBookmark,
  isHeart,
  likes,
  views,
  creater,
  date,
  title,
  companyAvatar,
  companyName,
}: ArticleCardProps) => {
  /*
    TODO
    1. 아티클 카드 클릭 시 해당 링크로 이동
    2. 북마크, 하트 아이콘 클릭 시, 북마크, 하트 여부에 따라 북마크, 하트 or 북마크 하트 취소
    3. Article Card 데이터 API가 오면 props가 card data 1개로 변하니 나중에 수정할 것
   */
  return (
    <Card type="article">
      <article className={style.CardItem}>
        <div className={style.CardContainer}>
          <CardTop
            linkUrl={linkUrl}
            imgSrc={imgSrc}
            isBookmark={isBookmark}
            isHeart={isHeart}
            likes={likes}
            views={views}
          />
          <CardBottom
            linkUrl={linkUrl}
            creater={creater}
            date={date}
            title={title}
            companyAvatar={companyAvatar}
            companyName={companyName}
          />
        </div>
      </article>
    </Card>
  );
};

export default ArticleCard;
