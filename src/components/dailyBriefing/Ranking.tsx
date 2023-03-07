import { Card, Heading, Text } from '../common';
import * as style from './style.css';

const RANK_DATA = {
  rankingList: [
    {
      ranking: 1,
      categoryName: '개발',
      count: 223,
    },
    {
      ranking: 2,
      categoryName: '경제 / 금융',
      count: 103,
    },
    {
      ranking: 3,
      categoryName: '패션 / 뷰티',
      count: 42,
    },
  ],
  standardTime: '2023.03.04 15PM',
};

const Ranking = () => {
  const { rankingList, standardTime } = RANK_DATA;

  return (
    <Card
      type="default"
      color="#F7F9FB"
      style={{ width: '100%', minWidth: '30rem' }}
    >
      <div className={style.title}>
        <Heading level={6}>카테고리별 조회수 랭킹</Heading>
        <span className={style.standardTime}>{standardTime}</span>
      </div>
      <ul className={style.rankList}>
        {rankingList.map(({ ranking, categoryName, count }) => (
          <li key={ranking} className={style.rankItem}>
            <div className={style.ranking}>{ranking}</div>
            <div className={style.rankDesc}>
              <Text>{categoryName}</Text>
              <span className={style.count}>{count}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Ranking;
