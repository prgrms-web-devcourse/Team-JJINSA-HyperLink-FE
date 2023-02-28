import ArticleCard, { ArticleCardProps } from '@/components/cardItem/article';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import * as style from './style.css';

type CardListProps = {
  selectedCategory: string;
  cards: ArticleCardProps[];
};

const CardList = ({ selectedCategory, cards }: CardListProps) => {
  const { containerRef, cardList } = useInfiniteScroll(selectedCategory, cards);

  return (
    <div ref={containerRef} className={style.listContainer}>
      {cardList.map((card) => {
        return <ArticleCard key={card.contentId} {...card} />;
      })}
    </div>
  );
};

export default CardList;
