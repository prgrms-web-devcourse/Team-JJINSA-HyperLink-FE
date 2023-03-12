import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Card, Heading, Icon } from '@/components/common';
import { getItem, setItem } from '@/utils/storage';
import { SUMMARY_BY_CATEGORIES } from '@/utils/constants/storage';
import { isHomeScrolledState } from '@/stores/scroll';
import * as style from './style.css';

const TYPE: { [key: string]: string } = {
  members: '가입자 수',
  views: '방문자 수',
};

type SummaryProps = {
  title: string;
  increase: number;
  standardTime: string;
  color: string;
};

const Summary = ({ title, increase, standardTime, color }: SummaryProps) => {
  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);

  useEffect(() => {
    setIsHomeScrolled(true);
  }, []);

  const totalData = getItem(SUMMARY_BY_CATEGORIES, {
    [title]: {
      standardTime: '',
      total: 0,
    },
  });

  if (totalData[title]?.standardTime !== standardTime) {
    setItem(SUMMARY_BY_CATEGORIES, {
      ...totalData,
      [title]: {
        standardTime,
        total: totalData[title]?.total
          ? totalData[title].total + increase
          : increase,
      },
    });
  }

  return (
    <Card type="default" color={color}>
      <div className={style.title}>
        <Heading level={6}>{TYPE[title]}</Heading>
        <span className={style.standardTime}>{standardTime}시 기준</span>
      </div>
      <div className={style.detail}>
        <Heading level={2}>{totalData[title].total.toLocaleString()}</Heading>
        <div>
          <span className={style.count}>{increase.toLocaleString()}</span>
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
