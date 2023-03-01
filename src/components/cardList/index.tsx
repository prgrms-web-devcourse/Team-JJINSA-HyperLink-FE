import ArticleCard, { ArticleCardProps } from '@/components/cardItem/article';
import * as style from './style.css';

const CardList = ({ cards }: { cards: ArticleCardProps[] }) => {
  return (
    <div className={style.listContainer}>
      {cards.map((card) => {
        return <ArticleCard key={card.contentId} {...card} />;
      })}
    </div>
  );
};

export default CardList;
