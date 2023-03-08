import { Card, Heading, Text } from '@/components/common';
import { dataByCategorys } from '@/types/dailyBriefing';
import { CATEGORIES } from '@/utils/constants/categories';
import * as style from './style.css';

type rankingProps = {
  standardTime: string;
  data: dataByCategorys[];
};

const Ranking = ({ standardTime, data }: rankingProps) => {
  return (
    <Card
      type="default"
      color="#F7F9FB"
      style={{ width: '100%', minWidth: '30rem' }}
    >
      <div className={style.title}>
        <Heading level={6}>카테고리별 조회수 랭킹</Heading>
        <span className={style.standardTime}>{standardTime}시 기준</span>
      </div>
      <ul className={style.rankList}>
        {data.map(({ ranking, categoryName, count }) => (
          <li key={ranking} className={style.rankItem}>
            <div className={style.ranking}>{ranking}</div>
            <div className={style.rankDesc}>
              <Text>{CATEGORIES[categoryName]}</Text>
              <span className={style.count}>{count.toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Ranking;
