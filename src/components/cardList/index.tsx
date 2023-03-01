import ContentCard from '@/components/cardItem/content';
import { content } from '@/types/contents';
import * as style from './style.css';

const CardList = ({ cards }: { cards: content[] }) => {
  return (
    <div className={style.listContainer}>
      {cards.map((card) => {
        return <ContentCard key={card.contentId} {...card} />;
      })}
    </div>
  );
};

export default CardList;
