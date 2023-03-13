import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Card, Heading, Icon } from '@/components/common';
import { isHomeScrolledState } from '@/stores/scroll';
import { statistic } from '@/types/dailyBriefing';
import * as style from './style.css';

const TYPE: { [key: string]: string } = {
  members: '가입자 수',
  views: '방문자 수',
};

type SummaryProps = {
  title: string;
  data: statistic;
  standardTime: string;
  color: string;
};

const Summary = ({ title, data, standardTime, color }: SummaryProps) => {
  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);

  useEffect(() => {
    setIsHomeScrolled(true);
  }, []);

  return (
    <Card type="default" color={color}>
      <div className={style.title}>
        <Heading level={6}>{TYPE[title]}</Heading>
        <span className={style.standardTime}>{standardTime}시 기준</span>
      </div>
      <div className={style.detail}>
        <Heading level={2}>{data.totalCount.toLocaleString()}</Heading>
        <div>
          <span className={style.count}>{data.increase.toLocaleString()}</span>
          <Icon
            name="arrow-trend-up"
            size="small"
            isPointer={false}
            style={{ marginLeft: '1rem' }}
          />
        </div>
      </div>
    </Card>
  );
};

export default Summary;
